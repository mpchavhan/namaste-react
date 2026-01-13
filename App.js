import React from "react";
import ReactDOM from "react-dom/client";

// Header
// Logo
// Nav
// Items
// Body
// - Search
// - Resto Container
// - Resto CArd
//   - Image
//   - Name of res, star rating , cuisine , delivery time
// - Footer
// - Copyright
//  - Links
//   - Adress
//   - Contact

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://media.istockphoto.com/id/2151881370/photo/raw-vegetables-and-fruit-thats-good-for-gut-health-microbiome.jpg?s=1024x1024&w=is&k=20&c=z-0CQiodp_n7uIoOiiDEVvjAGlL3mBU8u3apzY8-PfE="
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurentCard = ({resName,cuisine,rating,deliveryTime}) => {

  return (
    <div className="rest-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="rest-logo"
        alt="res-logo"
        src="https://media.istockphoto.com/id/2151881370/photo/raw-vegetables-and-fruit-thats-good-for-gut-health-microbiome.jpg?s=1024x1024&w=is&k=20&c=z-0CQiodp_n7uIoOiiDEVvjAGlL3mBU8u3apzY8-PfE="
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>⭐ {rating} </h4>
      <h4>{deliveryTime} </h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest-container">
        <RestaurentCard 
        resName="Meghana Foods" 
        cuisine="Biryani, North Indian" 
        rating="4.5"
        />
        <RestaurentCard 
        resName="KFC" 
        cuisine="Fast Food" 
        rating="4.2"
        />

      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
