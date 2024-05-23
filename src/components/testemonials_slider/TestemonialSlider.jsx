import React, { useRef } from "react";
import Slider from "react-slick";

function TestemonialSlider() {
  let sliderRef = useRef(null);

  const settings = {
    infinite: true,
    draggable: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500
  };

  React.useEffect(() => {
    sliderRef.slickPlay();
  }, []);

  return (
    <div className="slider-container">
      <Slider ref={slider => (sliderRef = slider)} {...settings}>
        <div className="slider-card">
          <div className="card-caption">
            <blockquote>
            "We are very grateful for the superb cooperation with LOKKEE STUDIOS. We at LITTLE ASHÉ felt that we were being taken care of professionally. With Kilian's expertise, we were able to achieve exactly the result of our website that we had imagined. We can wholeheartedly recommend his work and look forward to more great projects."
            </blockquote>
          </div>
          <div className="author">
            <div className="avatar">

            </div>
            <p>
              Peer Joeressen
              Co-Founder of Aviana Development
            </p>
          </div>
        </div>
        <div className="slider-card">
          <div className="card-caption">
            <blockquote>
            "We are very grateful for the superb cooperation with LOKKEE STUDIOS. We at LITTLE ASHÉ felt that we were being taken care of professionally. With Kilian's expertise, we were able to achieve exactly the result of our website that we had imagined. We can wholeheartedly recommend his work and look forward to more great projects."
            </blockquote>
          </div>
          <div className="author">
            <div className="avatar">
              
            </div>
            <p>
              Peer Joeressen
              Co-Founder of Aviana Development
            </p>
          </div>
        </div>
        <div className="slider-card">
          <div className="card-caption">
            <blockquote>
            "We are very grateful for the superb cooperation with LOKKEE STUDIOS. We at LITTLE ASHÉ felt that we were being taken care of professionally. With Kilian's expertise, we were able to achieve exactly the result of our website that we had imagined. We can wholeheartedly recommend his work and look forward to more great projects."
            </blockquote>
          </div>
          <div className="author">
            <div className="avatar">
              
            </div>
            <p>
              Peer Joeressen
              Co-Founder of Aviana Development
            </p>
          </div>
        </div>
        <div className="slider-card">
          <div className="card-caption">
            <blockquote>
            "We are very grateful for the superb cooperation with LOKKEE STUDIOS. We at LITTLE ASHÉ felt that we were being taken care of professionally. With Kilian's expertise, we were able to achieve exactly the result of our website that we had imagined. We can wholeheartedly recommend his work and look forward to more great projects."
            </blockquote>
          </div>
          <div className="author">
            <div className="avatar">
              
            </div>
            <p>
              Peer Joeressen
              Co-Founder of Aviana Development
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default TestemonialSlider;
