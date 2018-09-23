import React from "react";
import Nav from "../components/Nav";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructing");
    this.state = { time: new Date().toLocaleTimeString() };
  }

  componentDidMount() {
    console.log("done mounting");
    this.timeId = setInterval(() => {
      const newTime = new Date().toLocaleTimeString();
      this.setState({ time: newTime });
    }, 1000);
    console.log(this.state.time);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  render() {
    //console.log("rendering");
    return (
      <div>
        <Nav />
        <div className="container">
            <div class="clock">
                  {this.state.time}
                </div>
            </div>
      </div>
    );
  }
}

export default Clock;
