import React, { Component } from "react";

class VidSearch extends Component {
  state = { text: "" };
  onInputSearch = (evt) => {
    evt.preventDefault();
    this.props.onSearch(this.state.text);
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 my-3">
            <form onSubmit={this.onInputSearch}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  value={this.state.text}
                  placeholder="Search Keyword"
                  onChange={(evt) => this.setState({ text: evt.target.value })}
                />
              </div>
            </form>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    );
  }
}

export default VidSearch;
