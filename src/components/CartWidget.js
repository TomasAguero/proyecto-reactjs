import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css"; // Importa el archivo CSS

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
      <span className="badge badge-pill badge-danger">5</span>
    </div>
  );
};

export default CartWidget;
