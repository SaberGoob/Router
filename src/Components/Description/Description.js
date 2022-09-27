import React from "react";
import { useLocation } from "react-router-dom";
import { Card } from 'react-bootstrap';

import "./Description.css";
import MoviesData from "../MoviesData/MoviesData";



 
  const Description = ({ movie }) =>{
  const location = useLocation();
  return (
    
    <div className="description">
    <h1>{movie.title}</h1>
    <p>{movie.description}</p>
    <iframe
      width="560"
      height="315"
      src={movie.trailer}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>

    
  );
};
export default Description;