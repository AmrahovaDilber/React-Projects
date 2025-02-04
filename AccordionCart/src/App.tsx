import Accordion from "./components/Accordion";

const faqs: faqType[] = [
  {
    title: "What is React, and why is it popular?",
    text: "React is a JavaScript library for building user interfaces. It is popular due to its component-based architecture, virtual DOM, and efficient rendering.",
  },
  {
    title: "What are the key differences between React and Vue?",
    text: "React is a library focused on UI, requiring additional packages for routing and state management, while Vue is a framework with built-in tools. React uses JSX, whereas Vue uses templates.",
  },
  {
    title: "How can I optimize performance in a React application?",
    text: "You can optimize performance by using React.memo, lazy loading, proper state management, avoiding unnecessary re-renders, and utilizing the React Profiler.",
  },
];


interface faqType {
  title: string;
  text: string;
}

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

