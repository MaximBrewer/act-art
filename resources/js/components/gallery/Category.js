import React from "react";
import Waterfall from "../waterfall/Waterfall";
import { Link, useParams } from "react-router-dom";

export default function Category(props) {
    const { id } = useParams();
    const { showLink } = props;
    return (
        <div className="sticky-wrapper">
            <section className="gallery-section">
                <div className="background-text">{__("Gallery")}</div>
                <div className="container">
                    <div className="row announce mb-5">
                        <div className="col col-xl-40 col-xxl-38">
                            <h2 className="h1">{__("ONLINE-GALLERY")}</h2>
                            <div className="sub_h1 d-none d-xl-block">
                                {__(
                                    "A permanent gallery-auction where you can purchase selected works of young Russian authors. Follow, choose, bargain, collect your collection. Weekly update."
                                )}
                            </div>
                            <a
                                href="/how-to-buy"
                                className="h5 h5_underline d-none d-xl-block pt-4"
                            >
                                {__("How to buy")}?
                            </a>
                        </div>
                    </div>
                    <div className="popular-categories">
                        <h4 className="h4">{__("Popular Categories")}</h4>
                        <div className="d-flex justify-content-between categories">
                            {props.categories.map((item, index) => (
                                <Link
                                    key={index}
                                    className={
                                        `text-decoration-none d-flex justify-content-center align-items-center` +
                                        (item.id == id ? ` active` : ``)
                                    }
                                    to={`/gallery/category/` + item.id}
                                    style={{
                                        backgroundImage:
                                            `url(` + item.preview + `)`
                                    }}
                                >
                                    <p className="px-1 text-center text-nowrap w-100 overflow-hidden text-truncate">
                                        {item.title}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="gallery-works" id="galleryWorksList">
                        <div className="h2">{__("Works for sale")}</div>
                        <div className="gallery-works-list">
                            <Waterfall
                                {...props}
                                category={id}
                                data={{
                                    sortable: true,
                                    gallery: true,
                                    filterable: true,
                                    tizerView: "gallery",
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
                            {!!showLink ? (
                                <div className="text-center my-2">
                                    <Link
                                        to="/gallery"
                                        className="btn btn-default"
                                    >
                                        {__("BTN_BACK_TO_GALLERY")}
                                    </Link>
                                </div>
                            ) : (
                                ``
                            )}
                        </div>
                    </div>
                </div>
                <div className="dotted-gallery d-none d-xl-block">
                    <div className="dotted-bg"></div>
                    <svg
                        viewBox="0 0 683 327"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M341.766 0C82.3241 0 3.25041 175.809 0 183.307L81.5558 218.728C83.1514 215.245 109.391 159.692 184.032 122.5C180.295 136.259 178.407 150.454 178.418 164.71C178.387 186.006 182.558 207.1 190.693 226.784C198.828 246.469 210.767 264.359 225.828 279.431C240.889 294.504 258.776 306.463 278.467 314.625C298.157 322.787 319.265 326.992 340.584 327H342.771C385.749 327.031 426.982 310.018 457.411 279.699C487.84 249.38 504.976 208.234 505.055 165.301C505.089 151.357 503.321 137.467 499.795 123.975C573.254 161.581 600.617 216.367 602.213 219.673L683 182.244C679.631 174.805 595.475 0 341.766 0ZM435.2 239.686H332.015V136.609H435.2V239.686Z"></path>
                    </svg>
                </div>
            </section>
            <div className="sticky-section">
                <span>{__("works for sale")}</span>
            </div>
        </div>
    );
}
