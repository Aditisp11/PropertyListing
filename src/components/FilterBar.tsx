import React from 'react';

interface Props {
  search: string;
  setSearch: (val: string) => void;
  filterType: string;
  setFilterType: (val: string) => void;
}

const FilterBar: React.FC<Props> = ({ search, setSearch, filterType, setFilterType }) => {
  return (
    <div className="filter-bar">
      <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search properties..." />
      <select value={filterType} onChange={e => setFilterType(e.target.value)}>
        <option value="">All Types</option>
        <option value="Apartment">Apartment</option>
        <option value="Villa">Villa</option>
      </select>
    </div>
  );
};

export default FilterBar;
