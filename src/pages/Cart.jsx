import { useContext } from "react";
import { CartContext } from "../providers/ContextProvider";
import CartProduct from "../components/CartProduct";

const Cart = () => {
    const { cart } = useContext(CartContext)
    return (
        <div className="flex flex-col md:flex-row gap-5 lg:gap-10 my-5 md:my-8">
            <div className="flex-1">
                <h1 className="text-xl md:text-2xl font-medium">An overview of your order</h1>
                <div className="my-5 bg-gray-100 rounded-lg">
                    {
                        cart.map((product, idx) => <CartProduct key={idx} product={product} />)
                    }
                </div>
            </div>
            <div>
                <h1 className="text-xl md:text-2xl font-medium">Oder details</h1>
                <div className="bg-gray-100 px-10 py-5 my-5 w-full lg:w-[400px] rounded-lg space-y-3 border-2 border-gray-200">
                    <div className="flex justify-between text-lg font-medium">
                        <h1>Subtotal</h1>
                        <p>$1200</p>
                    </div>
                    <div className="flex justify-between text-lg font-medium">
                        <h1>Shipping</h1>
                        <p>Free</p>
                    </div>
                    <div className="flex justify-between text-lg font-medium">
                        <h1>Estimated Tax</h1>
                        <p>$00</p>
                    </div>
                    <div className="flex justify-between text-xl font-bold border-t border-b border-gray-200 py-3">
                        <h1>Total</h1>
                        <p>$1200</p>
                    </div>
                </div>
                <button className="text-lg font-medium text-white py-2 bg-black rounded-md w-full">Go to Checkout</button>
            </div>
        </div>
    );
};

export default Cart;