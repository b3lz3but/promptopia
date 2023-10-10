"use client";
import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: 'What is your product?',
      answer: 'Our product is a web application that solves XYZ problems.'
    },
    {
      question: 'How much does it cost?',
      answer: 'The basic version is free, and the premium version costs $10/month.'
    },
    {
      question: 'How do I install it?',
      answer: 'You can install it by going to the installation page and following the instructions.'
    }
  ];

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">FAQ</h1>
      <ul>
        {questions.map((item, index) => (
          <li key={index} className="mb-3 p-2 border rounded">
            <div>
              <button 
                className="text-xl font-medium focus:outline-none focus:ring-2 focus:ring-blue-500" 
                onClick={() => toggleAnswer(index)}
              >
                {item.question}
              </button>
            </div>
            {activeIndex === index && <div className="mt-2 text-base">{item.answer}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;