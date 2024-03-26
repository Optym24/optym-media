import "./leftBar.scss";
import Friends from "../../assets/gear-solid.png";
import Groups from "../../assets/gear-solid.png";
import Market from "../../assets/gear-solid.png";
import Watch from "../../assets/gear-solid.png";
import Memories from "../../assets/gear-solid.png";

import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <Link to={`/profile/${currentUser.id}`} style={{ textDecoration: "none" }}>
              <img src={currentUser.profilePic} alt="" />
            </Link>
            <Link to={`/profile/${currentUser.id}`} style={{ textDecoration: "none" }}>
              <span>{currentUser.name}</span>
            </Link>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Optym News</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Kerala Trip Photos</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Devops News</span>
          </div>
        </div>
        <hr />
        
      </div>
    </div>
  );
};

export default LeftBar;
