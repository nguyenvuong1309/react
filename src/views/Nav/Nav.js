import React from 'react';
import './Nav.scss';
import {
    Link, NavLink
} from "react-router-dom";



class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <a className="active" href="/">Home</a>
                <a href="/todo">Todos</a>
                <a href="/about">About</a>
                <a href="/user">Users</a>
            </div>
        )
    }
}
export default Nav;