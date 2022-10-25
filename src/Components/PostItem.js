import React from "react";

export default ({postItem}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="cadrd-title">{ postItem.title}</h5>
            </div>
        </div>
    )
}