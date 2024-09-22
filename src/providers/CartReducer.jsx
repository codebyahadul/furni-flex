// calculate the total price of the cart
export const totalPrice = (cart) => {
    return cart.reduce((total, product) => {
        return total + product.quantity * product.offerPrice;
    }, 0);
};
const CartReducer = (state, action) => {
    switch (action.type) {
        case "Add":{
            const updatedCart = state.map(product => {
                if (product.id === action.product.id) {  // Check if the product already exists in the cart
                    return { ...product, quantity: product.quantity + 1 };  // Increase the quantity
                }
                return product;  // Return the product unchanged if it's not the one being updated
            });
            const isExistsProduct = state.some(product => product.id === action.product.id);
            if (!isExistsProduct) {
                return [...state, { ...action.product, quantity: 1 }];  // Add new product with quantity 1 if it doesn't exist
            }

            return updatedCart;}  // Return the updated cart with modified quantity


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
