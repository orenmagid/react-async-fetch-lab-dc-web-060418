import React from "react";

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleInSpace: []
    };
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(res => res.json())
      .then(data => console.log(data));
  }

  render() {
    return <div>MyComponent</div>;
  }
}
