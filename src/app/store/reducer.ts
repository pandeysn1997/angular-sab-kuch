import { CartActionTypes, CartActions } from "./actions";

export let initialState = []

export function reducer(state=initialState, action: CartActions) {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT: 
            return [...state, action.payload]
        case CartActionTypes.REMOVE_PRODUCT: 
            let product = action.payload        
            return state;
        default: 
            return state
    }
}