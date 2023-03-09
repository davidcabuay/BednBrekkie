import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux"; 
import thunk from "redux-thunk";
import session from "./session";
import listings from "./listing";
import reservations from "./reservation"
import ui from "./ui";
import reviews from "./review"

export const rootReducer = combineReducers({
    session,
    listings,
    reservations,
    ui,
    reviews
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