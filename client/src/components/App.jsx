import React from "react";
import NavigationBar from "./NavigationBar.jsx";
import Form from "../components/Form.jsx";
import Description from "./Description.jsx";
import "../styles/styles.css";
import FadeMessage from "./FadeMessage.jsx";
import Slider from "./Slider.jsx";
import { SliderData } from "./SliderData.jsx";
import Footer from "./Footer.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="navBar">
          <NavigationBar />
        </div>
        <div className="frontImg">
          <FadeMessage />
        </div>
        <div className="formContainer">
          <Description />
          <Form />
        </div>
        <Slider slides={SliderData} />
        <Footer />
      </div>
    );
  }
}

export default App;
