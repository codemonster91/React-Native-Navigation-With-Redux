import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers';

export function configureStore(initialStates){
    const store = createStore(rootReducer,initialStates)
    return store; 
}