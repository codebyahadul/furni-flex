
const CartReducer = (state, action) => {
    console.log(state);
    
    switch (action.type) {
        case "Add":
            return [...state, action.product]
        default:
            state;
    }
}

export default CartReducer