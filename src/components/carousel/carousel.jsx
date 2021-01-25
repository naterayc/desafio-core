import React from 'react';
import Slider from "react-slick";
import star from '../../statics/star.png';
import starAlt from '../../statics/star_alt.png';
import "slick-carousel/slick/slick.css";
import './carousel.css';

const CarouselProducts = (props) => {

    const settings = {
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll:1,
        arrows:true,
    };

    return (
        <div className="slick-container">
            <h2>Mais Vendidos</h2>
            <Slider {...settings}>
            {props.productsData.map(product => {
                return(
                    <div id="product" key={product.id}>
                            <img src={product.img} alt={product.product} className="product-img"></img>
                            <p className="product-name">{product.product}</p>
                            <div className="stars">
                                <img src={star} alt="star"></img>
                                <img src={star} alt="star"></img>
                                <img src={star} alt="star"></img>
                                <img src={starAlt} alt="star"></img>
                                <img src={starAlt} alt="star"></img>
                            </div>
                            <p className="product-price">por R$ {product.price}</p>   
                            <button className="buy-btn" onClick={props.addProduct}>COMPRAR</button>
                    </div>  
                )})}
                
            </Slider>
        </div>
    );
}

export default CarouselProducts;