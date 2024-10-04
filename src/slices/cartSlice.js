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
        console.log("updated cart data",product_id,order_quantity)
        try {
            const response = await axios.post("https://server-orcin-delta.vercel.app/cart/updateProductQuantity", {
                product_quantity: order_quantity,
                product_id: product_id,
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log("Updated quantity on server:", response.data);
            return response.data; // Return the updated product data from the server
        } catch (error) {
            console.log("Cannot update quantity", error);
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
                console.log(`Updated quantity of product ${product_id}: ${existingProduct.order_quantity}`);
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
                console.log(`Added new product ${product_id} with quantity: ${order_quantity}`);
            }
        },
        removeReduxCart(state, action) {
            const { product_id } = action.payload;
            console.log(`Removing product ${product_id} from cart`);
            return state.filter((item) => item.product_id !== product_id);
        },
        incrementQuantity(state, action) {
            const { product_id } = action.payload;
            const product = state.find((item) => item.product_id === product_id);
            if (product) {
                product.order_quantity += 1;
                console.log(`Incremented quantity of product ${product_id}: ${product.order_quantity}`);
            }
        },
        decrementQuantity(state, action) {
            const { product_id } = action.payload;
            const product = state.find((item) => item.product_id === product_id);
            if (product && product.order_quantity > 1) {
                product.order_quantity -= 1;
                console.log(`Decremented quantity of product ${product_id}: ${product.order_quantity}`);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartData.fulfilled, (state, action) => {
                console.log("Fetched cart data:", action.payload);
                return action.payload.map((item) => ({ ...item })); // Merge and return fetched data as new state
            })
            .addCase(updateProductQuantity.fulfilled, (state, action) => {
                console.log("Updated product quantity on server:", action.payload);
            });
    },
});

export const { addToReduxCart, removeReduxCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;



