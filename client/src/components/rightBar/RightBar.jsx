import "./rightBar.scss";

const RightBar = () => {
  return (
    <div style={{
      backgroundColor: 'black', // Set the background color to black
      color: '#fff'}}className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=600=1600&lazy=load"
                alt=""
              />
              <span>Optymers</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          
          
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=600=1600&lazy=load"
                alt=""
              />
              <p>
                <span>Optymers</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          
          
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=600=1600&lazy=load"
                alt=""
              />
              <div className="online" />
              <span>Optymers</span>
            </div>
          </div>
          </div>
          
      </div>
    </div>
  );
};

export default RightBar;
