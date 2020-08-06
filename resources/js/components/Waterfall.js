import React, { useState, useEffect, useRef } from "react";
import StackGrid, { transitions } from "react-stack-grid";

export default function Waterfall(props) {
    const { scaleDown } = transitions;
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(0);
    const [more, setMore] = useState(true);

    const toFavorite = () => {};

    const grid = window.grid;

    const gridCount = props.data.view;

    const columnWidth = () => {
        let size = "xs";
        for (size in grid) if (window.innerWidth < grid[size]) break;
        return Math.round(100 / gridCount[size], 2) + "%";
    };

    const getLimit = () => {
        let size = "xs";
        for (size in grid) if (window.innerWidth < grid[size]) break;
        return photos.length
            ? props.data.limit[size]
            : props.data.firstLimit[size];
    };

    const getOffset = () => {
        let size = "xs";
        for (size in grid) if (window.innerWidth < grid[size]) break;
        return page
            ? (page - 1) * props.data.limit[size] + props.data.firstLimit[size]
            : 0;
    };

    const addGallery = e => {
        if (!!e) e.preventDefault();
        axios
            .get(
                "/api/" +
                    window.lang +
                    "/posts?entity=" +
                    props.data.entity +
                    "&category=" +
                    props.data.category +
                    "&offset=" +
                    getOffset() +
                    "&limit=" +
                    getLimit()
            )
            .then(res => {
                setMore(res.data.next > 0);
                setPage(page + 1);
                let arr;
                let start = photos.length;
                if (props.data.preview == "waterfall") {
                    arr = res.data.posts.map((item, index) => (
                        <div key={index + start} className="waterfall-item">
                            <div className="d-flex justify-content-between py-2 align-items-center">
                                <div className="category">{item.category}</div>
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
                    arr = res.data.posts.map((item, index) => (
                        <a
                            key={index + start}
                            className="waterfall-item"
                            href={item.url}
                        >
                            <div className="d-flex justify-content-between py-2 align-items-center">
                                <div className="category">{item.category}</div>
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
                setPhotos(photos.concat(arr));
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        addGallery();
    }, []);

    const showMoreElems = () => {
        return (
            <React.Fragment>
                <div className="text-center h5 color-primary">
                    &bull;&bull;&bull;
                    <br />
                </div>
                <div className="text-center">
                    <a
                        href={
                            props.data.action == "add"
                                ? "#"
                                : "/" + props.data.category
                        }
                        className="show-more"
                        onClick={props.data.action == "add" ? addGallery : ""}
                    >
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
    };

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
            {more ? showMoreElems() : ""}
        </React.Fragment>
    );
}
