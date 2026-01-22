import { Link , useLocation } from "react-router-dom"
import { useState,useEffect } from "react";
import "../components/styles.css"


function Master() {
     const location = useLocation();
     const [message, setMessage] = useState("");
      useEffect(() => {
        alert(localStorage.getItem("msg"));      
    }, []);

    return (

        <>
            <div className="head">
                <Link to="/" state={{course:message}}>Main</Link>
                <Link to="/home" state={{course:message}}>Home</Link>
                <Link to="/about" state={{course:message}}>About</Link>
                <Link to="/Contact" state={{course:message}}>Contact</Link>
                <br></br>
                <h1>This is the main page u know!!!!</h1>
            </div>
             <p>I'm belongs to ---{location.state?.course}</p>
             <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>User Login</h2>

      <input
        type="text"
        placeholder="Enter Username"
        value={message}
        onChange={(e) => {
                    setMessage(e.target.value);
                    localStorage.setItem("msg", e.target.value);
                    localStorage.setItem("username", e.target.value);
                }}
      />
</div>
        </>
    )
}

export default Master