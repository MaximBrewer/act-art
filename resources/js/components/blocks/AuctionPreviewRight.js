import React from "react";
import Countdown from "../Countdown";
export default function AuctionPreviewRight(props) {
    return (
        <div className="banner-announce">
            <div className="row">
                <div className="h3 col-md-38 col-lg-60">
                    {props.auction.sublime}
                </div>
                <div className="d-none d-md-block col-md-22 col-lg-60">
                    <Countdown date={props.auction.dateatom} />
                </div>
            </div>
            <div className="text-xs-center mb-3">
                <a
                    href={"/auctions/" + props.auction.id}
                    className="btn btn-danger"
                    onClick={e => {
                        e.preventDefault();
                        props.participate(props.auction.id);
                    }}
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
