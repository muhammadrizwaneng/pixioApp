import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "user/login",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        `https://accountsapi.seebiz.cloud/login`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      return response;
    } catch (error) {
      console.error("AxiosError:", error);
      throw error;
    }
  }
);

export const logout: any = createAsyncThunk("sso/Logout", async () => {
  return true;
  //return {email, password};UPDATE_NAME
});

const initialState = {
  status: "not-authenticated",
  uid: "",
  user: "",
  email: "",
  token: "",
  displayName: "",
  imagesUrl: "",
  errorMessage: "",
  isLoggedIn:false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      const { data } = action.payload;
      const fullName =
        (data.user.first_name || "") + " " + (data.user.last_name || "");
      state.displayName = fullName.trim();
      state.status = "authenticated";
      state.uid = data.user.uid;
      state.user = data.user;
      state.token = data.token;
      state.imagesUrl = data.user.imagesUrl;
      state.isLoggedIn = true
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.displayName ="";
      state.status = "not-authenticated";
      state.uid = "";
      state.user = "";
      state.token = "";
      state.imagesUrl = "";
      state.isLoggedIn = false
    });
  },
});

export default userSlice.reducer;
