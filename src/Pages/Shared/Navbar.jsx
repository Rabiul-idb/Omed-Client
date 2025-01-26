import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaBars, FaCartPlus } from "react-icons/fa";
import { useContext, useState } from "react";
import { contextApi } from "../../AuthContex/AuthContext";
import Swal from "sweetalert2";
import { TiShoppingCart } from "react-icons/ti";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";
import useSeller from "../../Hooks/useSeller";

const Navbar = () => {
  const { user, setUser, logOut } = useContext(contextApi);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [myCarts] = useCart();
  const [isAdmin] = useAdmin();
  const [isSeller] = useSeller();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "LogOut!",
          text: " Successfully LogOut",
          icon: "success",
          confirmButtonText: "OK",
        });
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className=" menubar sticky top-0 z-10 bg-[#fef5ee] shadow-2xl">
      <div className="navbar  flex justify-between items-center w-11/12 mx-auto">
        <div className="">
          <img src={logo} className="w-12" alt="" />
          <Link
            to={"/"}
            className="ml-2 text-2xl lg:text-3xl font-semibold text-red-600 font-lobster"
          >
            OMED
          </Link>
        </div>
        <div>
          <ul className="hidden lg:flex gap-6 ">
            <li>
              <NavLink to={"/"} className="text-base font-semibold">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/shop"} className="text-base font-semibold">
                Shop
              </NavLink>
            </li>
            {/* {
                    user?.email && (<li><NavLink to={"/dashboard"} className="text-base font-semibold">Dashboard</NavLink></li>) 
                } */}
            <li>
              <NavLink to={"/about"} className="text-base font-semibold">
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="">
          {/* <div className="hidden lg:block font-semibold text-black text-lg mr-2">
            {user && user?.email ? user?.displayName : ""}
          </div> */}
          <Link to={'/dashboard/Cart'} className=" rounded-full border-gray-400 p-2 mr-2 relative">
            <TiShoppingCart className="text-2xl"  />
            <span className="absolute -top-1 right-0 text-red-700">{myCarts.length}</span>
          </Link>

          {user && user?.email ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                onClick={() => setShow(!show)}
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-11 rounded-full">
                  <img
                    alt="user"
                    className="w-11 h-11 rounded-full"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] w-52 p-2 shadow ${
                  show ? "block" : "hidden"
                }`}
              >
                <li className="block lg:hidden">
                  <a>{user?.displayName}</a>
                </li>
                <li>
                  <a>{user?.email}</a>
                </li>
                <li className="font-semibold">
                    {isAdmin ? (
                      <Link to={"/dashboard/admin-home"}>Dashboard</Link>
                    ) : isSeller ? (
                      <Link to={"/dashboard/seller-home"}>Dashboard</Link>
                    ) : (
                      user?.email && <Link to={"/dashboard/customer-home"}>Dashboard</Link>
                    )}
                </li>
                {/* {
                  user?.email && (<li className="font-semibold">
                    <Link to={"/dashboard"}>Dashboard</Link>
                  </li>)
                }
                {
                   isAdmin && (<li className="font-semibold">
                    <Link to={"/dashboard/admin-home"}>Dashboard</Link>
                  </li>)
                }
                {
                   isSeller && (<li className="font-semibold">
                    <Link to={"/dashboard/seller-home"}>Dashboard</Link>
                  </li>)
                } */}
                {/* <li className="font-semibold"><Link to={"/addFood"}>Add Food</Link></li>
                        <li className="font-semibold"><Link to={`/myOrder/${user?.email}`}>My Order</Link></li> */}
                <li>
                  <Link
                    to={"/updateUserInfo"}
                    className="justify-between text-info"
                  >
                    Update profile
                  </Link>
                </li>
                <li
                  onClick={handleLogOut}
                  className="font-semibold text-red-500"
                >
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/login"} className="btn ">
              Join Us
            </Link>
          )}

          {/* drawer start  */}

          <div className="lg:hidden drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">{/* Page content here */}</div>
            <div className="drawer-side z-20">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-60 p-4">
                <h2 className="font-bold text-xl flex items-center justify-center gap-2">
                  <img src={logo} className="w-12" alt="" />
                  OMED
                </h2>
                <div className="divider divider-info"></div>

                <li>
                  <NavLink to={"/"} className="text-base font-semibold">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/shop"} className="text-base font-semibold">
                    Shop
                  </NavLink>
                </li>
                {user?.email && (
                  <li>
                    <NavLink
                      to={"/dashboard"}
                      className="text-base font-semibold"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                )}
                <li>
                  <NavLink to={"/about"} className="text-base font-semibold">
                    About us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <label
            htmlFor="my-drawer-4"
            className="lg:hidden drawer-button btn border rounded-full ml-2 text-base"
          >
            <FaBars className=""></FaBars>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
