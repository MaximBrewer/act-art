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

import React from "react";
import { render } from "react-dom";
import Flash from "./components/Flash";
import { __ } from "./trans.js";

// const Experts = lazy(() => import("./components/Experts"));

import Gallery from "./components/Gallery";
import Auctions from "./components/Auctions";
import Auction from "./components/Auction";
import AuctionsList from "./components/AuctionsList";
import AuctionsProfile from "./components/AuctionsProfile";
import Announce from "./components/Carousel";

import News from "./components/News";
import Waterfall from "./components/waterfall/Waterfall";
import Carousel from "./components/Carousel";
import Experts from "./components/Experts";
import LotGallery from "./components/LotGallery";

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
const participate = id => {
    location.href = "/auctions/" + id;
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
                sp = sticky.children[0],
                egr = c.getBoundingClientRect();
            if (egr.top < 32) {
                if (egr.top + egr.height - 80 > 80 + sp.offsetWidth) {
                    sticky.style.position = "fixed";
                    sticky.style.top = 80 + "px";
                    sticky.style.bottom = "auto";
                } else {
                    sticky.style.marginLeft = "0";
                    sticky.style.top = "auto";
                    sticky.style.bottom = sp.offsetWidth - 24 + 80 + "px";
                    sticky.style.position = "absolute";
                }
            } else {
                sticky.style.marginLeft = "0";
                sticky.style.top = "48px";
                sticky.style.bottom = "auto";
                sticky.style.position = "absolute";
            }
        });
        [].forEach.call(bgts, function(bgt) {
            bgt.style.display = "block";
            let egr = bgt.getBoundingClientRect();
            if (egr.top < 500) {
                if (egr.top > 100) {
                    bgt.style.transform =
                        "translateX(" + (egr.top - 100) * 80 / 400 + "%)";
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
    }
};

document.addEventListener("DOMContentLoaded", () => {
    render(<Flash />, document.getElementById("flashHolder"));
    if (window.innerWidth > 991) {
        !document.getElementById("galleryHolder") ||
            render(<Gallery />, document.getElementById("galleryHolder"));
    }
    !document.getElementById("announceSlider") ||
        render(<Announce />, document.getElementById("announceSlider"));
    !document.getElementById("actAuctions") ||
        render(
            <Auctions participate={participate} />,
            document.getElementById("actAuctions")
        );
    // !document.getElementById("artWaterfall") ||
    //     render(<HomeWaterfall />, document.getElementById("artWaterfall"));
    !document.getElementById("newsSlider") ||
        render(
            <News data={document.getElementById("newsSlider").dataset} />,
            document.getElementById("newsSlider")
        );
    if (window.innerWidth > 767) {
        !document.getElementById("expertsSlider") ||
            render(<Experts />, document.getElementById("expertsSlider"));
    }

    let sliders = document.getElementsByClassName("act-slider");

    [].forEach.call(sliders, function(slider) {
        render(<Slider data={slider.dataset} />, slider);
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

    let lotGalleries = document.getElementsByClassName("lot-gallery");

    [].forEach.call(lotGalleries, function(lotGallery) {
        render(<LotGallery data={lotGallery.dataset} />, lotGallery);
    });

    let auctionsProfiles = document.getElementsByClassName(
        "act-auctions-profile"
    );

    [].forEach.call(auctionsProfiles, function(auctionsProfile) {
        render(
            <AuctionsProfile data={auctionsProfile.dataset} />,
            auctionsProfile
        );
    });

    !document.getElementById("appAuction") ||
        render(
            <Auction
                data={document.getElementById("appAuction").dataset}
                participate={participate}
            />,
            document.getElementById("appAuction")
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
        render(<Waterfall data={data} />, waterfall);
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

    setTimeout(() => changeWindow(), 700);
    setTimeout(() => document.getElementById("sitePreloader").remove(), 700);

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

    window.Echo.channel("Auction").listen("Auction", function(e) {
        window.dispatchEvent(
            new CustomEvent("auction", {
                detail: {
                    auction: e.auction
                }
            })
        );
    });

    window.Echo.channel("Lot").listen("Lot", function(e) {
        window.dispatchEvent(
            new CustomEvent("lot", {
                detail: {
                    lot: e.lot
                }
            })
        );
    });
});
document.addEventListener("scroll", () => changeWindow());
window.addEventListener("resize", () => {
    !document.getElementById("artWaterfall") ||
        render(<HomeWaterfall />, document.getElementById("artWaterfall"));
    changeWindow();
});
window.scrollToElement = e => {
    let elem;
    if (typeof e == "string") elem = document.getElementById(e);
    else elem = document.getElementById(e.dataset.id);
    if (!elem) return false;
    let toY =
            (elem.getBoundingClientRect().top +
                document.scrollingElement.scrollTop) *
                1 -
            68,
        fromY = document.scrollingElement.scrollTop * 1,
        scrollY = fromY * 1,
        oldTimestamp = null;
    function step(newTimestamp) {
        if (oldTimestamp !== null) {
            if (fromY < toY) {
                scrollY += 100;
                if (scrollY >= toY) {
                    document.scrollingElement.scrollTop = toY;
                    return false;
                }
                document.scrollingElement.scrollTop = scrollY;
            } else {
                scrollY -= 100;
                document.scrollingElement.scrollTop = scrollY;
                if (scrollY <= toY) {
                    document.scrollingElement.scrollTop = toY;
                    return false;
                }
            }
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
    return false;
};
