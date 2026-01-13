import React, { Component } from 'react';
import classNames from 'classnames';

import '../main.css';


class PriceDrop extends Component {

  constructor(props) {
    super(props);
    this.defaultDelay = 135;
    this.newestPriceRef = React.createRef();
  }

  componentDidMount() {
    // we need the width of the new price element to determine
    // the Y position for the old price to animate to.
    var amountToSlideRight =
      window.getComputedStyle(this.newestPriceRef.current).width;
    document.documentElement.style.setProperty('--initPriceWidth', amountToSlideRight);
    // now find the old price and add the animation class
    var container  = document.getElementById('initialPriceContainer')
    container.classList.add("initial-price-container");

  }

  render() {
    return (
      <div>
        <div id="price-drop" className="price-drop">
        <p className="price new" ref={this.newestPriceRef} style={{animationDelay: this.calculateDelay(5)}}>{this.props.newPrice}</p>
          <div id="initialPriceContainer" style={{animationDelay: this.calculateDelay(5)}}>
            <p className="price initial">{this.props.initialPrice}</p>
            <div className="stripes">
              <div className="stripe" style={{animationDelay: this.calculateDelay(1)}}></div>
              <div className="stripe" style={{animationDelay: this.calculateDelay(2)}}></div>
              <div className="stripe" style={{animationDelay: this.calculateDelay(3)}}></div>
              <div className="stripe" style={{animationDelay: this.calculateDelay(4)}}></div>
            </div>
          </div>
          </div>
      </div>
    );
  }

  calculateDelay = (order) => {
    var wait = this.props.animDelay ? this.props.animDelay : 0;
    return ((this.defaultDelay*order) + wait) + 'ms';
  }
}

export default PriceDrop;