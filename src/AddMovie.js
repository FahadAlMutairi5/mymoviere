import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import * as indexAction from '././store/actions/index';


class AddMovie extends Component {
  state = {
    query: "",
  };
  handleChange = event => {
    this.setState({query:event.target.value})
  };
  submet = () => {
    if (this.state.query){
      this.props.addMovie(this.state.query);
      this.setState({query:""});
    }
  };
  render() {
    return (
              <div className="col-12 col-sm-12 col-md-12 col-xl-12 mt-5">
                  <div className="form-group col-lg-4 col-12 mx-auto">
                      <div className="input-group my-3">
                        <input
                          className="form-control"
                          type="text"
                          value={this.state.query}
                          onChange={this.handleChange}
                          placeholder="Enter Title"
                        />
                        <div onClick={() => this.submet() } className="input-group-append">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={faPlusSquare} />
                          </span>
                        </div>
                      </div>
                  </div>
                
                </div>
                  
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addMovie:(title) => dispatch(indexAction.AddMovie(title)),  
  };
};

export default connect(null,mapDispatchToProps)(AddMovie);
