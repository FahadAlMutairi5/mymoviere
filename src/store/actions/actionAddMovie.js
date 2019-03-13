import * as actionTypes from "./actionTypes";

let id = 0;
const whatched = false;
export const AddMovie = (title) => {
  const movie_ob = {id:id, title:title, whatched:whatched};
  id = id + 1;
  return  dispatch => { 
      dispatch({
        type: actionTypes.ADD_MOVIE,
        payload: movie_ob
      })
  };
};

