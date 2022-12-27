import React, { useState } from 'react';
import profile from "../../assets/profile.jfif";
import './updateProfile.css';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const UpdateProfile = () => {
    const [images,setImages]=useState([])
    const onImageChange=(e)=>{
        setImages([...e.target.files])
    }
    return (
        <div className="profile-pic-main">
            <div>
                <h3>Edit profile</h3>
                <h5>Profile Photo</h5>
                <div className='update-profile-pic'>
                    <div className='edit-profile-pic'>
                        <img src={profile} />
                    </div>
                    <div className='profile-text-upload-img'>
                        <p>Clear frontal face photos are an important way for buyers and sellers to learn about each other.</p>
                        <input type="file" multiple accept="image/*" onChange={onImageChange}/>
                    </div>
                </div>
                <h4>Public Profiles</h4>
                <div className='public-profile'>
                    <form action='/'>
                        <label for="fname">First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                        <label for="fname">Bio</label>
                        <textarea placeholder='type your bio' rows="6" cols="100" maxLength="400">

                        </textarea>
                        <h3>Location</h3>
                        <label for="country">Country</label>
                        <select id="country" name="country">
                            <option value="australia">Malaysia</option>
                            <option value="canada">Dubai</option>
                            <option value="usa">Bangladesh</option>
                        </select>
                        <label for="region">Region</label>
                        <select id="region" name="region">
                            <option value="Dubai">Dubai</option>
                            <option value="KL">KL</option>
                            <option value="Dhaka">Dhaka</option>
                        </select>
                        <label for="city">Region</label>
                        <select id="city" name="city">
                            <option value="Dubai">Dubai</option>
                            <option value="KL">KL</option>
                            <option value="Dhaka">Dhaka</option>
                        </select>

                        <h3>Private information</h3>
                        <div>
                            <span><LockOutlinedIcon /></span>
                            <span>We do not share this information with other users unless explicit permission is given by you.
                            </span>
                        </div>
                        <br/>
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email.." />
                        <label for="mobile">Mobile</label>
                        <input type="mobile" id="mobile" name="mobile" placeholder="Your Mobile.." />
                        <label for="gender">Gender</label>
                        <select id="gender" name="gender">
                            <option value="Female">Female</option>
                            <option value="KL">Male</option>
                            <option value="Dhaka">Custom</option>
                        </select>
                        <label for="date">Birthday</label>
                        <input type="date" id='date'></input>

                        <input  style={{marginTop: "10px"}} type="submit" value="Save Change" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;