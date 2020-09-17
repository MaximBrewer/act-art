import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

export default function News(props) {
    const [state, setState] = useState({
        slideIndex: 0,
        slidesTotal: 0
    });
    const [slides, setSlides] = useState([]);
    const refPicture = useRef();

    const grid = window.grid;

    const gridCount = {
        xs: 1,
        sm: 1,
        md: 3,
        lg: 4,
        xl: 4,
        xxl: 4
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
        beforeChange: (current, next) => {
            setState(prevState => {
                return {
                    ...prevState,
                    slideIndex: next
                };
            });
        }
    };

    const addPosts = () => {
        axios
            .get("/api/" + window.lang + "/posts?entity=post&category=both&offset=0&limit=20")
            .then(res => {
                let posts = [];
                res.data.items.map((item, index) => {
                    posts.push(
                        <a className="slide-wrapper" key={index} href={'/news/' + item.slug}>
                            <div className="slide-inner">
                                <div className="d-flex justify-content-between">
                                    <div className="category sub_h2">
                                        {item.category}
                                    </div>
                                    <div className="date">
                                        {item.date}
                                    </div>
                                </div>
                                <div
                                    className="image mb-4"
                                    style={{
                                        backgroundImage:
                                            'url("' + item.thumbnail + '")'
                                    }}
                                ></div>
                                <div className="title">{item.title}</div>
                                <div className="announce">{item.excerpt}</div>
                            </div>
                        </a>
                    );
                });
                setSlides(posts);
                setState({
                    slideIndex: 0,
                    slidesTotal: posts.length
                });
            })
            .catch(err => {
                console.log(err)
            });
    };

    useEffect(() => {
        addPosts();
    }, []);

    if (window.innerWidth > 767) {
        return (
            <React.Fragment>
                <div className="mx-q">
                    <Slider {...setting} ref={refPicture}>
                        {slides}
                    </Slider>
                    <hr />
                </div>
                <div className="carousel-button">
                    <a href="/news" className="btn btn-lg btn-default">
                        {__('ЧИТАТЬ')}
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
        return (
            <React.Fragment>
                <div>{slides}</div>
                <div className="text-center h5 color-primary">
                    &bull;&bull;&bull;
                    <br />
                </div>
                <div className="text-center">
                    <a href="/news" className="show-more">
                        {__('Show&nbsp;more')}
                    </a>
                </div>
            </React.Fragment>
        );
    }
}
