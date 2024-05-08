import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <h2>Sidebar</h2>
            <ul>
                <li><Link to="/admin/home">Home</Link></li>
                <li><Link to="/admin/users">Users</Link></li>
                <li><Link to="/admin/posts">Posts</Link></li>
            </ul>
        </aside>
    );
};

export default Sidebar;
