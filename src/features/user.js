import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
  user: null,
}

const { actions, reducer } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (draft, action) => {
      draft.token = action.payload.token
      return
    },
    signOut: (draft) => {
      draft.token = null
      draft.user = null
      return
    },
    setUser: (draft, action) => {
      draft.user = action.payload
      return
    },
  },
})

export const { signIn, signOut, setUser } = actions

export default reducer
