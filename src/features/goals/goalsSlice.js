import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  loading: true,
  userData: {},
  loginData: {},
  registerResp: "",
  loginResp: {},
  goalInfo: {},
  hideRegister: false,
  hideLogin: false,
  goalCards: [],
  showEdit: false,
  goalToEdit: {},
  currEditGoal: {}
}

export const sendData = createAsyncThunk(
  "register/data",
  async (registerData, thunkAPI) => {
    // params passing user input
    console.log("registerData", registerData)

    const { userData } = thunkAPI.getState().goals
    try {
      const resp = await axios.post(
        `http://localhost:3000/api/v1/auth/register`,
        {
          data: {
            user: registerData
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
export const sendGoalData = createAsyncThunk(
  "goal/data",
  async (_, thunkAPI) => {
    // params passing user input
    const { goalInfo, loginResp } = thunkAPI.getState().goals

    let postData = { data: goalInfo }

    let config = {
      headers: {
        Authorization: `Bearer ${loginResp.token} `
      }
    }

    try {
      const resp = await axios.post(
        `http://localhost:3000/api/v1/goals/create`,
        postData,
        config
      )
      return resp.data
    } catch (error) {
      console.log("error", error)
      return error.response
    }
  }
)
export const getGoals = createAsyncThunk(
  "getGoals/data",
  async (_, thunkAPI) => {
    // params passing user input
    const { goalInfo, loginResp } = thunkAPI.getState().goals

    let postData = { data: goalInfo }

    let config = {
      headers: {
        Authorization: `Bearer ${loginResp.token} `
      }
    }

    try {
      const resp = await axios.get(
        `http://localhost:3000/api/v1/goals/`,
        config
      )
      return resp.data
    } catch (error) {
      console.log("error", error)
      return error.response
    }
  }
)
export const updateGoals = createAsyncThunk(
  "updateGoals/data",
  async (data, thunkAPI) => {
    // params passing user input
    const { currEditGoal, loginResp } = thunkAPI.getState().goals
    const { goalId } = currEditGoal
    let patchData = { data, goalId }

    let config = {
      headers: {
        Authorization: `Bearer ${loginResp.token} `
      }
    }

    try {
      const resp = await axios.patch(
        `http://localhost:3000/api/v1/goals/`,
        patchData,
        config
      )
      return resp.data
    } catch (error) {
      console.log("error", error)
      return error
    }
  }
)
export const deleteGoal = createAsyncThunk(
  "deleteGoal/data",
  async (goalId, thunkAPI) => {
    // params passing user input
    const { loginResp } = thunkAPI.getState().goals

    let config = {
      headers: {
        Authorization: `Bearer ${loginResp.token} `
      }
    }

    try {
      const resp = await axios.delete(
        `http://localhost:3000/api/v1/goals/${goalId}`,
        config
      )
      return resp.data
    } catch (error) {
      console.log("error", error)
      return error
    }
  }
)

const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.loginData = payload.email
    },
    goalData: (state, { payload }) => {
      state.goalInfo = payload
    },
    logoutUser: () => {
      return initialState
    },
    showEditForm: (state, { payload }) => {
      state.showEdit = payload
    },
    currEditGoal: (state, { payload }) => {
      state.currEditGoal = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendData.pending, (state) => {
        state.loading = true
      })
      .addCase(sendData.fulfilled, (state, { payload }) => {
        state.loading = false
        if (payload.msg === "User created successfully") {
          state.hideRegister = true
        }
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
      .addCase(getGoals.pending, (state) => {
        state.loading = true
      })
      .addCase(getGoals.fulfilled, (state, { payload }) => {
        state.loading = false
        state.goalCards = payload
      })
      .addCase(getGoals.rejected, (state, { payload }) => {
        state.loading = false
        state.loginResp = payload
      })
      .addCase(updateGoals.pending, (state) => {
        state.loading = true
      })
      .addCase(updateGoals.fulfilled, (state, { payload }) => {
        state.loading = false
        state.goalCards = payload
        state.showEdit = false
      })
      .addCase(updateGoals.rejected, (state, { payload }) => {
        state.loading = false
        state.loginResp = payload
      })
      .addCase(deleteGoal.pending, (state) => {
        state.loading = true
      })
      .addCase(deleteGoal.fulfilled, (state, { payload }) => {
        state.loading = false
        state.goalCards = payload
      })
      .addCase(deleteGoal.rejected, (state, { payload }) => {
        state.loading = false
        state.loginResp = payload
      })
  }
})

export const {
  registerUser,
  loginUser,
  goalData,
  logoutUser,
  showEditForm,
  currEditGoal
} = goalsSlice.actions

export default goalsSlice.reducer
