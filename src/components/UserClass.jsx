import React from "react";
import UserChild from "./UserChildClass";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 1,
    };
    console.log(this.props.name + " Constructor");
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log("Interval in componentDidMount");
    }, 1000);
  }

  componentDidUpdate() {
    console.log(this.props.name + " componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    console.log(this.props.name + " render");
    const { count1 } = this.state;

    return (
      <div className="user-card">
        <h4>Name: {this.props.name}</h4>
        <h4>Location: {this.props.location}</h4>
        <h4>Contact: {this.props.contact}</h4>
        <h5>{this.state.count1}</h5>
        <button onClick={() => this.setState({ count1: count1 + 1 })}>
          Increment Count1
        </button>
        <h5>{this.state.count2}</h5>
        <UserChild name={this.props.name} />
      </div>
    );
  }
}

export default UserClass;
