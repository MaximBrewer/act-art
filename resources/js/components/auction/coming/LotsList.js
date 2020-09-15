import React from "react";
import Waterfall from "../../Waterfall";
export default function LotsList(props) {
    const { auction } = props;
    return (
        <div className="container">
            <div className="h3">{__("Auction lots")}</div>
            <Waterfall
                data={{
                    auction: auction,
                    entity: "lots",
                    action: "add",
                    preview: "preview",
                    sortable: true,
                    tizerView: "auction",
                    limit: {
                        xs: 1200,
                        sm: 1200,
                        md: 1200,
                        lg: 1200,
                        xl: 1200,
                        xxl: 1200
                    },
                    view: {
                        xs: 1,
                        sm: 2,
                        md: 2,
                        lg: 4,
                        xl: 4,
                        xxl: 4
                    },
                    action: "none"
                }}
            />
        </div>
    );
}
