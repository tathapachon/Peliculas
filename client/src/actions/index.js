import axios from 'axios';
export const FETCH_VIDEOGAMES = 'FETCH_VIDEOGAMES';
export const FETCH_BY_ID = 'FETCH_BY_ID';

export function fetchVideogames() {
  return async function (dispatch) {
    let jsonVideogames = await axios.get('http://localhost:3001/films');

    return dispatch({
      type: FETCH_VIDEOGAMES,
      payload: jsonVideogames.data,
    });
  };
}

export function fetchById(id) {
  return async function (dispatch) {
    try {
      let jsonId = await axios.get('http://localhost:3001/films/' + id);

      

      return dispatch({
        type: FETCH_BY_ID,
        payload: jsonId.data,
      });
    } catch (errorMessage) {
      console.log(errorMessage);
    }
  };
}