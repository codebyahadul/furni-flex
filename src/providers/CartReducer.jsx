// calculate the total price of the cart
export const totalPrice = (cart) => {
    return cart.reduce((total, product) => {
        return total + product.quantity * product.offerPrice;
    }, 0);
};
const CartReducer = (state, action) => {
    switch (action.type) {
        case "Add":
            // adds a new product to the cart
            return [...state, action.product];

        case "Remove":
            // removes a product from the cart based on id
            return state.filter(product => product.id !== action.id);

        case "Increase": {
            // finds the product by id and increases its quantity by 1
            const updatedState = state.map(product => {
                if (product.id === action.id) {
                    return { ...product, quantity: product.quantity + 1 };
                }
                return product;
            });
            return updatedState;
        }

        case "Decrease": {
            // finds the product by id and decreases its quantity by 1
            const updatedState = state.map(product => {
                if (product.id === action.id) {
                    return { ...product, quantity: product.quantity - 1 };
                }
                return product;
            });
            return updatedState;
        }
        default:
            return state;
    }
};

export default CartReducer;
