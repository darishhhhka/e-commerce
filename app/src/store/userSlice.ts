import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface User {
    name: string,
    email: string,
    isLoggedIn: boolean
}

const initialState: User = {
    name: "",
    email: "",
    isLoggedIn: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{name: string; email: string}>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.isLoggedIn = true;
        },
        loginOut: (state) => {
            state.name = "";
            state.email = "";
            state.isLoggedIn = false;
        },
        updateName: (state, action: PayloadAction<{name: string}>) => {
            state.name = action.payload.name;
        }
    }
})

export const { login, loginOut, updateName } = userSlice.actions
export default userSlice.reducer