import {
  
    FETCH_MOVIE,
    FETCH_BY_ID
 
  } from '../actions';
  
  const initialState = {
   movie: [],
   movieDetail: [],

  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_MOVIE:
        return {
          ...state,
          movie: action.payload,
        
        };
        case FETCH_BY_ID:
          return {
            ...state,
            movieDetail: action.payload,
          };
  
  
  
      default:
        return state;
    }
  }