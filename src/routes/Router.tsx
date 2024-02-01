import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import BoardLayout from "../layout/BoardLayout";
import AllTask from "../pages/AllTask";
import TaskDescription from "../pages/TaskDescription";
import EditTask from "../pages/EditTask";
import People from "../pages/People";
import Setting from "../pages/Setting";
import FilterTask from "../pages/FilterTask";

export const mainRouth = createBrowserRouter([
  {
    path: "/",
    element: <BoardLayout />,
    children: [
      {
        index: true,
        element: <AllTask />,
      },
      {
        path: "task/:id",
        element: <TaskDescription />,
      },
      {
        path: "updatetask/:id",
        element: <EditTask />,
      },
      {
        path: "people",
        element: <People />,
      },
      {
        path: "settings",
        element: <Setting />,
      },
      {
        path: "filter-task",
        element: <FilterTask />,
      },
    ],
  },
]);
