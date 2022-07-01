import {  createSlice} from "@reduxjs/toolkit";


const initialState= {
    value : [],
};

export const BillSlice = createSlice({
    // rename
    name:'bill',
    initialState,
    reducers: {
        reset: (state) => {
            state.value = []
            localStorage.setItem('Bills', JSON.stringify(state.value))
        },
        addToCart:(state,{payload}) => {
            // find if this state exists and update the quantity
            const existingState = state.value.filter(state => state.id === payload.id)

            if(existingState.length === 1 ){
                for(const newState of state.value) {
                    if (newState.id === payload.id) {
                        newState.quantity = payload.quantity  ;
                    }
                }
            }
            else{
                state.value.push({
                    id:payload.id,
                    quantity:payload.quantity ,
                    name:payload.name,  
                    price:payload.price
                })
                localStorage.setItem('Bills', JSON.stringify(state.value))
            }            
        },
        removeFromCart: (state, {payload}) => {

            const newState = state.value.filter(state => state.id !== payload.id)
            state.value = newState
            localStorage.setItem('Bills', JSON.stringify(state.value))

        },
        AddQuantity:(state, {payload}) => {

            const existingState = state.value.filter(state => state.id === payload.id)

            if(existingState.length === 1 ){
                for(const newState of state.value) {
                    if (newState.id === payload.id) {
                        newState.quantity = payload.quantity +1  ;
                    }
                }
            }

            localStorage.setItem('Bills', JSON.stringify(state.value))
        },
        SubtractQuantity:(state, {payload}) => {

            const existingState = state.value.filter(state => state.id === payload.id)

            if(existingState.length === 1 ){
                for(const newState of state.value) {
                    if (newState.id === payload.id) {
                        newState.quantity = payload.quantity -1  ;
                    }
                }
            }

            localStorage.setItem('Bills', JSON.stringify(state.value))

        }
    }
})

export const {reset, addToCart, removeFromCart, AddQuantity, SubtractQuantity} = BillSlice.actions
export default BillSlice.reducer