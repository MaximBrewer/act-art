import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

export default function HomeNews() {
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
        slidesToShow: 4,
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
                        <div className="d-flex justify-content-between">
                            <div className="category sub_h2">Блог</div>
                            <div className="date">12/03/2020</div>
                        </div>
                        <div
                            className="image mb-4"
                            style={{
                                backgroundImage:
                                    'url("/storage/images/300.jpg")'
                            }}
                        ></div>
                        <div className="title">
                            Распродажа современного искусства в поддержку
                            фигурантов “московского дела”
                        </div>
                        <div className="announce">
                            Благотворительный аукцион на площадке состоится в
                            много букв много словосочетаний субботу.
                            Благотворительный аукцион на площадке состоится в
                            субботу.
                        </div>
                    </div>
                </div>
            );
        }
        return slides;
    };

    if (window.innerWidth > 767) {
        console.log(window.innerWidth);

        return (
            <React.Fragment>
                <div className="mx-q">
                    <Slider {...setting} ref={refPicture}>
                        {createSlides()}
                    </Slider>
                    <hr />
                </div>
                <div className="carousel-button">
                    <a href="#" className="btn btn-lg btn-default">
                        ЧИТАТЬ
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
    } else {
        console.log(window.innerWidth);
        return (
            <React.Fragment>
                <div>{createSlides()}</div>
            </React.Fragment>
        );
    }
}
