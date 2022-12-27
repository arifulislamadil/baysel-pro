import React, { useState } from 'react';
import "./profile.css"
import bannerImg from "../../assets/banner-img.jpg";
import profile from "../../assets/profile.jfif";
import { Link } from 'react-router-dom';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import Listings from '../listings/Listings';
import Reviews from '../reviews/Reviews';
import Balance from '../balance/Balance';
import CarouBiz from '../carouBiz/CarouBiz';

const Profile = () => {
    const [list,setList]=useState([])
    return (
        <div>
            <div className='profile-background'>
                <img src={bannerImg} alt="" />
            </div>
            <div className='user-profile'>
                <div className='profile-pic'>
                    <img src={profile} alt="" />
                </div>
                <div>
                    <div className='profile-list'>
                        <ul>
                            <li>
                                <Link onClick={()=>setList('listings')}>Listings</Link>
                            </li>
                            <li>
                                <Link onClick={()=>setList('reviews')}>Reviews</Link>
                            </li>
                            <li>
                                <Link onClick={()=>setList('balance')}>Balance</Link>
                            </li>
                            <li>
                                <Link onClick={()=>setList("carouBiz")}>CarouBiz</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='edit-profile'>
                    <button>
                        <li>
                            <Link to="/editProfile">Edit Profile</Link>
                        </li>
                    </button>
                </div>
            </div>

            <div>
                <div className='user-details-product-list'>
                    <div className='user-details'>
                        <h2>Ariful Islam</h2>
                        <p>user@gmail.com</p>
                        <div style={{ display: "flex" }}>
                            <span><StarBorderPurple500OutlinedIcon /></span>
                            <h5>No rating yet</h5>
                            <span><KeyboardArrowRightOutlinedIcon /></span>
                        </div>
                        <p>Dubai   ∙   Joined 6y 5m</p>
                        <div style={{ display: "flex" }}>
                            <p>Verified</p>
                            <span><FacebookOutlinedIcon /></span>
                            <span><EmailOutlinedIcon /></span>
                        </div>

                        <div className='user-info'>
                            <span>Bismillahirrahmanirrahim</span>
                        </div>
                        <div>
                            <span>3 Followers </span>
                            <span>  0 Following</span>
                        </div>
                        <div>
                            <div className='view-profile'>
                                <div style={{ display: "flex" }}>
                                    <h4>
                                        <CampaignOutlinedIcon />
                                    </h4>
                                    <h4>   0</h4>
                                </div>
                                <span>people viewed your profile today</span>
                                <br />
                                <button>View stats</button>
                            </div>
                        </div>
                    </div>
                    <div className='product-menu-list'>
                        {
                            list === "listings" ? <Listings/> :
                            list === "reviews" ? <Reviews/>:
                            list === "balance" ? <Balance/>:
                            list === "carouBiz" ? <CarouBiz/>:
                            <Listings/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;