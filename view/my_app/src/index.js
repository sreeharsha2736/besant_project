import React from "react";
import ReactDOM from "react-dom";
import Signup from "./components/Signup";
class App extends React.Component {
  render() {
    return (
      <div>
        HELLO WORLD
        <Signup />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
