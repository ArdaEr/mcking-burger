import React from 'react';


const Button = ({text,onClick,className}) => {
      return (
          <button  onClick ={onClick} className ={className}>Order</button>
      )
      
};

export default Button;