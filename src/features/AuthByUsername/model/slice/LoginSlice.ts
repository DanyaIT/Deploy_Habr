
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/LoginSchema";
import { loginByUsername } from "../services/loginByUsername/loginByUsername";


const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,


}

export const LoginSlice = createSlice({
    name: 'loginForm',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },

        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
    },
    extraReducers:(builder) => {
        builder
        .addCase(loginByUsername.pending, (state, action) => {
            state.error = undefined,
            state.isLoading = true
        }) 
        .addCase(loginByUsername.fulfilled, (state, action) => {
            state.isLoading = false
    
        })
        .addCase(loginByUsername.rejected, (state, action) => {
            state.isLoading = false,
            state.error = action.payload
        })
    }
})


export const {actions: LoginActions} = LoginSlice
export const {reducer: LoginReducer} = LoginSlice