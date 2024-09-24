import { createContext, useState } from "react";
import run from "../config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + " " + nextWord);
    }, 75 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
    setResultData(""); // Clear previous results
    setInput(""); // Reset input for new chat
  };

  const onSent = async (subject, prompt = input, source_lang) => {
    try {
      setResultData("");
      setLoading(true);
      setShowResult(true);
      setRecentPrompt(prompt);

      if (!prevPrompts.includes(input)) {
        setPrevPrompts((prev) => [...prev, input]);
      }

      const response = await run(subject, prompt, source_lang);
      
      let responseArray = response.split("**");
      let newResponse = "";

      for (let i = 0; i < responseArray.length; i++) {
        newResponse += (i % 2 === 0) ? responseArray[i] : `<b>${responseArray[i]}</b>`;
      }

      let formattedResponse = newResponse.split("*").join("<br/>");
      let responseWords = formattedResponse.split(" ");

      responseWords.forEach((word, i) => {
        delayPara(i, word);
      });
    } catch (error) {
      console.error("Error occurred while fetching the response:", error);
      setResultData("There was an error processing your request. Please try again.");
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
