import { createReducer } from "@reduxjs/toolkit";


const initialState =() =>{
    

}
const cartReducer = createReducer({
    cartItems:[],
    subTotal:0,
    shipping:0,
    tax:0,
    total:0,
},{
    addToCart:(state , action) =>{
        const item = action.payload;
        const isItemExists = state.cartItems.find((i) => i.id === item.id);

        if (isItemExists) {
            state.cartItems.forEach((i) => {
                if (i.id === item.id) {
                    // item.quantity = item.quantity+1;  
                }
            })
        }else{
            state.cartItems.push(item);
        }
    }
});

export default cartReducer;