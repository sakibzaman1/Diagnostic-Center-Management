import React from 'react';

const AddBanner = () => {

    const handleAddBanner = (e)=> {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const image = form.get("image");
      
    
    
        const newBanner = {
            image 
        }
        console.log(newBanner);
    
            // send data to the server
    
            fetch('https://diagnostic-center-management-server-rho.vercel.app/banners', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(newBanner)
            })
            .then(res=> res.json())
            .then(data=> {
                console.log(data);
                if(data.insertedId){
                    swal({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Banner Added',
                        showConfirmButton: false,
                        showCancelButton: false,
                        timer: 2000
                    });
                }
            });
    }
    return (
        <div>
                   <div className="hero  bg-base-200">
        <div className="hero-content w-full">
          <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-slate-200">
            <form onSubmit={handleAddBanner} className="card-body">
              <h1 className="font-Ephesis text-4xl">Add a Banner</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Banner Image URL</span>
                </label>
                <input
                  name="image"
                  type="text"
                  placeholder="image"
                  className="input input-bordered"
                  required
                />
              </div>
           
              
             
              <div className="form-control mt-6">
                <button className="btn bg-blue-600">Add Banner</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default AddBanner;