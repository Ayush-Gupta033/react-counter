import React, { useState, useEffect } from 'react';
import { TextField, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

   useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <TextField
        label="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        variant="outlined"
      />
      <List>
        {filteredData.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SearchBar;
