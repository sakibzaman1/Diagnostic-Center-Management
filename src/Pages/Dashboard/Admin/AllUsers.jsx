import React from 'react';
import { useLoaderData } from 'react-router-dom';



const AllUsers = () => {

    const users = useLoaderData();

    return (
        <div>
            {users?.map(user=> 
                
                <div user={user} className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Action</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr className='border-b-2 border-gray-300'>
                      <th>
                        <label>
                          <input type="" className="" />
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={user?.avatar} alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{user?.name}</div>
                            <div className="text-sm opacity-50">{user?.district}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        
                        <br/>
                        <span className="badge badge-ghost badge-sm">{user?.email}</span>
                      </td>
                      <td>{user?.status}</td>
                      <th>
                        <button className="btn btn-ghost btn-xs">Block</button>
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