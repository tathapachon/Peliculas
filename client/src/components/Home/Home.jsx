import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {  fetchVideogames } from '../../actions';
import Card from "../Card/Card";
import "./Home.scss"
export default function Home(){
    const dispatch = useDispatch();
    const allVideogames = useSelector((state) => state.videogames);

    useEffect(() => {
        dispatch(fetchVideogames());
      
      }, []);
    return(
        <div>
            <h2>Star wars</h2>
            <div className="cardsContainer">
          {allVideogames?.map((videogame,index) => {
            return (
              <section>
                <Link to={'/detail/' + (index+1)}>
                  <Card
                    title={videogame.title}
                    key={videogame.title}
                    release_date={videogame.release_date}
                    director={videogame.director}
                    producer={videogame.producer}
                  />
                </Link>
              </section>
            );
          })}
        </div>
        </div>
    )
}