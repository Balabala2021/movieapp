import React, { useState } from 'react'
import { FormControl,InputLabel,Input, Button} from '@mui/material';
import {useNavigate} from 'react-router-dom'


function Addmovie() {
  const [name,setName]=useState("")
  const [avatar,setPoster]=useState("")
  const [summary,setSummary]=useState("")
  const [rating,setRating]=useState("")
  const [trailer,setTrailer]=useState("")

  const navigate=useNavigate()

  const addMovieData=()=>
  {
  const newMovie={name,avatar,summary,rating,trailer}
  // console.log(newMovie)
      fetch("https://64feb80cf8b9eeca9e28f629.mockapi.io/movies",{
      method:"POST",
    body:JSON.stringify(newMovie),
    headers:{"Content-Type":"application/json"}
   }).then(()=>navigate("/movies"))
  }


  return (
    <div>
        <h1>Add Movies</h1>
        <FormControl>
            <InputLabel htmlFor="movie-name">Movie Name</InputLabel>
            <Input id="movie-name" onChange={event=>setName(event.target.value)}/>
        </FormControl>
<br/>
  {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
  <FormControl>
    <InputLabel htmlFor="poster">Movie Poster</InputLabel>
    <Input id="poster" onChange={event=>setPoster(event.target.value)}/>
  </FormControl>
  <br/>
  <FormControl>
    <InputLabel htmlFor="rating">Movie Rating</InputLabel>
    <Input id="rating" onChange={event=>setRating(event.target.value)}/>
  </FormControl>
  <br/>
  <FormControl>
    <InputLabel htmlFor="summary">Movie Summary</InputLabel>
    <Input id="summary" onChange={event=>setSummary(event.target.value)}/>
  </FormControl>
  <br/>
  <FormControl>
    <InputLabel htmlFor="trailer">Movie Trailer</InputLabel>
    <Input id="trailer" onChange={event=>setTrailer(event.target.value)}/>
</FormControl>  
<br/>
<Button onClick={addMovieData}>addmovie</Button>
    </div>
  )
}
export default Addmovie
