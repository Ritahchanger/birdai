import "./main.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../context/context";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const [isOpen, setIsOpen] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState("Attitude");

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    toggleDropdown(); // Close dropdown after selection (optional)
  };

  return (
    <div className="main">
      <div className="nav">
        <div className="left-nav" onClick={toggleDropdown}>
          <p
            style={{
              fontSize: "1rem",
            }}
          >
            Attitude
          </p>
          <span className={`${isOpen ? "active" : ""}`}>
            <IoMdArrowDropdownCircle />
          </span>
          {isOpen && (
            <div className="custom-drop-down">
              <ul>
                <li onClick={() => handleTopicSelect("Chat bot")}>Chat bot</li>
                <li onClick={() => handleTopicSelect("Paraphrase")}>
                  Paraphrase
                </li>
                <li onClick={() => handleTopicSelect("Summarize Text")}>
                  Summarize Text
                </li>
                <li onClick={() => handleTopicSelect("Brainstorm")}>
                  Brainstorm
                </li>
              </ul>
            </div>
          )}
        </div>
        <p className="title">{selectedTopic.toUpperCase()}</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Friend</span>
                <p>I can help you</p>
              </p>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />

              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" className="gemini-icon" />

              {loading ? (
                <div className="preloader">
                  <div className="spinner"></div>
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter something to search.."
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <div>
              <img
                src={assets.send_icon}
                alt=""
                onClick={() => {
                  onSent();
                }}
              />
            </div>
          </div>
          <p className="bottom-info">
            Attitude may display inaccurate info, including about people, so
            double-check its responses. Your privacy & Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
