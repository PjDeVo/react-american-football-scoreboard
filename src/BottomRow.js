import React, { useState } from "react";
import "./App.css";
import { render } from "react-dom";

class BottomRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quarter: 1
    };
    this.changeQuarter = this.changeQuarter.bind(this);
  }
  changeQuarter() {
    // console.log(this.state.quarter);
    if (this.state.quarter < 4) {
      this.setState(state => ({
        quarter: this.state.quarter + 1
      }));
    } else if (this.state.quarter >= 4) {
      this.setState(state => ({
        quarter: 1
      }));
    }
  }

  render() {
    return (
      <div className="bottomRow">
        <div className="down">
          <h3 className="down__title">Down</h3>
          <div className="down__value">3</div>
        </div>
        <div className="toGo">
          <h3 className="toGo__title">To Go</h3>
          <div className="toGo__value">7</div>
        </div>
        <div className="ballOn">
          <h3 className="ballOn__title">Ball on</h3>
          <div className="ballOn__value">21</div>
        </div>
        <div className="quarter">
          <h3 className="quarter__title">Quarter</h3>
          <div className="quarter__value">{this.state.quarter}</div>
        </div>

        <button onClick={this.changeQuarter}> Change Quarter</button>
      </div>
    );
  }
}

export default BottomRow;
