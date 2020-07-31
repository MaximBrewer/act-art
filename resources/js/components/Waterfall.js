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

    const addGallery = page => {
        axios
            .get(
                "/api/" +
                    window.lang +
                    "/waterfall_items/" +
                    props.data.entity +
                    "/" +
                    props.data.category +
                    "/" +
                    page +
                    "/" +
                    props.data.count
            )
            .then(res => {
                let photos = res.data.posts.map((item, index) => (
                    <div key={index} className="waterfall-item">
                        <div
                            className="image"
                            style={{
                                backgroundImage: "url(" + item.thumbnail + ")",
                                paddingTop:
                                    (item.height / item.width) * 100 + "%"
                            }}
                        ></div>
                        <div className="title">{item.title}</div>
                        <div className="excerpt">{item.excerpt}</div>
                        <div className="link">
                            <a href={item.url}>
                                {__("Читать дальше")}
                            </a>
                        </div>
                    </div>
                ));
                setPhotos(photos);
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        addGallery(1);
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
