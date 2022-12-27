import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cancelled from './cancelled/Cancelled';
import Completed from './completed/Completed';
import InProgress from './inProgress/InProgress';
import "./myPurchases.css";
import Returns from './returns/Returns';

const MyPurchases = () => {
    const [purchases,SetPurchases]=useState([])
    return (
        <div>
            <h3>My Purchases</h3>
            <div>
                <div>
                    <div className='my-purchases'>
                        <ul>
                            <li>
                                <Link  onClick={() => SetPurchases('progress')}>In Progress</Link>
                            </li>
                            <li>
                                <Link  onClick={() => SetPurchases('completed')}>Completed</Link>
                            </li>
                            <li>
                                <Link onClick={() => SetPurchases('returns')}>Returns</Link>
                            </li>
                            <li>
                                <Link onClick={() => SetPurchases("cancelled")}>Cancelled</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='my-purchases-details'>
                        {
                            purchases === "progress" ? <InProgress/>:
                            purchases === "completed" ? <Completed/>:
                            purchases === "returns" ? <Returns/>:
                            purchases === "cancelled" ? <Cancelled/>:
                            <InProgress/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPurchases;