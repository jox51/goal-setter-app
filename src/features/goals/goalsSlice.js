import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  loading: true,
  userData: {},
  loginData: {},
  registerResp: "",
  loginResp: {},
  goalInfo: {},
  hideLogin: false
}

export const sendData = createAsyncThunk(
  "register/data",
  async (_, thunkAPI) => {
    // params passing user input

    const { userData } = thunkAPI.getState().goals
    try {
      const resp = await axios.post(
        `http://localhost:3000/api/v1/auth/register`,
        {
          data: {
            user: userData
          }
        }
      )
      return resp.data
    } catch (error) {
      return error.message
    }
  }
)

export const sendLoginData = createAsyncThunk(
  "login/data",
  async ({ email, password }, thunkAPI) => {
    // params passing user input

    try {
      const resp = await axios.post(`http://localhost:3000/api/v1/auth/login`, {
        data: {
          user: { email, password }
        }
      })
      return resp.data
    } catch (error) {
      console.log("error", error)
      return error.response
    }
  }
)

const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    registerUser: (state, { payload }) => {
      state.userData = payload
    },
    loginUser: (state, { payload }) => {
      state.loginData = payload.email
    },
    goalData: (state, { payload }) => {
      state.goalInfo = payload
    },
    logoutUser: () => {
      return initialState
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendData.pending, (state) => {
        state.loading = true
      })
      .addCase(sendData.fulfilled, (state, { payload }) => {
        state.loading = false
        state.registerResp = payload
      })
      .addCase(sendData.rejected, (state, { payload }) => {
        state.loading = false
        console.log(payload)
      })
      .addCase(sendLoginData.pending, (state) => {
        state.loading = true
      })
      .addCase(sendLoginData.fulfilled, (state, { payload }) => {
        state.loading = false
        state.loginResp = payload
        if (payload.msg === "login success") {
          state.hideLogin = true
        }
      })
      .addCase(sendLoginData.rejected, (state, { payload }) => {
        state.loading = false
        state.loginResp = payload
      })
  }
})

export const { registerUser, loginUser, goalData, logoutUser } =
  goalsSlice.actions

export default goalsSlice.reducer
