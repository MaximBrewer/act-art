import React, { useState, useEffect, useRef } from "react";

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
let step = 2;

function Block(props) {
    const { size, auction } = props;
    return (
        <div
            // index={index}
            className="gallery-body"
            style={{
                width: cols * size + "px",
                height: rows * size + "px"
            }}
        >
            {auction.lots.map((item, index) => (
                <div
                    className={"picture"}
                    key={index}
                    style={{
                        width: item.w * size + "px",
                        height: item.h * size + "px",
                        left: item.l * size + "px",
                        top: item.t * size + "px",
                        backgroundColor: item.bg,
                        backgroundImage: `url(` + item.path + `)`
                    }}
                >
                    <div className="picture-inner">
                        <a
                            href={item.href}
                            target="_self"
                            className="lookFullSize"
                        >
                            <span className="ico-holder">
                                <span className="ia icon-logo-eye"></span>
                            </span>
                        </a>
                        <div className="pic-description">
                            <div className="tag">{item.tag}</div>
                            <div className="title">{item.title}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function Gallery() {
    const [blocks, setBlocks] = useState([]);

    const ref = useRef();

    const moveLeft = auction => {
        position -= step;
        let gals = document.getElementsByClassName("gallery-body");

        if (!gals.length || gals[0].offsetLeft + gals[0].offsetWidth <= 0) {
            setBlocks(prevState => {
                prevState.splice(0, 1);
                return prevState.concat(
                    <Block
                        auction={auction}
                        cols={cols}
                        size={size}
                        rows={rows}
                    />
                );
            });
            position = 0;
        }

        let i = 0;

        [].forEach.call(
            document.getElementsByClassName("gallery-body"),
            gal => {
                gal.style.left = position + size * cols * i + "px";
                i++;
            }
        );
    };

    const animateGallery = auction => {
        requestAnimationFrame(function i() {
            moveLeft(auction);
            requestAnimationFrame(i);
        });
    };

    const getGallery = () => {
        axios
            .get("/api/get_gallery")
            .then(res => {
                let array = [];
                let grid = [];
                for (let i = 0; i < rows; i++) {
                    grid[i] = [];
                    for (let j = 0; j < cols; j++) {
                        grid[i][j] = 0;
                    }
                }
                let i = 0;
                loop1: for (let lot of res.data.auction.lots) {
                    ++i;
                    let h = 1,
                        w = 1;
                    if (lot.height > lot.width * 1.2) {
                        h = 2;
                    } else if (lot.width > lot.height * 1.2) {
                        w = 2;
                    }
                    let p = {
                        h: h,
                        w: w,
                        title: lot.title,
                        path: lot.thumbnail,
                        l: 0,
                        t: 0,
                        bg: getRandomColor(),
                        href:
                            "/auction/" + res.data.auction.id + "/lot/" + lot.id
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
                let auction = res.data.auction;
                auction.lots = array;

                let w = document.body.clientWidth,
                    c = Math.ceil(w / (size * cols)) + 2;
                c = c < 20 ? c : 20;

                let arr = [];
                for (; c > 0; c--) {
                    arr.push(
                        <Block
                            auction={auction}
                            cols={cols}
                            size={size}
                            rows={rows}
                        />
                    );
                }
                setBlocks(prevState => {
                    return prevState.concat(arr);
                });

                setTimeout(() => {
                    animateGallery(auction);
                }, 200);
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        getGallery();
        ref.current.addEventListener('mouseenter', () => {
            step = 1;
        })
        ref.current.addEventListener('mouseleave', () => {
            step = 2;
        })
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
                {blocks}
            </div>
        </React.Fragment>
    );
}
