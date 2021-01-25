import React, { Fragment, useState, useEffect } from 'react';
import Banner from './components/banner/banner';
import CarouselProducts from './components/carousel/carousel';
import Footer from './components/footer/footer';
import Header from './components/header/header';

const Home = () => {

    let [products, setProducts] = useState([]);

        const request = new Request('https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products', {
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
        referrerPolicy: 'no-referrer',
    });


    useEffect(() => {fetch(request)
        .then(response => response.json())
        .then(data => setProducts(products = data));
    }, []);

    let [productsInCart, setProductsInCart] = useState(0);
    let [productName, setProductName] = useState('');
    let [productPrice, setProductPrice] = useState('');
    let [itemInBill, setItemInBill] = useState('Aun no has agregado nada');

    const productCounter = (e) => {
        setProductPrice(e.target.previousSibling.textContent.slice(7));
        setProductName(e.target.previousSibling.previousSibling.previousSibling.textContent);
        let itemAdded = [{ name: productName, price: productPrice }];
        setItemInBill([...itemInBill, itemAdded]);
        setProductsInCart(productsInCart + 1);
    }

    return(
        <Fragment>
            <Header cartProduct={productsInCart} itemsInBill={itemInBill}/>
            <Banner/>
            <CarouselProducts productsData={products} addProduct={productCounter}/>
            <Footer/>
        </Fragment>
    );
}

export default Home;