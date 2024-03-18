import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const UserProfile = () => {
    const {user} = useContext(AuthContext);
    const users = useLoaderData();
    console.log(users)
    const filteredUser = users?.find(user=> user?.email?.toLowerCase() === user?.email?.toLowerCase());
    console.log(filteredUser)
    return (
        <div>
            <div className='flex gap-6 h-96'>
            <img className='w-80 h-96' src={filteredUser?.avatar} alt="" />
            <div className='h-full flex flex-col gap-16'>
            <h1>Name : {filteredUser?.name}</h1>
            <h1>Email : {filteredUser?.email}</h1>
            <h1>District : {filteredUser?.district}</h1>
            <h1>Upazilla : {filteredUser?.upazilla}</h1>
            <h1>Blood Group : {filteredUser?.blood}</h1>
           
            </div>
        </div>
        <h1 className='btn'>
            Edit Profile
        </h1>
        </div>
    );
};

export default UserProfile;