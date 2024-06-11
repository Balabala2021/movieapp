import React from 'react'
import './App.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MovieList from './movielist'
import { Button } from '@mui/material';
import { Route, Routes,useNavigate,Link } from 'react-router-dom';
import Home from './Home';
import Addmovie from './addmovie';
import Editmovie from './editmovie';
import Movieinfo from './movieinfo';

function App() {
  const navigate=useNavigate()
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Button onClick={()=>navigate("/") }>Home</Button>
          <Button onClick={()=>navigate("/movies")}>Movies</Button>
          <Button onClick={()=>navigate("/addmovie")}>AddMovies</Button>

          <Link to="/">Home</Link>
          </Toolbar>
          </AppBar>
          </Box>
   
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/movies" element={<MovieList/>}/>
    <Route path="/addmovie" element={<Addmovie/>}/>
    <Route path='/editmovie/:id' element={<Editmovie/>}/>
    <Route path="/movieinfo/:id" element={<Movieinfo/>}/>
   </Routes>
      
    </div>
  )
}

export default App