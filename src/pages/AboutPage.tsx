import React from 'react';
import './About.css';

export const AboutPage = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">TS-shop</h1>
            <p className="about-description">An online shop is a website where customers can buy items online. They can
                usually find products from a number of different categories, such as clothing, electronics, and home goods.
                Online shops usually have easy-to-use menus and search engines, as well as helpful customer service departments.
            </p>
            <h2 className="developers-title">Developers</h2>
            <ul className="developers-list">
                <li>Orest Sabara</li>
                <li>John Smith</li>
                <li>Bob Johnson</li>
            </ul>
            {/*<h2 className="contact-title">Contact Us</h2>*/}
            {/*<form className="contact-form">*/}
            {/*    <label>Name:</label>*/}
            {/*    <input className="form-input" type="text" placeholder="Your name" /><br />*/}
            {/*    <label>Email:</label>*/}
            {/*    <input className="form-input" type="email" placeholder="Your email" /><br />*/}
            {/*    <label>Message:</label>*/}
            {/*    <textarea className="form-textarea" placeholder="Your message"></textarea><br />*/}
            {/*    <input className="form-submit" type="submit" value="Submit" />*/}
            {/*</form>*/}
        </div>
    );
}