import React, { Component } from 'react';
import { number } from '@storybook/addon-knobs/react';
import classNames from 'classnames';
import cartIcon from '../assets/icn_cart.svg';

import '../main.css';

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    var stripes  = document.getElementsByClassName('cart-stripe');
    var i = stripes.length;
    var circle = document.getElementById('cart-circle');

    if (this.props.itemCount != '0'
        && this.props.itemCount !== null
        && (this.props.itemCount !== prevProps.itemCount)) {

      while(i--) {
        stripes[i].style.animation = 'none';
        stripes[i].offsetHeight;
        stripes[i].style.animation = null; 
      }

      circle.style.animation = 'none';
      circle.offsetHeight;
      circle.style.animation = "scale-up-bounce calc(var(--duration)*1.25) var(--ebay-bounce-ease) .6s both"; 
  }
}

  render() {

    return (
      <div className="container">
        <div id="cart" className="cart">
          <div id="cart-circle" className="cart-circle">{this.props.itemCount}</div>
            <img src={cartIcon} className="cart-icon"/>
            <div className="cart-clipping-mask">
              <div className="cart-stripe"></div>
              <div className="cart-stripe"></div>
              <div className="cart-stripe"></div>
            </div>
          </div>
      </div>
    );
  }
}

export default Cart;