import React, { useState, useEffect } from 'react';

import './NavBarTop.css';

function NavBarTop({ onSearch, onToggleFavorites, showFavorites }) {
  const [searchValue, setSearchValue] = useState('');
  const [isFavoritesActive, setIsFavoritesActive] = useState(false);

  // Debounce search input
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (onSearch) onSearch(searchValue);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchValue, onSearch]);

  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const handleToggleFavorites = () => {
    setIsFavoritesActive(!isFavoritesActive);
    if (onToggleFavorites) onToggleFavorites(!isFavoritesActive);
  };

  return (
    <div className="navbar-top">
      {/* Clickable Brand Logo */}
      <div 
        className="navbar-brand"
        onClick={() => {
          setSearchValue('');
          if (onSearch) onSearch('');
        }}
        role="button"
        tabIndex={0}
      >
        ShenCarCar
      </div>

      {/* Integrated Search Input */}
      <div className="navbar-search">
        <div className="search-button">
          <input
            type="text"
            className="search-text"
            placeholder="Search by car name"
            value={searchValue}
            onChange={handleSearchInput}
            style={{
              border: 'none',
              background: 'transparent',
              outline: 'none',
              width: '100%',
              paddingRight: '40px' // Space for icon
            }}
            aria-label="Search car by name"
          />
          <div className="search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="#596780"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 22L20 20"
                stroke="#596780"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Favorites Button */}
      <div 
        className="like-container" 
        onClick={handleToggleFavorites}
        role="button"
        tabIndex={0}
      >
        <div className="like-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={isFavoritesActive ? "#ED3F3F" : "#596780"}>
            <path
              d="M16.44 3.1C14.63 3.1 13.01 3.98 12 5.33C10.99 3.98 9.37 3.1 7.56 3.1C4.49 3.1 2 5.6 2 8.69C2 9.88 2.19 10.98 2.52 12C4.1 17 8.97 19.99 11.38 20.81C11.72 20.93 12.28 20.93 12.62 20.81C15.03 19.99 19.9 17 21.48 12C21.81 10.98 22 9.88 22 8.69C22 5.6 19.51 3.1 16.44 3.1Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default NavBarTop;