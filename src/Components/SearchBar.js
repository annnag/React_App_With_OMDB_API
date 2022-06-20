import React from "react";
import { Paper, InputBase, IconButton } from "@mui/material";
import { Search as SearchIcon } from '@mui/icons-material';

const SearchBar = ({ search, input, setInput }) => {

  return (
    <Paper
      component="form"
      sx={{ display: 'flex', alignContent: 'center', p: 1, ml: 5, mr: 5 }}
    >
      <InputBase
        sx={{ flex: 1 }}
        placeholder="Search Movies"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={(e) => {
        e.preventDefault()
        search()
      }}>
        <SearchIcon />
      </IconButton>
    </Paper>
)}

export default SearchBar;
