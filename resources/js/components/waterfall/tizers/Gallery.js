import React from "react";
import { Favorite, Hammer } from "../../Icons";

export default function Tizer(props) {
    const { data, item, toFavorite, favorites } = props;
    const url =
        item.status == "gallery"
            ? "/gallery/lot/" + item.id
            : "/auctions/" + item.auction_id + "/lot/" + item.id;

    return (
        <div className={`gallery-item`}>
            <div className="image-holder">
                <a
                    href={url}
                    className={`image`}
                    style={{
                        backgroundImage: "url(" + item.thumbnail + ")",
                        paddingTop: (item.pxheight / item.pxwidth) * 100 + "%"
                    }}
                >
                    <Favorite {...props} />
                </a>
            </div>
            <a className="title" href={url}>
                {item.title}
            </a>
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
        </div>
    );
}
