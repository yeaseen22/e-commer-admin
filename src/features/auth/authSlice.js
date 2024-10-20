import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authServices";

const getUserfromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const initialState = {
  user: getUserfromLocalStorage,
  orders: [],
  orderbyuser:[],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};


export const login = createAsyncThunk(
  "auth/admin-login",
  async (userData, thunkAPI) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      const errorStatus = error.response?.status || 500;
      return thunkAPI.rejectWithValue({ message: errorMessage, status: errorStatus });
    }
  }
);

export const getOrdersData = createAsyncThunk(
  "order/get-all-orders",
  async (_,thunkAPI) => {
    try {
      return await authService.getOrders();
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
console.log('order state', authService.getOrders());

export const getOrderByUser = createAsyncThunk(
  "order/get-order",
  async (id, thunkAPI) => {
    try {
      return await authService.getOrderBy(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (buildeer) => {
    buildeer
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "success";
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(getOrdersData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrdersData.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.orders = action.payload;
        state.orderbyuser = action.payload;
        state.message = "success";
      })
      .addCase(getOrdersData.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = `Error ${action.payload.status}: ${action.payload.message}`;
        state.isLoading = false;
      })
      .addCase(getOrderByUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrderByUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.orderbyuser = action.payload;
        state.message = "success";
      })
      .addCase(getOrderByUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
