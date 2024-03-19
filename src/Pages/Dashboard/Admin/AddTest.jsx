import React from 'react';
import swal from 'sweetalert';

const AddTest = () => {
    const handleAddTest = (e)=> {

        e.preventDefault();

    const form = new FormData(e.currentTarget);
    const image = form.get("image");
  
    const title = form.get("title");
    const short_description = form.get("short_description");
    const price = form.get("price");
 
    const day1 = form.get("day1");
    const day2 = form.get("day2");
    const day3 = form.get("day3");

    const slot1 = form.get("slot1");
    const slot2 = form.get("slot2");
    const slot3 = form.get("slot3");

    const newTest = {
        image,  short_description, title, price, available_dates : [day1, day2, day3],slots : [slot1, slot2, slot3] 
    }
    console.log(newTest);

        // send data to the server

        fetch('http://localhost:5000/allTests', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newTest)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.insertedId){
                swal({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Test Added',
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
            <form onSubmit={handleAddTest} className="card-body">
              <h1 className="font-Ephesis text-4xl">Add a Test</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Test Image URL</span>
                </label>
                <input
                  name="image"
                  type="text"
                  placeholder="image"
                  className="input input-bordered"
                  required
                />
              </div>
           
              <div className="divider">Test Details</div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Test Title</span>
                </label>
                <input
                  name="title"
                  type="text"
                  placeholder="Test Title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Test Description</span>
                </label>
                <input
                  name="short_description"
                  type="text"
                  placeholder="short_description"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  name="price"
                  type="text"
                  placeholder="price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="divider">Available Dates</div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date 1</span>
                </label>
                <input
                  name="day1"
                  type="text"
                  placeholder="day1"
                  className="input input-bordered"
                  required
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date 2</span>
                </label>
                <input
                  name="day2"
                  type="text"
                  placeholder="day2"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date 3</span>
                </label>
                <input
                  name="day3"
                  type="text"
                  placeholder="day3"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="divider">Available Slots</div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Slot 1</span>
                </label>
                <input
                  name="slot1"
                  type="text"
                  placeholder="slot1"
                  className="input input-bordered"
                  required
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Slot 2</span>
                </label>
                <input
                  name="slot2"
                  type="text"
                  placeholder="slot2"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Slot 3</span>
                </label>
                <input
                  name="slot3"
                  type="text"
                  placeholder="slot3"
                  className="input input-bordered"
                  required
                />
              </div>
             
              <div className="form-control mt-6">
                <button className="btn bg-blue-600">Add Test</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default AddTest;