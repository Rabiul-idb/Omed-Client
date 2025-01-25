import { Player } from "@lottiefiles/react-lottie-player";
import animationData from '../assets/lottie/lottie-about.json';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-black mb-4">About OMED</h1>
        <p className="text-gray-700 leading-relaxed mb-6">
          Welcome to{" "}
          <span className="font-semibold text-red-600">
            OMED - Online Medicine
          </span>
          , your trusted destination for easy and affordable access to
          medicines. We are more than just an e-commerce platform; we aim to
          simplify healthcare for everyone by combining technology with trust.
        </p>
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
        <Player className="w-fit"
            autoplay
            loop
            src={animationData}
        />
          <div className="">
            <h2 className="text-2xl font-semibold text-black mb-3">
              What We Offer
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 grid gap-5">
              <li>
                <span className="font-medium text-red-600">
                  Discounted Products:
                </span>{" "}
                We provide medicines and healthcare products at unbeatable
                prices, making healthcare accessible and affordable.
              </li>
              <li>
                <span className="font-medium text-red-600">
                  Prescription Upload:
                </span>{" "}
                Simply upload your prescription, and we’ll take care of the
                rest. It’s that easy!
              </li>
              <li>
                <span className="font-medium text-red-600">
                  Registered Pharmacy Partners:
                </span>{" "}
                All medicines are sourced from licensed and registered
                pharmacies to ensure quality and authenticity.
              </li>
              <li>
                <span className="font-medium text-red-600">
                  Advertising Section:
                </span>{" "}
                Stay updated with the latest offers, health tips, and featured
                products through our interactive advertising space.
              </li>
            </ul>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-black mb-3">
          Our Mission
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          At OMED, our mission is to make healthcare affordable, convenient, and
          accessible for all. We believe in building a healthier world, one
          order at a time.
        </p>
        <h2 className="text-2xl font-semibold text-black mb-3">
          Why Choose Us?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          With a user-friendly platform, a focus on quality, and a commitment to
          affordability, OMED stands out as a reliable choice for all your
          healthcare needs. Experience the perfect blend of technology and care
          with OMED.
        </p>
      </div>
    </div>
  );
};

export default About;
