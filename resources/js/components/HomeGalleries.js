import React, { useState, useEffect, useRef } from "react";
import Gallery from "./HomeGallery";

const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
};

const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const rows = 3;
const cols = 10;
const size = 250;
let position = 0;
let step = 3;
let wait = 0;

export default function HomeGalleries() {
    const [galleries, setGalleries] = useState([]);

    const ref = useRef();

    const moveLeft = () => {
        position -= step;
        let w = 0;
        for (let r of document.getElementsByClassName("gallery-body")) {
            w++;
        }

        if (
            !wait &&
            document.getElementById("gallery-holder").offsetWidth >
                w * size * cols + position - 300
        ) {
            wait = 1;
            setTimeout(() => {
                addGallery();
            }, 100);
        }
        let style = "translate3d(" + position + "px, 0px, 0px)";
        ref.current.style.transform = style;
    };

    const animateGallery = () => {
        requestAnimationFrame(function i() {
            moveLeft();
            requestAnimationFrame(i);
        });
    };

    const addGallery = () => {
        axios
            .get("/api/get_gallery_items")
            .then(res => {
                let array = [];
                let grid = [];
                for (let i = 0; i < rows; i++) {
                    grid[i] = [];
                    for (let j = 0; j < cols; j++) {
                        grid[i][j] = 0;
                    }
                }
                loop1: for (let i in res.data.gallery) {
                    let p = {
                        h: randomInteger(1, 2),
                        w: randomInteger(1, 2),
                        tag: res.data.gallery[i].TAG,
                        title: res.data.gallery[i].TITLE,
                        path: res.data.gallery[i].PATH,
                        l: 0,
                        t: 0,
                        bg: getRandomColor(),
                        href: res.data.gallery[i].ARTICLE
                    };
                    let set = false;
                    loop2: for (let j in grid) {
                        j = j / 1;
                        for (let k in grid[j]) {
                            k = k / 1;
                            if (grid[j][k]) continue;

                            p.s = 1;
                            p.l = k;
                            p.t = j;

                            if (j == grid.length - 1) p.h = 1;
                            if (k == grid[j].length - 1) p.w = 1;
                            else if (grid[j][k + 1]) p.w = 1;

                            grid[j][k] = i + 1;
                            if (p.h > 1) {
                                grid[j + 1][k] = i + 1;
                            }
                            if (p.w > 1) {
                                grid[j][k] = i + 1;
                                grid[j][k + 1] = i + 1;
                                if (p.h > 1) {
                                    grid[j + 1][k + 1] = i + 1;
                                }
                            }
                            set = true;
                            break loop2;
                        }
                    }
                    if (!set) break loop1;
                    array.push(p);
                }
                wait = 0;
                setGalleries(prevState => {
                    // if (prevState.length < 1) addGallery();
                    // console.log(prevState)
                    return prevState.concat({ items: array });
                });
            })
            .catch(err => {});
    };

    useEffect(() => {
        addGallery();
        setTimeout(() => {
            animateGallery();
        }, 200);
    }, []);

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-xs-6">
                        <div className="g-title">
                            <h5 className="h5">Аукцион</h5>
                            <h1 className="h1">Зёрна Арта</h1>
                            <div className="sub_h2">
                                Лучшее из коллекции Всекохудожник 2020 г.
                            </div>
                            <a className="h5_underline" href="#">
                                Смотреть лоты →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gallery-inner" ref={ref}>
                {galleries.map((gallery, ind) => (
                    <Gallery
                        key={ind}
                        items={gallery.items}
                        cols={cols}
                        rows={rows}
                        size={size}
                    />
                ))}
            </div>
        </React.Fragment>
    );
}
