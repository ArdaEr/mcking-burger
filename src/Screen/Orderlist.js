import React, {useContext} from 'react'
import  Button  from '../components/Button/Button';
import SessionContext from '../components/Context/SessionContext';
import Header from '../components/Header/Header';

import './McKing.css';


const OrderList=() => {
    const { setAuthenticated } = useContext(SessionContext);
    const handClickk = (event) => {
        event.preventDefault();
        setAuthenticated(false);
    }
    return (
    <div className= 'ingredientsBlock'>
    <Header />
    <h2>Siparişiniz Alındı </h2>
    <Button onClick={handClickk}> Yeni Sipariş</Button>
    
    </div>
    )
}


export default OrderList;
