import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            //payload = newItem
            state.cart.push(action.payload);
         },
        deleteItem(state, action) {
            //paload = pizzaId
            state.cart=state.cart.filter((item)=>item.pizzaId !== action.payload)
         },
        clearCart(state) {
            state.cart=[];
         },
        increaseQuantity(state, action) { 
             //paload = pizzaId
            const item = state.cart.find((item) => item.pizzaId === action.payload);
            item.quantity++;
            item.totalPrice=item.quantity*item.unitPrice
        },
        decreaseQuantity(state, action) {
              //paload = pizzaId
            const item = state.cart.find((item) => item.pizzaId === action.payload);
                item.quantity--;
                 item.totalPrice=item.quantity*item.unitPrice
            if (item.quantity === 0) {
              cartSlice.caseReducers.deleteItem(state,action);
            }
               
           
         }
    },
});
export const {addToCart, deleteItem, clearCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;
export const getCart = (state) => state.cart.cart;
export const getTotalCartQuantity =createSelector ( [getCart], (cart) => cart.reduce((sum, item) => sum + item.quantity, 0))
export const getTotalCartPrice = createSelector ( [getCart], (cart) => cart.reduce((sum, item) => sum + item.totalPrice, 0))
export const getCurrentQuantityById = id => createSelector([getCart], (cart) => {
    return cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
}
);

// reselect