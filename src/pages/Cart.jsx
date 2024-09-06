import { useContext } from "react";
import { CartContext } from "../providers/ContextProvider";

const Cart = () => {
    const {cart} = useContext(CartContext)
    console.log(cart);
    return (
        <div className="flex gap-5 my-5 md:my-8">
            <div>
                <h1 className="text-xl md:text-2xl font-medium">An overview of your order</h1>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Cart;