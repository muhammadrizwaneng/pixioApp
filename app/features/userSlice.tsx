// // slices/userSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// export const login: any = createAsyncThunk(
//   "sso/login",
//   async (payload: any) => {
//     const response = await axios
//       .post(
//         `https:/accountsapi.seebiz.cloud/login`,
//         {
//           email: payload.email,
//           password: payload.password,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//         }
//       )
//       .catch((error) => {
//         console.error("AxiosError:", error);
//         throw error;
//       });
//     const data = response;
//     return data;
//   }
// );

// type initialStateType = {
//     status: string;
//     uid: string;
//     user: string;
//     email: string;
//     token: string;
//     displayName: string;
//     imagesUrl: any;
//     errorMessage: string;
//   };
//   const initialState: initialStateType = {
//     status: "not-authenticated",
//     uid: "",
//     user: "",
//     email: "",
//     token: "",
//     displayName: "",
//     imagesUrl: "",
//     errorMessage: "",
//   };
  
//   const userSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {},
//     extraReducers: (builder: any) => {
//       builder
//         .addCase(login.fulfilled, (state: any, payload: any) => {
//           var fullName = "";
//           if (
//             payload?.payload?.data?.user?.first_name ||
//             payload?.payload?.data?.user?.last_name
//           ) {
//             fullName =
//               payload?.payload?.data?.user?.first_name +
//               " " +
//               payload?.payload?.data?.user?.last_name;
//           }
//           state.displayName = fullName;
//           state.status = "authenticated";
//           state.uid = payload?.payload?.data?.user;
//           state.user = payload?.payload?.data?.user;
//           state.token = payload?.payload?.data?.token;
//           state.messageDta = payload?.payload?.data?.message_data;
//           state.errorMessage = null;
//         })
//     },
//     // });
//   });
  
//   // export const { setUser,  } = userSlice.actions;
//   export default userSlice.reducer;
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
