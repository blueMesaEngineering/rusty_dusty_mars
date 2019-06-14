import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap/Navbar";
import logo from "./logo.svg";
import "./App.css";
import "../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  LineSeries,
  MarkSeries
} from "react-vis";

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

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <XYPlot height={200} width={200}>
          <VerticalBarSeries data={datapoints} />
          <VerticalGridLines />
          <HorizontalGridLines />
        </XYPlot>
        <XYPlot height={200} width={200}>
          <LineSeries data={datapoints} />
        </XYPlot>
        <XYPlot height={200} width={200}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <MarkSeries data={datapoints} />
        </XYPlot>
      </div>
    );
  }

  renderNavbar() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

  renderHeader() {
    return (
      <header>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a class="navbar-brand" href="#">
            Fixed navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }

  renderFooter() {
    return (
      <footer class="footer mt-auto py-3">
        <div class="container">
          <span class="text-muted">Place sticky footer content here.</span>
        </div>
      </footer>
    );
  }

  render() {
    const { datapoints } = this.state;

    return (
      <div className="App">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          {this.renderHeader()}
          <main role="main" class="flex-shrink-0">
            <h1 class="mt-5">React with Bootstrap and React-Vis</h1>
            {this.renderDatapoints()}
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
          {this.renderFooter()}
        </div>
      </div>
    );
  }
}

export default App;
