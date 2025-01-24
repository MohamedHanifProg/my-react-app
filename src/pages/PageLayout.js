import React from 'react';
import '../index.css';

function PageLayout({ children }) {
  return (
    <div className="page-layout">
      {children}
    </div>
  );
}

export default PageLayout;
