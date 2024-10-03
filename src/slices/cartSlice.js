import { createSlice } from "@reduxjs/toolkit";

const cartBox = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState: cartBox,
    reducers: {


        addToReduxCart(state, action) {
            const { id, product_name, product_des, product_price, stock_quantity, product_image, order_quantity } = action.payload;
            console.log(id, product_name, product_des, product_price, stock_quantity, order_quantity)
            const existingProduct = state.find((item) => item.id === id)
            if (existingProduct) {
                existingProduct.order_quantity += order_quantity;
            } else {
                state.push({
                    id,
                    product_name,
                    product_image,
                    product_des,
                    product_price,
                    stock_quantity,
                    order_quantity
                })
            }
        },

        removeReduxCart(state, action) {
            const { id } = action.payload;
            return state.filter((item) => item.id !== id)
        },

        incrementQuantity(state, action) {
            const { id } = action.payload;
            console.log(id)
            const Product = state.find((item) => item.id === id);
            Product.order_quantity += 1
        },

        decrementQuantity(state, action) {
            const { id } = action.payload;
            console.log(id)
            const Product = state.find((item) => item.id === id);
            if (Product.order_quantity === 1) {
                return;
            } else {
                Product.order_quantity -= 1
            }
        }

    }
})


export const { addToReduxCart, removeReduxCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;