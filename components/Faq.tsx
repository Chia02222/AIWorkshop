
import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';

const faqData = [
  {
    question: "Who is this workshop for?",
    answer: "This workshop is designed for students, educators, entrepreneurs, creators, and community builders — anyone who wants to learn how to build AI-powered solutions without writing code."
  },
  {
    question: "Do I need to know how to code?",
    answer: '<span class="font-bold text-indigo-300">No coding experience is needed.</span> We’ll guide you step by step using powerful no-code tools. If you can use Google Docs or Canva, you can build a prototype in this class.'
  },
  {
    question: "Who are the instructors?",
    answer: "Lee Wei Song (AI & Product Specialist) and Tan Sin Chee (No-Code & UX Expert) are your instructors. They are industry experts passionate about empowering creators with AI."
  },
  {
    question: "Do I need to bring anything?",
    answer: "Just bring your laptop, charger, and an open mind. Wi-Fi and power outlets will be provided."
  },
  {
    question: "I have more questions – how can I contact you?",
    answer: "You can reach us at nest99nest@gmail.com or message us on 012-515 6757. We’re happy to help!"
  },
  {
      question: "Will I get a certificate?",
      answer: "Yes, you’ll receive a digital Certificate of Completion and you’ll walk away with a working prototype to showcase."
  },
  {
      question: "What’s the fee and what’s included?",
      answer: "The Early Bird fee (until July 15) is RM599, and the regular price is RM899. This includes workshop materials, access to all tools, demo templates, a certificate, lunch, and light refreshments."
  },
  {
      question: "What kind of projects can I build?",
      answer: "You’ll get to choose from 8 ready-made demo projects, including our Intelligent Meal Planner, NoteWise AI, and PolitePal. You can also come with your own idea and build it with our support."
  }
];

const FaqItem: React.FC<{
  faq: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}> = ({ faq, isOpen, onClick }) => {
    return (
        <div className="border-b border-slate-800/80">
            <dt>
                <button onClick={onClick} className="flex w-full items-center justify-between text-left text-white py-6 group">
                    <span className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                            <ChevronDownIcon />
                        </span>
                    </span>
                </button>
            </dt>
            <dd className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-300 ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="min-h-0">
                    <p className="text-base leading-7" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                </div>
            </dd>
        </div>
    );
};


const FaqSection: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="py-16 sm:py-24 bg-slate-950">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-xl text-slate-400">
                        Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
                    </p>
                </div>
                <dl className="mt-12">
                    {faqData.map((faq, index) => (
                        <FaqItem
                            key={index}
                            faq={faq}
                            isOpen={openFaqIndex === index}
                            onClick={() => toggleFaq(index)}
                        />
                    ))}
                </dl>
            </div>
        </div>
    );
};

export default FaqSection;