import { Component } from "react";

class UserChild extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " child CONSTRUCTOR");
  }

  componentDidMount() {
    console.log(this.props.name + " child componentDidMount");
  }

  render() {
    console.log(this.props.name + " child render");

    return <h1>User Child Class</h1>;
  }
}

export default UserChild;
