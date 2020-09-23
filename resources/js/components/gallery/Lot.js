import React, { useState, useEffect } from "react";
import Waterfall from "../waterfall/Waterfall";
import { Link, useParams } from "react-router-dom";
import { ArrowPrew, ArrowNext } from "../Icons";

export default function Lot(props) {
    const { id } = useParams();
    useEffect(() => {
        axios
            .get("/api/" + window.lang + "/categories/popular")
            .then(res => {
                setState(prevState => {
                    return {
                        ...prevState,
                        categories: res.data.items
                    };
                });
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);
    return (
        <div className="sticky-wrapper">
            <section className="lot-section">
                <div className="container">
                    <div className="d-flex justify-content-end">
                        <div class="carousel-arrows">
                            <a class="btn btn-default btn-control d-flex">
                                <ArrowPrew />
                            </a>
                            <a class="btn btn-default btn-control d-flex">
                                <ArrowNext />
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-40 col-xxl-38">
                            <div className="left-lot-side"></div>
                        </div>
                        <div className="col-xl-20 col-xxl-22">
                            <div className="right-lot-side"></div>
                        </div>
                    </div>
                    <div className="gallery-works" id="galleryWorksList">
                        <div className="h2">{__("Works for sale")}</div>
                        <div className="gallery-works-list">
                            <Waterfall
                                data={{
                                    exclude: [id],
                                    entity: "lots",
                                    action: "add",
                                    preview: "preview",
                                    sortable: true,
                                    gallery: true,
                                    tizerView: "gallery",
                                    limit: {
                                        xs: 12,
                                        sm: 12,
                                        md: 12,
                                        lg: 12,
                                        xl: 12,
                                        xxl: 12
                                    },
                                    view: {
                                        xs: 1,
                                        sm: 2,
                                        md: 2,
                                        lg: 3,
                                        xl: 4,
                                        xxl: 4
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <div className="sticky-section">
                <span>{__("works for sale")}</span>
            </div>
        </div>
    );
}
