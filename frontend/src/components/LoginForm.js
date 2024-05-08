import React from 'react';

const LoginForm = () => {
    return (
        <div className="login-form">
            <form>
                <label>Username:</label>
                <input type="text" />
                <label>Password:</label>
                <input type="password" />
                <button>Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
