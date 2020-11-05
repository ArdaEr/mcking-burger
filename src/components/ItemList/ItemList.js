import React from 'react';
import {Item}  from "..";

function ItemList(props) {
    return (
        <div>
            {
                props.items.map((item) => {
                    const icindeVarMi = props.selectedIngredients.find((ingredient) => {
                        return ingredient.name === item.name;
                    });
                    const icindeKacTaneVar = props.selectedIngredients.filter((ingredient) => {
                        return item.name === ingredient.name;
                    });
                    return <Item key={item.id} {...item}
                                addIngredient={props.addIngredient}
                                removeIngredient={props.removeIngredient}
                                butonGoster={icindeVarMi}
                                sayi={icindeKacTaneVar.length}
                    />
                })
            }
        </div>
    );
}

export default ItemList;
