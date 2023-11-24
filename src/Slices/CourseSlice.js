
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  Step: 3,
  Course: null,
  Editcourse: false,
  Paymentloading: false,
}

const CourseSlice = createSlice({
  name: "Course",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.Step = action.payload
    },
    SetCourse: (state, action) => {
      state.Course = action.payload
    },
    setEditcourse: (state, action) => {
      state.Editcourse = action.payload
    },
    setPaymentloading: (state, action) => {
      state.Paymentloading = action.payload
    },
    Resetcoursestate: (state) => {
      state.Step = 1
      state.Course = null
      state.Editcourse = false
    },
  },
})

export const {
  Resetcoursestate,
  setPaymentloading,
  setEditcourse,
  SetCourse,
  setStep,
} = CourseSlice.actions

export default CourseSlice.reducer