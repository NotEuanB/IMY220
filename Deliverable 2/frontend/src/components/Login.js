import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            problems: {}
        }
    }


    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name] : value });
    }

    validate = () => {
        const problems = {};

        if (!this.state.username) {
            problems.username = "Username is empty";
        }

        if (!this.state.password) {
            problems.password = "Password is empty";
        } else if (this.state.password.length < 5) {
            problems.password = "Password is less than 5 characters";
        }

        this.setState({ problems });
        return Object.keys(problems).length === 0;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validate()) {
            console.log('Form is valid');
        } else {
            this.setState((prevState) => {
                console.log(prevState.problems);
                return prevState;
            });
        }
    };

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <label htmlFor="usernameLogin">Username:</label>
                <input type="text" placeholder="Username here..." id="usernameLogin" name="username" value={this.state.username} onChange={ this.handleChange }/>
                {this.state.problems.username && <span>{this.state.problems.username}</span>}
                <br/>
                <label htmlFor="passwordLogin">Password:</label>
                <input type="password" placeholder="Password here..." id="passwordLogin" name="password" value={this.state.password}  onChange={ this.handleChange }/>
                {this.state.problems.password && <span>{this.state.problems.password}</span>}
                <br/>
                <button type="submit">Login</button>
            </form>
        );
    }
};

export default Login;