import React from "react";

class Login extends React.Component {
    render() {
        return (
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" placeholder="Username here..." id="username"/>
                <br/>
                <label htmlFor="password">Password:</label>
                <input type="text" placeholder="Password here..." id="password"/>
                <br/>
                <button type="submit">Login</button>
            </form>
        );
    }
};

export default Login;