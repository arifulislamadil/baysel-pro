import { Button } from 'bootstrap';
import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../slices/dataFetch';
import "./spotlight.css";


const Spotlight = () => {
    const users = useSelector(state => state.datas.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData())
    }, []);
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
          }
    };

    return (
        <div>
            <Carousel
                swipeable={true}
                draggable={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                arrows={false}
                renderButtonGroupOutside={true}
                infinite={true}
                customTransition="all .5"
                transitionDuration={500}
                responsive={responsive}>
                {
                    users.map(user =>
                        <div style={{marginTop: "10px"}} className='spotlight'>
                            <img src={user.image} alt=""/>
                            <h3>{user.id}</h3>
                            <h3>{user.title.slice(0,20)}</h3>
                        </div>
                    )
                }
            </Carousel>

        </div>
    );
};

export default Spotlight;