interface TabComponentProps {
  activeTab: number;
  handleActiveTab: (tab: number) => void;
  text: string;
  tabIndex: number;
}
const Tab: React.FC<TabComponentProps> = ({activeTab,handleActiveTab,text,tabIndex}) => {
  return (
    <button
      className={activeTab === tabIndex ? "active" : ""}
      onClick={() => handleActiveTab(tabIndex)}
    >
      {text}
    </button>
  );
};

export default Tab;
