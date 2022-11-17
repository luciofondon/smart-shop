import React from 'react';
import TextField from '@mui/material/TextField';
import { ISearch } from './interfaces';

function Search({ handleChangeFilter }: ISearch) {
  return (
    <TextField
      label="Buscador"
      onChange={(e) => {
        handleChangeFilter(e.target.value);
      }}
    />
  );
}

export default Search;
