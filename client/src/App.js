import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/react-vis/dist/style.css";
import { XYPlot, VerticalBarSeries, LineSeries, MarkSeries } from "react-vis";

function App() {
  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 5 }
  ];
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

        <main role="main" className="inner cover">
          <h1 className="cover-heading">React with Bootstrap</h1>
          <p className="lead">
            Test of React-JS on a Bootstrap Jumbotron with React-vis Data to
            boot.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <XYPlot height={200} width={200}>
              <VerticalBarSeries data={data} />
            </XYPlot>
            <XYPlot height={200} width={200}>
              <LineSeries data={data} />
            </XYPlot>
            <XYPlot height={200} width={200}>
              <MarkSeries data={data} />
            </XYPlot>
          </div>
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

export default App;
