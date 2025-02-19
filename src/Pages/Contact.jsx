import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../assets/lottie/lottie-contact.json";
import Swal from "sweetalert2";

const Contact = () => {

  const handleContactForm = (e)=>{
    e.preventDefault();
    Swal.fire({
      title: 'Contact Form',
      text: 'Your message has been sent',
      icon: 'success',
      confirmButtonText: 'OK',
    });
    e.target.reset();
  }

  return (
   <div className="bg-[#fef5ee] py-20">
    <span className="md:text-xl text-lg font-bold font-lobster text-red-600 text-center mb-10 block">
    Contact Us
    </span>
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center mt-3">
       
      <div className="">
        <Player autoplay loop src={animationData} className="w-[300px]" />

        <h2 className="font-semibold text-2xl mb-7">Contact Us</h2>
        <p>
          Need to get in touch with us? Enter fill out the form with your query
          or find the email you'd like to contact bellow.
        </p>
      </div>
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
        <form onSubmit={handleContactForm} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              name="textarea"
              rows={5}
              placeholder="Enter your message"
              className="input input-bordered"
              required
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-red-600 text-white hover:bg-red-600 hover:text-white">Submit</button>
          </div>
        </form>
      </div>
    </div>
   </div>
  );
};

export default Contact;
