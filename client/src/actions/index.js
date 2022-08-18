import axios from 'axios';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const FETCH_BY_ID = 'FETCH_BY_ID';

export function fetchMovie() {
  return async function (dispatch) {
    let jsonMovie = await axios.get('http://localhost:3001/films');

    return dispatch({
      type: FETCH_MOVIE,
      payload: jsonMovie.data,
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