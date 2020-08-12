import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import AuctionPreviewLeft from "./AuctionPreviewLeft";
import AuctionPreviewRight from "./AuctionPreviewRight";

export default function AuctionCarousel() {
    const [state, setState] = useState({
        slideIndex: 0,
        slidesTotal: 0,
        auctions: []
    });

    useEffect(() => {
        axios
            .get("/api/" + window.lang + "/auctions/coming")
            .then(res => {
                setState({
                    slideIndex: 0,
                    slidesTotal: res.data.auctions.length,
                    auctions: res.data.auctions
                });
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const refPicture = useRef();
    const refAnnounce = useRef();

    const setting = {
        arrows: false,
        infinite: true,
        className: "auction-preview",
        dots: false,
        speed: 300,
        auto: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        onInit: () => {
            setState({ slideIndex: 0, slidesTotal: 0, auctions: state.auctions });
        }
    };

    const settingsPicture = {
        ...setting,
        beforeChange: (current, next) => {
            let cnt = refPicture.current.props.children.length;
            setState({ slideIndex: next, slidesTotal: cnt, auctions: state.auctions });
            if (
                (next > current && (next == 1 || current != 0)) ||
                (current == cnt - 1 && next == 0)
            )
                refAnnounce.current.slickNext(false);
            else refAnnounce.current.slickPrev(false);
        }
    };
    const settingsAnnounce = {
        ...setting,
        beforeChange: (current, next) => {
            let cnt = refPicture.current.props.children.length;
            setState({ slideIndex: next, slidesTotal: cnt, auctions: state.auctions });
            if (
                (next > current && (next == 1 || current != 0)) ||
                (current == cnt - 1 && next == 0)
            )
                refPicture.current.slickNext(false);
            else refPicture.current.slickPrev(false);
        }
    };

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-xl-40 col-xxl-38">
                    <hr className="d-lg-none" />
                    <Slider {...settingsPicture} ref={refPicture}>
                        {state.auctions.map((item, index) => (
                            <div index={index}>
                                <AuctionPreviewLeft auction={item} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="col-xl-20 col-xxl-22">
                    <Slider {...settingsAnnounce} ref={refAnnounce}>
                        {state.auctions.map((item, index) => (
                            <div index={index}>
                                <AuctionPreviewRight auction={item} />
                            </div>
                        ))}
                    </Slider>
                    <hr className="d-lg-none" />
                </div>
            </div>
            <div className="carousel-button">
                <a href="/auctions" className="btn btn-default">
                    {__("ВСЕ АУКЦИОНЫ")}
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
                        refAnnounce.current.slickPrev();
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
                        refAnnounce.current.slickNext();
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
