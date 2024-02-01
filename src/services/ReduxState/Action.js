import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      task: "Ask My AI for a Sylabus",
      status: "pending",
      date: "2024-02-17",
      description:
        "Get access to all of our time-saving tools with an affordable pro account, starting from £6 per month.Make the most of TeachMateAI with a whole school account. We offer whole school packages to suit every size of school or trust.",
      id: "11e3",
    },
    {
      task: "Join TeachMateAI! facebook Group.",
      status: "complected",
      date: "2024-02-12",
      description:
        "Join us for a free live 30 min demo to see what TeachMateAI is capable of and how it can transform your work-life balance. We've got a Facebook group just for TMAI teachers to share their tips.",
      id: "62b4",
    },
  ],

  filter: "all",
};

const Action = createSlice({
  name: "second",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      const adding = {
        ...payload,
        id: Math.ceil(Math.random() * 2632).toString(),
      };
      state.data.push(adding);
    },

    filterTask: (state, action) => {
      state.filter = action.payload;
    },

    editTask: (state, action) => {
      const { id, newData } = action.payload;
      const existingTask = state.data.find((item) => item.id === id);
      if (existingTask) {
        Object.assign(existingTask, newData);
      }
    },

    removeTask: (state, action) => {
      const itemIdToRemove = action.payload;
      state.data = state.data.filter((item) => item.id !== itemIdToRemove);
    },
  },
});

export const { addTask, removeTask, editTask, filterTask } = Action.actions;

export default Action.reducer;
