import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import axios from "axios";
import {useParams, useHistory} from 'react-router-dom';

interface TodoItemPageParams {
    id: string;
}

const TodoItemPage: FC = () => {

    const [todo, setTodo] = useState<ITodo | null>(null)
    const params = useParams<TodoItemPageParams>();
    const history = useHistory();

// воспользуемся хуком useEffect, чтоб ыпри первом рендере страницы старзу получить пользователей
    useEffect(() => {

        fetchTodo()
    }, [])
    async function fetchTodo() {
        try {
            const response = await axios.get<ITodo>(`https://jsonplaceholder.typicode.com/todos/` + params.id)
            // помещаем данные в массив todos
            setTodo(response.data)
        } catch (e) {
            alert(e)
        }
    }


    return (
        <div>
            <button
                onClick={() => history.push('/todos')}
            >Back</button>
            <h1>Страница задачи {todo?.id}</h1>
            <div>
                {todo?.title}
            </div>

        </div>
    );
};

export default TodoItemPage;