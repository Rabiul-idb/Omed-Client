import React from 'react';

const ItemDetails = ({selectedItem, setSelectedItem}) => {
    return (
        <>
        <div className="modal modal-open" >
                    <div className="modal-box max-w-2xl ">
                        <div>
                            <img src={selectedItem.photo} className="mx-auto" alt="" />
                        </div>
                        <h3 className="font-bold text-lg">{selectedItem.brand_name}</h3>
                        <p>{selectedItem.generic_name}</p>
                        <p>Company: {selectedItem.brand}</p>
                        <p>Category: {selectedItem.category}</p>
                        <p className="">Price: ${selectedItem.price} per Unit</p>
                        <p>Discount (%) : {selectedItem.discount > 0 ? selectedItem.discount : "N/A"}</p>
                        <p className="mt-4"> {selectedItem.description}</p>
                        <div className="modal-action">
                            <button
                                className="btn"
                                onClick={() => setSelectedItem(null)} // Close modal
                            >
                                Close
                            </button>
                        </div>
                    </div>
                    
                </div>
        </>
    );
};

export default ItemDetails;