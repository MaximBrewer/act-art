import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

export default function HomeAnnounce() {
    const [state, setState] = useState({
        slideIndex: 0,
        slidesTotal: 0
    });
    const refPicture = useRef();

    const grid = {
        xs: 576,
        sm: 768,
        md: 992,
        lg: 1280,
        xl: 1920,
        xxl: 100000
    };

    const gridCount = {
        xs: 1,
        sm: 1,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 6
    };

    const slidesToShow = () => {
        let size = "xs";
        for (size in grid) if (window.innerWidth < grid[size]) break;
        return gridCount[size];
    };

    const setting = {
        arrows: false,
        infinite: true,
        dots: false,
        speed: 300,
        auto: true,
        slidesToShow: slidesToShow(),
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
                                    'url("/storage/images/400.jpg")'
                            }}
                        ></div>
                        <div className="fio">
                            Юрий
                            <br />
                            Львович
                        </div>
                        <div className="description">
                            Реставратор, художник, председатель совета делающего
                            дела
                        </div>
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
            <div className="row">
                <div className="col col-md-40">
                    <div className="carousel-description">
                        <p className="sub_h2">
                            Платформа Акт-Арт представляет три творческих
                            кластера с собственными творческими мастерскими и
                            выставочными галереями. Все кластеры находятся в
                            историческом центре Москвы и далее какой-то текст.
                            Все кластеры находятся в историческом центре Москвы
                            и далее какой-то текст. Все кластеры находятся в
                            историческом центре Москвы.
                        </p>
                    </div>
                </div>
                <div className="col col-md-20">
                    <div className="d-flex justify-content-end">
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
                    </div>
                </div>
            </div>
            <div className="carousel-buttons">
                <a href="#" className="btn btn-lg btn-default">
                    смотреть АУКЦИОНЫ
                </a>
                <a href="#" className="btn btn-lg btn-primary">
                    перейти в галерею
                </a>
            </div>
        </React.Fragment>
    );
}
