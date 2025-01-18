import axios from "axios";

// upload img and get url


export const imgUpload =  async imgData =>{

   try {
    const formData = new FormData();
    formData.append('image', imgData);

    const {data} = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
        formData
    );

    const photoURL = data.data.display_url;
    console.log(photoURL);
    return photoURL;

   } catch (error) {
    console.error("Image upload failed:", error.message);
    throw new Error("Failed to upload image. Please try again.");
   }
}