import React from 'react';

const CategoryCircle = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-2 cursor-pointer bg-transparent border-none p-1 transition-transform duration-200 shrink-0 ${isActive ? 'scale-105' : 'scale-100'}`}
    >
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-[250ms]`}
        style={{
          backgroundColor: isActive ? 'var(--bg-primary)' : 'var(--bg-circle-item)',
          border: isActive ? '2px solid var(--text-primary)' : '1px solid var(--border-light)',
          boxShadow: isActive ? 'var(--shadow-md)' : 'none',
        }}
      >
        <span
          className="text-[0.65rem] font-semibold tracking-[0.5px] uppercase"
          style={{
            color: isActive ? 'var(--text-light)' : 'var(--text-secondary)',
            fontFamily: 'var(--font-sans)',
          }}
        >
          {label}
        </span>
      </div>

      <span
        className="text-[0.7rem] transition-colors duration-200"
        style={{
          fontWeight: isActive ? '600' : '400',
          color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
          fontFamily: 'var(--font-sans)',
        }}
      >
        {label}
      </span>
    </button>
  );
};

export default CategoryCircle;
