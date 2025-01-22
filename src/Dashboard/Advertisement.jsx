import AddAdvertise from "../Modals/AddAdvertise";


const Advertisement = () => {
    return (
        <div>
            
            <div className='flex justify-between items-center mb-4'>
                <h2 className='text-2xl font-bold'>My Advertisements</h2>
                <button  onClick={() => document.getElementById("my_modal_2").showModal()} className='btn'>+ Add Advertise</button>
           </div>





           <AddAdvertise></AddAdvertise>
            
        </div>
    );
};

export default Advertisement;