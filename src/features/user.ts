import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserDataState {
  createdAt?: string
  email?: string
  firstName?: string
  id?: string
  lastName?: string
  updatedAt?: string
}

export interface UserState {
  token: string 
  user: UserDataState
}

const initialState: UserState = {
  token: '',
  user: {
    createdAt: '',
    email: '',
    firstName: '',
    id: '',
    lastName: '',
    updatedAt: ''
  }
}

const { actions, reducer } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (draft, action:PayloadAction<UserState>) => {
      draft.token = action.payload.token
      return
    },
    signOut: (draft) => {
      draft.token = ''
      draft.user = {
        createdAt: '',
        email: '',
        firstName: '',
        id: '',
        lastName: '',
        updatedAt: ''
      }
      return
    },
    setUser: (draft, action:PayloadAction<UserDataState>) => {
      draft.user = action.payload
      return
    },
  },
})

export const { signIn, signOut, setUser } = actions

export default reducer
