import React, { useState, useEffect, useRef } from "react";

export default function Galleries(props) {
    const { items, addGallery, cols, rows, size } = props;

    return (
        <div
            className="gallery-body"
            style={{
                width: cols * size + "px",
                height: rows * size + "px"
            }}
        >
            {props.items.map((item, index) => (
                <div
                    className={"picture"}
                    key={index}
                    style={{
                        width: item.w * size + "px",
                        height: item.h * size + "px",
                        left: item.l * size + "px",
                        top: item.t * size + "px",
                        backgroundColor: item.bg,
                        backgroundImage: `url(` + item.path + `)`
                    }}
                >
                    <div className="picture-inner">
                        <a
                            href={item.bg}
                            target="_self"
                            className="lookFullSize"
                        >
                            <span className="ico-holder">
                                <span className="ia icon-logo-eye"></span>
                            </span>
                        </a>
                        <div className="pic-description">
                            <div className="tag">{item.tag}</div>
                            <div className="title">{item.title}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
