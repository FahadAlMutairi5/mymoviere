import * as actionTypes from "./actionTypes";


export const FilterWatch = (query) => {
  return  dispatch => { 
      dispatch({
        type: actionTypes.FILTER_MOVIE_WATCH_LIST,
        payload: query
      })
  };
};
