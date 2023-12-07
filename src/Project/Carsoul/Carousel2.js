// Inside your MultipleItemsCarousel component
import React ,{useContext}from 'react';
import Slider from 'react-slick';
import { Store1 } from '../ContextAPI';
import './Carsouel2.css';

const MultipleItemsCarousel = () => {
  const [contextData] = useContext(Store1);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200, 
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992, 
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div>
        <p className='bestSeller' style={{marginTop:'80px'}}>Special Deals</p>
        <hr className='bestSellerHr'></hr>
    <div className="slick-slider">
      <Slider {...settings}>
      {contextData.map((item, index) => (
            item ? ( 
              <div key={index} className="slick-slide">
                <img src={item.bollywoodimg} alt={`item-${index}`} />
                <p>{item.name}</p>
                <p style={{ marginTop: "-10px" }}>{item.rating}<span style={{ color: 'yellow' }}>{item.rating_stars}</span></p>
              </div>
            ) : null
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default MultipleItemsCarousel;
