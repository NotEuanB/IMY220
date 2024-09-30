import React from "react";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            problems: {}
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

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

        if (!this.state.email) {
            problems.email = "Email is empty";
        } else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
            problems.email = "Email is invalid";
        }

        this.setState({ problems });
        return Object.keys(problems).length === 0;
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        if (this.validate()) {
            try {
                const response = await fetch('/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: this.state.username,
                        password: this.state.password,
                        email: this.state.email
                    })
                });
                if (response.ok) {
                    console.log('User registered successfully');
                } else {
                    console.log('Registration failed');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            this.setState((prevState) => {
                console.log(prevState.problems);
                return prevState;
            });
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="usernameRegister">Username:</label>
                <input type="text" placeholder="Username here..." id="usernameRegister" name="username" value={this.state.username} onChange={this.handleChange} />
                {this.state.problems.username && <span>{this.state.problems.username}</span>}

                <br/>

                <label htmlFor="passwordRegister">Password:</label>
                <input type="password" placeholder="Password here..." id="passwordRegister" name="password" value={this.state.password} onChange={this.handleChange} />
                {this.state.problems.password && <span>{this.state.problems.password}</span>}

                <br/>

                <label htmlFor="emailRegister">Email:</label>
                <input type="email" placeholder="Email here..." id="emailRegister" name="email" value={this.state.email} onChange={this.handleChange} />
                {this.state.problems.email && <span>{this.state.problems.email}</span>}

                <br/>

                <button type="submit">Register</button>
            </form>
        );
    }
}

export default Register;