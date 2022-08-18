import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {  fetchMovie } from '../../actions';
import Card from "../Card/Card";
import "./Home.scss"
export default function Home(){
    const dispatch = useDispatch();
    const allMovie = useSelector((state) => state.movie);

    useEffect(() => {
        dispatch(fetchMovie());
      
      }, []);
    return(
        <div>
            <h2>Star wars</h2>
            <div className="cardsContainer">
          {allMovie?.map((movie,index) => {
            return (
              <section>
                <Link to={'/detail/' + (index+1)}>
                  <Card
                    title={movie.title}
                    key={movie.title}
                    release_date={movie.release_date}
                    director={movie.director}
                    producer={movie.producer}
                  />
                </Link>
              </section>
            );
          })}
        </div>
        </div>
    )
}