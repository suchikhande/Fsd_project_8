import React, { useState } from 'react';
import './App.css'; // Add any extra CSS styles here

function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validation for phone number and email
        const phonePattern = /^\d{10}$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!phonePattern.test(phoneNumber)) {
            alert("Invalid phone number. Please enter a 10-digit phone number.");
            return;
        }
        
        if (!emailPattern.test(email)) {
            alert("Invalid email address. Please enter a valid email address.");
            return;
        }

        // Process form submission (e.g., send data to server)
        console.log("Form submitted with:", { name, email, phoneNumber, password });
    };

    return (
        <div style={styles.body}>
            <div style={styles.registerForm}>
                <h1>Registration Page</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={styles.input}
                    />
                    
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={styles.input}
                    />
                    
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        style={styles.input}
                    />
                    
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={styles.input}
                    />
                    
                    <button type="submit" style={styles.button}>Submit</button>
                </form>
            </div>
        </div>
    );
}

const styles = {
    body: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
        backgroundColor: '#f8f8f8',
        fontFamily: 'Arial, sans-serif',
    },
    registerForm: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        width: '400px',
    },
    input: {
        width: '100%',
        padding: '8px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    button: {
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '10px 20px',
        fontSize: '1rem',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        width: '100%',
    },
    buttonHover: {
        backgroundColor: '#555',
    }
};

export default Registration;
