import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Slider = () => {
    return ( 
        <AwesomeSlider>
        <div data-src="/images/restaurant/our-res-1.jpg" />
        <div data-src="/images/restaurant/our-res-2.jpg" />
        <div data-src="/images/gallery-img-1.jpeg" />
      </AwesomeSlider>
     );
}
 
export default Slider;