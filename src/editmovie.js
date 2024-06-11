import React, { useEffect, useState } from 'react'
import { FormControl,InputLabel,Input, Button} from '@mui/material';
import {useNavigate,useParams} from 'react-router-dom'

function Editmovie()
{
    const [movie,setMovie]=useState(null)
    const {id}=useParams()

    console.log(id)
    useEffect(()=>{
        fetch(`https://64feb80cf8b9eeca9e28f629.mockapi.io/movies/${id}`).then(data=>data.json()).then(data=>setMovie(data))


    },[id])
    return (
        <div>
                <pre>{JSON.stringify(id,null,2)}</pre>
                {
                    movie?<EditmovieForm movie={movie}/>:"Loading..."
                }
        </div>
    )
}
function EditmovieForm({movie})
 {
    const [name,setName]=useState(movie.name)
    const [avatar,setPoster]=useState(movie.avatar)
    const [summary,setSummary]=useState(movie.summary)
    const [rating,setRating]=useState(movie.rating)
    const [trailer,setTrailer]=useState(movie.trailer)

  const navigate=useNavigate()

  
  const updateMovie=()=>
  {
  const editMovie={name,avatar,summary,rating,trailer}
  // console.log(newMovie)
      fetch(`https://64feb80cf8b9eeca9e28f629.mockapi.io/movies/${movie.id}`,
    {
      method:"PUT",
    body:JSON.stringify(editMovie),
    headers:{"Content-Type":"application/json"}
   }).then(()=>navigate("/movies"))
  }
  return (
    <div>
        <h1>Edit Movie</h1>
        <FormControl>
            <InputLabel htmlFor="movie-name">Movie Name</InputLabel>
            <Input id="movie-name" onChange={event=>setName(event.target.value)} value={name}/>
        </FormControl>
<br/>
  {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
  <FormControl>
    <InputLabel htmlFor="poster">Movie Poster</InputLabel>
    <Input id="poster" onChange={event=>setPoster(event.target.value)} value={avatar}/>
  </FormControl>
  <br/>
  <FormControl>
    <InputLabel htmlFor="rating">Movie Rating</InputLabel>
    <Input id="rating" onChange={event=>setRating(event.target.value)} value={rating}/>
  </FormControl>
  <br/>
  <FormControl>
    <InputLabel htmlFor="summary">Movie Summary</InputLabel>
    <Input id="summary" onChange={event=>setSummary(event.target.value)} value={summary}/>
  </FormControl>
  <br/>
  <FormControl>
    <InputLabel htmlFor="trailer">Movie Trailer</InputLabel>
    <Input id="trailer" onChange={event=>setTrailer(event.target.value)} value={trailer}/>
</FormControl>  
<br/>
<Button onClick={updateMovie}>update movie</Button>
    </div>
    
  )
}

export default Editmovie