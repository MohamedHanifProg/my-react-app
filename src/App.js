import React from 'react';
import PageLayout from './pages/PageLayout';
import NavBarTop from './components/navbars/NavBarTop';
import NavBarSide from './components/navbars/NavBarSide';
import CarsCatalogue from './components/content/CarsCatalogue';
import Footer from './components/footer/Footer';

function App() {
  return (
    <PageLayout>
      <NavBarTop />
      <div style={{ display: 'flex', flex: 1 }}>
        <NavBarSide />
        <CarsCatalogue />
      </div>
      <Footer />
    </PageLayout>
  );
}

export default App;
