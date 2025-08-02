import React from "react";

class UserClass extends React.Component {
  render() {
    return (
      <div className="user-card">
        <h4>Name: {this.props.name}</h4>
        <h4>Location: {this.props.location}</h4>
        <h4>Contact: {this.props.contact}</h4>
      </div>
    );
  }
}

export default UserClass;
