import React from 'react';
import Sidebar from './components/Sidebar';
import SalesJourney from './pages/SalesJourney';
import PropertyInformation from './pages/PropertyInformation';
import RequiredDocuments from './pages/RequiredDocuments';
import AdTracking from './pages/AdTracking';
import LegalResources from './pages/LegalResources';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <SalesJourney />
        <PropertyInformation />
        <RequiredDocuments />
        <AdTracking />
        <LegalResources />
      </div>
    </div>
  );
}

export default App;