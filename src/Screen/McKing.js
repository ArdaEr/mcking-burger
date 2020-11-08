import React, {useState, useContext} from 'react';
import './McKing.css';
import {Hamburger, TotalPrice, ItemList} from "../components";
import Header from '../components/Header/Header';
import SessionContext from '../components/Context/SessionContext';
import Button from '../components/Button/Button';


import ingrediends from "../data";


const McKing = () => {
    const { setAuthenticated } = useContext(SessionContext);
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
const handClick = (event) => {
    event.preventDefault();
    setAuthenticated(true);
};

const hesapla = () => {
    let total = 4;
    ingredients.forEach((item) => (total += item.price));
    return total.toFixed(2);
};
return (
    <>
        <Header />
        <Hamburger ingredients={ingredients} />
        <TotalPrice total = {() => hesapla()} />
        <ItemList
        items = {ingrediends}
        addIngredient = {(i)=> addIngredient(i)}
        removeIngredient= {(i) => removeIngredient(i)}
        selectedIngredients= {ingredients} />
        <div className='ingredientsBlock'>
        <Button onClick = {handClick} className='ingrBtn'>Order</Button>
        </div>
        
    </>
        
);
};

export default McKing;