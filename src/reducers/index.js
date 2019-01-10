import { ADD_TODO, DELETE_TODO, CLEAR_TODOS } from '../constants';

const uuidv4 = require('uuid/v4');

const todo = (action) => {
    let { text, deadline } = action;
    return {
        id: uuidv4(),
        text,
        deadline
    }
}

const deleteTodo = (state = [], id) => {
    const todos = state.filter(todo => todo.id !== id); 
    return todos;
}

const todos = (state = [], action) => {
    let todos = null;
    
    switch(action.type){
        case ADD_TODO:
            todos = [...state, todo(action)];
            return todos;
        case DELETE_TODO:
            todos = deleteTodo(state, action.id);
            return todos;
        case CLEAR_TODOS:
            todos = [];
            return todos;
        default:
            return state;
    }
}

export default todos;