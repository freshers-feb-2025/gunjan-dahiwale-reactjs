import taskReducer from './taskReducer';

const rootReducer = combineReducers({
    tasks: taskReducer,
});

export default rootReducer;