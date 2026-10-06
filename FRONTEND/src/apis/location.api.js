/**
 * Location & Geocoding API Layer
 * Handles Nominatim / OpenStreetMap location search and reverse geocoding
 */

export const searchCitiesApi = async (query) => {
  if (!query || query.trim().length < 2) return [];
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        query.trim()
      )}&format=json&addressdetails=1&countrycodes=in&limit=6`,
      {
        headers: {
          'Accept-Language': 'en',
        },
      }
    );
    if (!response.ok) throw new Error('Failed to search cities');
    return await response.json();
  } catch (error) {
    console.error('Error fetching cities:', error);
    return [];
  }
};

export const reverseGeocodeApi = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`,
      {
        headers: {
          'Accept-Language': 'en',
        },
      }
    );
    if (!response.ok) throw new Error('Failed to reverse geocode');
    return await response.json();
  } catch (error) {
    console.error('Error reverse geocoding:', error);
    throw error;
  }
};
