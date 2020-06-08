import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

export default function HomeGalleries() {
    const [state, setState] = useState({
        slideIndex: 0,
        slidesTotal: 0,
    });
    const refPicture = useRef();
    const refAnnounce = useRef();

    const setting = {
        arrows: false,
        infinite: true,
        dots: false,
        speed: 300,
        auto: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        onInit: () => {
            setState({ slideIndex: 0, slidesTotal: 3 });
        }
    };

    const settingsPicture = {
        ...setting,
        beforeChange: (current, next) => {
            let cnt = refPicture.current.props.children.length;
            setState({ slideIndex: next, slidesTotal: cnt });
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
            setState({ slideIndex: next, slidesTotal: cnt });
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
            <div>
                <div className="row">
                    <div className="col col-xxl-38">
                        <Slider {...settingsPicture} ref={refPicture}>
                            <div>
                                <div
                                    className="banner-image"
                                    style={{
                                        backgroundImage:
                                            'url("/storage/template/img/banner.jpg")'
                                    }}
                                >
                                    <div className="h1">
                                        СКОРО НОВЫЙ АУКЦИОН:
                                        <br />
                                        пора готовиться
                                    </div>
                                    <div className="h2">26 июля / 15:00</div>
                                </div>
                            </div>
                            <div>
                                <div
                                    className="banner-image"
                                    style={{
                                        backgroundImage:
                                            'url("/storage/template/img/banner.jpg")'
                                    }}
                                >
                                    <div className="h1">
                                        СКОРО НОВЫЙ АУКЦИОН:
                                        <br />
                                        пора готовиться
                                    </div>
                                    <div className="h2">26 июля / 15:00</div>
                                </div>
                            </div>
                            <div>
                                <div
                                    className="banner-image"
                                    style={{
                                        backgroundImage:
                                            'url("/storage/template/img/banner.jpg")'
                                    }}
                                >
                                    <div className="h1">
                                        СКОРО НОВЫЙ АУКЦИОН:
                                        <br />
                                        пора готовиться
                                    </div>
                                    <div className="h2">26 июля / 15:00</div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="col col-xxl-22">
                        <Slider {...settingsAnnounce} ref={refAnnounce}>
                            <div className="banner-announce">
                                <div className="h3">
                                    Размер этого шрифта должен уменьшаться при
                                    сжатии текстового контейнера
                                </div>
                                <div className="banner-counter-wrapper">
                                    <p>ДО НАЧАЛА АУКЦИОНА:</p>
                                    <div className="banner-counter d-flex">
                                        <div className="days">
                                            <div className="number h5">12</div>
                                            <small>дней</small>
                                        </div>
                                        <div className="separator h5"></div>
                                        <div className="ours">
                                            <div className="number h5">12</div>
                                            <small>часов</small>
                                        </div>
                                        <div className="separator h5">:</div>
                                        <div className="minutes">
                                            <div className="number h5">12</div>
                                            <small>мин.</small>
                                        </div>
                                        <div className="separator h5">:</div>
                                        <div className="seconds">
                                            <div className="number h5">12</div>
                                            <small>сек.</small>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-lg">
                                    ПРИНЯТЬ УЧАСТИЕ
                                </button>
                                <a href="#" className="h5_underline">
                                    Смотреть лоты →
                                </a>
                            </div>
                            <div className="banner-announce">
                                <div className="h3">
                                    Размер этого шрифта должен уменьшаться при
                                    сжатии текстового контейнера
                                </div>
                                <div className="banner-counter-wrapper">
                                    <p>ДО НАЧАЛА АУКЦИОНА:</p>
                                    <div className="banner-counter d-flex">
                                        <div className="days">
                                            <div className="number h5">12</div>
                                            <small>дней</small>
                                        </div>
                                        <div className="separator h5"></div>
                                        <div className="ours">
                                            <div className="number h5">12</div>
                                            <small>часов</small>
                                        </div>
                                        <div className="separator h5">:</div>
                                        <div className="minutes">
                                            <div className="number h5">12</div>
                                            <small>мин.</small>
                                        </div>
                                        <div className="separator h5">:</div>
                                        <div className="seconds">
                                            <div className="number h5">12</div>
                                            <small>сек.</small>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-lg">
                                    ПРИНЯТЬ УЧАСТИЕ
                                </button>
                                <a href="#" className="h5_underline">
                                    Смотреть лоты →
                                </a>
                            </div>
                            <div className="banner-announce">
                                <div className="h3">
                                    Размер этого шрифта должен уменьшаться при
                                    сжатии текстового контейнера
                                </div>
                                <div className="banner-counter-wrapper">
                                    <p>ДО НАЧАЛА АУКЦИОНА:</p>
                                    <div className="banner-counter d-flex">
                                        <div className="days">
                                            <div className="number h5">12</div>
                                            <small>дней</small>
                                        </div>
                                        <div className="separator h5"></div>
                                        <div className="ours">
                                            <div className="number h5">12</div>
                                            <small>часов</small>
                                        </div>
                                        <div className="separator h5">:</div>
                                        <div className="minutes">
                                            <div className="number h5">12</div>
                                            <small>мин.</small>
                                        </div>
                                        <div className="separator h5">:</div>
                                        <div className="seconds">
                                            <div className="number h5">12</div>
                                            <small>сек.</small>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-lg">
                                    ПРИНЯТЬ УЧАСТИЕ
                                </button>
                                <a href="#" className="h5_underline">
                                    Смотреть лоты →
                                </a>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="carousel-button">
                <a href="#" className="btn btn-lg btn-default">
                    ВСЕ АУКЦИОНЫ
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