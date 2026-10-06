import { useState, useEffect, useRef, useCallback } from 'react';
import { searchCitiesApi, reverseGeocodeApi } from '../apis/location.api';

const STORAGE_KEY = 'jewerkart_delivery_location';

export const POPULAR_CITIES = [
  'New Delhi',
  'Mumbai',
  'Bengaluru',
  'Kolkata',
  'Chennai',
  'Hyderabad',
  'Jaipur',
  'Pune',
  'Ahmedabad',
];

const useDeliveryLocation = () => {
  const [location, setLocation] = useState(() => {
    return (
      localStorage.getItem(STORAGE_KEY) ||
      localStorage.getItem('location') ||
      'New Delhi, India'
    );
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isDetecting, setIsDetecting] = useState(false);
  const [detectError, setDetectError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const debounceTimerRef = useRef(null);

  // Synchronize selection with local storage
  const handleSelectCity = useCallback((cityName) => {
    if (!cityName) return;
    const formatted = cityName.trim();
    setLocation(formatted);
    localStorage.setItem(STORAGE_KEY, formatted);
    localStorage.setItem('location', formatted);
    setSearchQuery('');
    setSearchResults([]);
    setDetectError('');
    setIsOpen(false);
  }, []);

  // Geolocation auto-detection
  const handleDetectLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setDetectError('Geolocation is not supported by your browser.');
      return;
    }

    setIsDetecting(true);
    setDetectError('');

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const data = await reverseGeocodeApi(latitude, longitude);

          const city =
            data.address?.city ||
            data.address?.town ||
            data.address?.suburb ||
            data.address?.county ||
            data.address?.state_district;

          const state = data.address?.state;
          const country = data.address?.country || 'India';

          let resolvedLocation = '';
          if (city && state) {
            resolvedLocation = `${city}, ${state}`;
          } else if (city) {
            resolvedLocation = `${city}, ${country}`;
          } else if (state) {
            resolvedLocation = `${state}, ${country}`;
          } else {
            resolvedLocation = 'India';
          }

          handleSelectCity(resolvedLocation);
        } catch (err) {
          console.error('Error resolving geolocation:', err);
          setDetectError('Unable to identify city from GPS. Please choose manually.');
        } finally {
          setIsDetecting(false);
        }
      },
      (error) => {
        console.warn('Geolocation error:', error);
        if (error.code === error.PERMISSION_DENIED) {
          setDetectError('Location access was denied. Please select your city below.');
        } else {
          setDetectError('Could not retrieve device location.');
        }
        setIsDetecting(false);
      },
      { timeout: 10000, enableHighAccuracy: false }
    );
  }, [handleSelectCity]);

  // Debounced search query handler
  const handleSearchChange = useCallback((value) => {
    setSearchQuery(value);
    setDetectError('');

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    if (!value || value.trim().length < 2) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    debounceTimerRef.current = setTimeout(async () => {
      try {
        const results = await searchCitiesApi(value);
        setSearchResults(results || []);
      } catch (err) {
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 400);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchQuery('');
    setSearchResults([]);
  }, []);

  const handleToggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setDetectError('');
  }, []);

  const handleClearError = useCallback(() => {
    setDetectError('');
  }, []);

  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  return {
    location,
    isOpen,
    isDetecting,
    detectError,
    searchQuery,
    searchResults,
    isSearching,
    popularCities: POPULAR_CITIES,
    handleSelectCity,
    handleDetectLocation,
    handleSearchChange,
    handleClearSearch,
    handleToggleOpen,
    handleClose,
    handleClearError,
  };
};

export default useDeliveryLocation;
