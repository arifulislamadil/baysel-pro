import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InProgress from '../mypurchases/inProgress/InProgress';
import Cancelled from './cancelled/Cancelled';
import Completed from './completed/Completed';
import Returns from './returns/Returns';
import ToStart from './toStart/ToStart';

const MySales = () => {
    const [purchases,SetPurchases]=useState([])
    return (
        <div>
            <h3>My Sales</h3>
            <div>
                <div>
                    <div className='my-purchases'>
                        <ul>
                            <li>
                                <Link onClick={() => SetPurchases('start')}>To Start</Link>
                            </li>
                            <li>
                                <Link onClick={() => SetPurchases('progress')}>In Progress</Link>
                            </li>
                            <li>
                                <Link onClick={() => SetPurchases('completed')}>Completed</Link>
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
                            purchases === "start" ? <ToStart/> :
                            purchases === "progress" ? <InProgress/> :
                                purchases === "completed" ? <Completed /> :
                                    purchases === "returns" ? <Returns /> :
                                        purchases === "cancelled" ? <Cancelled /> :
                                            <ToStart />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySales;