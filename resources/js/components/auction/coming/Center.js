import React from "react";
import Parser from 'html-react-parser';
export default function Center(props) {
    const { auction } = props;
    return (
        <div className="auction-info">
            <div className="container">
                <div className="row">
                    <div className="col-lg-45  offset-lg-15">
                        <div className="title-wrapper">
                            <span className="title h3">{auction.title}</span>
                            <span className="date">{auction.date}</span>
                        </div>
                        <div className="sub_2 sublime-wrapper">{Parser(auction.text)}</div>
                        <div className="link-holder">
                            <a href="/rules">{__("Participation rules")}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
