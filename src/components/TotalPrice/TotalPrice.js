import React from 'react';
import "./TotalPrice.css";
function TotalPrice(props) {

    return (
        <div className = "ingredientsBlock">
            TotalPrice: {props.total()}
        </div>
    );
}

export default TotalPrice;