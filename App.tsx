import React, { useState, useEffect, useRef, ReactNode } from 'react';

// Mock data for missing constants
const PROJECTS = [
  {
    id: 'imp',
    title: 'Impact Tracker',
    description: 'Build an AI-powered community impact measurement tool',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
  },
  {
    id: 'chat',
    title: 'Smart Assistant',
    description: 'Create a conversational AI for customer support',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop'
  },
  {
    id: 'analyze',
    title: 'Data Analyzer',
    description: 'Build an AI tool for business data insights',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
  }
];

const DAY1_AGENDA = [
  { time: '10:00 AM', activity: 'Welcome & Introduction to AI' },
  { time: '11:00 AM', activity: 'Hands-on with No-Code AI Tools' },
  { time: '12:00 PM', activity: 'Lunch Break' },
  { time: '1:00 PM', activity: 'Project Building Session' },
  { time: '3:00 PM', activity: 'Coffee Break' },
  { time: '3:30 PM', activity: 'Advanced Features & Integration' },
  { time: '5:00 PM', activity: 'Project Showcase & Wrap-up' }
];

// Simple icon components to replace missing ones
const SparklesIcon = () => (
  <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l3.057-3 1.443 2L12 4l2.5-2L18 3l-2.5 2L18 7l-2.5-2L12 8l-2.5-2L5 7l2.5-2L5 3z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const AcademicCapIcon = () => (
  <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

const UserGroupIcon = () => (
  <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const LightBulbIcon = () => (
  <svg className="w-12 h-12 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const CubeTransparentIcon = () => (
  <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
  </svg>
);

const CertificateIcon = () => (
  <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const TrophyIcon = () => (
  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const CalendarDaysIcon = () => (
  <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

// Reusable animation component
const AnimateOnScroll: React.FC<{ children: ReactNode; className?: string; }> = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className || ''} transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

// Mock components for missing imports
const ProjectShowcase: React.FC<{ 
  id: string; 
  selectedProjectId: string; 
  setSelectedProjectId: (id: string) => void; 
}> = ({ id, selectedProjectId, setSelectedProjectId }) => (
  <div id={id} className="py-16 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
          Build Real-World AI Solutions
        </h2>
        <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto">
          Choose from these exciting project tracks and bring your ideas to life
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className={`bg-slate-900 rounded-2xl overflow-hidden ring-1 ring-slate-800 hover:ring-indigo-500 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
              selectedProjectId === project.id ? 'ring-indigo-500 shadow-lg shadow-indigo-500/20' : ''
            }`}
            onClick={() => setSelectedProjectId(project.id)}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-slate-400">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AgendaSection: React.FC = () => (
  <div id="agenda" className="py-16 sm:py-24 bg-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
          Workshop Agenda
        </h2>
        <p className="mt-4 text-xl text-slate-400">
          A full day of hands-on learning and building
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="bg-slate-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">August 2, 2025</h3>
          <div className="space-y-6">
            {DAY1_AGENDA.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-24 text-indigo-400 font-semibold">
                  {item.time}
                </div>
                <div className="ml-6 text-slate-300">
                  {item.activity}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FaqSection: React.FC = () => (
  <div className="py-16 sm:py-24">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="space-y-8">
        <div className="bg-slate-900 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-2">Do I need coding experience?</h3>
          <p className="text-slate-400">No! This workshop is designed for beginners. We'll use no-code tools to build AI applications.</p>
        </div>
        <div className="bg-slate-900 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-2">What should I bring?</h3>
          <p className="text-slate-400">Just bring your laptop and enthusiasm! We'll provide everything else you need.</p>
        </div>
        <div className="bg-slate-900 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-2">Will I get a certificate?</h3>
          <p className="text-slate-400">Yes! You'll receive a digital certificate upon completion of the workshop.</p>
        </div>
      </div>
    </div>
  </div>
);

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-500 transition-all duration-300 z-50 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

const Header: React.FC<{ onAgendaClick: (e: React.MouseEvent<HTMLAnchorElement>) => void }> = ({ onAgendaClick }) => (
  <header className="absolute top-0 left-0 right-0 z-10 p-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <div className="mr-3">
          <SparklesIcon />
        </div>
        <span className="font-bold text-lg text-white">AI for Good</span>
      </div>
      <div className="hidden sm:flex items-center space-x-2">
        <a href="#agenda" onClick={onAgendaClick} className="text-white font-semibold py-2 px-4 rounded-lg hover:bg-slate-800/60 transition-colors">
          View Agenda
        </a>
        <a href="https://eventsize.com/event/AI-Workshop" className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-500 transition-colors">
          Enroll Now
        </a>
      </div>
    </div>
  </header>
);

const Hero: React.FC<{ onExplore: (e: React.MouseEvent<HTMLAnchorElement>) => void }> = ({ onExplore }) => (
  <div className="relative isolate overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/30 to-slate-950 opacity-60"></div>
    <div 
      className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" 
      aria-hidden="true"
    >
      <div 
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a855f7] to-[#4f46e5] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      ></div>
    </div>
    <div className="relative max-w-4xl mx-auto text-center py-32 sm:py-48 px-4">
      <h1 className="text-3xl font-bold tracking-tight">
         <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Be Future-Ready: Build with AI, Solve with Purpose</span>
      </h1>
      <p className="mt-6 text-5xl font-extrabold tracking-tight text-slate-200">
        Build with AI, No Coding Needed
      </p>
      <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
        🚀 Join our 1-day hands-on workshop to turn your ideas into solutions for real-world problems in your community. Build solutions using AI – no tech skills required!
      </p>
      <div className="mt-10">
        <a
          href="#projects"
          onClick={onExplore}
          className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-500 transition-colors text-lg"
        >
          Explore Projects
        </a>
      </div>
    </div>
  </div>
);

const About: React.FC = () => (
    <div className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-white sm:text-4xl tracking-tight">
          More Than Just a Coding Class
        </h2>
        <p className="mt-6 text-4xl text-indigo-300 font-extrabold tracking-wide">
          Solve Problems. Build Smart. Make Impact.
        </p>
        <p className="mt-4 text-xl text-slate-400 max-w-3xl mx-auto">
          In this immersive class, you'll learn how to harness AI to build real-world projects that matter — for your community, school, or workplace, this workshop will help you go from <span className="font-bold text-indigo-300">idea to interactive prototype</span> — using powerful <span className="font-bold text-indigo-300">no-code tools</span>.
        </p>
      </div>
    </div>
);

const whoIsThisForData = [
    {
        icon: <BriefcaseIcon />,
        title: "Entrepreneurs",
        description: "To build your MVP products and bring your ideas to life quickly."
    },
    {
        icon: <AcademicCapIcon />,
        title: "Students",
        description: "To learn about AI tools to create prototypes without coding in the future."
    },
    {
        icon: <UserGroupIcon />,
        title: "Community Builders",
        description: "To create tools and platforms that support and grow your community."
    },
    {
        icon: <LightBulbIcon />,
        title: "Anyone Curious",
        description: "Who wants to create real-world impact with AI — without writing a single line of code."
    }
];

const WhoIsThisFor: React.FC = () => (
    <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
                    Who is this for?
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400">
                    This workshop is designed for a diverse group of creators and thinkers.
                </p>
            </div>
            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {whoIsThisForData.map((item) => (
                    <div key={item.title} className="bg-slate-900 p-8 rounded-2xl ring-1 ring-slate-800 text-center hover:ring-indigo-500 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="flex justify-center items-center">{item.icon}</div>
                        <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
                        <p className="mt-2 text-slate-400">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const whatYoullTakeHomeData = [
    { icon: <CubeTransparentIcon />, title: "A Working AI Prototype", description: "Your very own functional app to showcase and continue building." },
    { icon: <CertificateIcon />, title: "A Digital Certificate", description: "Official recognition of your new skills and workshop completion." },
    { icon: <SparklesIcon />, title: "The Confidence to Build with AI", description: "The know-how and inspiration to continue creating with AI." }
];

const LearningOutcome: React.FC = () => (
    <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                 <h2 className="text-3xl font-extrabold text-white tracking-tight text-center">What You'll Take Home</h2>
                 <p className="mt-4 text-xl text-slate-400 text-center">
                    Leave with tangible assets and invaluable new abilities.
                </p>
                <div className="mt-8 space-y-8">
                    {whatYoullTakeHomeData.map((item) => (
                        <div key={item.title} className="flex items-start p-6 bg-slate-900 rounded-2xl ring-1 ring-slate-800">
                            <div className="shrink-0">{item.icon}</div>
                            <div className="ml-4">
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                                <p className="mt-1 text-slate-400">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const instructorsData = [
    { name: "Lee Wei Song", role: "AI Engineer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
    { name: "Tan Sin Chee", role: "AI Engineer", image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=150&h=150&fit=crop&crop=face" }
];

const ctfAchievements = [
    { rank: '1st Place', event: 'Wargames.my CTF 2024' },
    { rank: '2nd Place', event: 'The Amazing Cyberhunt 2023' },
    { rank: '2nd Place', event: 'rawSEC Takluk Sentral (rENTAS) 2024' },
    { rank: '2nd Place', event: 'CurtinCTF 2023' },
    { rank: '4th Place', event: 'Wargames.my CTF 2022' }
];

const hackathonAchievements = [
    { rank: '1st Place', event: 'Samsung UI/UX Hackathon' },
    { rank: '2nd Place', event: 'ViTrox Tech4Good Challenge 2023' },
    { rank: '2nd Place', event: 'ViTrox Tech4Good Challenge 2024' },
    { rank: '2nd Place', event: 'HackAttack 2024' },
    { rank: '2nd Place', event: 'Entrepreneur Colosseum 2024' },
    { rank: '3rd Place', event: 'Xiamen Malaysia-China Youth Innovation Competition 2024' },
    { rank: '4th Place', event: 'Penang Young Digital Talent Game Development Competition' }
];

const Instructors: React.FC = () => (
    <div className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">Meet Your Instructors</h2>
                <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto">
                    Learn from industry experts passionate about empowering creators with AI.
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col gap-8 md:w-[30%]">
                    {instructorsData.map((instructor) => (
                        <div key={instructor.name} className="bg-slate-900 p-8 rounded-2xl ring-1 ring-slate-800 flex-1">
                            <div className="text-center">
                                <img src={instructor.image} alt={`Photo of ${instructor.name}`} className="w-36 h-36 rounded-full object-cover ring-4 ring-slate-700 mx-auto" />
                                <h3 className="mt-6 text-2xl font-bold text-white">{instructor.name}</h3>
                                <p className="text-indigo-400 font-semibold">{instructor.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="bg-slate-900 p-8 rounded-2xl ring-1 ring-slate-800 md:w-[70%]">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center">Achievements & Recognition</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
                        <div>
                            <h4 className="text-xl font-semibold text-indigo-300 mb-4 text-center lg:text-left">CTF Competitions</h4>
                            <ul className="space-y-4">
                                {ctfAchievements.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="flex-shrink-0 pt-1">
                                            <TrophyIcon />
                                        </div>
                                        <p className="ml-4 text-slate-300">
                                            <span className="font-bold text-white">{item.rank}</span>
                                            <span className="text-slate-400"> - {item.event}</span>
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                         <div>
                            <h4 className="text-xl font-semibold text-indigo-300 mb-4 text-center lg:text-left">Hackathons & Innovation</h4>
                            <ul className="space-y-4">
                                {hackathonAchievements.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="flex-shrink-0 pt-1">
                                            <TrophyIcon />
                                        </div>
                                        <p className="ml-4 text-slate-300">
                                            <span className="font-bold text-white">{item.rank}</span>
                                            <span className="text-slate-400"> - {item.event}</span>
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const DetailsAndRegistration: React.FC = () => {
    return (
        <div id="register" className="py-16 sm:py-24">
            <div className="relative max-w-4xl mx-auto px-4">
                <div className="absolute -inset-2 bg-gradient-to-r from-fuchsia-600 to-indigo-600 rounded-2xl blur-xl opacity-20"></div>
                <div className="relative bg-slate-900/80 backdrop-blur-sm ring-1 ring-white/10 p-8 sm:p-12 rounded-2xl">
                    <div className="text-center">
                         <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">Join the Workshop</h2>
                         <p className="mt-4 text-xl text-slate-300">Limited seats available. Secure your spot now!</p>
                    </div>
                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
                        <div className="flex items-center">
                            <CalendarDaysIcon />
                            <div className="ml-4">
                                <div className="font-semibold">Date</div>
                                <div className="text-slate-300">2 August 2025</div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <ClockIcon />
                            <div className="ml-4">
                                <div className="font-semibold">Time</div>
                                <div className="text-slate-300">10AM – 6PM</div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <MapPinIcon />
                            <div className="ml-4">
                                <div className="font-semibold">Venue</div>
                                <div className="text-slate-300">Nestspace</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 border-t border-slate-700 pt-12">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">Pricing</h3>
                        </div>

                        <div className="max-w-sm mx-auto relative">
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                                <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white text-sm font-semibold uppercase tracking-wider px-5 py-2 rounded-full shadow-md">
                                    EARLY BIRD OFFER
                                </span>
                            </div>
                            <div className="bg-gradient-to-br from-fuchsia-500 via-purple-600 to-indigo-500 p-1 rounded-[1.25rem] shadow-lg">
                                <div className="bg-slate-900 rounded-2xl p-8 text-center">
                                    <div className="mt-6 flex items-baseline justify-center gap-x-3">
                                        <span className="text-6xl font-extrabold bg-gradient-to-r from-fuchsia-400 to-pink-500 text-transparent bg-clip-text">RM199</span>
                                        <span className="text-3xl font-medium text-slate-500 line-through">RM299</span>
                                    </div>
                                    <p className="mt-4 text-slate-400">Offer valid until July 15</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <a
                                href="https://eventsize.com/event/AI-Workshop"
                                className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-4 px-16 rounded-lg transition-all shadow-lg hover:shadow-2xl shadow-indigo-500/40 transform hover:scale-105 text-lg"
                            >
                                Enroll Now
                            </a>
                        </div>
                    </div>

                     <div className="mt-12 text-center text-slate-400">
                        <p className="flex items-center justify-center flex-wrap gap-2">
                            <EnvelopeIcon />
                            <span>Have questions? Reach us at nestspace@nestspace.my or</span>
                            <PhoneIcon />
                            <span>012-5156757</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Footer: React.FC = () => (
    <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-center text-base text-slate-500">&copy; 2024 Nestspace. All rights reserved.</p>
        </div>
    </footer>
);

const App: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(PROJECTS[0].id);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleScrollTo(e, 'projects');
    setSelectedProjectId('imp');
  };

  return (
    <div className="bg-slate-950">
      <Header onAgendaClick={(e) => handleScrollTo(e, 'agenda')} />
      <main>
        <Hero onExplore={handleExploreClick} />
        <div className="bg-gradient-to-b from-slate-950 via-slate-950 to-indigo-950/20">
            <AnimateOnScroll><About /></AnimateOnScroll>
            <AnimateOnScroll>
                <ProjectShowcase
                  id="projects"
                  selectedProjectId={selectedProjectId}
                  setSelectedProjectId={setSelectedProjectId}
                />
            </AnimateOnScroll>
        </div>
        <div className="bg-slate-950 border-t border-b border-slate-800">
            <AnimateOnScroll><WhoIsThisFor /></AnimateOnScroll>
            <AnimateOnScroll><LearningOutcome /></AnimateOnScroll>
        </div>
        <AnimateOnScroll><AgendaSection /></AnimateOnScroll>
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 border-b border-slate-800 px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll><Instructors /></AnimateOnScroll>
            <AnimateOnScroll><DetailsAndRegistration /></AnimateOnScroll>
        </div>
        <AnimateOnScroll><FaqSection /></AnimateOnScroll>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App
