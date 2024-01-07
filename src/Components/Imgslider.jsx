import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom";

function Imgslider(props) {
  let SliderFunc = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true
  };
  return (
    
    <Slider {...SliderFunc} className="Slick">
      
      <div className="posterimg">
      <a>
        <img src="https://cdn.vox-cdn.com/thumbor/kLhMHqhPRHYV2SPs-qOgIw_uO6I=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/63304028/surprise_marvel_releases_a_new_full_trailer_and_poster_for_avengers_endgame_social.0.jpg" alt="photo"/>
      </a>
      </div>
      <div className="posterimg">
      <a>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1t8hCxoMveq4PqGbUQVwi2yFXA-cv19Wvg&usqp=CAU" alt="photo"/>
      </a>
      </div>
      
      <div className="posterimg">
      <a>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJMQr29Ia_YozfiB9n-_F21tRc5iLPD2ZVw&usqp=CAU" alt="photo"/>
      </a>
      </div>
       

      <div className="posterimg">
      <a>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ckGT6VOa4VPcn08VSop_tYDotqAvqYHYkw&usqp=CAU" alt="photo"/>
      </a>
      </div>

      <div className="posterimg">
      <a>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_a0zPJona7zMoSKUYteW3L5OOU0pyh9Dakw&usqp=CAU" alt="photo"/>
      </a>
      </div>

      

      
    </Slider>
   
  );
}

export default Imgslider;