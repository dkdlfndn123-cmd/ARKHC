
// Import React to provide access to the React namespace for ReactNode type.
import React from 'react';

export interface HistoryItem {
  year: string;
  month: string;
  event: string;
  isMilestone?: boolean;
}

export interface QuizStep {
  id: number;
  question: string;
  options: { label: string; score: number }[];
}

export interface ERPFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}
