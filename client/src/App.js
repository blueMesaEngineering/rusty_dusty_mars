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
    const { datapoints } = this.state;

    return this.state.datapoints.map(datapoint => (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <XYPlot height={200} width={200}>
          <VerticalBarSeries data={datapoints} />
        </XYPlot>
        <XYPlot height={200} width={200}>
          <LineSeries data={datapoints} />
        </XYPlot>
        <XYPlot height={200} width={200}>
          <MarkSeries data={datapoints} />
        </XYPlot>
      </div>
    ));
  }

  render() {
    const { datapoints } = this.state;

    return (
      <div className="App">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header className="masthead mb-auto">
            <div className="inner">
              <h3 className="masthead-brand">Cover</h3>
              <nav className="nav nav-masthead justify-content-center">
                <a className="nav-link active" href="#">
                  Home
                </a>
                <a className="nav-link" href="#">
                  Features
                </a>
                <a className="nav-link" href="#">
                  Contact
                </a>
              </nav>
            </div>
          </header>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <XYPlot height={200} width={200}>
              <VerticalBarSeries data={datapoints} />
            </XYPlot>
            <XYPlot height={200} width={200}>
              <LineSeries data={datapoints} />
            </XYPlot>
            <XYPlot height={200} width={200}>
              <MarkSeries data={datapoints} />
            </XYPlot>
          </div>
          <main role="main" className="inner cover">
            <h1 className="cover-heading">React with Bootstrap</h1>
            <p className="lead">
              Test of React-JS on a Bootstrap Jumbotron with React-vis Data to
              boot.
            </p>

            <p className="lead">
              <a href="#" className="btn btn-lg btn-secondary">
                Learn more
              </a>
            </p>
          </main>

          <footer className="mastfoot mt-auto">
            <div className="inner">
              <p>
                <a href="https://getbootstrap.com/">Bootstrap</a>.
              </p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
