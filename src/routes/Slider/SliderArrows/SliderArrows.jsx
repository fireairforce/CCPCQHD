import React, { Component } from 'react';
import styles from '../Slider.scss'

export default class SliderArrows extends Component {
  constructor(props) {
    super(props);
  }

  handleArrowClick(option) {
    this.props.turn(option);
  }

  render() {
    return (
      <div className={styles.sliderArrowsWrap}>
        <span
          className={styles.sliderArrowRight} 
          onClick={this.handleArrowClick.bind(this, -1)}>
          &lt;
        </span>
        <span
          className={styles.sliderArrowLeft}
          onClick={this.handleArrowClick.bind(this, 1)}>
          &gt;
        </span>
      </div>
    )
  }
}
