import AccordionItem from "./AccordionItem";

interface faqType {
  title: string;
  text: string;
}

interface accordionProps {
  data: faqType[];
}
const Accordion: React.FC<accordionProps> = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <AccordionItem
          num={index}
          title={item.title}
          text={item.text}
        ></AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
