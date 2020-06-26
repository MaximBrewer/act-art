import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

export default function HomeAnnounce() {
    const [state, setState] = useState({
        slideIndex: 0,
        slidesTotal: 0
    });
    const refPicture = useRef();

    const setting = {
        arrows: false,
        infinite: true,
        dots: false,
        speed: 300,
        auto: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        onInit: () => {
            setState({
                slideIndex: 0,
                slidesTotal: 20
            });
        },
        beforeChange: (current, next) => {
            setState(prevState => {
                return {
                    ...prevState,
                    slideIndex: next
                };
            });
        }
    };

    const createSlides = () => {
        let slides = [];
        for (let i = 0; i < 20; i++) {
            slides.push(
                <div className="slide-wrapper" key={i}>
                    <div className="slide-inner">
                        <div
                            className="image mb-4"
                            style={{
                                backgroundImage:
                                    'url("/storage/images/200.jpg")'
                            }}
                        ></div>
                        <div className="fio h5">Василий Цветаев:</div>
                        <div className="title h5"> Generation Ready Now</div>
                        <div className="subtitle py-4">
                            Ретроспектива советского плаката
                        </div>
                        <div className="date h5 pb-4">12 мая - 15 июня 2020 г.</div>
                        <div className="exhibit small">Act-Art Фрунзенская </div>
                        <div className="address small">Фрунзенская наб., д. 1</div>
                    </div>
                </div>
            );
        }
        return slides;
    };

    return (
        <React.Fragment>
            <div>
                <Slider {...setting} ref={refPicture}>
                    {createSlides()}
                </Slider>
            </div>
            <div className="carousel-button">
                <a href="#" className="btn btn-lg btn-default">
                    ВСЕ АННОНСЫ
                </a>
            </div>
            <div className="carousel-counter">
                <span className="current">{state.slideIndex + 1}</span>/
                <span className="total">{state.slidesTotal}</span>
            </div>
            <div className="carousel-arrows">
                <a
                    className="btn btn-default btn-control d-flex"
                    onClick={() => {
                        refPicture.current.slickPrev();
                    }}
                >
                    <svg
                        width="39"
                        height="36"
                        viewBox="0 0 39 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.5946 3L6 18L20.5946 33"
                            stroke="#1B292B"
                            strokeWidth="8"
                        />
                        <path
                            d="M7.62164 17.5946H38.4325"
                            stroke="#1E2B32"
                            strokeWidth="8"
                        />
                    </svg>
                </a>
                <a
                    className="btn btn-default btn-control d-flex"
                    onClick={() => {
                        refPicture.current.slickNext();
                    }}
                >
                    <svg
                        width="39"
                        height="36"
                        viewBox="0 0 39 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18.4054 33L33 18L18.4054 3"
                            stroke="#1B292B"
                            strokeWidth="8"
                        />
                        <path
                            d="M31.3784 18.4054L0.567543 18.4054"
                            stroke="#1E2B32"
                            strokeWidth="8"
                        />
                    </svg>
                </a>
            </div>
        </React.Fragment>
    );
}
