import { Link } from "react-router-dom";


const Category = () => {
    return (
       <div className="w-11/12 mx-auto py-14">
            <div className=" ">
                <h2 className="font-bold text-4xl mb-7">Categories</h2>
            </div>
         <div className="w-11/12 mx-auto grid grid-cols-3 gap-6 ">
            <Link>
                <div className="category-item p-7 pb-14 rounded-lg bg-gradient-to-br from-[#fcfbff] to-[#b398ff] relative">
                    <div>
                        <h3 className="font-bold text-xl">Tablets</h3>
                        <p>All Tablet Products</p>
                    </div>
                    <div className="bg-white p-2 rounded-md absolute right-5 top-5">
                        <img src="https://cdn.pixabay.com/photo/2020/10/02/09/01/tablets-5620566_960_720.jpg" className=" w-24" alt="" />
                    </div>
                </div>
            </Link>
            <Link>
                <div className="category-item p-7 pb-14 rounded-lg bg-gradient-to-br from-[#fcfbff] to-[#b398ff] relative">
                    <div>
                        <h3 className="font-bold text-xl">Tablets</h3>
                        <p>All Tablet Products</p>
                    </div>
                    <div className="bg-white p-2 rounded-md absolute right-5 top-5">
                        <img src="https://cdn.pixabay.com/photo/2020/10/02/09/01/tablets-5620566_960_720.jpg" className=" w-24" alt="" />
                    </div>
                </div>
            </Link>
            <Link>
                <div className="category-item p-7 pb-14 rounded-lg bg-gradient-to-br from-[#fcfbff] to-[#b398ff] relative">
                    <div>
                        <h3 className="font-bold text-xl">Tablets</h3>
                        <p>All Tablet Products</p>
                    </div>
                    <div className="bg-white p-2 rounded-md absolute right-5 top-5">
                        <img src="https://cdn.pixabay.com/photo/2020/10/02/09/01/tablets-5620566_960_720.jpg" className=" w-24" alt="" />
                    </div>
                </div>
            </Link>
        </div>
       </div>
    );
};

export default Category;