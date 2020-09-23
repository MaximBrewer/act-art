import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GalleryLot from "./Lot";
import GalleryArchive from "./Archive";
import GalleryCategory from "./Category";
import ScrollToTop from "../ScrollToTop";

export default function Gallery() {
    const [state, setState] = useState({
        lots: [],
        categories: []
    });
    useEffect(() => {
        axios
            .get("/api/" + window.lang + "/categories/popular")
            .then(res => {
                axios
                    .get("/api/" + window.lang + "/lots?&status=gallery")
                    .then(res2 => {
                        setState(prevState => {
                            return {
                                ...prevState,
                                lots: res2.data.items,
                                categories: res.data.items
                            };
                        });
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    return (
        <Router>
            <Switch>
                <Route exact path={`/gallery`}>
                    <GalleryCategory
                        lots={state.lots}
                        categories={state.categories}
                        setState={setState}
                    />
                </Route>
                <Route exact path={`/gallery/lot/:id`}>
                    <GalleryLot lots={state.lots} setState={setState} />
                </Route>
                <Route path={`/gallery/category/:id`}>
                    <GalleryCategory
                        lots={state.lots}
                        categories={state.categories}
                        setState={setState}
                    />
                </Route>
                <Route exact path={`/gallery/archive`}>
                    <GalleryArchive lots={state.lots} setState={setState} />
                </Route>
            </Switch>
        </Router>
    );
}
