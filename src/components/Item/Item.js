
import React from 'react';
import './item.module.css';

function Item(props) {
    return (
        <div className= "ingredientsBlock">
        <div className="BuildControl">
            <div className="Label">
                {props.name}
            </div>
            <div>
                {props.sayi}
            </div>
            {
                props.butonGoster ? <button className="Less" onClick={() => {
                    props.removeIngredient(props);
                }}>-</button> : <button className="Less disabled">-</button>
            }
            <button className="more" onClick={() => {
                props.addIngredient(props);
            }}>+</button>
        </div>
        </div>
    );
}

export default Item;
