import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const footer = () => {
    return (
        <div className=' footer '>
            <div className="footer-clean">
                <div className='footer-text'>
                    <h1>BE THE FIRST TO KNOW</h1>
                    <p>Subscribe to our newsletter and get 10% off your first purchase</p>
                    <div className='footer-subscribe'>
                        <input id='search-field-footer' type="text" />
                        <button className='search-bar-btn-footer'>Search</button>
                    </div>
                </div>
                <footer className='footer-main'>
                    <div>
                        <Link end to={"/"} className="navbar-brand">
                            <p style={{ fontWeight: '900', fontSize: "25px" }}>Bay<span id="logo-sel" style={{ fontWeight: '900', fontSize: "25px" }}>Sel</span></p>
                        </Link>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over</p>
                    </div>
                    <div style={{ paddingLeft: "20px" }}>
                        <h3>Informations</h3>
                        <ul style={{ marginLeft: "-30px" }}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">service</Link></li>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Contact</Link></li>
                        </ul>
                    </div>
                    <div style={{ paddingLeft: "20px" }}>
                        <h3>Services</h3>
                        <ul style={{ marginLeft: "-30px" }}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">service</Link></li>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Contact</Link></li>
                        </ul>
                    </div>
                    <div className='footer-social-media'>
                        <button><Link style={{ color: "white", textDecoration: "none" }} to="/sell">Sell</Link></button>
                        <div>
                            <ul>
                                <li>
                                    <a rel="noopener noreferrer" href="http://facebook.com" target="_blank"><FacebookOutlinedIcon /></a></li>
                                <li>
                                    <a rel="noopener noreferrer" href="https://www.instagram.com/" target="_blank"><InstagramIcon /></a></li>
                                <li>
                                    <a rel="noopener noreferrer" href="https://youtube.com/" target="_blank"><YouTubeIcon /></a></li>
                                <li>
                                    <a rel="noopener noreferrer" href="https://web.whatsapp.com/" target="_blank"><WhatsAppIcon /></a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default footer;