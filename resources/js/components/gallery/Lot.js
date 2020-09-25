import React, { useEffect } from "react";
import Waterfall from "../waterfall/Waterfall";
import { useParams } from "react-router-dom";
import Carousel from "./carousel/Carousel";

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
        <section className="lot-section">
            <div className="sticky-wrapper">
                <div className="container">
                    <Carousel {...props} />
                    <div className="gallery-works" id="galleryWorksList">
                        <div className="h2">{__("Works for sale")}</div>
                        <div className="gallery-works-list">
                            <Waterfall
                                {...props}
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
                <div className="sticky-section">
                    <span>{__("works for sale")}</span>
                </div>
            </div>
        </section>
    );
}
