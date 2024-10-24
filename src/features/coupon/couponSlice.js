// import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
// import couponService from "./couponService";

// export const getAllCoupon = createAsyncThunk(
//   "coupon/get-coupons",
//   async (thunkAPI) => {
//     try {
//       return await couponService.getCoupons();
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
// export const createCoupon = createAsyncThunk(
//   "coupon/create-coupon",
//   async (couponData, thunkAPI) => {
//     try {
//       return await couponService.createCoupons(couponData);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
// export const deleteACoupon = createAsyncThunk(
//   "coupon/delete-coupon",
//   async (id, thunkAPI) => {
//     try {
//       return await couponService.deleteCoupon(id);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
// export const getACoupon = createAsyncThunk(
//   "coupon/get-coupon",
//   async (id, thunkAPI) => {
//     try {
//       return await couponService.getCoupon(id);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
// export const updateACoupon = createAsyncThunk(
//   "color/update-coupon",
//   async (coupon, thunkAPI) => {
//     try {
//       return await couponService.updateCoupon(coupon);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
// export const resetState = createAction("Reset_all");

// const initialState = {
//   coupons: [],
//   isError: false,
//   isLoading: false,
//   isSuccess: false,
//   message: "",
// };
// export const couponSlice = createSlice({
//   name: "coupons",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getAllCoupon.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(getAllCoupon.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.coupons = action.payload;
//       })
//       .addCase(getAllCoupon.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.error;
//       })
//       .addCase(createCoupon.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(createCoupon.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.coupons = action.payload;
//       })
//       .addCase(createCoupon.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.error;
//       })
//       .addCase(deleteACoupon.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(deleteACoupon.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.coupons = action.payload;
//       })
//       .addCase(deleteACoupon.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.error;
//       })
//       .addCase(getACoupon.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(getACoupon.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.couponName = action.payload[0].name;
//         state.couponDiscount = action.payload[0].discount;
//         state.couponExpiry = action.payload[0].expiry;
//       })
//       .addCase(getACoupon.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.error;
//       })
//       .addCase(updateACoupon.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(updateACoupon.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = false;
//         state.isSuccess = true;
//         state.couponName = action?.payload[0]?.name;
//         state.couponDiscount = action?.payload[0]?.discount;
//         state.couponExpiry = action?.payload[0]?.expiry;
//       })
//       .addCase(updateACoupon.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.isSuccess = false;
//         state.message = action.error;
//       })
//       .addCase(resetState, () => initialState);
//   },
// });

// export default couponSlice.reducer;


import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import couponService from "./couponService";

// Thunk for fetching all coupons
export const getAllCoupon = createAsyncThunk(
  "coupon/get-coupons",
  async (_, thunkAPI) => {
    try {
      return await couponService.getCoupons();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Thunk for creating a coupon
export const createCoupon = createAsyncThunk(
  "coupon/create-coupon",
  async (couponData, thunkAPI) => {
    try {
      return await couponService.createCoupons(couponData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Thunk for deleting a coupon
export const deleteACoupon = createAsyncThunk(
  "coupon/delete-coupon",
  async (id, thunkAPI) => {
    try {
      return await couponService.deleteCoupon(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Thunk for getting a specific coupon
export const getACoupon = createAsyncThunk(
  "coupon/get-coupon",
  async (id, thunkAPI) => {
    try {
      return await couponService.getCoupon(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Thunk for updating a coupon
export const updateACoupon = createAsyncThunk(
  "coupon/update-coupon",
  async (coupon, thunkAPI) => {
    try {
      return await couponService.updateCoupon(coupon);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const resetState = createAction("coupon/reset-all");

const initialState = {
  coupons: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const couponSlice = createSlice({
  name: "coupons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetching all coupons
      .addCase(getAllCoupon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.coupons = action.payload;
      })
      .addCase(getAllCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Handle creating a coupon
      .addCase(createCoupon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.coupons.push(action.payload);
      })
      .addCase(createCoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Handle deleting a coupon
      .addCase(deleteACoupon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteACoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.coupons = state.coupons.filter(coupon => coupon.id !== action.payload.id);
      })
      .addCase(deleteACoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Handle getting a specific coupon
      .addCase(getACoupon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getACoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        const { name, discount, expiry } = action.payload;
        state.couponName = name;
        state.couponDiscount = discount;
        state.couponExpiry = expiry;
      })
      .addCase(getACoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Handle updating a coupon
      .addCase(updateACoupon.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateACoupon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const { name, discount, expiry } = action.payload;
        state.couponName = name;
        state.couponDiscount = discount;
        state.couponExpiry = expiry;
      })
      .addCase(updateACoupon.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Reset state
      .addCase(resetState, () => initialState);
  },
});

export default couponSlice.reducer;
