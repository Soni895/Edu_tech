
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  Step: 1,
  Course: null,
  Editcourse: false,
  Paymentloading: false,
}

const CourseSlice = createSlice({
  name: "Course",
  initialState,
  reducers: {
    Setstep: (state, action) => {
      state.Step = action.payload
    },
    Setcourse: (state, action) => {
      state.Course = action.payload
    },
    Seteditcourse: (state, action) => {
      state.Editcourse = action.payload
    },
    Setpaymentloading: (state, action) => {
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
    Setstep,
    Setcourse,
    Seteditcourse,
  setpaymentloading,
  resetCourseState,
} = CourseSlice.actions

export default CourseSlice.reducer