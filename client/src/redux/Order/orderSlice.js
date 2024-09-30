import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// Async thunk for creating an order
export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (orderData, thunkAPI) => {
    try {
      await axios.post(
        "https://http://51.222.25.51:5000/api/orders/create-order",
        orderData
      );
      toast.success("Commande créée avec succès", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      return orderData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const markOrderAsDone = createAsyncThunk(
  "order/markOrderAsDone",
  async (orderId, thunkAPI) => {
    try {
      await axios.patch(
        `https://51.222.25.51:5000/api/orders/mark-as-done/${orderId}`
      );
      toast.success("Order marked as done successfully", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      return orderId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// Async thunk for fetching orders
export const fetchOrders = createAsyncThunk("order/fetchOrders", async () => {
  try {
    const response = await axios.get(
      "https://51.222.25.51:5000/api/orders/get-orders"
    ); // Change the API endpoint accordingly
    return response.data;
  } catch (error) {
    throw new Error("An error occurred while fetching orders.");
  }
});

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(markOrderAsDone.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(markOrderAsDone.fulfilled, (state, action) => {
        state.loading = false;
        // Update the order in the state to mark it as done
        state.orders = state.orders.map((order) =>
          order._id === action.payload ? { ...order, done: true } : order
        );
      })
      .addCase(markOrderAsDone.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
