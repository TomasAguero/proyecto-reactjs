import React from 'react';
import 'animate.css';
import './CartWidget.css'; // Importa el archivo CSS personalizado

const CartWidget = () => {
  return (
    <div className="cart-widget position-relative">
      <i className="fas fa-shopping-cart fa-2x"></i>
      <span className="badge badge-pill badge-danger animate__animated animate__pulse">5</span>
    </div>
  );
};

export default CartWidget;


