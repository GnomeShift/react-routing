import React from 'react';
import {Link, useNavigate} from "react-router-dom";

function Main() {
    const [newName, setNewName] = React.useState("");
    const navigate = useNavigate();

    const createNew = (e) => {
        e.preventDefault();
        if (newName) {
            navigate(`/users/${newName}`);
        }
    }

    return (
        <div>
            <h2>Главная страница</h2>
            <div>
                <Link to="/about">О сайте</Link>
            </div>
            <div>
            <Link to="/contacts">Контакты</Link>
            </div>
            <div>
                <h3>Существующие пользователи</h3>
                <Link to="/users/JohnDoe">Пользователь John Doe</Link>
            </div>
            <div>
                <Link to="/users/JaneDoe">Пользователь Jane Doe</Link>
            </div>

            <h3>Создать нового пользователя</h3>
            <form onSubmit={createNew}>
                <label>
                    Имя: <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
                </label>
                <label>
                    <button type="submit">Создать</button>
                </label>
            </form>
        </div>
    )
}

export default Main;
