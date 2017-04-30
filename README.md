# state-component

[![Greenkeeper badge](https://badges.greenkeeper.io/viankakrisna/state-component.svg)](https://greenkeeper.io/)
A simple state management library to access and update React component state from other components.

Usage:

`npm install state-component`
```
import React from "react";
import ReactDOM from "react-dom";
import { setStateContainer, getState, setState } from "state-component";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    setStateContainer(this);
    this.state = {
      counter: 0
    };
  }
  render() {
    return <Counter />;
  }
}

function Counter() {
  return (
    <div>
      <h1>{getState().counter}</h1>
      <button onClick={() => setState({ counter: getState().counter + 1 })}>
        Increment
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

```
