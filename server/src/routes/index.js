const express = require('express');
// const { Router } = require('express');
const axios = require ("axios");

const app= express();
const cors = require("cors")
app.use(cors())
// const router = Router();

app.get("/films", async (req, res) => {
    try {
        const responseApi = await axios("https://swapi.dev/api/films");
        // console.log(responseApi.data.results);

     
        const movies = responseApi.data.results.map((p) => {
            
            
            return {
                title: p.title,
                release_date: p.release_date,
                director: p.director,
                producer: p.producer,
                opening_crawl: p.opening_crawl,  
                characters: p.characters 
            }
        })
    //    const charac = movies.map(async (c) =>  await c.characters.map(async (p) => await axios(p)))
        // console.log(charac)
       return res.status(200).send(movies);
        
    } catch (error) {
        console.log(error);        
    }
});

app.get("/films/:id", async (req, res) => {
    const { id } = req.params;
    try {
        let gameToReturn;
        const responseApi = await axios(
            `https://swapi.dev/api/films/${id}`
            
        );
   
      let p = responseApi.data;

      gameToReturn = {
        title: p.title,
        release_date: p.release_date,
        director: p.director,
        producer: p.producer,
        opening_crawl: p.opening_crawl,  
        characters: p.characters 
      };
    
    //    const charac = movies.map(async (c) =>  await c.characters.map(async (p) => await axios(p)))
        // console.log(charac)
       return res.status(200).send(gameToReturn);
        
    } catch (error) {
        console.log(error);        
    }
});

module.exports = app;
