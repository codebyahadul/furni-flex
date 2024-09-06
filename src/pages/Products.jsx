import { useState } from "react";
import Data from '../../Data.json'
import Product from "../components/Product";
const Products = () => {
    const [products, setProducts] = useState(Data.products)
    const pageNumbers = [1, 2, '..', 9, 10,]
    return (
        <>
        <div className="flex gap-5 my-5 md:my-8 lg:my-12">
            <div className="border-r-2 w-[200px] lg:w-[280px] pr-3 lg:pr-5 space-y-2 hidden md:block">
                <button className="py-2 bg-black text-white w-full rounded-md border font-medium">Rocking chair</button>
                <button className="py-2 w-full border-t border-b text-gray-400 font-medium hover:bg-black duration-300 hover:text-white rounded-md">Side chair</button>
                <button className="py-2  w-full text-gray-400 font-medium hover:bg-black duration-300 hover:text-white rounded-md">Lounge chair</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-5 md:gap-10 ">
                {
                    products.map(product => <Product key={product?.id} product={product} />)
                }
            </div>
        </div>
        <div className="flex justify-center items-center px-1 md:px-5 w-full">
                <div className='flex justify-center items-center gap-2 md:gap-5 bg-gray-200 text-black p-2 shadow-lg rounded-md mx-auto select-none my-5'>
                    {/* left arrow */}
                    <div  className='text-xs cursor-pointer font-semibold px-1 py-1 w-fit'>
                        PREV
                    </div>
                    <div className='flex justify-center items-center gap-2 '>
                        {pageNumbers.map((item, idx) => <div key={idx}  className='cursor-pointer hover:scale-110 text-sm scale-100 transition-all duration-200 px-1 md:px-2 lg:px-3 bg-gray-100 hover:bg-gray-400 font-semibold text-gray-700   py-[6px]' >
                            {item}
                        </div>)}
                    </div>
                    {/* right arrow */}
                    <div className='text-xs cursor-pointer font-semibold px-1 py-1 w-fit'>
                        NEXT
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;