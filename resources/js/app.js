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
import React, { useRef } from "react";
import { render } from "react-dom";
import HomeGalleries from "./components/HomeGalleries";
import HomeCarousel from "./components/HomeCarousel";
import HomeWaterfall from "./components/HomeWaterfall";

!document.getElementById("galleryHolder") ||
    render(<HomeGalleries />, document.getElementById("galleryHolder"));
!document.getElementById("bannerCarousel") ||
    render(<HomeCarousel />, document.getElementById("bannerCarousel"));
!document.getElementById("artWaterfall") ||
    render(<HomeWaterfall />, document.getElementById("artWaterfall"));
const scrollWindow = () => {
    let scrollTop =
            document.documentElement.scrollTop ||
            (document.body && document.body.scrollTop) ||
            0,
        header = document.getElementById("header");
    if (scrollTop > document.getElementById("header-top").offsetHeight) {
        // header.classList.add("fixed");
    } else {
        // header.classList.remove("fixed");
    }
    let stickies = document.getElementsByClassName("sticky-section");

    [].forEach.call(stickies, function(sticky) {
        let c = sticky.parentNode;
        let s = sticky.parentNode.parentNode;
        let sp = sticky.children[0];
        if (
            s.offsetTop + (s.offsetHeight - c.offsetHeight) / 2 <
            scrollTop + 50
        ) {
            if (
                s.offsetTop +
                    s.offsetHeight -
                    sp.offsetWidth -
                    (s.offsetHeight - c.offsetHeight) / 2 >
                scrollTop + 50
            ) {
                sticky.style.marginLeft =
                    (s.offsetWidth - c.offsetWidth) / 2 + "px";
                sticky.style.top = "50px";
                sticky.style.position = "fixed";
            } else {
                sticky.style.marginLeft = "0";
                sticky.style.top = c.offsetHeight - sp.offsetWidth + "px";
                sticky.style.position = "absolute";
            }
        } else {
            sticky.style.marginLeft = "0";
            sticky.style.top = "0";
            sticky.style.position = "absolute";
        }
    });
    let bgts = document.getElementsByClassName("background-text");

    [].forEach.call(bgts, function(bgt) {
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
};
document.addEventListener("load", () => scrollWindow());
document.addEventListener("scroll", () => scrollWindow());
