import React, { useState, useEffect } from "react";
import AuctionPreviewLeft from "./blocks/AuctionPreviewLeft";
import AuctionPreviewRight from "./blocks/AuctionPreviewRight";

export default function AuctionList(props) {
    const [state, setState] = useState({
        auctions: []
    });

    useEffect(() => {
        let url = "/api/" + window.lang + "/auctions/";
        if (props.data.archive) url += "archive";
        else if (props.data.attr) url += "coming/?attr=" + props.data.attr;
        axios
            .get(url)
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
                <div className="row auction-preview py-4" key={index}>
                    <div className="col-xl-40 col-xxl-38">
                        <div className="left-auction-side">
                            <hr className="d-xl-none" />
                            <AuctionPreviewLeft
                                auction={item}
                                participate={props.participate}
                            />
                        </div>
                    </div>
                    <div className="col-xl-20 col-xxl-22">
                        <div className="right-auction-side">
                            <AuctionPreviewRight
                                auction={item}
                                participate={props.participate}
                            />
                            <hr className="d-xl-none" />
                        </div>
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
}
