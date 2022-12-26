import React, { useEffect } from 'react';
import "./productSingle.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, fetchSingleData } from '../../slices/dataFetch';
import { Link } from 'react-router-dom';
import DirectionsBikeOutlinedIcon from '@mui/icons-material/DirectionsBikeOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

const ProductSingle = () => {
    const users = useSelector(state => state.datas.data);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData())
    }, [])
    return (
        <div>
            <div className='product-info'>
                <div className='product-header'>
                    <div className='product-img'>
                        <Carousel showArrows={true}
                            infiniteLoop={true}
                            autoPlay={true} >
                            {
                                users.map(user => <>
                                    <div className='image'>
                                        <img style={{ width: "500px", height: "400px" }} src={user.image} />
                                    </div>
                                </>)
                            }
                        </Carousel>
                       
                    </div>
                    <div>
                        <div>
                            <div style={{ display: "flex" }}>
                                <span><SafetyCheckIcon /></span>
                                <h5>PROTECTION</h5>
                            </div>
                            <h3>TRINX M114 24” Mountain Bike New Bicycle 21 Speed Aluminium Alloy Frame</h3>
                            <h3>S$299 S$349</h3>
                            <div className='product-brand'>
                                <div style={{ display: "flex" }}>
                                    <span><CheckBoxOutlineBlankIcon /></span>
                                    <h4>Brand new</h4>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <span><GroupsOutlinedIcon /></span>
                                    <h4>Mailing · Meetup</h4>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <span><LocationOnOutlinedIcon /></span>
                                    <h4>IMM Building</h4>
                                </div>
                                <div style={{ border: "2px solid black", padding: "10px" }}>
                                    <div style={{ display: "flex" }}>
                                        <div>
                                            <span><DirectionsBikeOutlinedIcon /></span>
                                        </div>
                                        <div>
                                            <Link to=""><span>TRINX Authorised Dealer @aurabike</span></Link>
                                            <h6>Rating</h6>
                                        </div>
                                    </div>

                                    <button>Buy</button>
                                    <button>Chat</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Description</h3>
                        </div>
                        <div style={{ display: "flex", lineHeight: "22px" }}>
                            <div>
                                <h5>Bumped</h5>
                                <h6>an hour ago</h6>
                            </div>
                            <div>
                                <h5>Type</h5>
                                <h6>Mountain Bike</h6>
                            </div>
                        </div>
                        <div>
                            <span>
                                **NEW READY STOCKS AVAILABLE**
                                24” Mountain Bike - TRINX M114
                                21-Speed Shimano EF41 Gear Shifters (3x7)
                                Derailleur Sunrun Index
                                Aluminium Alloy Frame
                                Front Suspension Fork
                                Disc Brakes Mechanical Front and Rear
                                Double walled Rims
                                Tyres: 24” x 1.95
                                Frame Size: 12” (Suitable for Heights 140-160cm / Age 9 and above)
                                <br />
                                <br />
                                <span>
                                    Colour: Black- orange / <br />
                                    Black-blue (matte) / Gray
                                </span>
                                <br />
                                <span>
                                    **Bicycles are assembled, ready to cycle <br />
                                    **Bicycle issues after purchase can be serviced at our physical store.
                                </span>
                                <h5>
                                    Delivery
                                </h5>
                                <span>
                                    Standard delivery: Receive in 4 working days · Free shipping
                                </span>
                                <div>

                                    <div style={{ display: "flex" }}>
                                        <span><LocationOnOutlinedIcon /></span>
                                        <h5>
                                            Meet-up
                                        </h5>
                                        <span><OpenInNewOutlinedIcon /></span>

                                    </div>
                                    <span>
                                        #02-81/82 (Warehouse area) Access via Cargo Lifts / L2 Carpark Left-side Entrance Viewing/Collection Mon-Sat 12pm-8pm Closed on Sundays
                                    </span>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSingle;