/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
// require("./lang.js");
import axios from "axios";
window.axios = axios;

import Echo from "laravel-echo";

window.io = require("socket.io-client");

if (typeof io !== "undefined") {
    window.Echo = new Echo({
        broadcaster: "socket.io",
        host: window.location.hostname + ":6001",
        headers: {
            "X-CSRF-TOKEN": document.getElementsByName("csrf-token").content
        }
    });
}

import React, { useRef, lazy } from "react";
import { render } from "react-dom";

// const HomeGalleries = lazy(() => import("./components/HomeGalleries"));
// const HomeCarousel = lazy(() => import("./components/HomeCarousel"));
// const HomeWaterfall = lazy(() => import("./components/HomeWaterfall"));
// const HomeAnnounce = lazy(() => import("./components/HomeAnnounce"));
// const HomeNews = lazy(() => import("./components/HomeNews"));
// const HomeExperts = lazy(() => import("./components/HomeExperts"));

import { __ } from "./trans.js";
import Gallery from "./components/Gallery";
import HomeCarousel from "./components/HomeCarousel";
import HomeWaterfall from "./components/HomeWaterfall";
import HomeAnnounce from "./components/HomeAnnounce";
import News from "./components/News";
import Waterfall from "./components/Waterfall";
import Postsgrid from "./components/Postsgrid";
import Carousel from "./components/Carousel";
import HomeExperts from "./components/HomeExperts";

import SearchForm from "./components/SearchForm";

window.grid = {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1280,
    xl: 1440,
    xxl: 100000
};

window.lang = document.getElementsByTagName("html")[0].getAttribute("lang");

