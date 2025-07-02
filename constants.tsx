

import React from 'react';
import { Project, AgendaItem } from './types';
import { CodeBracketIcon, SparklesIcon, BookOpenIcon, UserGroupIcon, ChatBubbleBottomCenterTextIcon, CalendarDaysIcon, LightBulbIcon, TeamDiscussionIcon, CreativityIcon, DeployIcon, MiniChallengeIcon, ProjectShowcaseIcon, ReflectionIcon } from './components/Icons';

export const PROJECTS: Project[] = [
  {
    id: 'imp',
    title: 'Intelligent Meal Planner',
    tagline: 'AI-Powered Personalized Daily Meal Planning',
    description: 'A smart web app that empowers users to create personalized single-day meal plans. It leverages Gemini for intelligent suggestions, adapting to user preferences, available ingredients, and dietary goals to simplify daily meal planning and reduce food waste.',
    keyFeatures: [
      'Smart Meal Plan Generation',
      'Available Ingredient Matching',
      'AI Recipe Customization',
      'Detailed Nutritional Breakdown'
    ],
    image: 'https://image.thum.io/get/width/1200/crop/800/https://meal-planner.ables.com.my/',
    url: 'https://meal-planner.ables.com.my/',
  },
  {
    id: 'notewise',
    title: 'NoteWise AI',
    tagline: 'Your Smart Study Companion',
    description: 'Revolutionize how you study by transforming lecture transcripts, class notes, or raw text into highly organized summaries, interactive flashcards, and practice questions. NoteWise AI uses Gemini to make learning more efficient and effective.',
    keyFeatures: [
      'Smart Note Summarization',
      'Interactive Flashcard Generation',
      'AI-Powered Practice Questions',
      'Gemini-Driven Answer Marking & Feedback'
    ],
    image: 'https://image.thum.io/get/width/1200/crop/800/https://notewise.ables.com.my/',
    url: 'https://notewise.ables.com.my/',
  },
  {
    id: 'chronosight',
    title: 'ChronoSight',
    tagline: 'Your Window to the Past',
    description: 'An innovative app that transports you through time. Enter a location to uncover its hidden history, with Gemini generating rich historical narratives and dynamically creating visual representations of how that exact spot looked in different eras, offering a compelling educational experience.',
    keyFeatures: [
      'Location-Based Historical Exploration',
      'AI-Generated Historical Narratives',
      'Dynamic Visual Recreations',
      'Current View Contrast'
    ],
    image: 'https://image.thum.io/get/width/1200/crop/800/https://chronosight.ables.com.my/',
    url: 'https://chronosight.ables.com.my/',
  },
  {
    id: 'politepal',
    title: 'PolitePal',
    tagline: 'Your AI-Powered Tone Transformer',
    description: 'Enhance digital communication by transforming aggressive, sarcastic, or impolite language into constructive, neutral, or respectful alternatives. PolitePal uses Gemini\'s advanced linguistic understanding to foster positive digital citizenship and reduce miscommunication.',
    keyFeatures: [
      'Intent-Aware Rephrasing',
      'Tone Transformation',
      'Multilingual Support',
      'Educational Communication Aid'
    ],
    image: 'https://image.thum.io/get/width/1200/crop/800/https://politepal.ables.com.my/',
    url: 'https://politepal.ables.com.my/',
  },
  {
    id: 'skillpath',
    title: 'SkillPath AI',
    tagline: 'Your Personalized Learning Roadmap',
    description: 'Generates a personalized learning roadmap for any skill you want to acquire. From coding to cooking, SkillPath AI breaks down complex topics into manageable steps, suggests resources, and creates a timeline to keep you on track.',
    keyFeatures: ['Dynamic Skill Tree Generation', 'Personalized Learning Steps', 'Resource Curation', 'Progress Tracking'],
    image: 'https://image.thum.io/get/width/1200/crop/800/https://skillpath.ables.com.my/',
    url: 'https://skillpath.ables.com.my/',
  },
  {
    id: 'onthisday',
    title: 'OnThisDay',
    tagline: 'Explore Historical Events on Any Date',
    description: 'Travel back in time and discover significant historical events, famous births, and notable deaths that occurred on any given day. OnThisDay provides a fascinating glimpse into the past with rich details and context.',
    keyFeatures: ['Date-Based Historical Facts', 'AI-Generated Narratives', 'Global Event Coverage', 'Interactive Timeline'],
    image: 'https://image.thum.io/get/width/1200/crop/800/https://onthisday.ables.com.my/',
    url: 'https://onthisday.ables.com.my/',
  },
  {
    id: 'photoeditor',
    title: 'AI Photo Editor',
    tagline: 'Intelligent Photo Editing at Your Fingertips',
    description: 'A powerful photo editor that uses AI to simplify complex editing tasks. Automatically remove backgrounds, enhance colors, apply artistic styles, and even generate new elements within your photos with simple text prompts.',
    keyFeatures: ['AI Background Removal', 'One-Click Photo Enhancement', 'Style Transfer', 'Generative Fill with Text Prompts'],
    image: 'https://image.thum.io/get/width/1200/crop/800/https://photoeditor.ables.com.my/',
    url: 'https://photoeditor.ables.com.my/',
  },
  {
    id: 'meetingnote',
    title: 'Meeting Note Assistant',
    tagline: 'Automated Meeting Summaries and Action Items',
    description: 'Transforms raw meeting transcripts or audio into concise summaries, identifies key decisions, and extracts actionable items. The Meeting Note Assistant helps you stay organized and ensures no important task is forgotten.',
    keyFeatures: ['Automatic Summarization', 'Action Item Extraction', 'Key Decision Highlighting', 'Speaker Identification'],
    image: 'https://image.thum.io/get/width/1200/crop/800/https://meeting-note-assistant.ables.com.my/',
    url: 'https://meeting-note-assistant.ables.com.my/',
  },
];

