import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { BsCart } from 'react-icons/bs';
import { useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
const Navbar = () => {
    const [dropdown, setDropdown] = useState()
    const navLinks = <>
        <li>
            <NavLink to="/"
                className={({ isActive }) =>
                    isActive
                        ? "pb-1 border-b-0 text-secondary lg:border-b-2 border-primary font-medium"
                        : "font-normal "
                }
            >Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/products"
                className={({ isActive }) =>
                    isActive
                        ? "pb-1 border-b-0 text-secondary lg:border-b-2 border-primary font-medium"
                        : "font-normal "
                }
            >Products
            </NavLink>
        </li>
        <li>
            <NavLink to="/categories"
                className={({ isActive }) =>
                    isActive
                        ? "pb-1 border-b-0 text-secondary lg:border-b-2 border-primary font-medium"
                        : "font-normal "
                }
            >Categories
            </NavLink>
        </li>
        <li>
            <NavLink to="/customs"
                className={({ isActive }) =>
                    isActive
                        ? "pb-1 border-b-0 text-secondary lg:border-b-2 border-primary font-medium"
                        : "font-normal "
                }
            >Customs
            </NavLink>
        </li>
        <li>
            <NavLink to="/blogs"
                className={({ isActive }) =>
                    isActive
                        ? "pb-1 border-b-0 text-secondary lg:border-b-2 border-primary font-medium"
                        : "font-normal "
                }
            >Blogs
            </NavLink>
        </li>
    </>
    return (
        <div className='border-b'>
            <div className="max-w-7xl mx-auto px-3 md:px-5 py-3 md:py-5 flex justify-between items-center">
                <div className='flex items-center gap-3 flex-row-reverse'>
                    <Link to='/'>
                        <img src={Logo} alt="" />
                    </Link>
                    <div onClick={() => setDropdown(!dropdown)} className='lg:hidden'>
                        {
                            dropdown ? <IoMdClose size={25} /> : <IoMdMenu size={25} />
                        }
                    </div>
                </div>
                {/* navbar center*/}
                <div className='hidden lg:flex'>
                    <ul className='flex items-center gap-8'>
                        {navLinks}
                    </ul>
                </div>
                {/* navbar end */}
                {/* <div className='flex items-center gap-3 md:gap-8 '>
                    <div className='relative'>
                        <BsCart size={20} />
                        <span className='absolute -top-3 -right-4 w-full text-sm font-medium z-50'>57</span>
                    </div>
                    <div className='cursor-pointer'>
                        <img className='rounded-full border size-6' src="" alt="" />
                        <FaUser className='size-6' />
                    </div>
                </div> */}
                <div className='flex items-center gap-5'>
                    <Link to='/signIn' className="relative inline-block px-4 py-1 md:py-2 font-medium group text-sm">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-blue-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-blue-500 group-hover:border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white">Sign In</span>
                    </Link>
                    <Link to='/signUp' className="relative hidden lg:inline-block px-4 py-2 font-medium group text-xs md:text-sm ">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-blue-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-blue-500 group-hover:border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white">Sign Up</span>
                    </Link>
                </div>
            </div>
            {
                dropdown && <div className=' lg:hidden absolute -translate-x-1 top-18 py-2 transition-all duration-500 bg-gray-200 w-full'>
                    <ul className='space-y-2 pl-5 md:pl-8'>
                        {navLinks}
                    </ul>
                </div>
            }
        </div>
    );
};

export default Navbar;