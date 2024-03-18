import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {

    const {user} = useContext(AuthContext);
    const admin ='sakibzaman20@gmail.com';
    const [role, setRole] = useState('user')

    // if(user?.email?.toLowerCase() === 'sakibzaman20@gmail.com'){
    //     setRole('admin')
    // }
    


    console.log(`user is ${role}`)

    return (
       <div>

        {
            user?.email === 'sakibzaman20@gmail.com'? 

        
            <div className='flex  my-20'>
            <section className='w-[20%] ml-6 border-r-2'>
                <ul className='flex flex-col'>
                    <NavLink to='/dashboard/userHome'><li className='btn'>Home</li></NavLink>
                    <NavLink to='/dashboard/allUsers'><li className='mt-10 btn'>All Users</li></NavLink>
                    <NavLink to='/dashboard/addTest'><li className='mt-10 btn'>Add Test</li></NavLink>
                    <NavLink to='/dashboard/allTest'><li className='mt-10 btn'>All Test</li></NavLink>
                    <NavLink to='/dashboard/addBanner'><li className='mt-10 btn'>Add Banner</li></NavLink>
                    <NavLink to='/dashboard/allBanners'><li className='mt-10 btn'>All Banners</li></NavLink>
                    <NavLink to='/dashboard/reservation'><li className='mt-10 btn'>Reservation</li></NavLink>
                </ul>
            </section>
            <section className='w-[60%] ml-20'><Outlet></Outlet></section>
            <section></section>
        </div>

            :
    
    
    <div className='flex items-center my-20'>
                <section className='w-[20%] ml-6 border-r-2'>
                    <ul className='flex flex-col'>
                        <NavLink to='/dashboard/userHome'><li className='btn'>Home</li></NavLink>
                        <NavLink to='/dashboard/userProfile'><li className='mt-10 btn'>My Profile</li></NavLink>
                        <NavLink to='/dashboard/userAppointments'><li className='mt-10 btn'>My Appointments</li></NavLink>
                        <NavLink to='/dashboard/userTestResults'><li className='mt-10 btn'>My Test Results</li></NavLink>
                    </ul>
                </section>
                <section className='w-[60%] ml-20'><Outlet></Outlet></section>
                <section></section>
            </div>
        }

       </div>
    );
};

export default Dashboard;