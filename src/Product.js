import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product(props) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is the basket - ", basket);

  const addToBasket = () => {
    //dispatch item to data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };

  const removeFromBasket = () => {
    //dispatch item to data layer
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{props.title}</p>
        <p className="product__price">
          <small>£</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
        </div>
      </div>

      <img src={props.image} alt="" />

      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;
