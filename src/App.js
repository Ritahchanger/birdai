import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import { useState } from "react";
const App = () => {
  const [selectedTopic, setSelectedTopic] = useState("swh_Latn");
  return (
    <>
      <Sidebar selectedTopic={selectedTopic} />
      <Main selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />
    </>
  );
};

export default App;
