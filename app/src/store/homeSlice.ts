import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { rejects } from "assert";

// export const apiSlice = createApi({
//     reducerPath: "api",
//     baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8000"}),
//     tagTypes: ["Home"],
//     endpoints: (builder) => ({
//         getHome: builder.query<Home, any>({
//             query: () => "home",
//             providesTags: ["Home"]
//         })
//     })
// })

type StateType = any

export const fetchHome = createAsyncThunk<any, void>("home/fetchHome", async (_, {rejectWithValue}) => {
    try {
        console.log("hi");
        const response = await axios.get("http://localhost:8000")
        console.log(response);
        
        return response.data as any;
    } catch (error) {
        return rejectWithValue("")
    }
})

export const homeSlice = createSlice({
    name: "Home",
    initialState: {} as StateType,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchHome.pending, (state) => {
            state.isLoading = true
            state.error = null
        }).
        addCase(fetchHome.fulfilled, (state, action) => {
            state.isLoading = false
            state.home = action.payload
        })
    }
})

export const {  } = homeSlice.actions
export default homeSlice.reducer