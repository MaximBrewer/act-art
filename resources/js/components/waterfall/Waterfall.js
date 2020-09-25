import React, { useState, useEffect } from "react";
import EntityGrid from "./EntityGrid";
import { Link, useLocation } from "react-router-dom";

export default function Waterfall(props) {
    const { pathname } = useLocation();
    const { data, items } = props;
    data.firstLimit = data.firstLimit ? data.firstLimit : data.limit;
    const [state, setState] = useState({
        items: [],
        more: true,
        options: [],
        page: 0,
        sortBy: "id",
        order: "asc",
        filter: {}
    });

    const columns = () => {
        let size = "xs";
        for (size in window.grid)
            if (window.innerWidth < window.grid[size]) break;
        return data.view[size];
    };

    const updateLot = event => {
        setState(prevState => {
            let items = [];
            for (let i in prevState.items) {
                if (event.detail.lot.id == prevState.items[i].id) {
                    items.push(event.detail.lot);
                } else {
                    items.push(prevState.items[i]);
                }
            }
            return {
                ...prevState,
                items
            };
        });
    };

    const setSortBy = (field, order) => {
        setState(prevState => {
            return {
                ...prevState,
                items: prevState.items.sort(function(a, b) {
                    if (order == "asc") return a[field] > b[field] ? 1 : -1;
                    else return b[field] > a[field] ? 1 : -1;
                }),
                sortBy: field,
                order: order
            };
        });
    };

    useEffect(() => {
        (!!data.categories || delFilter("categories")) &&
            setFilter("categories", data.categories);
    }, [pathname]);

    const delFilter = field => {
        console.log(field);
        setState(prevState => {
            let filter = prevState.filter,
                items = [],
                push;
            delete filter[field];
            for (const item of items) {
                push = true;
                loop: for (const field in filter) {
                    for (const option of item[field]) {
                        if (filter[field] == option.id) {
                            continue loop;
                        }
                    }
                    push = false;
                }
                push && items.push(item);
            }
            return {
                ...prevState,
                filter,
                items
            };
        });
    };

    const setFilter = (field, value) => {
        setState(prevState => {
            let filter = prevState.filter,
                items = [],
                push;
            filter[field] = value;
            for (const item of items) {
                push = false;
                loop: for (const field in filter) {
                    for (const option of item[field]) {
                        if (filter[field] == option.id) {
                            push = true;
                            continue loop;
                        }
                    }
                    push = false;
                }
                push && items.push(item);
            }
            return {
                ...prevState,
                filter,
                items
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
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        setState(prevState => {
            return {
                ...prevState,
                items: items
            };
        });
    }, [items]);

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
                            <span>{__("SORT_BY_LOT_NUMBER")}</span>
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
                                            {option.id == "categories" ? (
                                                <Link
                                                    className={
                                                        data.categories ==
                                                        item.id
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
                                                        state.filter[
                                                            option.id
                                                        ] == undefined ||
                                                        state.filter[
                                                            option.id
                                                        ] != item.id
                                                            ? setFilter(
                                                                  option.id,
                                                                  item.id
                                                              )
                                                            : delFilter(
                                                                  option.id
                                                              );
                                                    }}
                                                >
                                                    {item.title}
                                                </a>
                                            )}
                                        </li>
                                    ))}
                                    {option.id == "categories" ? (
                                        <li>
                                            <Link
                                                className={
                                                    !data.categories
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
                    items={state.items}
                    toFavorite={props.toFavorite}
                    data={data}
                    favorites={props.favorites}
                />
            </div>
        </div>
    );
}
