import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <Carousel>
        <Carousel.Item>
            <img className='d-block w-100' src={'/img/Banner.jpg'} alt=''/>
        </Carousel.Item>
        <Carousel.Item>
            <img className='d-block w-100' src={'/img/Banner4.jpg'} alt=''/>
        </Carousel.Item>
        <Carousel.Item>
            <img className='d-block w-100' src={'/img/Banner3.jpg'} alt=''/>
        </Carousel.Item>
    </Carousel>
  );
}

export default Banner;