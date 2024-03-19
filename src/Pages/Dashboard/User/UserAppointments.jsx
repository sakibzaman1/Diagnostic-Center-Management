import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import swal from "sweetalert";
import { axiosSecure } from "../../../CustomHooks/useAxiosSecure";

const UserAppointments = () => {
  const { user } = useContext(AuthContext);
  const appointments = useLoaderData();
  const myAppointments = appointments.filter(
    (appointment) =>
      appointment?.email?.toLowerCase() === user?.email.toLowerCase()
  );

  const handleDelete = id => {
    console.log(id);
    swal({
        title: "Please Confirm!",
        text: "Are you sure to delete?",
        icon: "warning",
        dangerMode: true,
      })
      .then(isConfirmed => {
        if (isConfirmed) {
           axiosSecure.delete(`/myAppointments/${id}`)
           .then(res=> {
            if(res.data.deletedCount > 0){
                // refetch();
                swal('Appointment Canceled')
            }
           })
         
        } else{
          swal("Not Canceled");

        }
      });
}


  return (
    <div>
      <h1 className="mb-10">My Upcoming Appointments</h1>
      <div>
        {myAppointments?.map((myAppointment, index) => (
          <div myAppointment={myAppointment}  className="overflow-x-auto">
            
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Serial</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="bg-base-200">
                    <th>{index+1}</th>
                    <td>{myAppointment?.testName}</td>
                    <td>{myAppointment?.price} $</td>
                    <td><button onClick={()=> handleDelete(myAppointment?._id)} className="btn">Cancel</button></td>
                  </tr>
                </tbody>
              </table>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserAppointments;
