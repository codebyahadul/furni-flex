import { Link } from 'react-router-dom';
import banner1 from '../assets/banner1.avif';
import banner2 from '../assets/banner2.avif';
const Home = () => {
    return (
        <section className="bg-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-16 md:py-24">
                {/* Text Section */}
                <div className="md:w-1/2 space-y-6 text-center md:text-left">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 leading-tight">
                        Elevate Your <br />
                        <span className="text-blue-500">Home's Interior</span>
                    </h1>
                    <p className="text-xs md:text-sm lg:text-lg text-gray-600">
                        Transform your living space with modern, comfortable, and stylish furniture designs made just for you.
                    </p>
                    <Link to='/products' className="inline-block text-xs md:text-sm md:text-lg px-8 py-2 lg:py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
                        Shop Now
                    </Link>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 relative">
                    <div className="relative">
                        <img
                            src={banner1}
                            alt="Furniture"
                            className="w-full rounded-lg shadow-lg transform hover:scale-105 transition duration-500"
                        />
                        <img
                            src={banner2}
                            alt="Furniture Accent"
                            className="absolute top-0 right-0 w-32 md:w-48 rounded-lg shadow-lg transform rotate-12 hover:rotate-0 transition duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;