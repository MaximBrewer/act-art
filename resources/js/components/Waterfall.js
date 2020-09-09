import React, { useState, useEffect } from "react";
import EntityGrid from "./waterfall/EntityGrid";

export default function Waterfall(props) {
    const { data } = props;
    const [state, setState] = useState({
        photos: !!data.auction ? data.auction.lots : [],
        favorites: user ? user.favorites : null,
        more: true,
        options: [],
        page: 0,
        sortBy: "id",
        order: "asc",
        filter: {
            status: data.archive ? "sold" : "gallery"
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
                data.entity == "favorites" &&
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

    const columnWidth = () => {
        let size = "xs";
        for (size in window.grid)
            if (window.innerWidth < window.grid[size]) break;
        return Math.round(100 / data.view[size], 2) + "%";
    };

    const getLimit = () => {
        let size = "xs";
        for (size in window.grid)
            if (window.innerWidth < window.grid[size]) break;
        return state.photos.length ? data.limit[size] : data.firstLimit[size];
    };

    const getOffset = () => {
        let size = "xs";
        for (size in window.grid)
            if (window.innerWidth < window.grid[size]) break;
        return state.page
            ? (state.page - 1) * data.limit[size] + data.firstLimit[size]
            : 0;
    };

    const addGallery = e => {
        e.preventDefault();
        let url =
            data.entity == "blog" || data.entity == "post"
                ? "/posts?entity=" + data.entity + "&"
                : "/" + data.entity + "?";
        data.category && (url += "category=" + data.category);
        data.author && (url += "author=" + data.author);
        data.lastbets && (url += "lastbets=1");
        if (data.entity == "lots") {
            url += "&status=" + state.filter.status;
            url += "&sortBy=" + state.sortBy;
            url += "&order=" + state.order;
        }
        if (!!data.exclude) {
            url += "&exclude=" + data.exclude;
        }
        data.entity == "favorites" ||
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
            data.entity == "blog" || data.entity == "post"
                ? "/posts?entity=" + data.entity + "&"
                : "/" + data.entity + "?";
        data.category && (url += "category=" + data.category);
        data.author && (url += "author=" + data.author);
        data.lastbets && (url += "lastbets=1");
        if (data.entity == "lots") {
            url += "&status=" + filter.status;
            options.map(option => {
                !!filter[option.id] &&
                    (url += "&" + option.id + "=" + filter[option.id]);
            });
            url += "&sortBy=" + sortBy;
            url += "&order=" + order;
        }
        if (!!data.exclude) {
            url += "&exclude=" + data.exclude;
        }
        (data.entity == "favorites" &&
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

    const setSortBy = (field, order) => {
        if (data.auction) {
            setState(prevState => {
                return {
                    ...prevState,
                    photos: prevState.photos.sort(function(a, b) {
                        if ((order == "asc")) return a[field] > b[field] ? 1 : -1;
                        else return b[field] > a[field] ? 1 : -1;
                    }),
                    sortBy: field,
                    order: order
                };
            });
        } else {
            setState(prevState => {
                return {
                    ...prevState,
                    sortBy: field,
                    order: order
                };
            });
            getGallery(state.filter, field, order, state.options);
        }
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
        location.hash = "";
        return true;
    };

    useEffect(() => {
        if (!!data.auction) return;
        window.addEventListener(
            "hashchange",
            () => {
                setCategory();
            },
            false
        );
        window.addEventListener("lot", updateLot);
        data.firstLimit = data.firstLimit ? data.firstLimit : data.limit;
        axios
            .get("/api/" + window.lang + "/lots/options")
            .then(res => {
                setState(prevState => {
                    return { ...prevState, options: res.data };
                });
                if (!data.auction || !setCategory())
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
    }, []);

    const showMoreElems = () => {
        if (data.action == "add")
            return (
                <div className="show-more">
                    <div className="dots">•••</div>
                    <a
                        href="#"
                        className="text"
                        onClick={e => {
                            e.preventDefault();
                            addGallery();
                        }}
                    >
                        {__("Show more")}
                    </a>
                </div>
            );
    };

    return (
        <div className="waterfall-outer row">
            <div className="col-60">
                {data.sortable && (
                    <div className="sorting">
                        <span>{__("Sort by")}: </span>
                        <a
                            href="#"
                            className={
                                state.sortBy == "price"
                                    ? state.order == "asc"
                                        ? `active asc`
                                        : `active desc`
                                    : ``
                            }
                            onClick={e => {
                                e.preventDefault();
                                setSortBy(
                                    "price",
                                    state.sortBy == "price" &&
                                        state.order == "asc"
                                        ? "desc"
                                        : "asc"
                                );
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
                                state.sortBy == "author"
                                    ? state.order == "asc"
                                        ? `active asc`
                                        : `active desc`
                                    : ``
                            }
                            onClick={e => {
                                e.preventDefault();
                                setSortBy(
                                    "author",
                                    state.sortBy == "author" &&
                                        state.order == "asc"
                                        ? "desc"
                                        : "asc"
                                );
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
                                state.sortBy == "id"
                                    ? state.order == "asc"
                                        ? `active asc`
                                        : `active desc`
                                    : ``
                            }
                            onClick={e => {
                                e.preventDefault();
                                setSortBy(
                                    "id",
                                    state.sortBy == "id" && state.order == "asc"
                                        ? "desc"
                                        : "asc"
                                );
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
            {data.sidebar && (
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
                    `col-` + (data.sidebar ? `45` : `60`) + ` stack-grid`
                }
            >
                <EntityGrid
                    columnWidth={columnWidth}
                    showMoreElems={showMoreElems}
                    gutterWidth={40}
                    gutterHeight={40}
                    items={state.photos}
                    toFavorite={toFavorite}
                    data={data}
                    favorites={state.favorites}
                    itemComponent={"div"}
                    className="waterfall-inner"
                />
                {state.more && data.action == "add" ? showMoreElems() : ""}
            </div>
        </div>
    );
}
