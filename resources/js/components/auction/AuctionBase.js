import React from "react";
import Waterfall from "../Waterfall";
import AuctionComingHeader from "./coming/Header.js";
import AuctionComingInfo from "./coming/Info.js";
import AuctionComingFooter from "./coming/Footer.js";
import AuctionOnlineHeader from "./online/Header.js";
import AuctionOnlineInfo from "./online/Info.js";
import AuctionOnlineFooter from "./online/Footer.js";
import AuctionArchiveHeader from "./archive/Header.js";
import AuctionArchiveInfo from "./archive/Info.js";
import AuctionArchiveFooter from "./archive/Footer.js";

export default function AuctionBase(props) {
    const { auction } = props;
    const Footer = props => {
        if (props.auction.title)
            switch (props.auction.status) {
                case "started":
                    return <AuctionOnlineFooter {...props} />;
                case "finished":
                    return <AuctionArchiveFooter {...props} />;
                case "coming":
                    return <AuctionComingFooter {...props} />;
            }
        return false;
    };
    const Header = props => {
        if (props.auction.title)
            switch (props.auction.status) {
                case "started":
                    return <AuctionOnlineHeader {...props} />;
                case "finished":
                    return <AuctionArchiveHeader {...props} />;
                case "coming":
                    return <AuctionComingHeader {...props} />;
            }
        return false;
    };
    const Info = props => {
        if (props.auction.title)
            switch (props.auction.status) {
                case "started":
                    return <AuctionOnlineInfo {...props} />;
                case "finished":
                    return <AuctionArchiveInfo {...props} />;
                case "coming":
                    return <AuctionComingInfo {...props} />;
            }
        return false;
    };
    return (
        <section className="auction-page-wrapper">
            {auction ? (
                <div className={`status-` + auction.status}>
                    <Header {...props} />
                    <div className="sticky-wrapper">
                        <div className="sticky-section">
                            <span>{auction.title}</span>
                        </div>
                        <Info {...props} />
                        <div className="auction-page-inner">
                            <div className="auction-works-list my-5">
                                <div className="container">
                                    <div className="h3">
                                        {__("Auction lots")}
                                    </div>
                                    <Waterfall
                                        data={{
                                            auction: auction,
                                            entity: "lots",
                                            action: "add",
                                            preview: "preview",
                                            sortable: true,
                                            tizerView: "auction",
                                            limit: {
                                                xs: 1200,
                                                sm: 1200,
                                                md: 1200,
                                                lg: 1200,
                                                xl: 1200,
                                                xxl: 1200
                                            },
                                            view: {
                                                xs: 1,
                                                sm: 2,
                                                md: 2,
                                                lg: 4,
                                                xl: 4,
                                                xxl: 4
                                            },
                                            action: "none"
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="my-5">
                                <Footer {...props} />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </section>
    );
}
