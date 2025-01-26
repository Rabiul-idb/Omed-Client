import google from '../../../src/assets/images/google.png';
import apple from '../../../src/assets/images/apple.png';

const DownloadApp = () => {
    return (
        <div className="">
            <div className="bg-download-bg max-h-[400px] bg-no-repeat bg-cover bg-center object-cover lg:pt-30 md:py-24 sm:py-20 ">
                <div className="h-full w-11/12 mx-auto md:pl-16 flex flex-col justify-center ">
                    <h1 className="font-bold lg:text-4xl md:text-3xl text-2xl mt-5 sm:mt-0">Download Our App</h1>
                    <p className="md:text-base text-sm font-medium mt-2">Download and Share <span className="text-red-600">OMED</span> App <br></br>
                        to enjoy discount and Offer.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-5 sm:mt-10 mt-7 mb-5'>
                        <button>
                            <img src={google} alt="" />
                        </button>
                        <button>
                            <img src={apple} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadApp;