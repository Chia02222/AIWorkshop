
import React from 'react';
import { Project } from '../types';
import { PROJECTS } from '../constants';
import { CheckBadgeIcon, ExternalLinkIcon } from './Icons';

interface ProjectShowcaseProps {
  id?: string;
  selectedProjectId: string;
  setSelectedProjectId: (id: string) => void;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ id, selectedProjectId, setSelectedProjectId }) => {
  const selectedProject = PROJECTS.find(p => p.id === selectedProjectId) || PROJECTS[0];

  return (
    <div id={id} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center">
        <h2 className="text-base font-semibold text-indigo-400 tracking-wide uppercase">WHAT YOU'LL BUILD</h2>
        <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
          From Idea to Interactive Prototype
        </p>
        <p className="mt-4 max-w-4xl mx-auto text-xl text-slate-400">
          Explore a few of the hands-on projects you can create. Each one is designed to teach you core concepts of AI-powered web development.
        </p>
        <p className="mt-8 text-xl font-extrabold text-white">Demo Projects You Can Choose to Build</p>
        <p className="mt-2 text-base text-slate-400">(Pick one to customize or use as inspiration)</p>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
        <div className="flex flex-col space-y-4">
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProjectId(project.id)}
              className={`text-left p-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 focus:ring-offset-slate-950 ${
                selectedProjectId === project.id
                  ? 'bg-slate-800/50 ring-1 ring-slate-700'
                  : 'hover:bg-slate-800/50'
              }`}
            >
              <p className={`font-bold text-lg ${
                selectedProjectId === project.id ? 'text-indigo-400' : 'text-white'
              }`}>
                {project.title}
              </p>
              <p className="text-sm text-slate-400 mt-1">{project.tagline}</p>
            </button>
          ))}
        </div>

        <div className="lg:col-span-2">
          <div className="bg-slate-900 rounded-xl shadow-2xl shadow-indigo-900/10 p-2 ring-1 ring-slate-800">
            <div className="aspect-[16/9] relative group rounded-lg overflow-hidden">
               <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-300"></div>
                {selectedProject.url && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                        href={selectedProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-indigo-500 transition-colors flex items-center shadow-lg transform hover:scale-105"
                        >
                        View Prototype
                        <ExternalLinkIcon />
                        </a>
                    </div>
                )}
            </div>
            <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <p className="mt-3 text-slate-300">{selectedProject.description}</p>
                <div className="mt-6">
                    <h4 className="font-semibold text-indigo-300">Key Features:</h4>
                    <ul className="mt-3 space-y-2">
                        {selectedProject.keyFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <CheckBadgeIcon />
                                <span className="text-slate-300">{feature}</span>
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
};

export default ProjectShowcase;
