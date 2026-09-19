import React from 'react';

const CategoryCircle = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        padding: '0.25rem',
        transition: 'transform 0.2s ease',
        transform: isActive ? 'scale(1.05)' : 'scale(1)',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          backgroundColor: isActive ? 'var(--bg-primary)' : 'var(--bg-circle-item)',
          border: isActive
            ? '2px solid var(--text-primary)'
            : '1px solid var(--border-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.25s ease',
          boxShadow: isActive ? 'var(--shadow-md)' : 'none',
        }}
      >
        <span
          style={{
            fontSize: '0.65rem',
            fontWeight: '600',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            color: isActive ? 'var(--text-light)' : 'var(--text-secondary)',
            fontFamily: 'var(--font-sans)',
          }}
        >
          {label}
        </span>
      </div>

      <span
        style={{
          fontSize: '0.7rem',
          fontWeight: isActive ? '600' : '400',
          color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
          fontFamily: 'var(--font-sans)',
          transition: 'color 0.2s ease',
        }}
      >
        {label}
      </span>
    </button>
  );
};

export default CategoryCircle;
