import "./main.css";
import { assets } from "../../assets/assets";
const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev</span>
            <p>How can I help you today?</p>
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcomming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={assets.menu_icon} alt="" />
          </div>
          <div className="card">
            <p>Update readability of the following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter something to search.."
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy & Gemini Apps
        </p>
        </div>
       
      </div>
    </div>
  );
};

export default Main;
