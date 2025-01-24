// App.js
import React from 'react';
import Footer from './components/footer/Footer';
import NavBarTop from './components/navbars/NavBarTop';
import PageLayout from './pages/PageLayout'; // now references PageLayout.js
import NavBarSide from './components/navbars/NavBarSide'
import './index.css';

function App() {
  return (
    <PageLayout>
      <NavBarTop />
      <NavBarSide />
      <main>
        {/* Your content... */}
      </main>
      <Footer />
    </PageLayout>
  );
}

export default App;
