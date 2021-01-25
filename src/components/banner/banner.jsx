import React from 'react';
import banner from '../../statics/Banner.jpg';

const Banner = () => {

    const styles = {
        'width': '100%',
    }
    return(
        <img src={banner} alt="banner-ppal" style={styles}></img>
    )
}

export default Banner;