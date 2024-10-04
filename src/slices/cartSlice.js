import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch cart data from the server
export const fetchCartData = createAsyncThunk("cart/fetchCartData", async (user_id) => {
    try {
        const response = await axios.post("https://server-orcin-delta.vercel.app/cart/getCartItems", {
            user_id: user_id,
        }, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data; // Return the cart data fetched from the server
    } catch (err) {
        console.error("Error in getting cart data:", err);
        throw err;
    }
});

// Thunk to update product quantity on the server
export const updateProductQuantity = createAsyncThunk(
    "cart/updateProductQuantity",
    async ({ product_id, order_quantity }) => {
        try {
            const response = await axios.post("https://server-orcin-delta.vercel.app/cart/updateProductQuantity", {
                product_quantity: order_quantity,
                product_id: product_id,
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return { product_id, order_quantity };
        } catch (error) {
            console.log("Cannot update quantity", error);
            throw error;
        }
    }
);

// Thunk to remove item from the server
export const removeFromCart = createAsyncThunk(
    "cart/removeCartItem",
    async (product_id) => {
        console.log({product_id})
        try {
            await axios.post("https://server-orcin-delta.vercel.app/cart/removeCartItem", {
                product_id: product_id,
            }, {
                headers: {
                    'Content-Type': "application/json",
                },
            });
            return product_id;
        } catch (error) {
            console.log("Cannot delete from cart", error);
            throw error;
        }
    }
);

export const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToReduxCart(state, action) {
            const { product_id, product_name, product_des, product_price, stock_quantity, product_image, order_quantity } = action.payload;
            const existingProduct = state.find((item) => item.product_id === product_id);
            if (existingProduct) {
                existingProduct.order_quantity += order_quantity;
            } else {
                state.push({
                    product_id,
                    product_name,
                    product_image,
                    product_des,
                    product_price,
                    stock_quantity,
                    order_quantity,
                });
            }
        },
        removeReduxCart(state, action) {
            const { product_id } = action.payload;
            return state.filter((item) => item.product_id !== product_id);
        },
        incrementQuantity(state, action) {
            const { product_id } = action.payload;
            const product = state.find((item) => item.product_id === product_id);
            if (product) {
                product.order_quantity += 1;
            }
        },
        decrementQuantity(state, action) {
            const { product_id } = action.payload;
            const product = state.find((item) => item.product_id === product_id);
            if (product && product.order_quantity > 1) {
                product.order_quantity -= 1;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartData.fulfilled, (state, action) => {
                return action.payload.map((item) => ({ ...item }));
            })
            .addCase(updateProductQuantity.fulfilled, (state, action) => {
                const { product_id, order_quantity } = action.payload;
                console.log(product_id)
                const product = state.find((item) => item.product_id === product_id);
                if (product) {
                    product.order_quantity = order_quantity;
                }
            })
            .addCase(removeFromCart.fulfilled, (state, action) => {
                const product_id = action.payload;
                console.log(product_id)
                return state.filter((item) => item.product_id !== product_id);
            });
    },
});

export const { addToReduxCart, removeReduxCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;




