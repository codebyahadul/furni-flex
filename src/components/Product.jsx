import { IoBag } from "react-icons/io5";
/* eslint-disable react/prop-types */
const Product = ({ product }) => {
    return (
        <div className="p-5 border-2 rounded-md shadow-md max-w-lg">
            <div>
                <img className="w-full h-[236px]" src={product.thumbnail} alt="img" />
            </div>
            <div className="mt-3 md:mt-8 md:px-2 lg:px-5">
                <h1 className="text-xl font-medium">{product.title}</h1>
                <div className="flex justify-between items-center my-5 gap-3">
                    <h1 className="md:text-lg lg:text-xl font-semibold">${product?.price}</h1>
                    <h1 className="text-lg lg:text-xl font-semibold text-gray-400 line-through">${product?.offerPrice}</h1>
                    <h1 className="text-xl font-semibold text-red-400">${product?.offer} OFF</h1>
                </div>
                <p className="text-xs md:text-sm font-medium my-4">{product?.description.slice(0, 60)}</p>
                <button className="w-full py-2 flex items-center justify-center gap-4 bg-black text-white my-3 rounded-lg">
                    <IoBag size={20}/> Add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;