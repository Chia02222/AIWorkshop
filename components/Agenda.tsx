
import React from 'react';
import { AgendaItem } from '../types';

interface AgendaProps {
  day: number;
  title: string;
  items: AgendaItem[];
}

const Agenda: React.FC<AgendaProps> = ({ day, title, items }) => {
  return (
    <div className="bg-slate-900/50 rounded-2xl p-8 ring-1 ring-slate-800">
      <h3 className="text-2xl font-bold text-white flex items-center mb-6">
        <span className="gradient-text mr-3">Day {day}:</span> {title}
      </h3>
      <div className="flow-root">
        <ul className="-mb-8">
          {items.map((item, itemIdx) => (
            <li key={item.time}>
              <div className="relative pb-8">
                {itemIdx !== items.length - 1 ? (
                  <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-slate-700" aria-hidden="true" />
                ) : null}
                <div className="relative flex space-x-3 items-start">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center ring-4 ring-slate-900">
                      {item.icon}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 pt-1.5">
                    <p className="text-sm text-slate-400">{item.time}</p>
                    <p className="font-semibold text-white mt-1">{item.activity}</p>
                    <ul className="mt-2 text-sm text-slate-400 list-disc list-inside space-y-1">
                        {item.details.map(detail => <li key={detail}>{detail}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Agenda;
