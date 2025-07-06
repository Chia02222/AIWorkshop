import React, { useState, useEffect, useRef, ReactNode } from 'react';
import ProjectShowcase from './components/ProjectShowcase';
import FaqSection from './components/Faq';
import { PROJECTS } from './constants';
import { SparklesIcon, BriefcaseIcon, AcademicCapIcon, UserGroupIcon, CubeTransparentIcon, CalendarDaysIcon, ClockIcon, MapPinIcon, TicketIcon, EnvelopeIcon, PhoneIcon, LightBulbIcon, FeatureLightBulbIcon, CommunityBuildersIcon, CertificateIcon, TrophyIcon } from './components/Icons';
import ScrollToTopButton from './components/ScrollToTopButton';

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
        threshold: 0.1, // Trigger when 10% of the element is visible
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

const Header: React.FC = () => (
  <header className="absolute top-0 left-0 right-0 z-10 p-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <div className="mr-3">
          <SparklesIcon />
        </div>
        <span className="font-bold text-lg text-white">AI for Good</span>
      </div>
      <div className="hidden sm:flex items-center space-x-2">
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
         <span className="gradient-text">Be Future-Ready: Build with AI, Solve with Purpose</span>
      </h1>
      <p className="mt-6 text-5xl font-extrabold tracking-tight text-slate-200">
        Build with AI, No Coding Needed
      </p>
      <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
        🚀 Join our hands-on workshop to turn your ideas into solutions for real-world problems in your community. Build solutions using AI – no tech skills required!
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
      <div className="max-w-4sm mx-auto text-center px-4">
        <h2 className="text-md font-bold text-white sm:text-4xl tracking-tight">
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
        icon: <CommunityBuildersIcon />,
        title: "Community Builders",
        description: "To create tools and platforms that support and grow your community."
    },
    {
        icon: <FeatureLightBulbIcon />,
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
    { name: "Lee Wei Song", role: "AI Engineer", image: "https://i.ibb.co/9HD33QR3/1.png" },
    { name: "Tan Sin Chee", role: "AI Engineer", image: "https://i.ibb.co/xqWWkpJw/2.png" }
];

const ctfAchievements = [
    { rank: '1st Place', event: 'Wargames.my CTF 2024' },
    { rank: '2nd Place', event: 'The Amazing Cyberhunt 2023' },
    { rank: '2nd Place', event: 'rawSEC Takluk Sentral (rENTAS) 2024' },
    { rank: '2nd Place', event: 'CurtinCTF 2023' },
    { rank: '4th Place', event: 'Wargames.my CTF 2022' },
    { rank: '4th Place', event: 'Wargames.my CTF 2023' },
    { rank: '4th Place', event: 'SiberSiaga x iHACK CTF 2024' },
    { rank: '4th Place', event: 'The Amazing Cyberhunt 2024' },
    { rank: '6th Place', event: 'Battle of Hackers 2024' },
    { rank: '7th Place', event: 'Wargames.my CTF 2019' },
    { rank: '8th Place', event: 'Battle of Hackers 2023' },
];

const hackathonAchievements = [
    { rank: '1st Place', event: 'Samsung UI/UX Hackathon' },
    { rank: '2nd Place', event: 'ViTrox Tech4Good Challenge 2023' },
    { rank: '2nd Place', event: 'ViTrox Tech4Good Challenge 2024' },
    { rank: '2nd Place', event: 'HackAttack 2024' },
    { rank: '2nd Place', event: 'Entrepreneur Colosseum 2024' },
    { rank: '3rd Place', event: 'Xiamen Malaysia-China Youth Innovation Competition 2024' },
    { rank: '4th Place', event: 'Penang Young Digital Talent Game Development Competition' },
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
            <div className="relative max-w-4xl mx-auto">
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

                        <div className="w-full max-w-sm mx-auto relative">
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
                        <p className="flex items-center justify-center flex-wrap">
                            <EnvelopeIcon />
                            <span className="ml-2">Have questions? Reach us at nestspace@nestspace.my or </span>
                            <PhoneIcon />
                            <span className="ml-2"> 012-5156757</span>
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
)

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
        // Fallback for top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleScrollTo(e, 'projects');
    setSelectedProjectId('imp');
  };

  return (
    <div className="bg-slate-950">
      <Header />
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

export default App;
