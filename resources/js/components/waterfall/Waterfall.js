import React, { useState, useEffect } from "react";
import EntityGrid from "./EntityGrid";
import { Link, useParams } from "react-router-dom";

export default function Waterfall(props) {
    const { data, lots } = props;
    data.firstLimit = data.firstLimit ? data.firstLimit : data.limit;
    const [state, setState] = useState({
        photos: [],
        favorites: user ? user.favorites : null,
        more: true,
        options: [],
        page: 0,
        sortBy: "id",
        order: "asc",
        filter: {
            status: !!data.archive
                ? "sold"
                : !!data.gallery
                ? "gallery"
                : "available"
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

    const columns = () => {
        let size = "xs";
        for (size in window.grid)
            if (window.innerWidth < window.grid[size]) break;
        return data.view[size];
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

    const addGallery = () => {
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
                        if (order == "asc") return a[field] > b[field] ? 1 : -1;
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
        if (!data.auction && !data.gallery)
            getGallery(filter, state.sortBy, state.order, state.options);
        setState(prevState => {
            return {
                ...prevState,
                filter
            };
        });
    };

    useEffect(() => {
        window.addEventListener("lot", updateLot);
        data.firstLimit = data.firstLimit ? data.firstLimit : data.limit;
        axios
            .get("/api/" + window.lang + "/lots/options")
            .then(res => {
                setState(prevState => {
                    return { ...prevState, options: res.data };
                });
                if (!data.auction && !data.gallery)
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

    useEffect(() => {
        setState(prevState => {
            return {
                ...prevState,
                photos: lots
            };
        });
    }, [lots]);

    useEffect(() => {
        setFilter("category", data.category);
    }, [data.category]);

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
                                state.sortBy == "sort"
                                    ? state.order == "asc"
                                        ? `active asc`
                                        : `active desc`
                                    : ``
                            }
                            onClick={e => {
                                e.preventDefault();
                                setSortBy(
                                    "sort",
                                    state.sortBy == "sort" &&
                                        state.order == "asc"
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
                                            {option.id == "category" ? (
                                                <Link
                                                    className={
                                                        data.category == item.id
                                                            ? `active`
                                                            : ``
                                                    }
                                                    to={
                                                        `/gallery/category/` +
                                                        item.id
                                                    }
                                                >
                                                    {item.title}
                                                </Link>
                                            ) : (
                                                <a
                                                    className={
                                                        state.filter[
                                                            option.id
                                                        ] == item.id
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
                                            )}
                                        </li>
                                    ))}
                                    {option.id == "category" ? (
                                        <li>
                                            <Link
                                                className={
                                                    !data.category
                                                        ? `active`
                                                        : ``
                                                }
                                                to={`/gallery`}
                                            >
                                                {__(`CATEGORY_ALL_LINK`)}
                                            </Link>
                                        </li>
                                    ) : (
                                        ``
                                    )}
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
                    columns={columns}
                    items={state.photos}
                    toFavorite={toFavorite}
                    data={data}
                    favorites={state.favorites}
                />
                {state.more && data.action == "add" ? showMoreElems() : ""}
            </div>
        </div>
    );
}
