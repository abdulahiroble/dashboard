import React, { Component } from "react";
import Widget from "../components/Widget";
import "../styles/Widget.css";

// Import widgets being used in this component

// Add in styles
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Widget />
      </div>
    );
  }
}

export default App;
