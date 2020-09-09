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

export default function AuctionLots(props) {
    const [state, setState] = useState({});

    useEffect(() => {
        // axios
        //     .get("/api/" + window.lang + "/auctions/coming")
        //     .then(res => {
        //         setState({
        //             slideIndex: 0,
        //             slidesTotal: res.data.auctions.length,
        //             auctions: res.data.auctions
        //         });
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
    }, []);

    return (
        <div>200</div>
    );
}