import React from 'react';

const ItemInCart = (props) => {
    console.log(props.itemsInBill)
    return (
        props.itemsInBill.map(itemInBill => {
            return (
                itemInBill.map(eachItem => {
                    return (
                        <div key={eachItem.name} className="item-in-cart">
                            <p>{eachItem.name}</p>
                            <p>R${eachItem.price}</p>
                        </div>
                    )
                })
            );
        })
    );
}

export default ItemInCart;