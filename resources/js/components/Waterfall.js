import React, { useState, useEffect, useRef } from "react";
import StackGrid, { transitions } from "react-stack-grid";

export default function Waterfall(props) {
    const { scaleDown } = transitions;
    const [photos, setPhotos] = useState([]);

    const toFavorite = () => {};

    const grid = {
        xs: 576,
        sm: 768,
        md: 992,
        lg: 1280,
        xl: 1600,
        xxl: 1920,
        xxxl: 100000
    };

    const gridCount = props.data.view;

    const columnWidth = () => {
        let size = "xs";
        for (size in grid) if (window.innerWidth < grid[size]) break;
        return Math.round(100 / gridCount[size], 2) + "%";
    };

    const getCount = () => {
        let size = "xs";
        for (size in grid) if (window.innerWidth < grid[size]) break;
        return photos.length
            ? props.data.count[size]
            : props.data.firstCount[size];
    };

    const addGallery = page => {
        axios
            .get(
                "/api/" +
                    window.lang +
                    "/get_posts/" +
                    props.data.entity +
                    "/" +
                    props.data.category +
                    "/" +
                    page +
                    "/" +
                    getCount()
            )
            .then(res => {
                let photos;
                if (props.data.preview == "waterfall") {
                    photos = res.data.posts.map((item, index) => (
                        <div key={index} className="waterfall-item">
                            <div className="d-flex justify-content-between py-2 align-items-center">
                                <div className="category">
                                    {item.category}
                                </div>
                                <div className="date">{item.date}</div>
                            </div>
                            <div
                                className="image"
                                style={{
                                    backgroundImage:
                                        "url(" + item[props.data.preview] + ")",
                                    paddingTop:
                                        (item.height / item.width) * 100 + "%"
                                }}
                            ></div>
                            <div className="title">{item.title}</div>
                            <div className="excerpt">{item.excerpt}</div>
                            <div className="link">
                                <a href={item.url}>{__("Читать дальше")}</a>
                            </div>
                        </div>
                    ));
                } else {
                    photos = res.data.posts.map((item, index) => (
                        <a
                            key={index}
                            className="waterfall-item"
                            href={item.url}
                        >
                            <div className="d-flex justify-content-between py-2 align-items-center">
                                <div className="category">
                                    {item.category}
                                </div>
                                <div className="date">{item.date}</div>
                            </div>
                            <div
                                className="image"
                                style={{
                                    backgroundImage:
                                        "url(" + item[props.data.preview] + ")",
                                    paddingTop:
                                        (item.height / item.width) * 100 + "%"
                                }}
                            ></div>
                            <div className="title">{item.title}</div>
                            <div className="announce">{item.excerpt}</div>
                        </a>
                    ));
                }
                setPhotos(photos);
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        addGallery(0);
    }, []);

    return (
        <React.Fragment>
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
                className="waterfall-inner"
            >
                {photos}
            </StackGrid>
            <div className="text-center h5 color-primary">
                &bull;&bull;&bull;
                <br />
            </div>
            <div className="text-center">
                <a href="#" className="show-more">
                    {__("Показать больше")}
                </a>
            </div>
            <div className="text-center pt-5 pb-4 d-md-none">
                <button className="btn btn-primary btn-lg to-gallery">
                    {__("ПЕРЕЙТИ В ГАЛЕРЕЮ")}
                </button>
            </div>
        </React.Fragment>
    );
}
