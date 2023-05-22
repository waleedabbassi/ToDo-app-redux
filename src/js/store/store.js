import { createStore, combineReducers } from 'redux';
import taskReducer from '../reducer/taskreducer'; 

const rootReducer = combineReducers({
tasks: taskReducer,
});

const store = createStore(rootReducer);

export default store;