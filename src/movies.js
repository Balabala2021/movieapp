import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom'
import InfoIcon from '@mui/icons-material/Info';

export default function Movies({movie,deleteMovie}) {
  const navigate=useNavigate()

  return (
    <Card sx={{ maxWidth: 345 }} className='movie-container'>
      <CardMedia
        sx={{ height: 140 }}
        image={movie.avatar}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{color:movie.rating>=7?'green':'red'}}>
          {movie.name} {movie.rating}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {movie.summary}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>navigate(`/editmovie/${movie.id}`)}>Edit</Button>
        <Button size="small" onClick={()=>deleteMovie(movie.id)}>Delete</Button>
        <InfoIcon onClick={()=>navigate(`/movieinfo/${movie.id}`)}/>
      </CardActions>
    </Card>
  );
}