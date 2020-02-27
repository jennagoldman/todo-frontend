import request from 'superagent';

export const getToDos = async() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const data = await request.get('https://enigmatic-meadow-92328.herokuapp.com/api/todos')
        .set('Authorization', user.token);
    const todos = data.body;

    return todos;
};

export const addToDo = async(todo) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const data = await request.post('https://enigmatic-meadow-92328.herokuapp.com/api/todos', todo)
        .set('Authorization', user.token);
};

export const updateToDo = async(todo) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const data = await request.put(`https://enigmatic-meadow-92328.herokuapp.com/api/todo/${todo.id}`, todo)
        .set('Authorization', user.token);
}

export const deleteToDo = async(todoId) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const data = await request.delete(`https://enigmatic-meadow-92328.herokuapp.com/api/todo/${todoId}`)
        .set('Authorization', user.token);
};