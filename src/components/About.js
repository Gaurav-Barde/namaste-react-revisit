import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h3>Revisiting Namaste React Web Series.</h3>
      <User name={"Gaurav"} location={"Belgaum"} contact={"Gaurav_Barde_10"} />
      <UserClass
        name={"Gaurav_Class"}
        location={"Belgaum_Class"}
        contact={"Gaurav_Barde_10_Class"}
      />
    </div>
  );
};

export default About;
