import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: [],
  loading: false,
  error: "",
};

export const fetchMarket = createAsyncThunk(
  "product/fetchMarket",
  async (url) => {
    const response = await axios.get(url);
    return response.data;
  }
);

const marketSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addStock: (state, action) => {
      state.product[action.payload - 1].jumlah += 1;
    },
    decStock: (state, action) => {
      state.product[action.payload - 1].jumlah -= 1;
    },
    addCart: (state, action) => {
      state.product[action.payload - 1].cart += 1;
    },
    minCart: (state, action) => {
      if (state.product[action.payload - 1].cart > 0) {
        state.product[action.payload - 1].cart -= 1;
      }
    },
    inputCart: (state, action) => {
      state.product[action.payload.id - 1].cart = action.payload.value;
    },
    resetCart: (state) => {
      state.product.forEach((data) => {
        data.cart = 0;
      });
    },
    setCart: (state, action) => {
      state.product.forEach((data, ind) => {
        data.cart = action.payload[ind];
      });
    },
    addRecap: (state, action) => {
      state.product.forEach((data) => {
        if (data.cart <= data.jumlah) {
          data.jumlah -= data.cart;
          data.recap += data.cart;
          data.cart = 0;
        }
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMarket.pending, (state) => {
      return { ...state, loading: true };
    });
    builder
      .addCase(fetchMarket.fulfilled, (state, action) => {
        if (state.product.length === 0) {
          const list = [];
          action.payload.map((val) =>
            list.push({ val, jumlah: 20, cart: 0, recap: 0 })
          );
          return { ...state, product: list, loading: false };
        } else {
          return { ...state, loading: false };
        }
      })
      .addCase(fetchMarket.rejected, (state, action) => {
        console.log("rejected");
        return { ...state, loading: false, error: action.error.message };
      });
  },
});

export const {
  addCart,
  minCart,
  inputCart,
  resetCart,
  setCart,
  addStock,
  decStock,
  addRecap,
} = marketSlice.actions;
export default marketSlice.reducer;
