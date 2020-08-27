import React from "react";
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

export default function AuctionPreviewRight(props) {
    return (
        <div className="banner-announce">
            <div className="row">
                <div className="h3 col-md-38 col-lg-60">
                    {props.auction.sublime}
                </div>
                <div className="d-none d-md-block col-md-22 col-lg-60">
                    <Countdown
                        date={props.auction.dateatom}
                        renderer={renderer}
                    />
                </div>
            </div>
            <div className="text-xs-center mb-3">
                <a
                    href={"/auctions/" + props.auction.id + "/online"}
                    className="btn btn-danger btn-lg"
                >
                    {__("PARTICIPATE")}
                </a>
            </div>
            <a
                href={"/auctions/" + props.auction.id + "/lots"}
                className="h5_underline d-none d-xl-block"
            >
                {__("View lots")} →
            </a>
        </div>
    );
}
