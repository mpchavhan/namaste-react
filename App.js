import React from "react";
import ReactDOM from "react-dom/client";

//React Elemnt
const Title = () => (
  <h1 className="head" tabIndex="5">
    Namste React using JSX
  </h1>
);

//React Component

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">This is Functional component2</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
