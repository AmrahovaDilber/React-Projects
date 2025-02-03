import { Cards } from "./components/Card";

const flashcards: cardType[] = [
  {
    question: "What is React?",
    answer: "A JavaScript library for building user interfaces.",
  },
  {
    question: "What is JSX?",
    answer:
      "A syntax extension for JavaScript that looks similar to XML or HTML.",
  },
  {
    question: "What is a component in React?",
    answer: "An independent and reusable piece of UI.",
  },
  {
    question: "What is state in React?",
    answer: "An object that holds data and determines component behavior.",
  },
  {
    question: "What is a prop in React?",
    answer: "A way to pass data from parent to child components.",
  },
  {
    question: "What is the virtual DOM?",
    answer: "A lightweight copy of the actual DOM that React uses for updates.",
  },
  {
    question: "What are React hooks?",
    answer: "Functions that let you use state and lifecycle features in function components.",
  },
  {
    question: "What is useEffect used for?",
    answer: "Handling side effects like API calls and subscriptions in functional components.",
  },
  {
    question: "What is the difference between state and props?",
    answer: "State is managed within a component, while props are passed from parent to child.",
  },
  {
    question: "What is React Router?",
    answer: "A library for managing navigation in React applications.",
  },
];

type cardType = {
  question: string;
  answer: string;
};

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <Cards flashcards={flashcards} />
    </div>
  );
};

export default App;


