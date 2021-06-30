import React from "react";
import NavigationBar from "./NavigationBar.jsx";
import laptop from "../../../laptop.png";
import "../styles/styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <NavigationBar />
        <div className="frontImg">Hello</div>
      </div>
    );
  }
}

export default App;
