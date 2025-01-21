import React from 'react';
import Loading from '../Components/Loading';
import { axiosSecure } from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import AddCategory from '../Modals/AddCategory';

const ManageCategory = () => {

    const {data : categories, isLoading, refetch} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const response = await axiosSecure(`/categories`)
            return response.data;
        },
    });
    
    if(isLoading){
        return <Loading></Loading>
    }
    

    return (
        <div>
           <div className='flex justify-between items-center mb-4'>
                <h2 className='text-2xl font-bold'>Active Categories ({categories.length})</h2>
                <button  onClick={() => document.getElementById("my_modal_2").showModal()} className='btn'>+ Add</button>
           </div>

           <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>
                        <label>
                            #
                        </label>
                        </th>
                        <th>Category Image</th>
                        <th>Category Name</th>
                        <th>Short Title</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        categories.map((category, index) => 
                            <tr className='hover:bg-slate-100'>
                        <th>
                        <label>
                            {index + 1}
                        </label>
                        </th>
                        <td>
                            <img src={category.photo} className='w-32 h-20'/>
                        </td>
                        <td>
                        {category.cat_description}
                        </td>
                        <td>{category.category}</td>
                        <th className='space-x-4'>
                        <button className="btn btn-ghost btn-xs">
                            <FaEdit className="text-xl text-info" /></button>
                        <button className="btn btn-ghost btn-xs">
                            <MdDeleteForever className="text-2xl text-red-600" />
                        </button>
                        </th>
                    </tr>
                        )
                    }
                    
                    </tbody>
                
                    
                </table>
            </div>
            <AddCategory refetch={refetch}></AddCategory>

        </div>
    );
};

export default ManageCategory;