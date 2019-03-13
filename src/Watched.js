import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import Movie from "./Movie";
import * as indexAction from '././store/actions/index';
import {connect} from "react-redux";

class Watched extends Component {
  handleChange = event => {
    this.props.FilterWatched(event.target.value);
  };
  componentDidUpdate(prevProps){

  }
  render() {
    const moviesWhached = this.props.movies.map(movie => (<Movie key={movie.id} movie={movie}/> ));
    return (
              <div className="col-11 col-sm-9 col-md-7 col-xl-5 ml-5 mt-5">
                  <div className="row" style={{backgroundColor:"white"}}>
                    <div className="col-7 p-3 border-danger border-bottom border-top border-left">
                      <h3 className="mb-3"> Watched <span className="badge badge-secondary rounded-circle">
                      {this.props.allMovies.filter(movie=> movie.whatched).length === this.props.filteredMoviesWhatchedList.length ? this.props.allMovies.filter(movie=> movie.whatched).length : `${this.props.filteredMoviesWhatchedList.length} out of ${this.props.allMovies.filter(movie=> movie.whatched).length}`}</span></h3>
                    </div> 
                    <div className="col-5 border-danger border-bottom border-left border-top border-right">
                      <div className="form-group">
                      <div className="input-group my-3">
                        <input
                          className="form-control"
                          type="text"
                          value={this.props.value}
                          onChange={this.handleChange}
                          placeholder="search ..."
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={faSearch} />
                          </span>
                        </div>
                      </div>
                    </div>
                    </div>    
                  </div>
                  <div className="row">
                    {moviesWhached.length<1 ? <div className="col-12 p-3 border-danger border-bottom rounded border-left border-right animated bounceInRight" style={{backgroundColor:"white"}}>
                      You did not watch any movies :(
                    </div> : 
                    moviesWhached
                  }  
                  </div>
              </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    FilterWatched:(query) => dispatch(indexAction.FilterWatched(query)),  
  };
};
const mapStateToProps = state => {
    return {
      allMovies:state.movies,
      filteredMoviesWhatchedList:state.filteredMoviesWhatchedList,
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Watched);
