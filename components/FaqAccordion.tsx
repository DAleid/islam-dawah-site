"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  questions: FaqItem[];
}

export default function FaqAccordion({ questions }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {questions.map((item, index) => (
        <div
          key={index}
          className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-5 text-start hover:bg-primary-50/50 transition-colors"
          >
            <span className="font-bold text-primary-800 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm font-bold flex-shrink-0">
                {index + 1}
              </span>
              {item.q}
            </span>
            <svg
              className={`w-5 h-5 text-primary-500 flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-5 pb-5 pt-0">
              <div className="border-t border-gray-100 pt-4">
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
