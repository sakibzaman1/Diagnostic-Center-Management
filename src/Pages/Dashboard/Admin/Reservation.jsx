import React, { useEffect, useState } from 'react';

const Reservation = () => {

    const [reservations, setReservations] = useState([]);
    useEffect( ()=> {
        fetch('https://diagnostic-center-management-server-rho.vercel.app/myAppointments')
        .then(res=> res.json())
        .then(data=> {
          setReservations(data)
        })
    },[]);
    console.log(reservations);

    return (
        <div>
             <div>
        {reservations?.map((reservation, index) => (
          <div reservation={reservation}  className="overflow-x-auto">
            
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Serial</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Reserved by</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="bg-base-200">
                    <th>{index+1}</th>
                    <td className='w-60'>{reservation?.testName}</td>
                    <td>{reservation?.price} $</td>
                    <td>{reservation?.email}</td>
                  </tr>
                </tbody>
              </table>
            
          </div>
        ))}
      </div>
        </div>
    );
};

export default Reservation;