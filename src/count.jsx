import React, { Component } from "react";
import { Button} from "@mui/material";

export default class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      status: "",
    };
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1, status: "INCREMENTED-> " });
    console.log(this.props.label);
  }

  resetCount() {
    this.setState({ count: 0, status: "VALUE RESET-> " });
  }

  decrementCount() {
    this.setState({
      count: this.state.count > 0 ? this.state.count - 1 : 0,
      status: "DECREMENTED-> ",
    });
  }
 
  render() {
    return (
      <div>
        <h2>Updating Counter using Class Component and state</h2>
        <div className="counter">
          <h2>{[this.state.status, this.state.count]}</h2>
        </div>
        <div className="btn-container">
          <Button
            variant="outlined"
            className="btn"
            onClick={() => this.incrementCount()}
          >
            INCREMENT
          </Button>
          <button className="btn-2" onClick={() => this.resetCount()}>
            RESET
          </button>
          <button className="btn-3" onClick={() => this.decrementCount()}>
            DECREMENT
          </button>
        </div>
        <h6>{this.props.label}</h6>
      </div>
    );
  }
}
