import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import eddyImg from '../assets/eddy.jpg';
import hyundaiImg from '../assets/hyundai.jpg';
import pexelsImg from '../assets/pexels.jpg';
import stayhereforuImg from '../assets/stayhereforu.jpg';


export default class CarouselBox extends Component {

  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={eddyImg}
            alt="addy"
           />
           <Carousel.Caption>
             <h3>eddy Image</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
           </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={hyundaiImg}
            alt="addy"
           />
           <Carousel.Caption>
             <h3>hyundai Image</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
           </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={pexelsImg}
            alt="addy"
           />
           <Carousel.Caption>
             <h3>pexels Image</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
           </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={stayhereforuImg}
            alt="addy"
           />
           <Carousel.Caption>
             <h3>stayhereforu Image</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
           </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
