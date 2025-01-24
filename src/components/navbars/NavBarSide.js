import React from "react";
import "./NavBarSide.css";

function NavBarSide() {
  return (
    <div className="navbar-side">
      {/* -------------- TYPE SECTION -------------- */}
      <div className="navbar-section">
        {/* Section Title */}
        <div className="navbar-section-title">T Y P E</div>

        {/* List of TYPE items */}
        <div className="navbar-item-list">
          {/* Sport (10) */}
          <div className="navbar-item">
            <div className="navbar-item-icon">
              {/* Vuesax "tick-square" icon (blue fill) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" 
                height="24" 
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                  fill="#3563E9"
                />
              </svg>
            </div>
            <div className="navbar-item-text">Sport (10)</div>
          </div>

          {/* SUV (12) */}
          <div className="navbar-item">
            <div className="navbar-item-icon">
              {/* Vuesax "tick-square" icon (blue fill) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" 
                height="24" 
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                  fill="#3563E9"
                />
              </svg>
            </div>
            <div className="navbar-item-text">SUV (12)</div>
          </div>

          {/* MPV (16) */}
          <div className="navbar-item">
            <div className="navbar-item-icon">
              {/* "Ceklist" icon with stroke #90A3BF */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.5 7.80863V7.81V16.19C21.5 17.9105 20.9888 19.2237 20.1057 20.1064C19.2226 20.989 17.9086 21.5 16.1871 21.5H7.8129C6.09136 21.5 4.7775 20.989 3.89445 20.1053C3.01137 19.2216 2.5 17.9059 2.5 16.18V7.81C2.5 6.08951 3.01115 4.77628 3.89423 3.89364C4.77734 3.01097 6.09135 2.5 7.8129 2.5H16.1971C17.9187 2.5 19.2325 3.01101 20.1143 3.89342C20.9959 4.77569 21.5047 6.08845 21.5 7.80863Z"
                  stroke="#90A3BF"
                />
              </svg>
            </div>
            <div className="navbar-item-text">MPV (16)</div>
          </div>

          {/* Sedan (20) */}
          <div className="navbar-item">
            <div className="navbar-item-icon">
              {/* "Ceklist" icon with stroke #90A3BF */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.5 7.80863V7.81V16.19C21.5 17.9105 20.9888 19.2237 20.1057 20.1064C19.2226 20.989 17.9086 21.5 16.1871 21.5H7.8129C6.09136 21.5 4.7775 20.989 3.89445 20.1053C3.01137 19.2216 2.5 17.9059 2.5 16.18V7.81C2.5 6.08951 3.01115 4.77628 3.89423 3.89364C4.77734 3.01097 6.09135 2.5 7.8129 2.5H16.1971C17.9187 2.5 19.2325 3.01101 20.1143 3.89342C20.9959 4.77569 21.5047 6.08845 21.5 7.80863Z"
                  stroke="#90A3BF"
                />
              </svg>
            </div>
            <div className="navbar-item-text">Sedan (20)</div>
          </div>

          {/* Coupe (14) */}
          <div className="navbar-item">
            <div className="navbar-item-icon">
              {/* "Ceklist" icon with stroke #90A3BF */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.5 7.80863V7.81V16.19C21.5 17.9105 20.9888 19.2237 20.1057 20.1064C19.2226 20.989 17.9086 21.5 16.1871 21.5H7.8129C6.09136 21.5 4.7775 20.989 3.89445 20.1053C3.01137 19.2216 2.5 17.9059 2.5 16.18V7.81C2.5 6.08951 3.01115 4.77628 3.89423 3.89364C4.77734 3.01097 6.09135 2.5 7.8129 2.5H16.1971C17.9187 2.5 19.2325 3.01101 20.1143 3.89342C20.9959 4.77569 21.5047 6.08845 21.5 7.80863Z"
                  stroke="#90A3BF"
                />
              </svg>
            </div>
            <div className="navbar-item-text">Coupe (14)</div>
          </div>

          {/* Hatchback (14) */}
          <div className="navbar-item">
            <div className="navbar-item-icon">
              {/* Vuesax "tick-square" icon (blue fill) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" 
                height="24" 
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                  fill="#3563E9"
                />
              </svg>
            </div>
            <div className="navbar-item-text">Hatchback (14)</div>
          </div>
        </div>
      </div>

      {/* -------------- CAPACITY SECTION -------------- */}
      <div className="navbar-section">
        <div className="navbar-section-title">C A P A C I T Y</div>

        {/* List of capacities */}
        <div className="navbar-item-list">
          {/* 2 Person (10) */}
          <div className="navbar-item">
            <div className="navbar-item-icon">
              {/* Tick-square with fill #3563E9 */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" 
                height="24" 
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
                  fill="#3563E9"
                />
              </svg>
            </div>
            <div className="navbar-item-text">2 Person (10)</div>
          </div>

          {/* 4 Person (14) */}
          <div className="navbar-item">
            <div className="navbar-item-icon">
              {/* "Ceklist" with stroke #90A3BF */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" 
                height="24" 
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.5 7.80863V7.81V16.19C21.5 17.9105 20.9888 19.2237 20.1057 20.1064C19.2226 20.989 17.9086 21.5 16.1871 21.5H7.8129C6.09136 21.5 4.7775 20.989 3.89445 20.1053C3.01137 19.2216 2.5 17.9059 2.5 16.18V7.81C2.5 6.08951 3.01115 4.77628 3.89423 3.89364C4.77734 3.01097 6.09135 2.5 7.8129 2.5H16.1971C17.9187 2.5 19.2325 3.01101 20.1143 3.89342C20.9959 4.77569 21.5047 6.08845 21.5 7.80863Z"
                  stroke="#90A3BF"
                />
              </svg>
            </div>
            <div className="navbar-item-text">4 Person (14)</div>
          </div>

          {/* 6 Person (12) */}
          <div className="navbar-item">
            <div className="navbar-item-icon">
              {/* "Ceklist" with stroke #90A3BF */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" 
                height="24" 
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.5 7.80863V7.81V16.19C21.5 17.9105 20.9888 19.2237 20.1057 20.1064C19.2226 20.989 17.9086 21.5 16.1871 21.5H7.8129C6.09136 21.5 4.7775 20.989 3.89445 20.1053C3.01137 19.2216 2.5 17.9059 2.5 16.18V7.81C2.5 6.08951 3.01115 4.77628 3.89423 3.89364C4.77734 3.01097 6.09135 2.5 7.8129 2.5H16.1971C17.9187 2.5 19.2325 3.01101 20.1143 3.89342C20.9959 4.77569 21.5047 6.08845 21.5 7.80863Z"
                  stroke="#90A3BF"
                />
              </svg>
            </div>
            <div className="navbar-item-text">6 Person (12)</div>
          </div>
        </div>
      </div>

      {/* -------------- PRICE SECTION -------------- */}
      <div className="navbar-section">
        <div className="navbar-section-title">P R I C E  ( P E R  D A Y )</div>

        {/* Price Range Container */}
        <div className="navbar-price-range">
          {/* Horizontal track lines */}
          <div className="navbar-price-line-container">
            <div className="navbar-price-line-bg" />
            <div className="navbar-price-line-fill" />
            <div className="navbar-price-mark">
              {/* Circle (blue fill, white stroke) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  fill="#3563E9" 
                  stroke="white" 
                  strokeWidth="4" 
                />
              </svg>
            </div>
          </div>

          {/* Price Value Text */}
          <div className="navbar-price-value">Max. $100.00</div>
        </div>
      </div>
    </div>
  );
}

export default NavBarSide;
