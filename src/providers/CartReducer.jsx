
const CartReducer = (state, action) => {
    console.log(state);
    
    switch (action.type) {
        case "Add":
            return [...state, action.product]
            case "Remove":
            return state.filter( p => p.id !== action.id)

        case "Increase":
            const IndexI = state.findIndex( p => p.id === action.id)
            state[IndexI].quantity += 1
            return [...state]

        case "Decrease":
            const IndexD = state.findIndex( p => p.id === action.id)
            state[IndexD].quantity -= 1 
            return [...state]
        default:
            state;
    }
}

export default CartReducer