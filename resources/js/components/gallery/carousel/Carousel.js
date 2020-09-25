import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Left from "./Left";
import Right from "./Right";
import { ArrowPrew, ArrowNext } from "../../Icons";

export default function Carousel(props) {
    // const [state, setState] = useState({
    //     slideIndex: 0,
    //     slidesTotal: props.items.length
    // });

    const refPicture = useRef();
    const refAnnounce = useRef();

    const setting = {
        arrows: false,
        infinite: true,
        dots: false,
        speed: 300,
        auto: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const settingsPicture = {
        ...setting,
        beforeChange: (current, next) => {
            let cnt = refPicture.current.props.children.length;
            // setState({
            //     slideIndex: next,
            //     slidesTotal: cnt
            // });
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
            // setState({
            //     slideIndex: next,
            //     slidesTotal: cnt
            // });
            if (
                (next > current && (next == 1 || current != 0)) ||
                (current == cnt - 1 && next == 0)
            )
                refPicture.current.slickNext(false);
            else refPicture.current.slickPrev(false);
        }
    };

    return (
        <div class="lot-carousel">
            <div class="carousel-arrows-wrapper">
                <div className="carousel-arrows">
                    <a
                        className="btn btn-default btn-control d-flex"
                        onClick={() => {
                            refAnnounce.current.slickPrev();
                        }}
                    >
                        <ArrowPrew />
                    </a>
                    <a
                        className="btn btn-default btn-control d-flex"
                        onClick={() => {
                            refAnnounce.current.slickNext();
                        }}
                    >
                        <ArrowNext />
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-40 col-xxl-38">
                    <div className="left-side">
                        <Slider {...settingsPicture} ref={refPicture}>
                            {props.items.map((item, index) => (
                                <div key={index}>
                                    <Left item={item} {...props} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className="col-xl-20 col-xxl-22">
                    <div className="right-side">
                        <Slider {...settingsAnnounce} ref={refAnnounce}>
                            {props.items.map((item, index) => (
                                <div key={index}>
                                    <Right item={item} {...props} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}
