import React from "react";
import "./Home.css"; // Import the CSS file
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS


const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-heading">
        Simple recipes made for real, actual, everyday life.
      </h1>
      <div className="image-gallery">
        <img
          src="https://pinchofyum.com/cdn-cgi/image/width=360,height=514,fit=crop/wp-content/uploads/Ricotta-Meatballs-1.jpg"
          alt="Ricotta Meatballs"
          className="gallery-image"
        />
        <img
          src="https://pinchofyum.com/cdn-cgi/image/width=360,height=514,fit=crop/wp-content/uploads/Spicy-Short-Rib-Noodle-Soup-3.jpg"
          alt="Spicy Short Rib Noodle Soup"
          className="gallery-image"
        />
        <img
          src="https://pinchofyum.com/cdn-cgi/image/width=360,height=514,fit=crop/wp-content/uploads/Bang-Bang-Salmon-with-Rice-and-Cucumber.jpg"
          alt="Bang Bang Salmon"
          className="gallery-image"
        />
        <img
          src="https://pinchofyum.com/cdn-cgi/image/width=360,height=514,fit=crop/wp-content/uploads/Gingerbread-Cookies-3.jpg"
          alt="Gingerbread Cookies"
          className="gallery-image"
        />
      </div>
    </div>
  );
};

export default Home;

