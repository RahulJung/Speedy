// You can live edit this code below the import statements
import React from "react";
import Fade from "react-reveal/Fade";

class FadeMessage extends React.Component {
  render() {
    return (
      <div className="message">
        <Fade bottom cascade>
          <div>
            <h4>Quality is about speed, too!</h4>
            <h1>Free Website</h1>
            <h1>Speed Grader</h1>
          </div>
        </Fade>
      </div>
    );
  }
}

export default FadeMessage;
