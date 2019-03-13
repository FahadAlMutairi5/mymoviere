import React, { Component } from 'react';
import Watched from "./Watched"
import Watchlist from "./Watchlist"
import AddMovie from "./AddMovie"
import {connect} from "react-redux";
import logo from "./assets/movielogo.png"

class App extends Component {
  render() {
    return (
      <div className="container">
            <div className="d-flex justify-content-center mt-5 p-3 animated flip infinite">
              <img
                className="center"
                style={{height: "20vmin", width:"20vmin"}}
                src={logo}
                alt="logo"
              />
            </div>
          <div className="row">
              <AddMovie/>
              <Watchlist movies={this.props.filteredMoviesWhatchList}/>
              <Watched movies={this.props.filteredMoviesWhatchedList}/>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      filteredMoviesWhatchedList:state.filteredMoviesWhatchedList,
      filteredMoviesWhatchList:state.filteredMoviesWhatchList
    }
};

export default  connect(mapStateToProps,null)(App);

