import React, { useState, useEffect, useRef } from "react";

export default function Postsgrid(props) {
    const [state, setState] = useState({
        items: []
    });

    const addItems = page => {
        axios
            .get(
                "/api/" +
                    window.lang +
                    "/posts?entity=post&category=both&offset=0&limit=20"
            )
            .then(res => {
                let items = [];
                res.data.posts.map((item, index) => {
                    items.push(
                        <div className="col-60 col-sm-30 col-md-20 col-xl-15">
                            <a
                                className="slide-wrapper"
                                key={index}
                                href={"/news/" + item.slug}
                            >
                                <div className="slide-inner">
                                    <div className="d-flex justify-content-between">
                                        <div className="category sub_h2">
                                            {item.category}
                                        </div>
                                        <div className="date">{item.date}</div>
                                    </div>
                                    <div
                                        className="image mb-4"
                                        style={{
                                            backgroundImage:
                                                'url("' + item.thumbnail + '")'
                                        }}
                                    ></div>
                                    <div className="title">{item.title}</div>
                                    <div className="announce">
                                        {item.excerpt}
                                    </div>
                                </div>
                            </a>
                        </div>
                    );
                });
                setState({ items: state.items.concat(items) });
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        addItems(0);
    }, []);
    return (
        <React.Fragment>
            <div className="row">{state.items}</div>
            <div className="text-center h5 color-primary">
                &bull;&bull;&bull;
                <br />
            </div>
            <div className="text-center">
                <a href="#" className="show-more">
                    {__("Show more")}
                </a>
            </div>
        </React.Fragment>
    );
}
