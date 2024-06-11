import React, { useState,useEffect } from 'react'
import { json, useParams } from 'react-router-dom'

function Movieinfo() {
    const [movie,setMovie]=useState("")
    const {id}=useParams()
    useEffect(()=>{
        fetch(`https://64feb80cf8b9eeca9e28f629.mockapi.io/movies/${id}`).then(data=>data.json()).then(data=>setMovie(data))


    },[id])
  return (
    <div>
        <pre>{JSON.stringify(id,null,2)}</pre>
        <iframe width="1134" height="638" src={movie.trailer} title="Garudan - Trailer | Soori, Sasikumar, Unni Mukundan | Yuvan | Vetrimaaran | RS Durai Senthilkumar" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default Movieinfo