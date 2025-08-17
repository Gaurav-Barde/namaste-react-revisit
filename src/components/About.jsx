import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="py-10 px-5">
        <h1 className="text-2xl font-bold py-2">About Us</h1>
        <h3 className="text-lg font-bold py-2">
          Revisiting Namaste React Web Series.
        </h3>
        <UserClass
          name={"First Child"}
          location={"Belgaum_Class"}
          contact={"Gaurav_Barde_10_Class"}
        />
        <UserClass
          name={"Second Child"}
          location={"Belgaum_Class"}
          contact={"Gaurav_Barde_10_Class"}
        />
      </div>
    );
  }
}

export default About;
