import { Link , useLocation } from "react-router-dom";
import "../components/contact.css";
import profile from "../assets/My dp.jpeg";
import { useState,useEffect } from "react";


function Contact() {
     const location = useLocation();
      useEffect(() => {
        alert(localStorage.getItem("msg"));      
    }, []);
    return (
        <>
            <div className="head">
                <nav className="nav">
                    <Link to="/">Main</Link>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                <h1>This is Contact Page</h1>
            </div>

            <div className="contact-container">
                <div className="contact-card">

                    <div className="photo-section">
                        
                        <img src={profile} alt="Profile" />

                    </div>

                    <div className="info-section">
                         <p>I'm belongs to ---{location.state?.course}</p>
                        <p><span>ID Number:</span> 2500030359</p>
                        <p><span>Name:</span> Gurram_Tharun</p>
                        <p><span>Phone:</span> 6302993030</p>
                        <p><span>Email:</span> tharun@gmail.com</p>
                        <p><span>Address:</span> Guntur , Andhra Pradesh</p>
                        <p><span>Department:</span> CSE</p>
                        <p><span>College:</span>KL UNIVERSITY</p>
                    </div>
                    {/* Message Box */}
        <div className="contact-card message-card">
          <h2>Send a Message</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button>Send Message</button>
        </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
