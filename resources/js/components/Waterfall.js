import React, { useState, useEffect, useRef } from "react";
import StackGrid, { transitions } from "react-stack-grid";
import { sortBy } from "lodash";

export default function Waterfall(props) {
    const { scaleDown } = transitions;
    const [state, setState] = useState({
        photos: [],
        favorites: user ? user.favorites : null,
        more: true,
        options: [],
        page: 0,
        sortBy: "id",
        order: "asc",
        filter: {
            status: props.data.archive ? "sold" : "gallery"
        }
    });

    const toFavorite = (id, e) => {
        e.preventDefault();
        if (!state.favorites) {
            window.dispatchEvent(
                new CustomEvent("flash", {
                    detail: {
                        message: __(
                            "To add to favorites, authorization is required"
                        ),
                        type: "error"
                    }
                })
            );
            return false;
        }

        let favorites = user.favorites;
        let action = user.favorites.indexOf(id) < 0 ? "add" : "remove";
        let url = "/user/favorites/" + action + "/" + id;

        axios
            .patch(url)
            .then(res => {
                user = res.data.user;
                favorites = user.favorites;
                window.dispatchEvent(
                    new CustomEvent("flash", {
                        detail: {
                            message:
                                action == "add"
                                    ? __("Added to favorites")
                                    : __("Removed from favorites"),
                            type: action == "add" ? "success" : "error"
                        }
                    })
                );
                props.data.entity == "favorites" &&
                    getGallery(
                        state.filter,
                        state.sortBy,
                        state.order,
                        state.options
                    );
                setState(prevState => {
                    return { ...prevState, favorites };
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

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
        return state.photos.length
            ? props.data.limit[size]
            : props.data.firstLimit[size];
    };

    const getOffset = () => {
        let size = "xs";
        for (size in grid) if (window.innerWidth < grid[size]) break;
        return state.page
            ? (state.page - 1) * props.data.limit[size] +
                  props.data.firstLimit[size]
            : 0;
    };

    const addGallery = e => {
        e.preventDefault();
        let url =
            props.data.entity == "blog" || props.data.entity == "post"
                ? "/posts?entity=" + props.data.entity + "&"
                : "/" + props.data.entity + "?";
        props.data.category && (url += "category=" + props.data.category);
        props.data.author && (url += "author=" + props.data.author);
        props.data.lastbets && (url += "lastbets=1");
        if (props.data.entity == "lots") {
            url += "&status=" + state.filter.status;
            url += "&sortBy=" + state.sortBy;
            url += "&order=" + state.order;
        }
        if (!!props.data.exclude) {
            url += "&exclude=" + props.data.exclude;
        }
        props.data.entity == "favorites" ||
            (url += "&limit=" + getLimit() + "&offset=" + getOffset());
        axios
            .get("/api/" + window.lang + url)
            .then(res => {
                setState(prevState => {
                    return {
                        ...prevState,
                        photos: state.photos.concat(res.data.items),
                        page: state.page + 1,
                        more: res.data.next > 0
                    };
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    const getGallery = (filter, sortBy, order, options) => {
        let url =
            props.data.entity == "blog" || props.data.entity == "post"
                ? "/posts?entity=" + props.data.entity + "&"
                : "/" + props.data.entity + "?";
        props.data.category && (url += "category=" + props.data.category);
        props.data.author && (url += "author=" + props.data.author);
        props.data.lastbets && (url += "lastbets=1");
        if (props.data.entity == "lots") {
            url += "&status=" + filter.status;
            options.map(option => {
                !!filter[option.id] &&
                    (url += "&" + option.id + "=" + filter[option.id]);
            });
            url += "&sortBy=" + sortBy;
            url += "&order=" + order;
        }
        if (!!props.data.exclude) {
            url += "&exclude=" + props.data.exclude;
        }
        (props.data.entity == "favorites" &&
            (url +=
                "&ids=" +
                (user.favorites.length ? user.favorites.join(",") : "0"))) ||
            (url += "&offset=0" + "&limit=" + getLimit());
        axios
            .get("/api/" + window.lang + url)
            .then(res => {
                setState(prevState => {
                    return {
                        ...prevState,
                        photos: res.data.items,
                        page: 1,
                        more: res.data.next > 0,
                        filter: filter,
                        sortBy: sortBy,
                        order: order
                    };
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    const updateLot = event => {
        setState(prevState => {
            let photos = [];
            for (let i in prevState.photos) {
                if (event.detail.lot.id == prevState.photos[i].id) {
                    photos.push(event.detail.lot);
                } else {
                    photos.push(prevState.photos[i]);
                }
            }
            return {
                ...prevState,
                photos
            };
        });
    };

    const setSortBy = field => {
        let order = "asc";
        if (field == state.sortBy)
            if (state.order == "asc") order = "desc";
            else order = "asc";
        setState(prevState => {
            return {
                ...prevState,
                sortBy: field,
                order: order
            };
        });
        getGallery(state.filter, field, order, state.options);
    };

    const setFilter = (field, value) => {
        let filter = state.filter;
        filter[field] = value;
        getGallery(filter, state.sortBy, state.order, state.options);
        setState(prevState => {
            return {
                ...prevState,
                filter
            };
        });
    };

    const setCategory = () => {
        if (location.hash.indexOf("#category-") == -1) return false;
        let catId = location.hash.replace(/#category-/, "");
        let filter = state.filter;
        filter.category = catId * 1;
        setState(prevState => {
            getGallery(
                filter,
                prevState.sortBy,
                prevState.order,
                prevState.options
            );
            return {
                ...prevState,
                filter
            };
        });
        scrollToElement("galleryWorksList");
        location.hash = '';
        return true;
    };

    useEffect(() => {
        window.addEventListener(
            "hashchange",
            () => {
                setCategory();
            },
            false
        );
        axios
            .get("/api/" + window.lang + "/lots/options")
            .then(res => {
                setState(prevState => {
                    return { ...prevState, options: res.data };
                });
                if (!setCategory())
                    getGallery(
                        state.filter,
                        state.sortBy,
                        state.order,
                        state.options
                    );
            })
            .catch(err => {
                console.log(err);
            });
        window.addEventListener("lot", updateLot);
        props.data.firstLimit = props.data.firstLimit
            ? props.data.firstLimit
            : props.data.limit;
    }, []);

    const showMoreElems = () => {
        if (props.data.action == "add")
            return (
                <div className="show-more">
                    <div className="dots">•••</div>
                    <a href="#" className="text" onClick={addGallery}>
                        {__("Show more")}
                    </a>
                </div>
            );
    };

    return (
        <div className="waterfall-outer row">
            <div className="col-60">
                {props.data.sortable && (
                    <div className="sorting">
                        <span>{__("Sort by")}: </span>
                        <a
                            href="#"
                            className={
                                !!state.sortBy && state.sortBy == "price"
                                    ? state.order == "asc"
                                        ? `active asc`
                                        : `active desc`
                                    : ``
                            }
                            onClick={e => {
                                e.preventDefault();
                                setSortBy("price");
                            }}
                        >
                            <span>{__("#BYPRICE#")}</span>
                            <svg
                                viewBox="0 0 18 18"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 18L0.339746 3L17.6603 3L9 18Z" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className={
                                !!state.sortBy && state.sortBy == "author"
                                    ? state.order == "asc"
                                        ? `active asc`
                                        : `active desc`
                                    : ``
                            }
                            onClick={e => {
                                e.preventDefault();
                                setSortBy("author");
                            }}
                        >
                            <span>{__("#BYAUTHOR#")}</span>
                            <svg
                                viewBox="0 0 18 18"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 18L0.339746 3L17.6603 3L9 18Z" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className={
                                !!state.sortBy && state.sortBy == "id"
                                    ? state.order == "asc"
                                        ? `active asc`
                                        : `active desc`
                                    : ``
                            }
                            onClick={e => {
                                e.preventDefault();
                                setSortBy("id");
                            }}
                        >
                            <span>{__("#BYLOTNUMBER#")}</span>
                            <svg
                                viewBox="0 0 18 18"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 18L0.339746 3L17.6603 3L9 18Z" />
                            </svg>
                        </a>
                    </div>
                )}
            </div>
            {props.data.sidebar && (
                <div className="waterfall-sidebar col-15">
                    <ul>
                        {state.options.map((option, option_index) => (
                            <li key={option_index}>
                                <span>{option.title}</span>
                                <ul>
                                    {option.items.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                className={
                                                    state.filter[option.id] ==
                                                    item.id
                                                        ? `active`
                                                        : ``
                                                }
                                                href="#"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    setFilter(
                                                        option.id,
                                                        state.filter[
                                                            option.id
                                                        ] == item.id
                                                            ? false
                                                            : item.id
                                                    );
                                                }}
                                            >
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <div
                className={
                    `col-` + (props.data.sidebar ? `45` : `60`) + ` stack-grid`
                }
            >
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
                    {state.photos.map((item, index) => {
                        if (
                            props.data.entity == "lots" ||
                            props.data.entity == "favorites"
                        ) {
                            return (
                                <div key={index} className="lot-item">
                                    <div
                                        className="image"
                                        style={{
                                            backgroundImage:
                                                "url(" + item.thumbnail + ")",
                                            paddingTop:
                                                (item.pxheight / item.pxwidth) *
                                                    100 +
                                                "%"
                                        }}
                                    >
                                        <a
                                            href="#"
                                            onClick={e =>
                                                toFavorite(item.id, e)
                                            }
                                            className={
                                                state.favorites &&
                                                state.favorites.indexOf(
                                                    item.id
                                                ) > -1
                                                    ? `favorit-link active`
                                                    : `favorit-link`
                                            }
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
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="11"
                                                    cy="11"
                                                    r="10.5"
                                                />
                                                <path d="M11.007 7C4.16959 7 2.08566 11.8388 2 12.0451L4.14935 13.02C4.1914 12.9242 4.88293 11.3952 6.85005 10.3715C6.75156 10.7502 6.70181 11.1409 6.70209 11.5333C6.70127 12.1194 6.8112 12.7 7.02559 13.2418C7.23998 13.7836 7.55463 14.2759 7.95155 14.6908C8.34846 15.1056 8.81987 15.4348 9.3388 15.6594C9.85773 15.884 10.414 15.9998 10.9759 16H11.0335C12.1662 16.0009 13.2528 15.5326 14.0548 14.6981C14.8567 13.8637 15.3083 12.7312 15.3104 11.5496C15.3113 11.1658 15.2647 10.7835 15.1718 10.4122C17.1077 11.4472 17.8288 12.955 17.8709 13.046L20 12.0159C19.9112 11.8112 17.6933 7 11.007 7ZM13.4694 13.5969H10.75V10.7599H13.4694V13.5969Z" />
                                            </svg>
                                        </a>
                                    </div>
                                    <a
                                        className="title"
                                        href={
                                            props.data.author
                                                ? `/authors/` +
                                                  props.data.author +
                                                  `/lots/` +
                                                  item.id
                                                : props.data.gallery
                                                ? props.data.archive
                                                    ? `javascript:void(0)`
                                                    : `/gallery/lot/` + item.id
                                                : `/auction/lot/`
                                        }
                                    >
                                        {item.title}
                                    </a>
                                    <div className="d-flex justify-content-between">
                                        <a
                                            className="author"
                                            href={item.author_url}
                                        >
                                            {item.author}
                                        </a>
                                        <div className="price">
                                            <svg
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
                                            <span>
                                                $
                                                {item.bets.length
                                                    ? item.bets[0].bet
                                                    : item.price}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="matherial">
                                        {item.materials.map((m, mi) => (
                                            <span key={mi}>{m.title}</span>
                                        ))}
                                    </div>
                                    <div className="size">
                                        {item.width} х {item.height}
                                        {__("см")}
                                    </div>
                                    {props.data.lastbets || (
                                        <a
                                            className={item.status + ` status`}
                                            href="#"
                                        >
                                            {__("#status-" + item.status + "#")}
                                        </a>
                                    )}
                                </div>
                            );
                        } else if (props.data.entity == "authors") {
                            return (
                                <div key={index} className="author-item">
                                    <div
                                        className="image"
                                        style={{
                                            backgroundImage:
                                                "url(" + item.preview + ")",
                                            paddingTop:
                                                (item.pxheight / item.pxwidth) *
                                                    100 +
                                                "%"
                                        }}
                                    ></div>
                                    <a
                                        className="title"
                                        href={`/authors/` + item.id}
                                    >
                                        {item.name + ` ` + item.surname}
                                    </a>
                                </div>
                            );
                        } else if (props.data.entity == "events") {
                            return (
                                <a
                                    className="event-wrapper"
                                    key={index}
                                    href={item.url}
                                >
                                    <div className="event-inner">
                                        <div
                                            className="image mb-4"
                                            style={{
                                                backgroundImage:
                                                    "url(" +
                                                    item[props.data.preview] +
                                                    ")",
                                                paddingTop:
                                                    (item.height / item.width) *
                                                        100 +
                                                    "%"
                                            }}
                                        ></div>
                                        <div className="title">
                                            {item.title}
                                        </div>
                                        <div className="subtitle">
                                            {item.excerpt}
                                        </div>
                                        <div className="date">{item.dates}</div>
                                        <div className="exhibit">
                                            {item.space.title}
                                        </div>
                                        <div className="address">
                                            {item.space.address}
                                        </div>
                                    </div>
                                </a>
                            );
                        } else {
                            if (props.data.preview == "waterfall") {
                                return (
                                    <div key={index} className="waterfall-item">
                                        <div className="d-flex justify-content-between py-2 align-items-center">
                                            <div className="category">
                                                {item.category}
                                            </div>
                                            <div className="date">
                                                {item.date}
                                            </div>
                                        </div>
                                        <div
                                            className="image"
                                            style={{
                                                backgroundImage:
                                                    "url(" +
                                                    item[props.data.preview] +
                                                    ")",
                                                paddingTop:
                                                    (item.height / item.width) *
                                                        100 +
                                                    "%"
                                            }}
                                        ></div>
                                        <div className="title">
                                            {item.title}
                                        </div>
                                        <div className="excerpt">
                                            {item.excerpt}
                                        </div>
                                        <div className="link">
                                            <a href={item.url}>
                                                {__("Читать дальше")}
                                            </a>
                                        </div>
                                    </div>
                                );
                            } else {
                                return (
                                    <a
                                        key={index}
                                        className="waterfall-item"
                                        href={item.url}
                                    >
                                        <div className="d-flex justify-content-between py-2 align-items-center">
                                            <div className="category">
                                                {item.category}
                                            </div>
                                            <div className="date">
                                                {item.date}
                                            </div>
                                        </div>
                                        <div
                                            className="image"
                                            style={{
                                                backgroundImage:
                                                    "url(" +
                                                    item[props.data.preview] +
                                                    ")",
                                                paddingTop:
                                                    (item.height / item.width) *
                                                        100 +
                                                    "%"
                                            }}
                                        ></div>
                                        <div className="title">
                                            {item.title}
                                        </div>
                                        <div className="announce">
                                            {item.excerpt}
                                        </div>
                                    </a>
                                );
                            }
                        }
                    })}
                </StackGrid>
                {state.more || props.data.action != "add"
                    ? showMoreElems()
                    : ""}
            </div>
        </div>
    );
}
