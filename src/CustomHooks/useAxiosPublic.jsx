import axios from 'axios';
import React from 'react';
const axiosPublic = axios.create({
    baseURL : 'https://diagnostic-center-management-server-rho.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;