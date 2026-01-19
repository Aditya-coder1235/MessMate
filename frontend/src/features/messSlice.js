import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchAllMess = createAsyncThunk('/fetch/mess', async () => {
    try {
        const res = await axios.get(
            "http://localhost:8080/api/mess/getAll",
            { withCredentials: true },
        );
        return res.data.AllMess
    } catch (error) {
        console.error(error.response?.data.message || error.message);
    }
})

const messSlice = createSlice({
    name: 'mess',
    initialState: {
        mess: [],
        allMess: [],
        loading: false,
        error: ''
    },
    reducers: {
        searchMess: (state, action) => {
            let search = action.payload.toLowerCase()

            if (search === '') {
                state.mess = state.allMess
            } else {
                state.mess = state.mess.filter((mess) =>
                    mess.messName.toLowerCase().includes(action.payload.toLowerCase())
                )
            }
        },
        filterForVegNonVeg: (state, action) => {
            let text = action.payload

            if (text === 'all' || text ==='both') {
                state.mess = state.allMess
            } else {
                state.mess = state.allMess.filter((mess) =>
                    mess.vegNonveg === action.payload
                )
            }
        },
        filterByCity:(state,action)=>{
            let city=action.payload

            if(city==='all'){
                state.mess=state.allMess
            }else{
                state.mess=state.allMess.filter((mess)=>
                    mess.city===action.payload
                )
            }
        }
    }
    ,
    extraReducers: (builder) => {
        builder.addCase(fetchAllMess.pending, (state, action) => {
            state.loading = true
            state.error = ''
        })
            .addCase(fetchAllMess.fulfilled, (state, action) => {
                state.loading = false
                state.mess = action.payload
                state.allMess = action.payload
            })
            .addCase(fetchAllMess.rejected, (state, action) => {
                state.error = action.payload
            })
    }
});

export const { searchMess ,filterForVegNonVeg,filterByCity} = messSlice.actions
export default messSlice.reducer