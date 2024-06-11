import React, { useEffect, useState } from 'react'
import Movies from './movies'

function MovieList() {
    const [movies,setMovies]=useState([])

    const getMovies=()=>{
      // fetch("http://localhost:4000/movies").then(data=>data.json()).then(data=>setMovies(data))
      fetch("https://64feb80cf8b9eeca9e28f629.mockapi.io/movies").then(data=>data.json()).then(data=>setMovies(data))

    }
    useEffect(()=>{
      getMovies()
    },[])

    const deleteMovie=(id)=>{
      console.log('deleted Movie',id)
      fetch(`https://64feb80cf8b9eeca9e28f629.mockapi.io/movies/${id}`,{method:"DELETE"}).then(()=>getMovies())
    }

        
  return (
    <div className='movie-list'>
        {
            movies && movies.map(movie=><Movies key={movie.id} movie={movie} deleteMovie={deleteMovie}/>)



}
    </div>
  )
}

export default MovieList
