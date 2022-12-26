import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchData } from '../../slices/dataFetch';
import "./ourProduct.css"

const OurProduct = () => {
    const users = useSelector(state => state.datas.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData())
    }, [])
    console.log(users)
    return (
        <div>
            <div>
                <h3>Trending now</h3>
            </div>
            <div>
                <button>Bicycle</button>
                <button>Coffee Table</button>
                <button>Lego</button>
                <button>Ikea</button>
                <button>Brompton</button>
                <button>Plants</button>
            </div>
            <div className='product-list'>
                {
                    users.map(user =>
                        <div className='single-product'>
                            <h3>{user.id}</h3>
                            <img src={user.image} alt=""/>
                            <p>{user.title.slice(0,20)}</p>
                            <span>Price : {user.price}</span>
                            <Link to={user.id}>Buy</Link>
                        </div>)
                }
            </div>
        </div>
    );
};

export default OurProduct;