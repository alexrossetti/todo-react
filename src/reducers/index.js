import { ADD_TODO, DELETE_TODO, CLEAR_TODOS } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

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
    state = read_cookie('todos');
    
    switch(action.type){
        case ADD_TODO:
            todos = [...state, todo(action)];
            bake_cookie('todos', todos);
            return todos;
        case DELETE_TODO:
            todos = deleteTodo(state, action.id);
            bake_cookie('todos', todos);
            return todos;
        case CLEAR_TODOS:
            todos = [];
            bake_cookie('todos', todos);
            return todos;
        default:
            return state;
    }
}

export default todos;