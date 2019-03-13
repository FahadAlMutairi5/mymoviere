import * as actionTypes from "./actionTypes";


export const FilterWatched = (query) => {
  return  dispatch => { 
      dispatch({
        type: actionTypes.FILTER_MOVIE_WATCHED_LIST,
        payload: query
      })
  };
};

