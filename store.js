import { configureStore } from "@reduxjs/toolkit"

import goalsSlice from "./src/features/goals/goalsSlice"

export const store = configureStore({
  reducer: {
    goals: goalsSlice
  }
})
