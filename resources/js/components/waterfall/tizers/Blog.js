import React from "react";

export default function Tizer(props) {
    const { data, item } = props;

    return (
        <div className="blog-item">
            <div className="category-date">
                <div className="category">{item.category}</div>
                <div className="date">{item.date}</div>
            </div>
            <a
                className="image"
                style={{
                    backgroundImage: "url(" + item.thumbnail + ")"
                }}
                href={item.url}
            ></a>
            <a href={item.url}>
                <div className="title">{item.title}</div>
            </a>
            <div className="excerpt">{item.excerpt}</div>
            <div className="link">
                <a href={item.url}>{__("READ_MORE")}</a>
            </div>
        </div>
    );
}
