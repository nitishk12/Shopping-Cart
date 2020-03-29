import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promoCodeReducer from './reducers/promoCodeReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        promocode: promoCodeReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore