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
    initialState: {
        items: [],
        shippingCost : 0,
        shippingMode : 'free',
        totalAmount: 0, // New state to track total amount
    },
    reducers: {
        addToReduxCart(state, action) {
            const { product_id, product_name, product_des, product_price, stock_quantity, product_image, order_quantity } = action.payload;
            const existingProduct = state.items.find((item) => item.product_id === product_id);
            if (existingProduct) {
                existingProduct.order_quantity += order_quantity;
            } else {
                state.items.push({
                    product_id,
                    product_name,
                    product_image,
                    product_des,
                    product_price,
                    stock_quantity,
                    order_quantity,
                });
            }
            state.totalAmount = calculateTotalAmount(state.items);
        },
        removeReduxCart(state, action) {
            const { product_id } = action.payload;
            state.items = state.items.filter((item) => item.product_id !== product_id);
            state.totalAmount = calculateTotalAmount(state.items);
        },
        incrementQuantity(state, action) {
            const { product_id } = action.payload;
            const product = state.items.find((item) => item.product_id === product_id);
            if (product) {
                product.order_quantity += 1;
            }
            state.totalAmount = calculateTotalAmount(state.items);
        },
        decrementQuantity(state, action) {
            const { product_id } = action.payload;
            const product = state.items.find((item) => item.product_id === product_id);
            if (product && product.order_quantity > 1) {
                product.order_quantity -= 1;
            }
            state.totalAmount = calculateTotalAmount(state.items);
        },
        addShippingMethod(state, action) {
            state.shippingCost = action.payload; // Update shipping cost;
        },
        addShippingMode(state,action){
            state.shippingMode = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartData.fulfilled, (state, action) => {
                state.items = action.payload.map((item) => ({ ...item }));
                state.totalAmount = calculateTotalAmount(state.items);
            })
            .addCase(updateProductQuantity.fulfilled, (state, action) => {
                const { product_id, order_quantity } = action.payload;
                const product = state.items.find((item) => item.product_id === product_id);
                if (product) {
                    product.order_quantity = order_quantity;
                }
                state.totalAmount = calculateTotalAmount(state.items);
            })
            .addCase(removeFromCart.fulfilled, (state, action) => {
                const product_id = action.payload;
                state.items = state.items.filter((item) => item.product_id !== product_id);
                state.totalAmount = calculateTotalAmount(state.items);
            });
    },
});

// Helper function to calculate total amount
const calculateTotalAmount = (items) => {
    return items.reduce((total, item) => total + item.product_price * item.order_quantity, 0);
};

export const { addToReduxCart, removeReduxCart, incrementQuantity, decrementQuantity, addShippingMethod,addShippingMode} = cartSlice.actions;
export default cartSlice.reducer;





