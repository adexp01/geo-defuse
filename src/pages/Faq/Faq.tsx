import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import Collapse from "../../assets/collapse.svg";
import Expand from "../../assets/expand.svg";
import { MainLayout } from "../../components/ui/MainLayout";

const faqs = [
  {
    question: "How to add a child?",
    answer: "To add a child, go to settings and select 'Add a child'."
  },
  {
    question: "How to add a child?",
    answer: "To add a child, go to settings and select 'Add a child'."
  },
  {
    question: "How to add a child?",
    answer: "To add a child, go to settings and select 'Add a child'."
  }
];

export const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const [heights, setHeights] = useState<number[]>([]);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setHeights(refs.current.map(ref => ref?.scrollHeight || 0));
  }, []);

  return (
    <MainLayout>
      <div className="px-[50px] py-[100px] max-lg:px-5 max-lg:py-8">
        <div className="flex flex-col gap-5">
          {faqs.map((faq, index) => (
            <div key={index} className="flex flex-col gap-2.5">
              <div className="flex gap-2.5 items-center">
                <img
                  src={expandedIndex === index ? Collapse : Expand}
                  className="cursor-pointer"
                  onClick={() => {
                    if (expandedIndex === index) {
                      setExpandedIndex(-1);
                    } else {
                      setExpandedIndex(index);
                    }
                  }}
                />
                <p
                  className="text-[#373737] text-2xl max-lg:text-xl font-normal cursor-pointer"
                  onClick={() => {
                    if (expandedIndex === index) {
                      setExpandedIndex(-1);
                    } else {
                      setExpandedIndex(index);
                    }
                  }}
                >
                  {faq.question}
                </p>
              </div>

              <p
                ref={el => (refs.current[index] = el)}
                className={classNames(
                  "text-[#373737] text-xl max-lg:text-base font-normal overflow-hidden transition-all duration-300",
                  { "max-h-0": expandedIndex !== index }
                )}
                style={{
                  maxHeight: expandedIndex === index ? heights[index] : 0
                }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};
