import { Link , useLocation } from "react-router-dom"
import "../components/styles.css"
import { useState,useEffect } from "react";
function Home() {
     const location = useLocation();

     useEffect(() => {
        alert(localStorage.getItem("msg"));      
    }, []);
    return (
        <>
            <div className="head">
                <Link to="/">Main</Link>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <br></br>
                <h1>This is home page</h1>
            </div>
             <p>I'm belongs to ---{location.state?.course}</p>
        </>
    )
}

export default Home