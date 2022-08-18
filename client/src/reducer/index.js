import {
  
    FETCH_VIDEOGAMES,
    FETCH_BY_ID
 
  } from '../actions';
  
  const initialState = {
    videogames: [],
    videogameDetail: [],

  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_VIDEOGAMES:
        return {
          ...state,
          videogames: action.payload,
        
        };
        case FETCH_BY_ID:
          return {
            ...state,
            videogameDetail: action.payload,
          };
  
  
  
      default:
        return state;
    }
  }