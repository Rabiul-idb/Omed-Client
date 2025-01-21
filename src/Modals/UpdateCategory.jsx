import { useForm } from "react-hook-form";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useState } from "react";
import { imgUpload } from "../api/utils";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const UpdateCategory = ({ selectedItem, setSelectedItem, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {_id, photo, category , cat_description} = selectedItem || {};

  const onSubmit = async(data) => {

        const image = data.photo[0];
                      //console.log(image)
        let img_url = '';

        img_url = await imgUpload(image);
   // console.log(data);
    const updatedInfo = {
        ...data,
        photo: img_url,
        updatedBy: user?.email,
        UpdatedTime: new Date().toLocaleString(),
    }
    console.log(updatedInfo)

    try {
        await axiosSecure.put(`/updateCategory/${_id}`,updatedInfo)
        .then(res => {
            if(res.data.modifiedCount > 0){
                refetch();
                setSelectedItem(null);
                Swal.fire({
                    title: 'Success!',
                    text: 'Category Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                })
            }
        })
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <>
      <div className="modal modal-open">
        <div className="modal-box max-w-xl ">
        <h2 className="text-2xl font-bold text-center mb-4">Update Category</h2>
        <div>
            <p>Current Image:</p>
            <img src={selectedItem.photo} alt="category image" className="w-32 h-20 mx-auto mb-4" />
        </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div>
              <label>Product Category:</label>
              <br></br>
              <select
                name="category"
                defaultValue={selectedItem.category}
                className="input input-bordered h-10 w-full"
                {...register("category", { required: true })}
              >
                <option value="tablet" selected>
                  Tablet
                </option>
                <option value="capsule">Capsule</option>
                <option value="syrup">Syrup</option>
                <option value="injection">Injection</option>
                <option value="cream">Cream</option>
                <option value="ointment">Ointment</option>
                <option value="beauty">Beauty</option>
                <option value="upcoming">Upcoming</option>
              </select>
            </div>
            <div className="">
              <label>Catagory Description:</label>
              <br></br>
              <input
                type="text"
                name="cat_description"
                defaultValue={selectedItem.cat_description}
                placeholder="Category description"
                className="input input-bordered h-10 w-full"
                {...register("cat_description", { required: true })}
              />
            </div>
            <div>
              <label>Image:</label>
              <br></br>
              <input
                type="file"
                name="img"
                className=" h-10 w-full"
                {...register("photo", {required: true})}
              />
            </div>
            <input type="submit" value="Update Category" className="btn mt-5" />
          </form>
          <div className="modal-action">
            <button
              className="btn"
              onClick={() => setSelectedItem(null)} // Close modal
            >
              {" "}
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateCategory;
