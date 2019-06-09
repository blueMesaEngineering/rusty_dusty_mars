import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/react-vis/dist/style.css";
import { XYPlot, VerticalBarSeries, LineSeries, MarkSeries } from "react-vis";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datapoints: []
    };
  }

  componentDidMount() {
    fetch("/api/datapoints")
      .then(response => response.json())
      .then(json => this.setState({ datapoints: json }))
      .catch(error => console.log(error));
  }

  renderDatapoints() {
    return this.state.datapoints.map(datapoint => (
      <h1>
        {datapoint.x}, {datapoint.y}
      </h1>
    ));
  }

  render() {
    return <div className="App">{this.renderDatapoints()}</div>;
  }
}

export default App;
