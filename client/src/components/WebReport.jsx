// You can live edit this code below the import statements
import React from "react";
import Pulse from "react-reveal/Pulse";
import report from "../../../report.jpg";

class WebReport extends React.Component {
  render() {
    return (
      <div className="imgHolder">
        <Pulse>
          <img src={report} className="imgHolder" />
        </Pulse>
      </div>
    );
  }
}

export default WebReport;
