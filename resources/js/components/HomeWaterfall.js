import React, { useState, useEffect, useRef } from "react";
import StackGrid, { transitions } from "react-stack-grid";

export default function HomeWaterfall() {
    const { scaleDown } = transitions;
    const [photos, setPhotos] = useState([]);

    const toFavorite = () => {};

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
        md: 2,
        lg: 3,
        xl: 3,
        xxl: 4
    };

    const columnWidth = () => {
        let size = "xs";
        for (size in grid) if (window.innerWidth < grid[size]) break;
        return Math.round(100 / gridCount[size], 2) + "%";
    };

    const addGallery = () => {
        axios
            .get("/api/get_gallery_items")
            .then(res => {
                setPhotos(
                    res.data.gallery.map((item, index) => (
                        <div key={index} className="waterfall-item">
                            <div
                                className="image"
                                style={{
                                    backgroundImage: "url(" + item.url + ")",
                                    paddingTop:
                                        (item.height / item.width) * 100 + "%"
                                }}
                            >
                                <a
                                    href="#"
                                    onClick={toFavorite(item.id)}
                                    style={{
                                        position: "absolute",
                                        top: ".5rem",
                                        right: ".5rem"
                                    }}
                                >
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="11"
                                            cy="11"
                                            r="10.5"
                                            fill="white"
                                            stroke="#818486"
                                        />
                                        <path
                                            d="M11.007 7C4.16959 7 2.08566 11.8388 2 12.0451L4.14935 13.02C4.1914 12.9242 4.88293 11.3952 6.85005 10.3715C6.75156 10.7502 6.70181 11.1409 6.70209 11.5333C6.70127 12.1194 6.8112 12.7 7.02559 13.2418C7.23998 13.7836 7.55463 14.2759 7.95155 14.6908C8.34846 15.1056 8.81987 15.4348 9.3388 15.6594C9.85773 15.884 10.414 15.9998 10.9759 16H11.0335C12.1662 16.0009 13.2528 15.5326 14.0548 14.6981C14.8567 13.8637 15.3083 12.7312 15.3104 11.5496C15.3113 11.1658 15.2647 10.7835 15.1718 10.4122C17.1077 11.4472 17.8288 12.955 17.8709 13.046L20 12.0159C19.9112 11.8112 17.6933 7 11.007 7ZM13.4694 13.5969H10.75V10.7599H13.4694V13.5969Z"
                                            fill="#818486"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div className="title">
                                Синий квадрат на красном фоне
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="author">Сергей Пупыркин</div>
                                <div className="price">
                                    <svg
                                        style={{
                                            position: "relative",
                                            top: "-1px",
                                            marginRight: "3px"
                                        }}
                                        width="15"
                                        height="14"
                                        viewBox="0 0 15 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            width="10"
                                            height="5"
                                            rx="1"
                                            transform="matrix(0.734421 0.678694 -0.678693 0.734423 7.18018 -0.401611)"
                                            fill="#FF665E"
                                        />
                                        <rect
                                            width="2"
                                            height="8"
                                            transform="matrix(0.734421 0.678694 -0.678693 0.734423 6.0457 6.71973)"
                                            fill="#FF665E"
                                        />
                                    </svg>
                                    $2300
                                </div>
                            </div>
                            <div className="matherial">
                                холст, акрил, полимерная глина
                            </div>
                            <div className="size">95 х 60 см</div>
                        </div>
                    ))
                );
            })
            .catch(err => {});
    };

    useEffect(() => {
        addGallery();
    }, []);

    return (
        <React.Fragment>
            <h3>
                Последние ставки:{" "}
                <svg className="hummer"
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="25.1066"
                        width="23.6707"
                        height="11.8354"
                        rx="1"
                        transform="rotate(45 25.1066 0)"
                        fill="#FF665E"
                    />
                    <rect
                        x="21.7591"
                        y="16.7378"
                        width="4.73415"
                        height="18.9366"
                        transform="rotate(45 21.7591 16.7378)"
                        fill="#FF665E"
                    />
                </svg>
            </h3>
            <br />
            <br />
            <StackGrid
                appear={scaleDown.appear}
                appeared={scaleDown.appeared}
                enter={scaleDown.enter}
                entered={scaleDown.entered}
                leaved={scaleDown.leaved}
                itemComponent={"div"}
                columnWidth={columnWidth()}
                gutterWidth={40}
                gutterHeight={40}
                className="art-waterfall-inner"
            >
                {photos}
            </StackGrid>
            <div className="text-center h5 h5_underline">
                &bull;&bull;&bull;
                <br />
            </div>
            <div className="text-center">
                <a href="#" className="h5 h5_underline">
                    Показать больше
                </a>
            </div>
        </React.Fragment>
    );
}
