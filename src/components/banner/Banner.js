import React from 'react';
import imageLeft from "../../assets/bannerLeft.jfif";
import imageRight from "../../assets/bannerRight.jfif";
import "./banner.css"

const Banner = () => {
    return (
        <div>
            <div className='banner-main'>
                <div className='banner-left'>
                    <img src={imageLeft} alt="" />
                </div>
                <div className='banner-right'>
                    <img src={imageRight} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;