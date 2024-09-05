import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from '../assets/footerLogo.png';
import { FaTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="bg-black px-3 md:px-5">
            <div className="max-w-7xl mx-auto py-5 md:py-8 lg:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-start *:flex *:flex-col *:mx-auto border-b border-b-gray-600 text-gray-300">
                <div className="text-center flex justify-center">
                    <img src={Logo} alt="" />
                </div>
                <div className="text-gray-500">
                    <h6 className="mb-5 text-lg font-bold text-gray-200">About US</h6>
                    <a className="cursor-pointer hover:underline">Master Plan</a>
                    <a className="cursor-pointer hover:underline">Jobs</a>
                    <a className="cursor-pointer hover:underline">Invest</a>
                    <a className="cursor-pointer hover:underline">Presentation</a>
                    <a className="cursor-pointer hover:underline">Blog</a>
                    <a className="cursor-pointer hover:underline">Content</a>
                </div>
                <div className="text-gray-500">
                    <h6 className="mb-5 uppercase text-lg font-bold text-gray-200">Explore EEVE</h6>
                    <a className="cursor-pointer hover:underline">Unlock my Robot Power</a>
                    <a className="cursor-pointer hover:underline">Starlight</a>
                    <a className="cursor-pointer hover:underline">Robot Platform</a>
                    <a className="cursor-pointer hover:underline">EEVE Roadmap</a>
                </div>
                <div className="text-gray-500">
                    <h6 className="mb-5 uppercase text-lg font-bold text-gray-200">Community & Support</h6>
                    <a className="cursor-pointer hover:underline">Willow X Community</a>
                    <a className="cursor-pointer hover:underline">Developer & Maker Access</a>
                    <a className="cursor-pointer hover:underline">Special Cases</a>
                </div>
            </div>
            <div className=" text-center py-3 text-gray-500 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-5 text-xs md:text-sm">
                    <div className="flex items-center justify-center mt-3 gap-3">
                        <FaFacebook size={25} className="hover:text-primary cursor-pointer" />
                        <FaInstagram size={25} className="hover:text-primary cursor-pointer" />
                        <FaTwitter size={25} className="hover:text-primary cursor-pointer" />
                        <FaLinkedinIn size={25} className="hover:text-primary cursor-pointer" />
                    </div>
                    <ul className="flex items-center gap-5">
                        <li>March22 Recap</li>
                        <li>Privacy Policy</li>
                        <li>General Terms</li>
                        <li>Contact</li>
                    </ul>
                    <p>United States (English)</p>
                </div>
                <aside className="py-5">
                    <p className="text-sm">Copyright © 2024 - All right reserved by ShopEasy</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;