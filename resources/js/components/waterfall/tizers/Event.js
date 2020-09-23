import React from "react";

export default function Tizer(props) {
    const { data, item } = props;
    const url = "/events/" + item.id;

    return (
        <div className={`event-item`}>
            <div className="image-holder">
                <a
                    href={url}
                    className={`image`}
                    style={{
                        backgroundImage: "url(" + item.preview + ")"
                    }}
                ></a>
            </div>
            <a className="title" href={url}>
                {item.title}
            </a>
            <div className="subtitle">{item.excerpt}</div>
            <div className="date">{item.dates}</div>
            <div className="exhibit">{item.space.title}</div>
            <div className="address">{item.space.address}</div>
        </div>
    );
}
