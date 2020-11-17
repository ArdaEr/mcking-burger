import React, {useState, useContext} from 'react';
import './McKing.css';
import {Hamburger, TotalPrice, ItemList} from "../components";
import Header from '../components/Header/Header';
import SessionContext from '../components/Content/Content';
import Button from '../components/Button/Button';
import { Link } from 'react-router-dom';

import ingrediends from "../data";


const McKing = () => {
    const [ingredients, setIngredients] = useState([]);

   /* malzemeEkle(malzeme){
        this.setState({
            ingredients: [...this.state.ingredients].concat([
                {...malzeme, displayId: Math.random()}
            ])
        })
    }*/

const addIngredient = (product) => {
    setIngredients([...ingredients, {...product,  displayId: Math.random()}
    ]);

};
const removeIngredient = (product) => {
    const selectedMalzeme = ingredients.find(
        (ingredient) => ingredient.name === product.name
    );
    
    setIngredients(
        ingredients.filter(
            (ingredient) => ingredient.displayId !== selectedMalzeme.displayId)

    );
};

const hesapla = () => {
    let total = 4;
    ingredients.forEach((item) => (total += item.price));
    return total.toFixed(2);
};
return (
    <>
        
        <Hamburger ingredients={ingredients} />
        <TotalPrice total = {() => hesapla()} />
        <ItemList
        items = {ingrediends}
        addIngredient = {(i)=> addIngredient(i)}
        removeIngredient= {(i) => removeIngredient(i)}
        selectedIngredients= {ingredients} />
        <div className='ingredientsBlock'>
        <Link to="/order"><Button className='ingrBtn' type="button">Order</Button></Link>
        </div>
        
    </>
        
);
};

export default McKing;