import React from 'react'
import Slider from "react-slick"
import '../styles/HomePageCarousel.css'

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <i
            className='fa-solid fa-arrow-right slider__rightArrow'
            onClick={onClick}
        />
    )
  }

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <i
            className='fa-solid fa-arrow-left slider__leftArrow'
            onClick={onClick}
        />
    )
} 

export default function HomePageCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }

    return (
        <div className='container carousel-container'>
            <Slider className='carousel' {...settings}>
                <div className='carousel__item'>
                    <img src="/1-min.jpg" alt="" />
                </div>
                <div className='carousel__item'>
                    <img src="/2.jpg" alt="" />
                </div>
                <div className='carousel__item'>
                    <img src="/3.jpg" alt="" />
                </div>
            </Slider>
        </div>
    )
}
