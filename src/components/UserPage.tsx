import React, {FC, useEffect, useState} from 'react';
import {ITodo, IUser} from "../types/types";
import axios from "axios";
import UserItem from "./UserItem";
import List from "./List";
import {useHistory} from 'react-router-dom';


const UserPage: FC = () => {

    const [users, setUsers] = useState<IUser[]>([])
    const history = useHistory();

// воспользуемся хуком useEffect, чтоб ыпри первом рендере страницы старзу получить пользователей
    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>(`https://jsonplaceholder.typicode.com/users`)
            // помещаем данные в массив users
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
            <List
                items={users}
                renderItem={(user: IUser) => <UserItem
                onClick={(user) => history.push(`/users/${user.id}`)}
                    user={user} key={user.id}/>}
            />
    );
};

export default UserPage;