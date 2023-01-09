import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./message.css";
import userPic from "../../assets/profile.jfif"
import productPic from "../../assets/product.jpg";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';


const Message = () => {


    return (
        <div className='inbox-main'>
            <div className='inbox'>
                <input type='text' placeholder="Search Message, Listings, usernames" />
                <h3 style={{marginTop:"20px"}}>Inbox <span><KeyboardArrowDownIcon /></span></h3>
                <hr />

                <div className='user-text'>
                    <div className='user-profile-pic'>
                        <img src={userPic} />
                    </div>
                    <div style={{ marginLeft: '20px' }}>
                        <p>Mr.Modon</p>
                        <h6>HeadPhone</h6>
                    </div>
                    <div className='product-pic'>
                        <img src={productPic} />
                    </div>
                </div>
                <div className='user-text'>
                    <div className='user-profile-pic'>
                        <img src={userPic} />
                    </div>
                    <div style={{ marginLeft: '20px' }}>
                        <p>Mr.Modon</p>
                        <h6>HeadPhone</h6>
                    </div>
                    <div className='product-pic'>
                        <img src={productPic} />
                    </div>
                </div>
                <div className='user-text'>
                    <div className='user-profile-pic'>
                        <img src={userPic} />
                    </div>
                    <div style={{ marginLeft: '20px' }}>
                        <p>Mr.Modon</p>
                        <h6>HeadPhone</h6>
                    </div>
                    <div className='product-pic'>
                        <img src={productPic} />
                    </div>
                </div>
            </div>
            <div className='chat-box-main'>

                <div className='chat-box'>
                    <div style={{ display: "flex" }}>
                        <div className='user-profile-pic'>
                            <img src={userPic} />
                        </div>
                        <div style={{ marginLeft: '20px' }}>
                            <p>Mr.Modon</p>
                            <span>Online 1 hour ago</span>
                        </div>
                    </div>
                    <div>
                        <span><MoreVertIcon /></span>
                    </div>
                </div>
                <div>
                    <div className='chat-box-product-main'>
                        <div className='chat-box-product'>
                            <div className='product-pic'>
                                <img src={productPic} />
                            </div>
                            <div style={{ marginLeft: "10px" }}>
                                <h6>HeadPhone</h6>
                                <p>$<span>55</span></p>
                            </div>
                        </div>

                        <div className='chat-offer-chat-rate'>
                            <button>Make Offer</button>
                            <button>Chat Rate</button>
                        </div>
                    </div>

                </div>
                <div className='chat-field'>

                </div>
                <div className='chat-inbox'>
                    <input style={{ width: "98%",margin:"5px 5px", paddingLeft:"10px"}} type="text" placeholder='Type here ...'>
                    </input>
                   <span> <ImageOutlinedIcon /></span>
                </div>

            </div>

        </div>
    );
};

export default Message;