export const DAY1_AGENDA: AgendaItem[] = [
    { time: '10:00 AM - 11:00 AM', activity: 'What Makes Up a Website?', details: ['Intro to React, TypeScript, Tailwind CSS', 'Explain the basic file structure', 'Showcase past AI-powered hackathon projects'], icon: <BookOpenIcon /> },
    { time: '11:00 AM - 12:00 NOON', activity: 'Getting Started on Gemini Build', details: ['Intro to Gemini Build as a coding environment', 'Build a very simple website', 'Demonstrate prompting AI to generate a simple React Web App'], icon: <SparklesIcon /> },
    { time: '12:00 NOON - 1:00 PM', activity: 'What Is a Request? + Gemini API', details: ['Simple explanation of API requests', 'Explore Google AI Studio Apps', 'Try out Gemini API with live examples'], icon: <ChatBubbleBottomCenterTextIcon /> },
    { time: '1:00 PM - 2:00 PM', activity: 'Lunch Break + Team Discussion', details: ['Encourage idea sharing on potential web app projects', 'Focus on brainstorming, no coding yet'], icon: <TeamDiscussionIcon /> },
    { time: '2:00 PM - 4:00 PM', activity: 'Hands-on: Build "2Empty"', details: ['Guide them step-by-step to recreate a Hackathon-winning project using AI prompts'], icon: <CodeBracketIcon /> },
    { time: '4:00 PM - 5:00 PM', activity: 'Customization & Creativity', details: ['Add styling, image overlays, and personalization to their project'], icon: <CreativityIcon /> },
    { time: '5:00 PM - 6:00 PM', activity: 'Deploy', details: ['Let students deploy their web app with Vercel'], icon: <DeployIcon /> },
];

export const DAY2_AGENDA: AgendaItem[] = [
    { time: '10:00 - 11:00 AM', activity: 'Quick Revision & Warm-Up', details: ['Recap of React, Gemini API'], icon: <BookOpenIcon /> },
    { time: '11:00 - 12:00 NOON', activity: 'Mini Challenge Kickoff', details: ['Random topic draw in pairs', 'Brainstorm how they\'d build it'], icon: <MiniChallengeIcon /> },
    { time: '12:00 NOON - 4:00 PM', activity: 'Team Build Time', details: ['Guided hands-on project time', 'Mentors release hints gradually', 'Teach students how to think critically, debug, and ask effective AI prompts'], icon: <CodeBracketIcon /> },
    { time: '4:00 PM - 5:00 PM', activity: 'Project Showcase', details: ['Each team presents what they built', 'Focus on creativity, problem-solving, and what they learned'], icon: <ProjectShowcaseIcon /> },
    { time: '5:00 PM - 6:00 PM', activity: 'Reflection & What\'s Next', details: ['Reveal that their projects mirror real-world AI startup ideas', 'Intro to the Long Semester'], icon: <ReflectionIcon /> },
];
