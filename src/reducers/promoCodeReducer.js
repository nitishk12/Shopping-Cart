const initialState = {
    open: false,
    value: ''
}

const promoCodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PROMO_CODE': {
            return {
                ...state, value: action.payload
            }
        }
        default: {
            return state
        }
    }
}
export default promoCodeReducer