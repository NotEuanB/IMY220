import React from "react";

class Register extends React.Component {
    render() {
        return (
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" placeholder="Username here..." id="username"/>
                <br/>
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="Password here..." id="password"/>
                <br/>
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Email here..." id="email"/>
                <br/>
                <button type="submit">Register</button>
            </form>
        );
    }
};

export default Register;