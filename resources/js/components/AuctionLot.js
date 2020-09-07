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

export default function AuctionLot() {

    const [state, setState] = useState({});
    const { id } = useParams();

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
        <div>
            <h3>ID: {id}</h3>
        </div>
    );
}