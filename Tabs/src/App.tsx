import React, { useState } from "react";
import "./App.css";
import Tabs from "./components/Tabs";
import { Content } from "./components/Content";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  return (
    <div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab}></Tabs>
      <Content activeTab={activeTab}></Content>
    </div>
  );
};

export default App;
