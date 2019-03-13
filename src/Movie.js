import React, { Component } from "react";
import {connect} from "react-redux";
import * as indexAction from '././store/actions/index';

class Movie extends Component {
  render() {
    const movie_obj = this.props.movie;
    return (
            <div className={!movie_obj.whatched ? "col-12 p-3 border-success border-bottom rounded border-left border-right animated bounceInRight" : "col-12 p-3 border-danger border-bottom rounded border-left border-right animated bounceInLeft"} style={{backgroundColor:"white"}}>
              <span className="float-left" > <h4>{movie_obj.title} </h4></span> 
              <button onClick={() => this.props.DeleteMovei(movie_obj)} type="button" className="btn btn-danger btn-sm float-right p-2">Delete</button>
              <button onClick={() => this.props.ActionChange(movie_obj)}  type="button" className={!movie_obj.whatched ? "btn btn-success btn-sm float-right p-2 mr-2": "btn btn-outline-success btn-sm float-right p-2 mr-2"}>
              { !movie_obj.whatched ? "Watched" : "Unwatched"}</button>
            </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    ActionChange:(movie) => dispatch(indexAction.ActionChange(movie)),
    DeleteMovei:(movie) => dispatch(indexAction.actionDeleteMovie(movie)),
  };
};
export default connect(null,mapDispatchToProps)(Movie);
