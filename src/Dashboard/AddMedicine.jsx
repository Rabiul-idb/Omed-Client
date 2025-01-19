import { useForm } from "react-hook-form";
import { imgUpload } from "../api/utils";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddMedicine = () => {

    const {user} = useAuth();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async(data) => {
        //console.log("Form Data:", data);

          const image = data.photo[0];
          //console.log(image)
         let img_url = '';

         img_url = await imgUpload(image);
        // console.log(img_url);

         // seller info
         const seller = {
            name: user?.displayName,
            email: user?.email,
            photo: user?.photoURL
         }
         //console.log(seller);

         const productData = {
            ...data,
            price: parseFloat(data.price),
            quantity: parseInt(data.quantity),
            photo: img_url,
            seller,
         }
         //console.log(productData);

         // save to db
         try {
            await axios.post(`${import.meta.env.VITE_API_URL}/products`, productData);
            Swal.fire({
                title: 'Success!',
                text: 'Product Added Successfully',
                icon: 'success',
                confirmButtonText: 'OK',
            });
            reset();
         } catch (error) {
            console.log(error)
         }
      };

  return (
    <div>
        <h2 className="text-2xl font-bold mb-5 text-center">Add Medicine</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="">
            <label>Brand Name:</label>
            <br></br>
            <input
              type="text"
              name="brand_name"
              placeholder="Brand Name"
              className="input input-bordered h-10 w-full"
              {...register("brand_name", { required: "Brand Name is required" })}
            />
          </div>
          <div>
            <label>Generic Name:</label>
            <br></br>
            <input
              type="text"
              name="generic_name"
              placeholder="Generic Name"
              className="input input-bordered h-10 w-full"
              {...register("generic_name", { required:true})}
            />
          </div>
          <div>
            <label>Company Name:</label>
            <br></br>
            <select name="brand" className="input input-bordered h-10 w-full" {...register("brand", { required:true})}>
              <option value="square" selected>Square</option>
              <option value="beximco">Beximco</option>
              <option value="incepta">Incepta</option>
              <option value="aristopharma">Aristopharma</option>
              <option value="opsonin">Opsonin</option>
              <option value="skf">SKF</option>
              <option value="drag">Drag</option>
              <option value="healthcare">Healthcare</option>
            </select>
          </div>
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
            </select>
          </div>
          <div>
            <label>Price:</label>
            <br></br>
            <input
              type="number"
              name="price"
              placeholder="Unit per price"
              className="input input-bordered h-10 w-full"
              {...register("price", { required:true})}
            />
          </div>
          <div>
            <label>Quantity:</label>
            <br></br>
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              className="input input-bordered h-10 w-full"
              {...register("quantity", { required:true})}
            />
          </div>
          <div>
            <label>Description:</label>
            <br></br>
            <textarea
              rows="5"
              name="description"
              placeholder="Description"
              className="input input-bordered h-10 w-full"
              {...register("description", { required:true})}
            />
          </div>
          <div>
            <label>Image:</label>
            <br></br>
            <input type="file" name="img" className=" h-10 w-full" 
            {...register("photo", { required:true})}
            />
          </div>
        </div>
        <input type="submit" value="Add Product" className="btn bg-red-600 text-white mt-5" />
      </form>
    </div>
  );
};

export default AddMedicine;
