import React from 'react';
import "./burgerBuilder.css";

function Hamburger(props) {
    return (
        <div className = "Burger">
             <div className="bread-top"></div>
            {
                props.ingredients.length < 1 && 
                <div>
                    Malzeme Ekleyin
                </div>
            }
            {
                props.ingredients.map((ingredient) => {
                   return <div key={ingredient.displayId} className = {ingredient.name}></div>
                })
            }
              <div className="BreadBottom" >
        </div>
        </div>
    );
}

export default Hamburger;
