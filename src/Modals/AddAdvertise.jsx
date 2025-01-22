import { useForm } from "react-hook-form";
import { imgUpload } from "../api/utils";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddAdvertise = () => {

    const {handleSubmit, register, reset, formState: { errors }} = useForm();
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();


    const onSubmit = async(data)=>{

        const image = data.ad_photo[0]
        const imageURL = await imgUpload(image);

        const adInfo = {
            ...data,
            ad_photo : imageURL,
            seller: {
                name: user?.displayName,
                email: user?.email
            },
            req_date : new Date().toLocaleString(),
            status : "pending",
        }
        //console.log(adInfo);
        // now save to adCollection
        try {
            await axiosSecure.post('/advertises', adInfo)
            .then(res => {
                if(res.data.insertedId){
                    document.getElementById("my_modal_2").close()
                    // refetch();
                    Swal.fire({
                        title: 'Request Sent',
                        text: ' Request Sent Successfully',
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
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-3 text-center">Request for Advertisement !</h3>
          <div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <div>
                    <label> Name</label>
                    <br></br>
                    <input type="text" name="ad_name" placeholder="Advertisement name" className="input input-bordered h-10 w-full mt-1"
                    {...register("ad_name", { required: true })} />
                </div>
                <div className="">
                    <label>Short Description:</label>
                    <br></br>
                    <input
                    type="text"
                    name="ad_description"
                    placeholder="Advertisement description"
                    className="input input-bordered h-10 w-full mt-1"
                    {...register("add_description", { required: true })}
                    />
                </div>
                <div>
                    <label>Image:</label>
                    <br></br>
                    <input type="file" name="img" className=" h-10 w-full" 
                    {...register("ad_photo", { required:true})}
                    />
                </div><input type="submit" value="Send Request" className="btn mt-5" />
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default AddAdvertise;
