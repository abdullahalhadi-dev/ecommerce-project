import React from "react";
import "./Products.style.css";
import image1 from "../../../src/images/1.jpg";
import image4 from "../../../src/images/4.jpg";
import image5 from "../../../src/images/5.jpg";
import image7 from "../../../src/images/7.jpg";

const Products = () => {
  return (
    <div className="product-area">
      <div className="container">
        <div className="products-heading">
          <h2>Products</h2>
        </div>

        <div className="product-listing">
          <div className="product-1">
            <div className="product-image">
              <img src={image1} />
            </div>
            <div className="product-text">
              <h4>Lorem ipsum accessories one</h4>
              <span>€2.79</span>
            </div>
          </div>

          <div className="product-2">
            <div className="product-image">
              <img src={image4} />
            </div>
            <div className="product-text">
              <h4>Lorem ipsum accessories one</h4>
              <span>€2.79</span>
            </div>
          </div>

          <div className="product-3">
            <div className="product-image">
              <img src={image5} />
            </div>
            <div className="product-text">
              <h4>Lorem ipsum accessories one</h4>
              <span>€2.79</span>
            </div>
          </div>

          <div className="product-4">
            <div className="product-image">
              <img src={image7} />
            </div>
            <div className="product-text">
              <h4>Lorem ipsum accessories one</h4>
              <span>€2.79</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
