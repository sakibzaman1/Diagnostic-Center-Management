import axios from 'axios';
import React from 'react';
export const axiosSecure = axios.create({
    baseURL : 'https://diagnostic-center-management-server-rho.vercel.app'
});

const useAxiosSecure = () => {
    return  axiosSecure;
    
};

export default useAxiosSecure;