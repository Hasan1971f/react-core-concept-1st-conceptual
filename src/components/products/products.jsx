import React from 'react';
import Product from './product/Product';

export default function Products ({info}) {

  
    return (
        <div>
            <h1>I am from products</h1>
           <Product info = {info}></Product>
        </div>
    );
};

