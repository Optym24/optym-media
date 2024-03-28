import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./register.scss";

const Popup = ({ message, onClose }) => (
  <div className="popup" style={{ top: "60px", left: 0, position: "fixed", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 999 }}>
    <div className="popup-content" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "white", padding: "20px", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}>
      <p style={{ color: "black", textAlign: "center" }}>{message}</p>
      <button style={{ backgroundColor: "black", color: "white", padding: "8px 16px", borderRadius: "3px", border: "none", cursor: "pointer" }} onClick={onClose}>Close</button>
    </div>
  </div>
);





const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const [popupMessage, setPopupMessage] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
  
    try {
      await axios.post("https://optym-media-1.onrender.com/api/auth/register", inputs);
      setPopupMessage("User has been created.");
    } catch (err) {
      console.log(err);
      setPopupMessage(err.response.data);
    } finally {
      setIsPopupVisible(true);
      // Reset the inputs state here
      setInputs({
        username: "",
        email: "",
        password: "",
        name: "",
      });
    }
  };
  
  

  const closePopup = () => {
    setIsPopupVisible(false);
    setPopupMessage("");
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Optym Media</h1>
          <p>Register your Optym Media account here!</p>
          <span>Already have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
      {isPopupVisible && (
        <Popup message={popupMessage} onClose={closePopup} />
      )}
    </div>
  );
};

export default Register;
