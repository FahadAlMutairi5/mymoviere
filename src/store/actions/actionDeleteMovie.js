import * as actionTypes from "./actionTypes";


export const actionDeleteMovie = (movie) => {  
  return  dispatch => { 
      dispatch({
        type: actionTypes.DELETE_MOVIE,
        payload: movie
      })
  };
};

