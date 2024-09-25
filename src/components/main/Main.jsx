import "./main.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../context/context";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const Main = ({ selectedTopic, setSelectedTopic }) => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleTopicSelect = (selected) => {
    setSelectedTopic(selected);
  };

  const getTitle = () => {
    switch (selectedTopic) {
      case "luo_Latn":
        return "LUO";
      case "kik_Latn":
        return "KIKUYU";
      case "kam_Latn":
        return "KAMBA";
      case "swh_Latn":
        return "SWAHILI";
      case "eng_Latn":
        return "ENGLISH";
      default:
        return "SWAHILI";
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSent("generate_text", input, selectedTopic);
      setInput(""); // Optionally clear the input after submission
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <div className="left-nav" onClick={toggleDropdown}>
          <p style={{ fontSize: "1rem" }}>Altitude</p>
          <span className={`${isOpen ? "active" : ""}`}>
            <IoMdArrowDropdownCircle />
          </span>
          {isOpen && (
            <div className="custom-drop-down">
              <ul>
                <li onClick={() => handleTopicSelect("luo_Latn")}>Luo</li>
                <li onClick={() => handleTopicSelect("kik_Latn")}>Kikuyu</li>
                <li onClick={() => handleTopicSelect("kam_Latn")}>Kamba</li>
                <li onClick={() => handleTopicSelect("swh_Latn")}>Swahili</li>
                <li onClick={() => handleTopicSelect("eng_Latn")}>English</li>
              </ul>
            </div>
          )}
        </div>
        <p className="title">{getTitle()}</p>
        <img src={assets.user_icon} alt="User Icon" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <div className="greet">
            <p>
              <span>Niaje, Rafiki</span>
              <p>Naeza kusaidia, aje?</p>
            </p>
          </div>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="User Icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img
                src={assets.gemini_icon}
                alt="Gemini Icon"
                className="gemini-icon"
              />
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
              placeholder="Enter something to search.."
              onChange={(e) => setInput(e.target.value)}
              value={input}
              onKeyDown={handleKeyDown} // Added keydown event listener
            />
            <div>
              <img
                src={assets.send_icon}
                alt="Send Icon"
                onClick={() => {
                  onSent("generate_text", input, selectedTopic);
                }}
              />
            </div>
          </div>
          <p className="bottom-info">
            Altitude may display inaccurate info, including about people, so
            double-check its responses. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
