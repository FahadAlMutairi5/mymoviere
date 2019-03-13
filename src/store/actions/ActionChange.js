import * as actionTypes from "./actionTypes";


export const ActionChange = (movie) => {  
  return  dispatch => { 
      dispatch({
        type: actionTypes.CHANGE_WHATCHED,
        payload: movie
      })
  };
};

