import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from '../CustomHooks/useAxiosSecure';

const TestDetails = () => {

    const loadedTest = useLoaderData();
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();


    const handleBookNow = ()=> {
        const TestInfo = {
            testName: loadedTest?.title,
            name: user?.displayName,
            email: user?.email,
            price: loadedTest?.price
          };
          axiosSecure.post("/myAppointments", TestInfo)
          .then(res=> {
            if(res.data.insertedId){
              swal({
                position: "top-center",
                icon: "success",
                title: "Appointment Booking Successfull",
                showConfirmButton: false,
                showCancelButton: false,
                timer: 2000,
              });
              setTimeout(() => {
              }, 2000);
            }
          })
    }

    return (
        <div className='text-center flex gap-6 items-center justify-center my-20'>
            <img className='mx-auto w-80 h-80' src={loadedTest?.image} alt="" />
           <div className='mr-20'>
           <h1 className='text-center  text-3xl font-bold mb-10'> {loadedTest?.title}</h1>
            <p>{loadedTest?.short_description}</p>
            <div className='flex gap-6 items-center justify-center mt-10'>
            <p>
                Available Dates : 
                {
                    loadedTest?.available_dates.map(date=> <div>
                        <ul>
                            <li>{date}</li>
                        </ul>
                    </div>)
                }
            </p>
            <p>
                Available Times : 
                {
                    loadedTest?.slots.map(time=> <div>
                        <ul>
                            <li>{time}</li>
                        </ul>
                    </div>)
                }
            </p>
            </div>
            <button onClick={handleBookNow} className='btn mt-10'>
                Book Now
            </button>
           </div>
        </div>
    );
};

export default TestDetails;