import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import ChangePassword from '../changePassword/ChangePassword';
import UpdateProfile from '../updateProfile/UpdateProfile';
import './EditProfile.css';

const EditProfile = () => {

    const [view,setView] = useState([])

    return (
        <div>
            <div>
                <div className='edit-profile-list'>
                    <ul>
                        <li>
                            <Link className='edit-profile-list-link'
                            // to="/editProfile/updateProfile"
                            onClick={()=>setView('upProfile')}
                            >
                            Edit profile</Link>
                        </li>
                        <li>
                            <Link className='edit-profile-list-link'
                            // to="/editProfile/changePassword"
                            onClick={()=>setView('chgPass')}
                            >Change password</Link>
                        </li>
                        <li>
                            <Link className='edit-profile-list-link' to="/">Notifications</Link>
                        </li>
                        <li>
                            <Link className='edit-profile-list-link' to="/">Data and privacy</Link>
                        </li>
                    </ul>
                    {
                        view === 'upProfile' ? <UpdateProfile/> :
                        view === 'chgPass' ?<ChangePassword/> :
                        <div><UpdateProfile/></div>
                    }
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default EditProfile;