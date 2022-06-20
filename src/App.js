import React, { useState } from "react"
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, Box, Container, MenuItem, Alert, TextField } from '@mui/material';
import SearchBar from './Components/SearchBar'
import MovieGrid from './Components/MovieGrid';

const theme = createTheme();
const apiKey = "9b4fa9ae"

const App = () => {
  const [data, setData] = useState({results:[], numResults: 0})
  const [currPage, setCurrPage] = useState(1)
  const [input, setInput] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const fetchData = (pageNum) => {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${input}&page=${pageNum}`
    fetch(url)
    .then(response => response.json())
    .then(({Response, totalResults: numResults, Search, Error}) => {
      if (Response === "True"){
        const results = pageNum === 1 ? Search : data.results.concat(Search)
        setData({numResults: numResults, results: results})
        setCurrPage(pageNum)
        setErrMsg("")
      } else{
        setErrMsg(Error)
        if (pageNum === 1) setData({results:[], numResults: 0})
      }
    })}

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ pt: 2, pb: 5 }}>
        <Container maxWidth="md">
          <Typography
            variant="h2"
            align="center"
            gutterBottom
          >Movie App</Typography>
          <SearchBar {...{input, setInput}} search={() => fetchData(1)} />
          <MovieGrid loadMore={() => fetchData(currPage+1)} {...data} currPage={currPage} />
          {errMsg && (
            <Alert severity="error">Oops, {errMsg.toLowerCase()}</Alert>
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
