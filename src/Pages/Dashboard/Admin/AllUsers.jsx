import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';
import { FaInfoCircle } from "react-icons/fa";


const AllUsers = () => {

    const users = useLoaderData();

    const [active, setActive] = useState(true);

    const handleBlockUser = ()=> {
      swal('User Deactivated')
    }

    return (
        <div>
            {users?.map((user, index)=> 
                
                <div user={user} className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr className=''>
                      {/* <th>
                        <label>
                          <input type="checkbox" className="checkbox"/>
                        </label>
                      </th> */}
                      <th>{index+1}</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>See info</th>
                      <th>Role</th>
                      <th>Action</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr className='border-b-2 border-gray-300'>
                      {/* <th>
                        <label>
                          <input type="" className="" />
                        </label>
                      </th> */}
                      <td></td>
                      <td>
                        <div className="flex items-center gap-3">
                          {/* <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={user?.avatar} alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div> */}
                          <div>
                            <div className="font-bold">{user?.name}</div>
                            <div className="text-sm opacity-50">{user?.district}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-ghost badge-sm w-40">{user?.email}</span>
                      </td>
                      <td>
                        <span className="badge badge-ghost badge-sm w-10">{user?.status}</span>
                      </td>
                      <td>
                        <span className="badge badge-ghost badge-sm w-20"><FaInfoCircle size={20} /></span>
                      </td>
                      <td>
                      <span className="badge badge-ghost badge-sm w-20">{user?.email?.toLowerCase() === 'sakibzaman20@gmail.com'? <span className='font-bold text-red-600'>Admin</span> : 'User'}</span>
                      </td>
                      <th>
                        <button onClick={handleBlockUser} className="btn btn-ghost btn-xs">Block</button>
                      </th>
                    </tr>
                  </tbody>
              
                
                  
                </table>
              </div>

                
                )}
        </div>
    );
};

export default AllUsers;