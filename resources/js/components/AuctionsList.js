import React, { useState, useEffect } from "react";
import AuctionPreviewLeft from "./blocks/AuctionPreviewLeft";
import AuctionPreviewRight from "./blocks/AuctionPreviewRight";

export default function AuctionList(props) {
    const [state, setState] = useState({
        auctions: []
    });

    useEffect(() => {
        axios
            .get("/api/" + window.lang + "/auctions/coming?attr=" + props.data.attr)
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
                <div className="row auction-preview py-4"  key={index}>
                    <div className="col-xl-40 col-xxl-38">
                        <hr className="d-lg-none" />
                        <AuctionPreviewLeft auction={item} />
                    </div>
                    <div className="col-xl-20 col-xxl-22">
                        <AuctionPreviewRight auction={item} />
                        <hr className="d-lg-none" />
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
}
