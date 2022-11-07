import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const Mainvisual = () => {
  const Slide = [
    {
      id: 1,
      tit: "한계에 도전하는 당신을 위해",
      des: "당신에게 알맞은 Apple Watch는?",
      link: "/sub01",
    },
    {
      id: 2,
      tit: "가볍게만 볼 수 없는 이유",
      des: "당신에게 맞는 Mac은?",
      link: "/sub02",
    },
    {
      id: 3,
      tit: "기기에 바로 연결되는 매혹적인 경험",
      des: "당신에게 알맞은 AirPods은?",
      link: "/sub03",
    },
  ];
  const [num, SetNum] = useState();
  const MS = useRef();

  return (
    <section className="Mainvisual">
      <Swiper
        loop={true}
        onSlideChange={(swiper) => SetNum(swiper.realIndex)}
        loopedSlides={1}
        //onSwiper={(swiper) => console.log(swiper)}
        ref={MS}
      >
        {Slide.map((slide, idx) => (
          <SwiperSlide
            key={slide.id}
            className={`item${slide.id} ${num === idx ? "on" : ""}`}
          >
            <div className="slide_box">
              <div className="inner">
                <div className="con_left">
                  <h2>{slide.tit}</h2>
                  <p>{slide.des}</p>
                  <Link to={slide.link}>
                    <span>MORE</span>
                  </Link>
                </div>
                <div className="con_right">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/main0${slide.id}.png`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slideNum inner">
        <ul>
          <li className="arrow" onClick={() => MS.current.swiper.slidePrev()}>
            <i className="xi-arrow-left"></i>
          </li>
          <li>
            0{num + 1} / 0{Slide.length}
          </li>
          <li className="arrow" onClick={() => MS.current.swiper.slideNext()}>
            <i className="xi-arrow-right"></i>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Mainvisual;
