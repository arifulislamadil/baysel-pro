import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css"

const footer = () => {
    return (
        <div className='container footer '>
            <div className="footer-clean">
                <footer className='footer-main'>
                    <div style={{marginTop:"40px"}}>
                        <input type="text" placeholder="Advance Search" />
                        <button>Search</button>
                    </div>
                    <div>
                        <ul >
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">service</Link></li>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <button style={{backgroundColor:"blue"}}>Sell</button>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default footer;