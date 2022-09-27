import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";



import './MovieCard.css'

const MovieCard = ({ movie }) => {
  return (
    <div className="movieCard">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.img} className="movieImg" />
        <Card.Body className="cardText">
          <Card.Title className="movieTitle">{movie.title}</Card.Title>
          <discription className="discription">{movie.discription}</discription>
        </Card.Body>
      </Card>
      <Link to={`/desc/${movie.title}`} state={{ movie }}>
        See more...
      </Link>
    </div>
  )
}

export default MovieCard