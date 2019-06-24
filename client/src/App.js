import React, { Math, Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap/Navbar";
import "./App.css";
import "../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  ArcSeries,
  XAxis,
  YAxis,
  LineSeries,
  MarkSeries
} from "react-vis";
import Piechart from "./componentPiechart";

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
    var Piecharts = new Piechart();

    const myData = [
      {
        angle0: 0,
        angle: 3.1415926 / 4,
        opacity: 0.2,
        radius: 10,
        radius0: 60
      },
      {
        angle0: 3.1415926 / 4,
        angle: (2 * 3.1415926) / 4,
        opacity: 0.4,
        radius: 30,
        radius0: 50
      },
      {
        angle0: (2 * 3.1415926) / 4,
        angle: (3 * 3.1415926) / 4,
        opacity: 0.6,
        radius: 20,
        radius0: 75
      },
      {
        angle0: (3 * 3.1415926) / 4,
        angle: (4 * 3.1415926) / 4,
        opacity: 0.8,
        radius: 10,
        radius0: 30
      },
      {
        angle0: (4 * 3.1415926) / 4,
        angle: (5 * 3.1415926) / 4,
        opacity: 1,
        radius: 10,
        radius0: 20
      },
      { angle0: 0, angle: (5 * 3.1415926) / 4, radius: 0, radius0: 5 }
    ];

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <XYPlot height={225} width={225}>
          <LineSeries data={datapoints} />
        </XYPlot>
        <XYPlot height={225} width={225}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <MarkSeries data={datapoints} />
        </XYPlot>
        {Piecharts.renderPiecharts()}
        <XYPlot xDomain={[-5, 5]} yDomain={[-5, 5]} width={225} height={225}>
          <ArcSeries
            animation
            radiusType={"literal"}
            center={{ x: 0, y: 0 }}
            data={myData}
            colorType={"literal"}
          />
          <XAxis />
          <YAxis />
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
          <span class="text-muted">Sticky footer.</span>
        </div>
      </footer>
    );
  }

  render() {
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
