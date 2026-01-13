import React, { Component } from 'react';
import classNames from 'classnames';

import '../main.css';


class SellThroughBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var barClass = classNames('sell-through-bar', this.props.className, {
      'pulse red-bg': this.props.itemsSold > this.props.lowQuantityMax
    });

    var barContainerClass = classNames('sell-through-bar-container', this.props.className, {
      'red-border': this.props.itemsSold > this.props.lowQuantityMax
    });

    var itemCountClass = classNames('sell-through-count', this.props.className, {
      'red': this.props.itemsSold > this.props.lowQuantityMax
    });

    return (
      <div className="container">
        <div className="sell-through-container">
          <p className={itemCountClass}>仅剩{this.props.itemsSold}件</p>
          <div className={barContainerClass}>
            <div className = {barClass} style={{width: this.props.itemsSold + '%'}}></div>
          </div>
        </div>
      </div>
    );
  }

}

export default SellThroughBar;