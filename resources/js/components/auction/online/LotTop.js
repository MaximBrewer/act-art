import React from "react";
export default function Top(props) {
    const { auction } = props;
    return (
        <div className="container">
            <Carousel {...props} id={id} items={auction.lots} />
        </div>
    );
}
