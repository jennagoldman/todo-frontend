import request from 'superagent';

export const getToDos = async() => {
    const data = await request.get('https://enigmatic-meadow-92328.herokuapp.com/api/todos');

    const todos = data.body;

    return todos;

};

export const addToDo = async(todo) => {
    const data = await request.post('https://enigmatic-meadow-92328.herokuapp.com/api/todos', todo)
};

// updateToDo(todo);

// removeToDo(todoId);