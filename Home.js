import React from 'react';
import './App.css';

function FoodCourt() {
    return (
        <div>
            <header style={styles.header}>
                <h1>Food Court</h1>
                <nav>
                    <ul style={styles.navList}>
                        {/* Add links as needed */}
                        {/* <li><a href="menu.html">Menu</a></li>
                        <li><a href="order.html">Online Ordering</a></li>
                        <li><a href="reservations.html">Reservations</a></li>
                        <li><a href="costrev.html">Customer Reviews</a></li>
                        <li><a href="gallery.html">Photo Gallery</a></li>
                        <li><a href="offers.html">Special Offers</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="events.html">Events & Catering</a></li> */}
                    </ul>
                </nav>
            </header>

            <section style={styles.hero}>
                <img src="fclogo.jpeg" alt="Food Court Logo" style={styles.heroImage} />
                <h1 style={styles.heroTitle}>Welcome to Food Court</h1>
                <p style={styles.heroText}>Discover a world of flavors and culinary delights.</p>
            </section>

            <div style={styles.buttons}>
                <a href="login.html"><button style={styles.button}>Login</button></a>
                <a href="registration.html"><button style={styles.button}>Register</button></a>
            </div>

            <div style={styles.imageCarousel}>
                <div style={styles.carouselContainer}>
                    <div style={styles.carouselInner}>
                        <img src="Boti kebab.jpg" alt="Image 1" style={styles.carouselImage} />
                        <img src="Bikaneri bhujia.jpg" alt="Image 2" style={styles.carouselImage} />
                        <img src="dish1.jpg" alt="Image 3" style={styles.carouselImage} />
                        <img src="dish2.jpeg" alt="Image 4" style={styles.carouselImage} />
                        <img src="dish3.png" alt="Image 5" style={styles.carouselImage} />
                        <img src="fbground.jpeg" alt="Image 6" style={styles.carouselImage} />
                        <img src="dish4.jpg" alt="Image 7" style={styles.carouselImage} />
                    </div>
                </div>
            </div>

            <section style={styles.contactDetails}>
                <h2>Contact Us</h2>
                <p>Email: info@foodcourt.com</p>
                <p>Phone: +91 9392468082</p>
                <p>Address: Near Vignan university, Vadlamudi, Guntur</p>
                <p>&copy; 2023 Food Court. All rights reserved.</p>
            </section>
        </div>
    );
}

const styles = {
    header: {
        backgroundColor: '#333',
        color: 'white',
        padding: '1rem',
        textAlign: 'center',
    },
    navList: {
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
    },
    hero: {
        textAlign: 'center',
        marginTop: '2rem',
        padding: '2rem 0',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    heroImage: {
        maxWidth: '100px',
        height: 'auto',
    },
    heroTitle: {
        margin: '1rem 0',
        fontSize: '2rem',
        color: '#333',
    },
    heroText: {
        fontSize: '1.2rem',
        color: '#555',
    },
    buttons: {
        textAlign: 'center',
        marginTop: '1rem',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        backgroundColor: '#333',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '0 10px',
        transition: 'background-color 0.3s',
    },
    imageCarousel: {
        overflow: 'hidden',
        position: 'relative',
        height: '200px',
        marginTop: '2rem',
    },
    carouselContainer: {
        display: 'flex',
        animation: 'scrollImages 20s linear infinite',
        width: '200%',
    },
    carouselInner: {
        display: 'flex',
    },
    carouselImage: {
        maxWidth: '120px',
        height: 'auto',
        margin: '0 10px',
    },
    contactDetails: {
        textAlign: 'center',
        marginTop: '2rem',
        padding: '2rem 0',
        backgroundColor: '#333',
        color: 'white',
        borderRadius: '10px',
    },
};

export default FoodCourt;
