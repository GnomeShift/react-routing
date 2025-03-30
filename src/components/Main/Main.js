import React from 'react';
import {Link} from "react-router-dom";

function Main() {
    return (
        <div>
            <h2>Главная страница</h2>
            <div>
                <Link to="/about">О сайте</Link>
            </div>
            <div>
            <Link to="/contacts">Контакты</Link>
            </div>
        </div>
    )
}

export default Main;
