import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  user: [],
};

export const fetchUser = createAsyncThunk("user/fetchUser", async (url) => {
  const response = await axios.get(url);
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    tambah: (state, action) => {
      const index = state.user.findIndex(
        (ind) => ind.val.username === localStorage.getItem("token")
      );
      if (state.user[index].request.length !== action.payload) {
        state.user[index].request = action.payload;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      if (state.user.length === 0) {
        console.log(state.user);
        const list = [
          {
            val: {
              address: {
                geolocation: { lat: "-37.3159", long: "82.1212" },
                city: "kilcoole",
                street: "new road",
                number: 7682,
                zipcode: "12926-3874",
              },
              id: 1,
              email: "admin@bukapedia.com",
              username: "iniadmin",
              password: "admin123",
              name: { firstname: "john", lastname: "doe" },
              phone: "1-570-236-7033",
              __v: 0,
            },
            role: "admin",
            request: [],
          },
        ];
        action.payload.map((val) =>
          list.push({ val, role: "user", request: [] })
        );
        console.log(list);
        return { ...state, user: list };
      } else {
        console.log("user udah ada");
      }
    });
  },
});

export const { tambah } = userSlice.actions;
export default userSlice.reducer;
