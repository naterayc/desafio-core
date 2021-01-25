import React from 'react';

const CarouselItems = (props) => {
    return (
        props.products.map(product => {
            console.log(product)
            return (
                <div key={product.id}>
                    <img src={product.img} alt="product-img"></img>
                    <p>{product.product}</p>
                </div>
                
            )
        }))
}

export default CarouselItems;