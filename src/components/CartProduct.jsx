import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { CartContext } from "../providers/ContextProvider";
/* eslint-disable react/prop-types */
const CartProduct = ({ product }) => {
    const { cart, dispatch } = useContext(CartContext)
    const Increase = (id) => {
        const index = cart.findIndex((p) => p.id === id);
        // One time user can select 100 product
        if (cart[index].quantity < 100) {
            dispatch({ type: "Increase", id });
        }
    };
    const Decrease = (id) => {
        const index = cart.findIndex((p) => p.id === id);
        if (cart[index].quantity > 1) {
            dispatch({ type: "Decrease", id });
        }
    };
    return (
        <div className="py-5 px-10 relative space-y-3 border-b-2">
            <div className="flex items-center gap-3">
                <div className="p-3 bg-white border rounded-md">
                    <button
                        className="rounded-md px-2"
                        onClick={() => Decrease(product.id)}
                    >
                        <b className="text-lg">-</b>
                    </button>
                    <button className="rounded">{product.quantity}</button>
                    <button
                        className="rounded-md px-2"
                        onClick={() => Increase(product.id)}
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
                <button onClick={() => dispatch({ type: "Remove", id: product.id })} className="absolute top-1 right-2"><IoClose size={30} /></button>
                <p className="absolute bottom-3 right-4 text-xl font-medium">${product?.offerPrice}</p>
            </div>
        </div>
    );
};

export default CartProduct;