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
      <div>
        <h1>About Us</h1>
        <h3>Revisiting Namaste React Web Series.</h3>
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

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h3>Revisiting Namaste React Web Series.</h3>
//       {/* <User name={"Gaurav"} location={"Belgaum"} contact={"Gaurav_Barde_10"} /> */}
//       <UserClass
//         name={"Gaurav_Class"}
//         location={"Belgaum_Class"}
//         contact={"Gaurav_Barde_10_Class"}
//       />
//     </div>
//   );
// };

export default About;
