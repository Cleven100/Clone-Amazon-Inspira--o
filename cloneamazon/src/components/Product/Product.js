import React from 'react';
import "./Product.css";

function Product({id,title, image, price, rating}) {
  return (
    <div>
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                  <small>$</small>
                  {price}</p>
                <div className="product__rating">
                ⭐⭐⭐⭐⭐
                </div>
                <img src={image} />
                <button>Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product