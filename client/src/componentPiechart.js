import React, { Math, Component } from "react";
import "./App.css";
import "../node_modules/react-vis/dist/style.css";
import { XYPlot, ArcSeries, XAxis, YAxis } from "react-vis";

class Piechart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      piecharts: []
    };
  }

  componentDidMount() {
    fetch("/api/piecharts")
      .then(response => response.json())
      .then(json => this.setState({ piecharts: json }))
      .catch(error => console.log(error));
  }

  renderPiecharts() {
    const { piecharts } = this.state;

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
}

export default Piechart;
