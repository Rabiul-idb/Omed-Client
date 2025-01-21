import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { imgUpload } from "../api/utils";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddCategory = ({refetch}) => {

    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data)=>{

         const image = data.photo[0];
                  //console.log(image)
            let img_url = '';

            img_url = await imgUpload(image);
        // console.log(img_url);
        const categoryData = {
            ...data,
            photo: img_url,
            addedBy: user?.email,
            date: new Date().toLocaleString(),
        }
    //console.log(categoryData);

         // save to db
         try {
            await axiosSecure.post(`/category`, categoryData)
            .then((response) => {
               // console.log(response.data)
                if(response.data.insertedId){
                    document.getElementById("my_modal_2").close()
                    refetch();
                    Swal.fire({
                        title: 'Category Added',
                        text: 'Category Added Successfully',
                        icon: 'success',
                    });
                }
            })
         } catch (error) {
            console.log(error)
         }
    }


  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          
        <h2 className="text-2xl font-bold text-center mb-4">Add Category</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <div>
                    <label>Product Category:</label>
                    <br></br>
                    <select name="category" className="input input-bordered h-10 w-full" {...register("category", { required:true})}>
                        <option value="tablet" selected>Tablet</option>
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
                    placeholder="Category description"
                    className="input input-bordered h-10 w-full"
                    {...register("cat_description", { required: true })}
                    />
                </div>
                <div>
                    <label>Image:</label>
                    <br></br>
                    <input type="file" name="img" className=" h-10 w-full" 
                    {...register("photo", { required:true})}
                    />
                </div><input type="submit" value="Add Category" className="btn mt-5" />
            </form>


        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default AddCategory;
