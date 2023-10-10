"use client";

import { useState } from "react";

const initialQuestions = [
  {
    question: 'What is your product?',
    answer: 'Our product is a web application that solves XYZ problems. It provides solutions for managing tasks, tracking progress, and collaborating with team members.'
  },
  {
    question: 'How much does it cost?',
    answer: 'The basic version is free, and the premium version costs $10/month. The premium version includes additional features such as advanced task management, priority support, and unlimited storage.'
  },
  {
    question: 'How do I install it?',
    answer: 'You can install it by going to the installation page and following the instructions. The installation process is straightforward and should take less than 10 minutes.'
  },
  {
    question: 'Do you offer customer support?',
    answer: 'Yes, we offer 24/7 customer support for all users. You can contact us via email, phone, or live chat.'
  },
  {
    question: 'Can I use the product on multiple devices?',
    answer: 'Yes, you can use the product on multiple devices. Your data is synced across all devices in real time.'
  },
  {
    question: 'What are the system requirements?',
    answer: 'Our product works on any modern web browser. There are no specific hardware requirements.'
  },
  {
    question: 'Do you offer a trial period?',
    answer: 'Yes, we offer a 30-day free trial for the premium version. You can cancel anytime during the trial period without any charges.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we take data security very seriously. We use industry-standard encryption methods to protect your data.'
  },
  {
    question: 'Can I export my data?',
    answer: 'Yes, you can export your data at any time in various formats, including CSV and PDF.'
  },
  {
    question: 'Do you offer a money-back guarantee?',
    answer: 'Yes, we offer a 30-day money-back guarantee for the premium version. If you are not satisfied with the product, we will refund your purchase.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept credit cards, debit cards, and bank transfers.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [questions, setQuestions] = useState(initialQuestions);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [answerInputIndex, setAnswerInputIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const handleQuestionSubmit = (event) => {
    event.preventDefault();
    setQuestions([...questions, { question: newQuestion, answer: newAnswer }]);
    setNewQuestion('');
    setNewAnswer('');
  };

  const handleAnswerSubmit = (index, event) => {
    event.preventDefault();
    const updatedQuestions = [...questions];
    updatedQuestions[index].answer = newAnswer;
    setQuestions(updatedQuestions);
    setNewAnswer('');
    setAnswerInputIndex(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-cyan-800">Frequently Asked Questions</h1>
      <div className="grid gap-4">
        {questions.map((item, index) => (
          <div key={index} className="border rounded overflow-hidden shadow-lg bg-white p-6">
            <div>
              <button 
                className="text-xl font-medium focus:outline-none focus:ring-2 focus:ring-blue-500" 
                onClick={() => toggleAnswer(index)}
              >
                {item.question}
              </button>
            </div>
            {activeIndex === index && (
              <div className="bg-gray-100 p-4 border-t border-gray-200 mt-4">
                {item.answer}
              </div>
            )}
            {/* This is the new "Answer" button and text area for the admin */}
            {activeIndex === index && !item.answer && (
              <div className="mt-4">
                <button onClick={() => setAnswerInputIndex(index)} className="px-4 py-2 bg-blue-500 text-white rounded">Answer</button>
                {answerInputIndex === index && (
                  <form onSubmit={(event) => handleAnswerSubmit(index, event)}>
                    <textarea
                      className="w-full p-2 border rounded mt-2"
                      value={newAnswer}
                      onChange={(e) => setNewAnswer(e.target.value)}
                      placeholder="Type your answer here"
                      required
                    />
                    <button type="submit" className="mt-2 px-4 py-2 bg-green-500 text-white rounded">Submit Answer</button>
                  </form>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-cyan-800">Ask a question</h2>
        <form onSubmit={handleQuestionSubmit}>
          <textarea
            className="w-full p-2 border rounded mb-2"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Type your question here"
            required
          />
          <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FAQ;