const calculateHeader = () => {
    let scrollTop =
            document.documentElement.scrollTop ||
            (document.body && document.body.scrollTop) ||
            0,
        header = document.getElementById("header"),
        headerTop = document.getElementById("header-top");

    document.getElementById("header-full-menu").style.paddingTop =
        headerTop.offsetHeight + "px";

    let buttons = document.querySelectorAll("#header-top .btn");
    if (scrollTop + headerTop.offsetHeight > header.offsetHeight) {
        headerTop.classList.remove("bg-dark");
        headerTop.classList.add("short-header-top");
        [].forEach.call(buttons, function(button) {
            button.classList.remove("btn-default-inverse");
            button.classList.add("btn-primary-inverse");
        });
        document.getElementById("header-content").classList.remove("bg-dark");
    } else {
        headerTop.classList.add("bg-dark");
        headerTop.classList.remove("short-header-top");
        [].forEach.call(buttons, function(button) {
            button.classList.remove("btn-primary-inverse");
            button.classList.add("btn-default-inverse");
        });
        document.getElementById("header-content").classList.add("bg-dark");
    }
};
const changeWindow = () => {
    let mf = document.getElementById("header-full-menu-fixed");
    if (mf) {
        mf.remove();
    }
    if (document.body.classList.contains("home")) {
        if (window.innerWidth > 1279) {
            document.getElementById("header-full-menu").style.display = "block";
            calculateHeader();
        } else {
            let headerTop = document.getElementById("header-top"),
                buttons = document.querySelectorAll("#header-top .btn");
            headerTop.classList.remove("bg-dark");
            headerTop.classList.add("short-header-top");
            [].forEach.call(buttons, function(button) {
                button.classList.remove("btn-default-inverse");
                button.classList.add("btn-primary-inverse");
            });
            document.getElementById("header-full-menu").style.display = "none";
            document
                .getElementById("header-content")
                .classList.remove("bg-dark");
        }
    } else {
        let buttons = document.querySelectorAll("#header-top .btn");
        [].forEach.call(buttons, function(button) {
            button.classList.remove("btn-default-inverse");
            button.classList.add("btn-primary-inverse");
        });
    }
    let scrollTop =
        document.documentElement.scrollTop ||
        (document.body && document.body.scrollTop) ||
        0;
    let stickies = document.getElementsByClassName("sticky-section");
    let bgts = document.getElementsByClassName("background-text");

    if (window.innerWidth > 1279) {
        [].forEach.call(stickies, function(sticky) {
            sticky.style.display = "flex";
            let c = sticky.parentNode,
                s = sticky.parentNode.parentNode,
                sp = sticky.children[0];
            if (
                s.offsetTop + (s.offsetHeight - c.offsetHeight) / 2 <
                scrollTop + 50
            ) {
                if (
                    s.offsetTop +
                        s.offsetHeight -
                        sp.offsetWidth -
                        (s.offsetHeight - c.offsetHeight) / 2 >
                    scrollTop + 90
                ) {
                    sticky.style.marginLeft =
                        (s.offsetWidth - c.offsetWidth) / 2 + "px";
                    sticky.style.top = "90px";
                    sticky.style.position = "fixed";
                } else {
                    sticky.style.marginLeft = "0";
                    sticky.style.top =
                        c.offsetHeight - sp.offsetWidth - 50 + "px";
                    sticky.style.position = "absolute";
                }
            } else {
                sticky.style.marginLeft = "0";
                sticky.style.top = "0";
                sticky.style.position = "absolute";
            }
        });
        [].forEach.call(bgts, function(bgt) {
            bgt.style.display = "block";
            let s = bgt.parentNode;
            if (s.offsetTop < scrollTop + 300) {
                if (s.offsetTop - scrollTop > 100) {
                    bgt.style.transform =
                        "translateX(" +
                        (80 * (s.offsetTop - scrollTop - 100)) / 200 +
                        "%)";
                } else {
                    bgt.style.transform = "translateX(0%)";
                }
            } else {
                bgt.style.transform = "translateX(80%)";
            }
        });
    }
};
document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth > 991) {
        !document.getElementById("galleryHolder") ||
            render(<Gallery />, document.getElementById("galleryHolder"));
    }
    !document.getElementById("announceSlider") ||
        render(<HomeAnnounce />, document.getElementById("announceSlider"));
    !document.getElementById("bannerCarousel") ||
        render(<HomeCarousel />, document.getElementById("bannerCarousel"));
    !document.getElementById("artWaterfall") ||
        render(<HomeWaterfall />, document.getElementById("artWaterfall"));
    !document.getElementById("newsSlider") ||
        render(
            <News data={document.getElementById("newsSlider").dataset} />,
            document.getElementById("newsSlider")
        );
    if (window.innerWidth > 767) {
        !document.getElementById("expertsSlider") ||
            render(<HomeExperts />, document.getElementById("expertsSlider"));
    }
    changeWindow();
    setTimeout(() => document.getElementById("sitePreloader").remove(), 700);

    let carousels = document.getElementsByClassName("carousel-wrapper");

    [].forEach.call(carousels, function(carousel) {
        render(<Carousel data={carousel.dataset} />, carousel);
    });

    let waterfalls = document.getElementsByClassName("waterfall");

    [].forEach.call(waterfalls, function(waterfall) {
        let data = {
            count: JSON.parse(waterfall.dataset.count),
            firstCount: JSON.parse(waterfall.dataset.firstCount),
            view: JSON.parse(waterfall.dataset.view),
            entity: waterfall.dataset.entity,
            category: waterfall.dataset.category,
            preview: waterfall.dataset.preview
        }
        render(<Waterfall data={data} />, waterfall);
    });

    document.getElementById("burgerMenuToggle").addEventListener("click", e => {
        if (window.innerWidth > 1279) {
            let mf = document.getElementById("header-full-menu-fixed");
            if (mf) {
                mf.remove();
            } else {
                let menu = document
                        .getElementById("header-full-menu")
                        .cloneNode(true),
                    headerTop = document.getElementById("header-top");
                menu.id = "header-full-menu-fixed";
                menu.style.marginTop = headerTop.offsetHeight + "px";
                menu.style.paddingTop = "0";
                menu.style.position = "fixed";
                menu.style.display = "block";
                menu.style.left = "0";
                menu.style.top = "0";
                menu.style.background = "white";
                menu.style.width = "100%";
                menu.style.zIndex = "100";
                menu.style.paddingBottom = "2.5rem";
                document.getElementById("header").appendChild(menu);
            }
        } else {
            document.getElementById("mobileMenu").style.display = "block";
            document.body.style.overflowY = "hidden";
        }
    });

    let closeButtons = document.getElementsByClassName("close-mobile-menu");

    [].forEach.call(closeButtons, function(bgt) {
        bgt.addEventListener("click", e => {
            document.getElementById("mobileMenu").style.display = "none";
            document.body.style.overflowY = "auto";
        });
    });

    document.getElementById("searchTopToggle").addEventListener("click", e => {
        e.preventDefault();
        let form = document.getElementById("searchForm").cloneNode(true);
        form.id = "formSearchFull";
        form.classList.add("form-search-full");
        form.classList.add("py-2");
        form.classList.add("container-fluid");
        document.getElementById("header-top").appendChild(form);
        let btn = form.getElementsByClassName("close-search-form");
        form.querySelector("input[type=text]").focus();
        !btn.length ||
            btn[0].addEventListener("click", e => {
                e.preventDefault();
                document.getElementById("formSearchFull").remove();
            });
    });

    // console.log(Echo)
    // console.log(window.Echo)
    window.Echo.channel("Auction.1").listen("AuctionUpdate", function(e) {
        //that.$emit("gotAuction", e.auction);
    });
});
document.addEventListener("scroll", () => changeWindow());
window.addEventListener("resize", () => {
    !document.getElementById("artWaterfall") ||
        render(<HomeWaterfall />, document.getElementById("artWaterfall"));
    changeWindow();
});
