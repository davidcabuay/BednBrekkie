import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux"; 
import thunk from "redux-thunk";
import session from "./session";
import listing from "./listing";

export const rootReducer = combineReducers({
    session,
    listing
})


let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

export default function configureStore(preloadedState = {}){
    return legacy_createStore(rootReducer, preloadedState, enhancer)
}