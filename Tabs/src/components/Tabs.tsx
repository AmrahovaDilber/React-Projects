import Tab from "./Tab";

interface TabProps {
    activeTab: number,
    setActiveTab: (tab: number) => void
  }

const Tabs: React.FC<TabProps> = ({ activeTab, setActiveTab }) => {

  function handleActiveTab(tab: number) {
    setActiveTab(tab);
  }

  return (
    <div className="tabs">
      <Tab activeTab={activeTab} handleActiveTab={handleActiveTab} text="Tab 1" tabIndex={1} />
      <Tab activeTab={activeTab} handleActiveTab={handleActiveTab} text="Tab 2" tabIndex={2} />
      <Tab activeTab={activeTab} handleActiveTab={handleActiveTab} text="Tab 3" tabIndex={3} />
      <Tab activeTab={activeTab} handleActiveTab={handleActiveTab} text="Tab 4" tabIndex={4} />
    </div>
  );
}



export default Tabs;
