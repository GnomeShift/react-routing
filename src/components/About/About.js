import React from 'react';
import {Link} from "react-router-dom";

function About() {
    return (
        <div>
            <h2>О сайте</h2>
            <div>
                <Link to="/">Главная</Link>
            </div>
        </div>
    )
}

export default About;
