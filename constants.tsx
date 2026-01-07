
import React from 'react';
import { 
  FileText, 
  ClipboardCheck, 
  BarChart3, 
  BookOpen, 
  BrainCircuit, 
  Mic 
} from 'lucide-react';
import { HistoryItem } from './types';

export const COLORS = {
  main: '#3285E8',
  white: '#ffffff',
  navy: '#1A365D',
};

export const NAVIGATION = [
  { 
    name: '아크 시니어케어', 
    href: '#b2c',
    subItems: [
      { name: '방문요양', href: '#b2c-visit' },
      { name: '등급모의평가', href: '#grade-test' },
      { name: '인지프로그램', href: '#b2c-cognitive' }
    ]
  },
  { 
    name: '파트너 솔루션', 
    href: '#b2b',
    subItems: [
      { name: '아크패밀리맴버쉽', href: '#b2b-membership' },
      { name: 'AI ERP 솔루션', href: '#b2b-erp' },
      { name: '창업/운영 컨설팅', href: '#b2b-consulting' }
    ]
  },
  { 
    name: '아크 소개', 
    href: '#about',
    subItems: [
      { name: '기업이념&비전', href: '#about-vision' },
      { name: '아크 히스토리', href: '#about-history' },
      { name: 'CI/BI', href: '#about-cibi' }
    ]
  },
];

export const HISTORY: HistoryItem[] = [
  { year: '2024', month: '02', event: '(주) 아크헬스케어 법인 설립', isMilestone: true },
  { year: '2024', month: '05', event: "수원대 '예비창업패키지' 선정" },
  { year: '2024', month: '06', event: "'아크시니어케어 경기고양센터' 오픈" },
  { year: '2024', month: '08', event: "'아크시니어케어 경기의정부센터' 오픈" },
  { year: '2024', month: '09', event: "서울보라매병원 건강돌봄네트워크 심포지움 강연" },
  { year: '2024', month: '10', event: "창업성장기술개발사업 '디딤돌 R&D' 선정", isMilestone: true },
  { year: '2025', month: '01', event: "창업진흥원 '예비창업패키지 최우수 기업' 수상", isMilestone: true },
  { year: '2025', month: '07', event: "'아크시니어케어 서울남산센터' 오픈" },
  { year: '2025', month: '08', event: "카이스트청년창업투자지주 시드 투자 유치", isMilestone: true },
  { year: '2025', month: '11', event: "아크시니어케어 패밀리 기관 누적 50개소 달성", isMilestone: true },
];

export const ERP_FEATURES = [
  {
    title: '문서 자동 생성',
    description: '행정 서류를 즉시 생성하여 현장의 불필요한 행정 시간을 80% 이상 단축합니다.',
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: 'AI 기초평가',
    description: '어르신의 상태를 다각도로 분석하여 현장에 꼭 필요한 최적의 케어 계획을 수립합니다.',
    icon: <ClipboardCheck className="w-6 h-6" />,
  },
  {
    title: '요양등급평가',
    description: '정밀 판정 로직을 통해 복잡한 공단 평가 대응 및 등급 관리를 완벽하게 지원합니다.',
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    title: '평가교육컨텐츠',
    description: '현장 실무와 평가 대비를 위해 엄선된 핵심 실무 교육 영상만을 제공합니다.',
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    title: '인지프로그램',
    description: '검증된 고도화 인지 자극 커리큘럼을 디지털로 정교하고 간편하게 관리합니다.',
    icon: <BrainCircuit className="w-6 h-6" />,
  },
  {
    title: '음성AI 모니터링',
    description: '음성 인식 기술로 업무수행일지를 자동 기록하여 현장의 운영 효율을 극대화합니다.',
    icon: <Mic className="w-6 h-6" />,
  },
];
