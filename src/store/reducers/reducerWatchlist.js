import * as actionTypes from "../actions/actionTypes";

const initialState = {
  movies: [],
  filteredMoviesWhatchList:[],
  filteredMoviesWhatchedList:[],
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MOVIE:
      return {
        ...state,
        movies:state.movies.concat(action.payload),
        filteredMoviesWhatchList:state.filteredMoviesWhatchList.concat(action.payload),
      };
    case actionTypes.FILTER_MOVIE_WATCH_LIST:
    let filteredMovieWhatchL = state.movies.filter(movie => {
        return (`${movie.title}`
          .toLowerCase()
          .includes(action.payload.toLowerCase()) && !movie.whatched);
      });
      return {
        ...state,
        filteredMoviesWhatchList:filteredMovieWhatchL,
      };
    case actionTypes.FILTER_MOVIE_WATCHED_LIST:
    let filteredMovieWhatchedL = state.movies.filter(movie => {
        return (`${movie.title}`
          .toLowerCase()
          .includes(action.payload.toLowerCase()) && movie.whatched);
      });
      return {
        ...state,
        filteredMoviesWhatchedList:filteredMovieWhatchedL,
      };
    case actionTypes.CHANGE_WHATCHED:
    let newUnwatch =[]
    let newWatch=[]
    if(action.payload.whatched){
     newWatch= state.filteredMoviesWhatchedList.filter(movie=> movie !== action.payload)
    let newMovie = action.payload
    newMovie.whatched = false
     newUnwatch = state.filteredMoviesWhatchList.concat(newMovie)
    }else{
    newUnwatch= state.filteredMoviesWhatchList.filter(movie=> movie !== action.payload)
    let newMovie = action.payload
    newMovie.whatched = true
    newWatch = state.filteredMoviesWhatchedList.concat(newMovie)
    }

    return{
      ...state,
      filteredMoviesWhatchList:newUnwatch,
      filteredMoviesWhatchedList:newWatch,
    }
    case actionTypes.DELETE_MOVIE:
    let newUnwatchD =[]
    let newWatchD=[]
    let newMovie=[]
    if(action.payload.whatched){
      console.log("DeleteUnW")
    newWatchD = state.filteredMoviesWhatchedList.filter(movie=> movie.id !== action.payload.id)
    newMovie = state.movies.filter(movie=> movie.id !== action.payload.id)
    return {
        ...state,
        movies:newMovie,
        filteredMoviesWhatchedList:newWatchD,
      };
    }else{
      console.log("DeleteWa")
    newUnwatchD = state.filteredMoviesWhatchList.filter(movie=> movie.id !== action.payload.id)
    newMovie = state.movies.filter(movie=> movie.id !== action.payload.id)
    return {
        ...state,
        movies:newMovie,
        filteredMoviesWhatchList:newUnwatchD,
      };
    }
      
    default:
      return state;
  }
};

export default reducer;