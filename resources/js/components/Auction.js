import React, { useState, useEffect, useRef } from "react";
import { propTypes } from "react-img-zoom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useParams,
    useLocation
} from "react-router-dom";

import AuctionBase from "./auction/AuctionBase";
import AuctionLots from "./auction/AuctionLots";
import AuctionLot from "./auction/AuctionLot";

export default function Auction(props) {
    const [state, setState] = useState({
        auction: null
    });

    const updateAuction = event => {
        setState(prevState => {
            return {
                ...prevState,
                auction: event.detail.auction
            };
        });
    };

    useEffect(() => {
        axios
            .get("/api/" + window.lang + "/auctions/" + props.data.id)
            .then(res => {
                setState({
                    auction: res.data.auction
                });
            })
            .catch(err => {
                console.log(err);
            });
        window.addEventListener("auction", updateAuction);
    }, []);

    return (
        <Router>
            <Switch>
                <Route exact path={`/auctions/` + props.data.id}>
                    <AuctionBase
                        auction={state.auction}
                        participate={props.participate}
                    />
                </Route>
                <Route exact path={`/auctions/` + props.data.id + `/lots`}>
                    <AuctionLots
                        auction={state.auction}
                        participate={props.participate}
                    />
                </Route>
                <Route exact path={`/auctions/` + props.data.id + `/lots/:id`}>
                    <AuctionLot
                        auction={state.auction}
                        participate={props.participate}
                    />
                </Route>
            </Switch>
        </Router>
    );
}
