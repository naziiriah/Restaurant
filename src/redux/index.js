import {  createSlice} from "@reduxjs/toolkit";


const initialState= {
    value : [],
    Total: 0,
    SplitBill: 0,
};

export const BillSlice = createSlice({
    // rename
    name:'bill',
    initialState,
    reducers: {
        addToCart:(state,{payload}) => {
            // find if this state exists and update the quantity
            const existingState = state.value.filter(state => state.id === payload.id)

            if(existingState.length === 1 ){
                for(const newState of state.value) {
                    if (newState.id === payload.id) {
                        newState.quantity = payload.quantity  ;
                    }
                }
                state.Total =state.value.reduce((total, price) => total + (price.price * price.quantity),  0)         
            }
            else{
                state.value.push({
                    id:payload.id,
                    quantity:payload.quantity ,
                    name:payload.name,  
                    price:payload.price,
                })
                localStorage.setItem('Bills', JSON.stringify(state.value))
                state.Total =state.value.reduce((total, price) => total + (price.price * price.quantity),  0)         
            }   
            state.Total =state.value.reduce((total, price) => total + (price.price * price.quantity),  0)         
            localStorage.setItem('Total', JSON.stringify(state.Total))
        },
        removeFromCart: (state, {payload}) => {

            const newState = state.value.filter(state => state.id !== payload.id)
            state.value = newState;

            state.Total = state.value.reduce((total, price) => total + (price.price * price.quantity),  0)

            localStorage.setItem('Bills', JSON.stringify(state.value))
            localStorage.setItem('Total', JSON.stringify(state.Total))
            

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
            state.Total = state.value.reduce((total, price) => total + (price.price * price.quantity),  0)

            localStorage.setItem('Bills', JSON.stringify(state.value))
            localStorage.setItem('Total', JSON.stringify(state.Total))
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
            state.Total = state.value.reduce((total, price) => total + (price.price * price.quantity),  0)

            localStorage.setItem('Bills', JSON.stringify(state.value))
            localStorage.setItem('Total', JSON.stringify(state.Total))
        },
        CalculateTotal: (state, {payload}) => {
           Number(payload.mySplit) >= Number(payload.total) || Number(payload.mySplit) === 0 ? 
                                state.Total = 0 :
                                state.Total = (payload.total - payload.mySplit)
                                

            state.Total === 0 && (state.value = [] )

        },
        UpdateSelectedStatus : (state, {payload}) => {
            const existingState = state.value.filter(state => state.id === payload.id)

            if(existingState.length === 1 ){
                for(const newState of state.value) {
                    if (newState.id === payload.id) {
                        newState.isSelected = !payload.quantity  ;
                    }
                }
            }
        },
    }
})

export const { addToCart, removeFromCart, AddQuantity, SubtractQuantity, CalculateTotal} = BillSlice.actions
export default BillSlice.reducer