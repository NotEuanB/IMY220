import React from "react";
import { setCookie, getCookie, deleteCookie } from '../utils/cookie';

const styles = {
    form: {
        backgroundColor: '#fff',
        padding: '20px',
        margin: '20px auto',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        textAlign: 'left'
    },
    formLabel: {
        display: 'block',
        marginBottom: '8px',
        fontWeight: 'bold',
        color: '#0A0759'
    },
    formInput: {
        width: 'calc(100% - 20px)',
        padding: '8px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px'
    },
    formButton: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    },
    formButtonHover: {
        backgroundColor: '#0056b3'
    },
    formSpan: {
        color: 'red',
        fontSize: '12px'
    }
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
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

        if (!this.state.email) {
            problems.email = "Email is empty";
        }

        if (!this.state.password) {
            problems.password = "Password is empty";
        } else if (this.state.password.length < 5) {
            problems.password = "Password is less than 5 characters";
        }

        this.setState({ problems });
        return Object.keys(problems).length === 0;
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        if (this.validate()) {
            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: this.state.email,
                        password: this.state.password
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    setCookie('userId', data.userId, 1); 
                    window.location.href = '/home'; 
                } else {
                    alert("Login failed");
                }
           } catch (error) {
                console.error("Error:", error);
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
            <form onSubmit={ this.handleSubmit } style={styles.form}>
                <label htmlFor="emailLogin" style={styles.formLabel}>Email:</label>
                <input type="text" placeholder="Email here..." id="emailLogin" name="email" value={this.state.email} onChange={ this.handleChange } style={styles.formInput}/>
                {this.state.problems.email && <span style={styles.formSpan}>{this.state.problems.email}</span>}
                <br/>
                <label htmlFor="passwordLogin" style={styles.formLabel}>Password:</label>
                <input type="password" placeholder="Password here..." id="passwordLogin" name="password" value={this.state.password}  onChange={ this.handleChange } style={styles.formInput}/>
                {this.state.problems.password && <span style={styles.formSpan}>{this.state.problems.password}</span>}
                <br/>
                <button type="submit" style={styles.formButton}>Login</button>
            </form>
        );
    }
};

export default Login;