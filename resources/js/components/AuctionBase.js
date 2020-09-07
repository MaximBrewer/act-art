import React, { useState, useEffect, useRef } from "react";
import { propTypes } from "react-img-zoom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import Auction from "./Auction";
import Countdown, {
    zeroPad,
    calcTimeDelta,
    formatTimeDelta
} from "react-countdown";
import Waterfall from "./Waterfall";

// Random component
const Completionist = () => (
    <div className="banner-counter d-flex">You are good to go!</div>
);

const declOfNum = (number, titles) => {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[
        number % 100 > 4 && number % 100 < 20
            ? 2
            : cases[number % 10 < 5 ? number % 10 : 5]
    ];
};

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (window.innerWidth < window.grid.sm) return "";

    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return (
            <div className="banner-counter-wrapper">
                <p>{__("ДО НАЧАЛА АУКЦИОНА:")}</p>
                <div className="banner-counter d-flex">
                    <div className="days">
                        <div className="number h5">{zeroPad(days)}</div>
                        <small>
                            {declOfNum(days, [
                                __("день"),
                                __("дня"),
                                __("дней")
                            ])}
                        </small>
                    </div>
                    <div className="separator h5"></div>
                    <div className="ours">
                        <div className="number h5">{zeroPad(hours)}</div>
                        <small>
                            {declOfNum(hours, [
                                __("час"),
                                __("часа"),
                                __("часов")
                            ])}
                        </small>
                    </div>
                    <div className="separator h5">:</div>
                    <div className="minutes">
                        <div className="number h5">{zeroPad(minutes)}</div>
                        <small>
                            {declOfNum(minutes, [
                                __("мин."),
                                __("мин."),
                                __("мин.")
                            ])}
                        </small>
                    </div>
                    <div className="separator h5">:</div>
                    <div className="seconds">
                        <div className="number h5">{zeroPad(seconds)}</div>
                        <small>
                            {declOfNum(seconds, [
                                __("сек."),
                                __("сек."),
                                __("сек.")
                            ])}
                        </small>
                    </div>
                </div>
            </div>
        );
    }
};

export default function AuctionBase(props) {
    return (
        <React.Fragment>
            <Header auction={props.auction} />
            <div className="auction-works-list">
                <div class="container">
                    <Waterfall
                        data={{
                            auction: props.auction.id,
                            entity: "lots",
                            action: "add",
                            preview: "preview",
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
                                xl: 3,
                                xxl: 3
                            },
                            action: "add"
                        }}
                    />
                </div>
            </div>
            <Footer auction={props.auction} />
        </React.Fragment>
    );
}
const Footer = props => {
    return false;
};
const Header = props => {
    if (props.auction.title)
        switch (props.auction.status) {
            case "started":
                return (
                    <section
                        className="auction-announce"
                        style={{
                            backgroundImage:
                                "url(" + props.auction.thumbnail + ")",
                            backgroundPosition: "top center"
                        }}
                    >
                        <div className="darkener">
                            <div className="container">
                                <div className="h1">{props.auction.title}</div>
                                <div className="h3">
                                    {props.auction.date} &nbsp;&nbsp;&nbsp;
                                    {__("Bidding is over")}
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case "finished":
                return (
                    <section
                        className="auction-announce auction-coming"
                        style={{
                            backgroundImage:
                                "url(" + props.auction.thumbnail + ")",
                            backgroundPosition: "top center"
                        }}
                    >
                        <div className="darkener">
                            <div className="container">
                                <div className="h1">{props.auction.title}</div>
                                <div className="h3">{props.auction.date}</div>
                            </div>
                        </div>
                    </section>
                );
            case "coming":
                return (
                    <section
                        className="auction-announce auction-coming"
                        style={{
                            backgroundImage:
                                "url(" + props.auction.thumbnail + ")",
                            backgroundPosition: "top center"
                        }}
                    >
                        <div className="darkener">
                            <div className="container">
                                <Countdown
                                    date={props.auction.dateatom}
                                    renderer={renderer}
                                />
                                <div className="h1">{props.auction.title}</div>
                                <a
                                    href={"/auctions/" + props.auction.id}
                                    className="btn btn-danger mb-3"
                                    onClick={e => {
                                        e.preventDefault();
                                        props.participate(props.auction.id);
                                    }}
                                >
                                    {__("PARTICIPATE")}
                                </a>
                                <div className="h3">
                                    {props.auction.date} &nbsp;&nbsp;&nbsp;
                                </div>
                            </div>
                        </div>
                    </section>
                );
        }
    return false;
};
