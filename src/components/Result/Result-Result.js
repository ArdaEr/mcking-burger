import React from 'react'
import { Hamburger, TotalPrice } from '../../components';
import ingrediends from '../../data';
import {Wrapper} from '../Result/Result.styles';

export const Result = ({ingredients, total}) =>
{
    return (
        <Wrapper>
        <Hamburger ingredients={ingredients} />
        <TotalPrice total={total} />

        <div className="orderSuccesfull">
            <h1>Siparişiniz alındı.</h1>
        </div>
        </Wrapper>
    )
}