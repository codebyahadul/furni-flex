import { IoClose } from "react-icons/io5";

/* eslint-disable react/prop-types */
const CartProduct = ({ product }) => {
    return (
        <div className="py-5 px-10 relative space-y-3 border-b-2">
            <div className="flex items-center gap-3">
                <div className="p-3 bg-white border rounded-md">
                    <button
                        className="rounded-md px-2"
                    >
                        <b className="text-lg">-</b>
                    </button>
                    <button className="rounded">{product.quantity}</button>
                    <button
                        className="rounded-md px-2"
                    >
                        <b className="text-lg">+</b>
                    </button>
                </div>
                <div>
                    <img className="size-32" src={product?.thumbnail} alt="" />
                </div>
                <div>
                    <h1 className="text-lg font-medium">{product?.title}</h1>
                </div>
            </div>
            <div>
                <button className="absolute top-1 right-2"><IoClose size={30} /></button>
                <p className="absolute bottom-3 right-4 text-xl font-medium">${product?.offerPrice}</p>
            </div>
        </div>
    );
};

export default CartProduct;