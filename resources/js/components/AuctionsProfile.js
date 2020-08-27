import React, { useState, useEffect } from "react";
import Countdown, {
    zeroPad,
    calcTimeDelta,
    formatTimeDelta
} from "react-countdown";

const declOfNum = (number, titles) => {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[
        number % 100 > 4 && number % 100 < 20
            ? 2
            : cases[number % 10 < 5 ? number % 10 : 5]
    ];
};

// Random component
const Completionist = () => (
    <div className="banner-counter d-flex">You are good to go!</div>
);

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

export default function AuctionProfile(props) {
    const [state, setState] = useState({
        auctions: []
    });

    useEffect(() => {
        axios
            .get(
                "/api/" +
                    window.lang +
                    "/auctions/coming?ids=" + (user.auctions.length ? user.auctions.join(",") : "0")
            )
            .then(res => {
                setState({
                    auctions: res.data.auctions
                });
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <React.Fragment>
            {state.auctions.map((item, index) => (
                <div className="auction-preview" key={index}>
                    <div
                        className="banner-image"
                        style={{
                            backgroundImage: 'url("' + item.thumbnail + '")'
                        }}
                    >
                        <div className="countdown-wrapp">
                            <Countdown
                                date={item.dateatom}
                                renderer={renderer}
                            />
                        </div>
                        <div className="banner-inner-text">
                            <div className="h1">{item.announce_text}</div>
                            <div className="h2">{item.date}</div>
                        </div>
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
}
