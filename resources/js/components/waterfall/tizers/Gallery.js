import React from "react";
import { Favorite, Hammer } from "../../Icons";
import {
    Link
} from "react-router-dom";

export default function Tizer(props) {
    const { data, item } = props;
    const url =
        item.status == "gallery"
            ? "/gallery/lot/" + item.id
            : "/auctions/" + item.auction_id + "/lot/" + item.id;

    return (
        <div className={`gallery-item`}>
            <div className="image-holder">
                {data.gallery ? (
                    <Link
                        className={`image l`}
                        style={{
                            backgroundImage: "url(" + item.thumbnail + ")",
                            paddingTop:
                                (item.pxheight / item.pxwidth) * 100 + "%"
                        }}
                        to={url}
                    >
                        <Favorite {...props} />
                    </Link>
                ) : (
                    <a
                        href={url}
                        className={`image a`}
                        style={{
                            backgroundImage: "url(" + item.thumbnail + ")",
                            paddingTop:
                                (item.pxheight / item.pxwidth) * 100 + "%"
                        }}
                    >
                        <Favorite {...props} />
                    </a>
                )}
            </div>
            {data.gallery ? (
                <Link className={`title`} to={url}>
                    {item.title}
                </Link>
            ) : (
                <a href={url} className={`title`}>
                    {item.title}
                </a>
            )}
            <div className="d-flex justify-content-between">
                <a className="author" href={item.author_url}>
                    {item.author}
                </a>
                <div className="price">
                    <Hammer />
                    <span>
                        ${item.bets.length ? item.bets[0].bet : item.price}
                    </span>
                </div>
            </div>
            <div className="matherial">
                {item.materials.map((m, mi) => (
                    <span key={mi}>{m.title}</span>
                ))}
            </div>
            <div className="size">
                {item.width} х {item.height}
                {__("MEASURE_CM")}
            </div>
            {data.showStatus ? (
                data.gallery ? (
                    <Link className={item.status + ` status`} to={url}>
                        {__("#status-" + item.status + "#")}
                    </Link>
                ) : (
                    <a className={item.status + ` status`} href={url}>
                        {__("#status-" + item.status + "#")}
                    </a>
                )
            ) : (
                ``
            )}
        </div>
    );
}
