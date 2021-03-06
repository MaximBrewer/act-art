import axios from "axios";
window.axios = axios;
window.grid = {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1280,
    xl: 1440,
    xxl: 100000
};

window.lang = document.getElementsByTagName("html")[0].getAttribute("lang");
import { participate, changeWindow, init } from "./helpers/functions";
import { __ } from "./helpers/trans.js";

import React from "react";
import { render } from "react-dom";
import Flash from "./helpers/Flash";

// const Experts = lazy(() => import("./components/Experts"));

import WaterfallAjax from "./components/waterfall/WaterfallAjax";
import MovingGallery from "./components/moving/Gallery";
import Auctions from "./components/auction/Auctions";
import Auction from "./components/auction/Auction";
import Gallery from "./components/gallery/Gallery";
import AuctionsList from "./components/auction/AuctionsList";
import AuctionsProfile from "./components/auction/AuctionsProfile";

import Carousel from "./components/carousel/Carousel";
import PageCarousel from "./components/Carousel";

import SearchForm from "./components/SearchForm";

document.addEventListener("DOMContentLoaded", () => {
    render(<Flash />, document.getElementById("flashHolder"));
    if (window.innerWidth > 991) {
        !document.getElementById("galleryHolder") ||
            render(<MovingGallery />, document.getElementById("galleryHolder"));
    }
    !document.getElementById("actAuctions") ||
        render(
            <Auctions participate={participate} />,
            document.getElementById("actAuctions")
        );
    !document.getElementById("actAuctionsProfile") ||
        render(
            <AuctionsProfile participate={participate} />,
            document.getElementById("actAuctionsProfile")
        );

    let waterfalls = document.getElementsByClassName("act-waterfall");

    [].forEach.call(waterfalls, function(waterfall) {
        let data = {};
        for (let i in waterfall.dataset) {
            try {
                data[i] = JSON.parse(waterfall.dataset[i]);
            } catch (e) {
                data[i] = waterfall.dataset[i];
            }
        }
        render(<WaterfallAjax data={data} />, waterfall);
    });

    let auctionsLists = document.getElementsByClassName("act-auctions-list");

    [].forEach.call(auctionsLists, function(auctionsList) {
        render(
            <AuctionsList
                data={auctionsList.dataset}
                participate={participate}
            />,
            auctionsList
        );
    });

    let pcarousels = document.getElementsByClassName("carousel-wrapper");

    [].forEach.call(pcarousels, function(carousel) {
        render(<PageCarousel data={carousel.dataset} />, carousel);
    });

    let carousels = document.getElementsByClassName("act-carousel");

    [].forEach.call(carousels, function(carousel) {
        let data = {};
        for (let i in carousel.dataset) {
            try {
                data[i] = JSON.parse(carousel.dataset[i]);
            } catch (e) {
                data[i] = carousel.dataset[i];
            }
        }
        render(<Carousel data={data} />, carousel);
    });

    !document.getElementById("appAuction") ||
        render(
            <Auction
                data={document.getElementById("appAuction").dataset}
                participate={participate}
            />,
            document.getElementById("appAuction")
        );

    !document.getElementById("appGallery") ||
        render(<Gallery />, document.getElementById("appGallery"));

    init();
});
document.addEventListener("scroll", () => changeWindow());
window.addEventListener("resize", () => changeWindow());
