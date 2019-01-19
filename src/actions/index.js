import { ADD_TODO, DELETE_TODO, CLEAR_TODOS } from '../constants';

export const addTodo = (text, deadline) => {
    const action = {
        type: ADD_TODO,
        text,
        deadline
    }
    return action;
}

export const deleteTodo = (id) => {
    const action = {
        type: DELETE_TODO,
        id
    }
    return action;
}

export const clearTodos = () => {
    return {
        type: CLEAR_TODOS
    }
}