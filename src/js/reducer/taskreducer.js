import { ADD_TASK, TOGGLE_TASK, DELETE_TASK, FILTER_TASKS, EDIT_TASK } from '../constant/actions-types'

const initialState = {
    tasks: [{id:1, description:'one', isDone:false,}],
    filter : 'all',
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {



    case ADD_TASK:
        // Add a new task to the state
        return {...state,tasks: [...state.tasks, action.payload]
        };


    case TOGGLE_TASK:
            return {
            ...state,
            tasks: state.tasks.map((task) =>
            task.id === action.payload.id
            ? { ...task, isDone: !task.isDone }
            : task
            ),
            };

    case DELETE_TASK:
                return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload.id),
                };


    case FILTER_TASKS:
        return {
            ...state,
            filter: action.payload.filter,
        };

        
        case EDIT_TASK:
            return {
            ...state,
            tasks: state.tasks.map((task) =>
                task.id === action.payload.id
                ? { ...task, description: action.payload.description }
                : task),
            };
    default:
        return state; // Return the state as is for unrecognized actions
    }
};
export default rootReducer;