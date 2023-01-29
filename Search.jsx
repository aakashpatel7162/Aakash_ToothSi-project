import React, { useState } from 'react';

const Search = ({ data, updateResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    updateResults(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
};

const Results = ({ data, searchTerm }) => {
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul>
      {filteredData.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

const SearchPage = () => {
  const [data, setData] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
  ]);

  const updateResults = (searchTerm) => {
    setData(data.filter((item) => item.name.includes(searchTerm)));
  };

  return (
    <div>
      <Search data={data} updateResults={updateResults} />
      <Results data={data} searchTerm={searchTerm} />
    </div>
  );
};

export default SearchPage;
