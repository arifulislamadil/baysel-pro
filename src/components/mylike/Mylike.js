import React from 'react';
import productImg from "../../assets/product.jpg";
import userProfile from "../../assets/profile.jfif";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import "./mylike.css"
const Mylike = () => {
    return (
        <div className='like-main'>
            <h3>My Likes</h3>
            <div className='like-body'>
                <div>
                    <div style={{ display: "flex" }}>
                        <div className='user-profile-like'>
                            <img src={userProfile} />
                        </div>
                        <div style={{marginLeft:"20px"}}>
                            <p>Customise.my.bicycle</p>
                            <span> 9 days ago</span>
                        </div>
                    </div>
                    <div className='product-profile-like'>
                        <img src={productImg} />
                        <p> Fnhon Gust 16” inches • 9 Speeds Shimano • Litepro Aero Wheelset</p>

                        <h5>$<span>55</span></h5>
                        <div className='icon-like'>
                            <span><FavoriteBorderOutlinedIcon /></span>
                            <span><MoreVertOutlinedIcon /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mylike;