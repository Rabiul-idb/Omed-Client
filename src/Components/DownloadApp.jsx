import google from '../../src/assets/images/google.png';
import apple from '../../src/assets/images/apple.png';

const DownloadApp = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div className="bg-download-bg h-[400px] bg-no-repeat bg-cover bg-center">
                <div className="h-full px-20 flex flex-col justify-center">
                    <h1 className="font-bold text-4xl ">Download Our App</h1>
                    <p className="text-base font-medium mt-2">Download and Share <span className="text-red-600">OMED</span> App <br></br>
                        to enjoy discount and Offer.
                    </p>
                    <div className='flex gap-5 mt-10'>
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