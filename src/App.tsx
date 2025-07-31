import React, { useState } from 'react';
import { useAppContext } from './context/AppContext';
import PropertyCard from './components/PropertyCard';
import AddPropertyForm from './components/AddPropertyForm';
import PropertyModal from './components/PropertyModal';
import FilterBar from './components/FilterBar';

const App = () => {
  const { properties, selectedProperty, darkMode, toggleDarkMode } = useAppContext();
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('');

  const filtered = properties.filter(p =>
    (filterType ? p.type === filterType : true) &&
    (p.title.toLowerCase().includes(search.toLowerCase()) ||
     p.location.toLowerCase().includes(search.toLowerCase()) ||
     p.type.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className={darkMode ? 'dark app-container' : 'app-container'}>
      <header>
        <h1>🏡 Property Listings</h1>
        <button onClick={toggleDarkMode}>{darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}</button>
      </header>
      <FilterBar search={search} setSearch={setSearch} filterType={filterType} setFilterType={setFilterType} />
      <AddPropertyForm />
      <div className="card-grid">
        {filtered.map(p => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
      {selectedProperty && <PropertyModal />}
    </div>
  );
};

export default App;
