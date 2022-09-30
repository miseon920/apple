import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";

const Store = ({ Stit, product }) => {
  const [pnum, setPnum] = useState();
  const [hover, onHover] = useState(false);
  const num = 1;
  const PS = useRef(null);

  return (
    <section className="store">
      <div className="Stit inner">
        <h2>{Stit[num].tit}</h2>
        <p>{Stit[num].des}</p>
      </div>
      <div className="content">
        <Swiper
          loop={true}
          onSlideChange={(swiper) => setPnum(swiper.realIndex)}
          slidesPerView={3}
          ref={PS}
          className="inner"
        >
          {product.map((item, idx) => {
            return (
              <SwiperSlide key={item.id}>
                <Link
                  to=""
                  onMouseEnter={() => {
                    setPnum(idx);
                    onHover(true);
                  }}
                  onMouseLeave={() => {
                    setPnum(idx);
                    onHover(false);
                  }}
                >
                  <div className={`p_img`}>
                    <img
                      src={`${process.env.PUBLIC_URL}/img/con0${item.id}_${
                        pnum === idx && hover ? "on" : "off"
                      }.jpg`}
                      alt=""
                    />
                  </div>
                  <div className="txt">
                    <div className="tit">{item.name}</div>
                    <div className="des">
                      &#8361; {item.price.toLocaleString()} 원
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="slideNum">
          <ul>
            <li className="arrow" onClick={() => PS.current.swiper.slidePrev()}>
              <i className="xi-arrow-left"></i>
            </li>
            <li className="arrow" onClick={() => PS.current.swiper.slideNext()}>
              <i className="xi-arrow-right"></i>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Store;
