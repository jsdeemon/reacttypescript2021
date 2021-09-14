import React, {FC, useEffect, useState} from 'react';
import List from "./List";
import {ITodo} from "../types/types";
import TodoItem from "./TodoItem";
import axios from "axios";
import UserItem from "./UserItem";
import {useHistory} from 'react-router-dom';

const TodosPage: FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([])
    const history = useHistory();

// воспользуемся хуком useEffect, чтоб ыпри первом рендере страницы старзу получить пользователей
    useEffect(() => {

        fetchTodos()
    }, [])
    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
            // помещаем данные в массив todos
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }


    return (
        <List
            items={todos}
            renderItem={(todo: ITodo) => <TodoItem
                onClick={(todo) => history.push(`/todos/${todo.id}`)}
                todo={todo} key={todo.id}/>}
        />
    );
};

export default TodosPage;