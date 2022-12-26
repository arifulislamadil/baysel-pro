import React from 'react';
import "./changePassword.css"

const ChangePassword = () => {
    return (
        <div className='change-password'>
            <h3>Change Password</h3>
            <div className='change-profile-pass'>
                <input type="password" placeholder="Current password"/>
                <input type="password" placeholder="New password"/>
                <input type="password" placeholder="Confirm password"/>
            </div>
            <input style={{marginTop: "10px"}} type="submit" value="Save Change" />
        </div>
    );
};

export default ChangePassword;