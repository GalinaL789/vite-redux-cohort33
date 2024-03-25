import { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "store/createAppSlice"

import { UsersSliceState, UserData } from "./types"

const usersSliceInitialState: UsersSliceState = {
  users: [
    {
      id: "123",
      firstlastName: "Ivan Ivanov",
      age: "18",
      jobTitle: "mechanik",
    },
    {
      id: "433",
      firstlastName: "Ivan Naumov",
      age: "48",
      jobTitle: "teamleader",
    },
    {
      id: "433",
      firstlastName: "Andrei Ivanov",
      age: "54",
      jobTitle: "teamleader",
    },
  ],
}

export const usersSlice = createAppSlice({
  name: "USERS",
  initialState: usersSliceInitialState,
  reducers: create => ({
    addUser: create.reducer(
      (state: UsersSliceState, action: PayloadAction<UserData>) => {
        console.log(action.payload)
        state.users = [...state.users, action.payload]
      },
    ),
  }),
  selectors: {
    users: (state: UsersSliceState) => state.users,
  },
})

export const usersSliceActions = usersSlice.actions
export const usersSliceSelectors = usersSlice.selectors
