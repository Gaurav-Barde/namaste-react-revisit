import { createRoot } from "react-dom/client";

/* 
-AppLayout
  -Header
    -Logo
    -Nav Links
      -Home
      -About
      -Contact
      -Cart
  -Body
    -Search
      -Input
      -Button
    -Restaurant Container
      -ResCard
        -Res Image
        -Restaurant Name, Star Rating, Cuisine, Delivery Time
  -Footer
    -Copyright
    -Links
    -Address
    -Contact
*/

/* 
Config Driven UI Example

const config = {
  formConfig: [
    { label: "Name", type: "text", name: "name" },
    { label: "Mobile Number", type: "number", name: "mobile" },
  ],
};

const Form = ({ formConfig }) => {
  return formConfig.map((formdata, i) => {
    return (
      <div key={i}>
        <label htmlFor={formdata.name}>{formdata.label}</label>
        <input type={formdata.type} name={formdata.name} id={formdata.name} />
      </div>
    );
  });
};


      <Form formConfig={config.formConfig} />
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          alt="Logo"
          className="logo"
          src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
        />
      </div>
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Search = () => {
  return <div className="search-container">Search</div>;
};

const ResCard = () => {
  return (
    <div className="res-card">
      <img
        alt="res logo"
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1d578bb732e03c6f591790eb7d2d88e2"
      />
      <div className="res-content">
        <h3>Meghana Foods</h3>
        <h4>Biryani, North Indian, Asian</h4>
        <h4>❇️ 4.4 stars</h4>
        <h4>38 minutes</h4>
      </div>
    </div>
  );
};

const RestaurantCardContainer = () => {
  return (
    <div className="res-container">
      <ResCard />
      <ResCard />
      <ResCard />
      <ResCard />
      <ResCard />
      <ResCard />
      <ResCard />
      <ResCard />
      <ResCard />
      <ResCard />
      <ResCard />
      <ResCard />
      <ResCard />
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <Search />
      <RestaurantCardContainer />
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<AppLayout />);
