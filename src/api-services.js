import request from 'superagent';

export const getToDos = async() => {
    const data = await request.get('https://enigmatic-meadow-92328.herokuapp.com/api/todos');

    const todos = data.body;

    return todos;

};

// addToDo(todo);

// updateToDo(todo);

// removeToDo(todoId);