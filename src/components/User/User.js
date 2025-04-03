import React from 'react';
import { useParams, Link } from 'react-router-dom';

function User() {
    const { userId } = useParams();
    return (
        <div>
            <p>Пользователь: {userId}</p>
            <Link to="/">Главная</Link>
        </div>
    )
}

export default User;
