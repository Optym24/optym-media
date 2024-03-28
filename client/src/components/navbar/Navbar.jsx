import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

const logoutHandler = async () => {
  try {
    const d = await axios.post("http://localhost:5000/api/auth/logout")
    if (d) {
      localStorage.removeItem("user")
      alert("logout successful")
      window.location.reload()
    }
  } catch (err) {
    alert('Something went wrong')
  }
}

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>OPTYM MEDIA</span>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <HomeOutlinedIcon />
        </Link>
       
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <Link to={`/profile/${currentUser.id}`} style={{ textDecoration: "none" }}>
            <img src={currentUser.profilePic ? currentUser.profilePic : ""} alt="" />
            <span>{currentUser.name}</span>
          </Link>
        </div>
      </div>
      <button className="button" onClick={logoutHandler}>logout</button>
    </div>
  );
};

export default Navbar;
