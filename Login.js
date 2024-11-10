import React, { useState } from 'react';
import './App.css'; // Include your CSS here

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.trim()) {
            alert("Please enter your email.");
            return;
        }
        if (!password.trim()) {
            alert("Please enter your password.");
            return;
        }
        // Continue with form submission logic here
        console.log("Form submitted with:", { email, password });
    };

    return (
        <div style={styles.body}>
            <div style={styles.box}>
                <div style={styles.form}>
                    <h1>Login Here</h1>
                    <form onSubmit={handleSubmit}>
                        <div style={styles.inputContainer}>
                            <i className="fa-solid fa-envelope"></i>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={styles.input}
                            />
                        </div>
                        <div style={styles.inputContainer}>
                            <i className="fa-solid fa-key"></i>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={styles.input}
                            />
                            <i
                                className={showPassword ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'}
                                onClick={() => setShowPassword(!showPassword)}
                                style={styles.eyeIcon}
                            ></i>
                        </div>
                        <button type="submit" style={styles.button}>Submit</button>
                    </form>
                    <p><b>New to Food Court? </b></p>
                    <a href="registration.html">Register Here.</a>
                </div>
            </div>
        </div>
    );
}

const styles = {
    body: {
        backgroundImage: 'url(offer3.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        width: '500px',
        height: '370px',
        boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.2)',
    },
    form: {
        textAlign: 'center',
        width: '60%',
    },
    inputContainer: {
        position: 'relative',
        marginBottom: '15px',
    },
    input: {
        fontSize: '14px',
        width: '250px',
        height: '35px',
        border: 'none',
        outline: 'none',
        borderBottom: '1px solid rgb(172, 172, 172)',
        padding: '5px',
    },
    eyeIcon: {
        position: 'absolute',
        right: '10px',
        bottom: '10px',
        color: 'grey',
        cursor: 'pointer',
    },
    button: {
        backgroundColor: 'black',
        color: 'white',
        border: 'none',
        width: '100px',
        height: '35px',
        margin: '10px 0',
    },
};

export default Login;
