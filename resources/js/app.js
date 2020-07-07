/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
// require("./lang.js");
import axios from "axios";
window.axios = axios;

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React, { useRef, lazy } from "react";
// import React, { useRef } from "react";
import { render } from "react-dom";

// const HomeGalleries = lazy(() => import("./components/HomeGalleries"));
// const HomeCarousel = lazy(() => import("./components/HomeCarousel"));
// const HomeWaterfall = lazy(() => import("./components/HomeWaterfall"));
// const HomeAnnounce = lazy(() => import("./components/HomeAnnounce"));
// const HomeNews = lazy(() => import("./components/HomeNews"));
// const HomeExperts = lazy(() => import("./components/HomeExperts"));
import HomeGalleries from "./components/HomeGalleries";
import HomeCarousel from "./components/HomeCarousel";
import HomeWaterfall from "./components/HomeWaterfall";
import HomeAnnounce from "./components/HomeAnnounce";
import HomeNews from "./components/HomeNews";
import HomeExperts from "./components/HomeExperts";

const calculateHeader = () => {
    console.log("calculate");
    let scrollTop =
            document.documentElement.scrollTop ||
            (document.body && document.body.scrollTop) ||
            0,
        header = document.getElementById("header"),
        headerTop = document.getElementById("header-top");

    document.getElementById("header-full-menu").style.paddingTop =
        headerTop.offsetHeight + "px";

    let buttons = document.querySelectorAll("#header-top button");
    if (scrollTop + headerTop.offsetHeight > header.offsetHeight) {
        headerTop.classList.remove("bg-dark");
        headerTop.classList.add("short-header-top");
        [].forEach.call(buttons, function(button) {
            button.classList.remove("btn-default-inverse");
            button.classList.add("btn-primary-inverse");
        });
        document.getElementById("header-top-full").style.display = "none";
        document.getElementById("header-top-short").style.display = "block";
    } else {
        headerTop.classList.add("bg-dark");
        headerTop.classList.remove("short-header-top");
        [].forEach.call(buttons, function(button) {
            button.classList.remove("btn-primary-inverse");
            button.classList.add("btn-default-inverse");
        });
        document.getElementById("header-top-short").style.display = "none";
        document.getElementById("header-top-full").style.display = "block";
    }
};
const changeWindow = () => {
    let mf = document.getElementById("header-full-menu-fixed");
    if (mf) mf.remove();
    if (document.body.classList.contains("home")) {
        if (window.innerWidth > 1919) {
            document.getElementById("header-full-menu").style.display = "block";
            calculateHeader();
        } else {
            let headerTop = document.getElementById("header-top"),
                buttons = document.querySelectorAll("#header-top button");
            headerTop.classList.remove("bg-dark");
            headerTop.classList.add("short-header-top");
            [].forEach.call(buttons, function(button) {
                button.classList.remove("btn-default-inverse");
                button.classList.add("btn-primary-inverse");
            });
            document.getElementById("header-full-menu").style.display = "none";
            document.getElementById("header-top-full").style.display = "none";
            document.getElementById("header-top-short").style.display = "block";
        }
    }
    let scrollTop =
        document.documentElement.scrollTop ||
        (document.body && document.body.scrollTop) ||
        0;
    let stickies = document.getElementsByClassName("sticky-section");
    let bgts = document.getElementsByClassName("background-text");

    if (window.innerWidth > 1279) {
        [].forEach.call(stickies, function(sticky) {
            sticky.style.display = "block";
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
    } else {
        [].forEach.call(stickies, function(sticky) {
            sticky.style.display = "none";
        });
        [].forEach.call(bgts, function(bgt) {
            bgt.style.display = "none";
        });
    }
};
document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth > 1279) {
        !document.getElementById("galleryHolder") ||
            render(<HomeGalleries />, document.getElementById("galleryHolder"));
    }
    !document.getElementById("announceSlider") ||
        render(<HomeAnnounce />, document.getElementById("announceSlider"));
    !document.getElementById("bannerCarousel") ||
        render(<HomeCarousel />, document.getElementById("bannerCarousel"));
    !document.getElementById("artWaterfall") ||
        render(<HomeWaterfall />, document.getElementById("artWaterfall"));
    !document.getElementById("newsSlider") ||
        render(<HomeNews />, document.getElementById("newsSlider"));
    if (window.innerWidth > 767) {
        !document.getElementById("expertsSlider") ||
            render(<HomeExperts />, document.getElementById("expertsSlider"));
    }
    changeWindow();
    setTimeout(() => document.getElementById("sitePreloader").remove(), 1100);

    document.getElementById("burgerMenuToggle").addEventListener("click", e => {
        let mf = document.getElementById("header-full-menu-fixed");
        if (mf) mf.remove();
        else {
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
    });

    document.getElementById("searchTopToggle").addEventListener("click", e => {
        e.preventDefault();
    });
});
document.addEventListener("scroll", () => changeWindow());
window.addEventListener("resize", () => {
    !document.getElementById("artWaterfall") ||
        render(<HomeWaterfall />, document.getElementById("artWaterfall"));
    changeWindow();
});
