import React, {useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useParams, useHistory} from 'react-router-dom';

interface UserItemPageParams {
    id: string;
}

const UserItemPage = () => {

    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserItemPageParams>();
    const history = useHistory();

// воспользуемся хуком useEffect, чтоб ыпри первом рендере страницы старзу получить пользователей
    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/` + params.id)
            // помещаем данные в массив users
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <button
            onClick={() => history.push('/users')}
            >Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;