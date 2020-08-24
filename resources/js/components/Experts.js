import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

export default function Experts() {
    const [state, setState] = useState({
        slideIndex: 0,
        slidesTotal: 0,
        items: []
    });

    const ref = useRef();

    const grid = window.grid;

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
        slidesToScroll: slidesToShow(),
        onInit: () => {
            setState(prevState => {
                return {
                    ...prevState,
                    slideIndex: 0,
                    slidesTotal: state.items.length
                };
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

    const getItems = () => {
        axios
            .get("/api/" + window.lang + "/experts/all")
            .then(res => {
                setState(prevState => {
                    return {
                        ...prevState,
                        items: res.data.experts
                    };
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        getItems();
    }, []);

    return (
        <React.Fragment>
            <div>
                <Slider {...setting} ref={ref}>
                    {state.items.map((item, index) => (
                        <div className="slide-wrapper" key={index}>
                            <div className="slide-inner">
                                <div
                                    className="image mb-4"
                                    style={{
                                        backgroundImage:
                                            'url("' + item.thumbnail + '")'
                                    }}
                                ></div>
                                <div className="fio">
                                    {item.name}
                                    <br />
                                    {item.lastname}
                                </div>
                                <div className="description">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    ))}
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
                                    ref.current.slickPrev();
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
                                    ref.current.slickNext();
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
                <a href="/auction" className="btn btn-lg btn-default">
                    {__("Смотреть аукционы")}
                </a>
                <a href="/gallery" className="btn btn-lg btn-primary">
                    {__("To Gallery")}
                </a>
            </div>
        </React.Fragment>
    );
}
