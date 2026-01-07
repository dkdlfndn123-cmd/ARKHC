
import React, { useState, useEffect, useRef } from 'react';
import { RefreshCcw, CheckCircle2, ChevronRight, PhoneCall, HelpCircle } from 'lucide-react';

// 아키 캐릭터 이미지 (사용자 제공)
const ARKI_IMG = "https://i.imgur.com/eT44e5Z.png";

const QUESTIONS = [
  // 신체기능 (12문항)
  { id: 1, group: '신체기능', text: '어르신이 혼자 옷을 입고 벗을 수 있나요?', options: [{ text: '혼자서 가능함', score: 1 }, { text: '약간의 도움 필요', score: 2 }, { text: '완전 도움 필요', score: 3 }] },
  { id: 2, group: '신체기능', text: '혼자 세수를 할 수 있나요?', options: [{ text: '혼자서 가능함', score: 1 }, { text: '도움 필요함', score: 2 }, { text: '도움 없이 못 함', score: 3 }] },
  { id: 3, group: '신체기능', text: '혼자 양치질을 할 수 있나요?', options: [{ text: '혼자서 가능함', score: 1 }, { text: '도움 필요함', score: 2 }, { text: '도움 없이 못 함', score: 3 }] },
  { id: 4, group: '신체기능', text: '혼자 목욕을 할 수 있나요?', options: [{ text: '혼자서 가능함', score: 1 }, { text: '도움 필요함', score: 2 }, { text: '도움 없이 못 함', score: 3 }] },
  { id: 5, group: '신체기능', text: '혼자 식사를 할 수 있나요?', options: [{ text: '혼자서 가능함', score: 1 }, { text: '도움 필요함', score: 2 }, { text: '도움 없이 못 함', score: 3 }] },
  { id: 6, group: '신체기능', text: '혼자 자세를 바꿀 수 있나요?', options: [{ text: '혼자서 가능함', score: 1 }, { text: '도움 필요함', score: 2 }, { text: '도움 없이 못 함', score: 3 }] },
  { id: 7, group: '신체기능', text: '혼자 자리에서 일어날 수 있나요?', options: [{ text: '혼자서 가능함', score: 1 }, { text: '도움 필요함', score: 2 }, { text: '도움 없이 못 함', score: 3 }] },
  { id: 8, group: '신체기능', text: '혼자 자리를 옮겨서 앉을 수 있나요?', options: [{ text: '혼자서 가능함', score: 1 }, { text: '도움 필요함', score: 2 }, { text: '도움 없이 못 함', score: 3 }] },
  { id: 9, group: '신체기능', text: '혼자 방 밖으로 나올 수 있나요?', options: [{ text: '혼자서 가능함', score: 1 }, { text: '도움 필요함', score: 2 }, { text: '도움 없이 못 함', score: 3 }] },
  { id: 10, group: '신체기능', text: '혼자 화장실을 다녀올 수 있나요?', options: [{ text: '혼자서 가능함', score: 1 }, { text: '도움 필요함', score: 2 }, { text: '도움 없이 못 함', score: 3 }] },
  { id: 11, group: '신체기능', text: '혼자 대변 조절을 하실 수 있나요?', options: [{ text: '조절 가능함', score: 1 }, { text: '가끔 실수함', score: 2 }, { text: '조절 못 함', score: 3 }] },
  { id: 12, group: '신체기능', text: '혼자 소변 조절을 하실 수 있나요?', options: [{ text: '조절 가능함', score: 1 }, { text: '가끔 실수함', score: 2 }, { text: '조절 못 함', score: 3 }] },
  // 인지기능 (7문항)
  { id: 13, group: '인지기능', text: '방금 전에 들었던 이야기나 일을 잊으시나요?', options: [{ text: '아니오', score: 0 }, { text: '네', score: 1 }] },
  { id: 14, group: '인지기능', text: '올해 몇 년도인지, 오늘이 며칠인지 모르시나요?', options: [{ text: '아니오', score: 0 }, { text: '네', score: 1 }] },
  { id: 15, group: '인지기능', text: '자신이 있는 장소를 알지 못하시나요?', options: [{ text: '아니오', score: 0 }, { text: '네', score: 1 }] },
  { id: 16, group: '인지기능', text: '자신의 나이와 생일을 모르시나요?', options: [{ text: '아니오', score: 0 }, { text: '네', score: 1 }] },
  { id: 17, group: '인지기능', text: '지시를 이해하지 못하시나요?', options: [{ text: '아니오', score: 0 }, { text: '네', score: 1 }] },
  { id: 18, group: '인지기능', text: '상황 판단력이 떨어져 있나요?', options: [{ text: '아니오', score: 0 }, { text: '네', score: 1 }] },
  { id: 19, group: '인지기능', text: '의사소통이 어려우신가요?', options: [{ text: '아니오', score: 0 }, { text: '네', score: 1 }] },
  // 행동변화 (14문항)
  { id: 20, group: '행동변화', text: '물건을 잃어버렸다고 의심하거나, 누군가 해치려 한다고 믿나요?', options: [{ text: '증상 없음', score: 0 }, { text: '증상 있음', score: 1 }] },
  { id: 21, group: '행동변화', text: '헛것을 보거나 환청을 들으시나요?', options: [{ text: '증상 없음', score: 0 }, { text: '증상 있음', score: 1 }] },
  { id: 22, group: '행동변화', text: '슬퍼 보이거나 자주 우시나요?', options: [{ text: '증상 없음', score: 0 }, { text: '증상 있음', score: 1 }] },
  { id: 23, group: '행동변화', text: '밤에 잠을 못 이루거나 낮밤이 바뀌었나요?', options: [{ text: '증상 없음', score: 0 }, { text: '증상 있음', score: 1 }] },
  { id: 24, group: '행동변화', text: '도움을 주려 할 때 거부하거나 저항하나요?', options: [{ text: '증상 없음', score: 0 }, { text: '증상 있음', score: 1 }] },
  { id: 25, group: '행동변화', text: '안절부절못하고 배회하나요?', options: [{ text: '증상 없음', score: 0 }, { text: '증상 있음', score: 1 }] },
  { id: 26, group: '행동변화', text: '길을 잃거나 밖으로 나가려 하나요?', options: [{ text: '증상 없음', score: 0 }, { text: '증상 있음', score: 1 }] },
  { id: 27, group: '행동변화', text: '폭언이나 폭행 등 위협적인 행동을 하나요?', options: [{ text: '증상 없음', score: 0 }, { text: '증상 있음', score: 1 }] },
  { id: 28, group: '행동변화', text: '잠시도 눈을 뗄 수 없을 정도로 밖으로 나가려 하나요?', options: [{ text: '증상 없음', score: 0 }, { text: '증상 있음', score: 1 }] },
  { id: 29, group: '행동변화', text: '물건을 망가뜨리거나 부수나요?', options: [{ text: '증상 없음', score: 0 }, { text: '증상 있음', score: 1 }] },
  { id: 30, group: '행동변화', text: '의미 없는 행동을 반복하나요?', options: [{ text: '증상 없음', score: 0 }, { text: '증상 있음', score: 1 }] },
  { id: 31, group: '행동변화', text: '물건을 감추거나 엉뚱한 곳에 두나요?', options: [{ text: '증상 없음', score: 0 }, { text: '증상 있음', score: 1 }] },
  { id: 32, group: '행동변화', text: '옷을 부적절하게 입거나 벗나요?', options: [{ text: '증상 없음', score: 0 }, { text: '증상 있음', score: 1 }] },
  { id: 33, group: '행동변화', text: '대소변으로 불결한 행동을 하나요?', options: [{ text: '증상 없음', score: 0 }, { text: '증상 있음', score: 1 }] },
  // 간호처치 (2문항)
  { id: 34, group: '간호처치', text: '최근 2주간 의료적 처치를 받고 계신가요?', options: [{ text: '없음', score: 0 }, { text: '있음', score: 1 }] },
  { id: 35, group: '간호처치', text: '해당되는 처치를 모두 선택해 주세요.', options: [
    { text: '기관지 절개관 간호', score: 1 }, { text: '가래 흡인(석션)', score: 2 }, { text: '산소요법', score: 3 },
    { text: '욕창 간호', score: 4 }, { text: '경관 영양(콧줄)', score: 5 }, { text: '암성통증 간호', score: 6 },
    { text: '도뇨 관리(소변줄)', score: 7 }, { text: '장루 간호', score: 8 }, { text: '투석', score: 9 }
  ], type: 'checkbox' },
  // 재활 (10문항)
  { id: 36, group: '재활', text: '오른쪽 팔다리가 의지대로 움직이나요?', options: [{ text: '자유로움', score: 1 }, { text: '불편함', score: 2 }, { text: '전혀 못 움직임', score: 3 }] },
  { id: 37, group: '재활', text: '오른쪽 다리가 의지대로 움직이나요?', options: [{ text: '자유로움', score: 1 }, { text: '불편함', score: 2 }, { text: '전혀 못 움직임', score: 3 }] },
  { id: 38, group: '재활', text: '왼쪽 팔다리가 의지대로 움직이나요?', options: [{ text: '자유로움', score: 1 }, { text: '불편함', score: 2 }, { text: '전혀 못 움직임', score: 3 }] },
  { id: 39, group: '재활', text: '왼쪽 다리가 의지대로 움직이나요?', options: [{ text: '자유로움', score: 1 }, { text: '불편함', score: 2 }, { text: '전혀 못 움직임', score: 3 }] },
  { id: 40, group: '재활', text: '양쪽 어깨 관절 움직임은 어떤가요?', options: [{ text: '자유로움', score: 1 }, { text: '한쪽 제한', score: 2 }, { text: '양쪽 제한', score: 3 }] },
  { id: 41, group: '재활', text: '팔꿈치 관절 움직임은 어떤가요?', options: [{ text: '자유로움', score: 1 }, { text: '한쪽 제한', score: 2 }, { text: '양쪽 제한', score: 3 }] },
  { id: 42, group: '재활', text: '손목/손 관절 움직임은 어떤가요?', options: [{ text: '자유로움', score: 1 }, { text: '한쪽 제한', score: 2 }, { text: '양쪽 제한', score: 3 }] },
  { id: 43, group: '재활', text: '고관절(엉덩이) 움직임은 어떤가요?', options: [{ text: '자유로움', score: 1 }, { text: '한쪽 제한', score: 2 }, { text: '양쪽 제한', score: 3 }] },
  { id: 44, group: '재활', text: '무릎 관절 움직임은 어떤가요?', options: [{ text: '자유로움', score: 1 }, { text: '한쪽 제한', score: 2 }, { text: '양쪽 제한', score: 3 }] },
  { id: 45, group: '재활', text: '발목 관절 움직임은 어떤가요?', options: [{ text: '자유로움', score: 1 }, { text: '불편함', score: 2 }, { text: '전혀 못 움직임', score: 3 }] },
  // 질병 (3문항)
  { id: 46, group: '질병', text: '현재 앓고 있는 질병이 있나요?', options: [{ text: '없음', score: 0 }, { text: '있음', score: 1 }] },
  { id: 47, group: '질병', text: '해당하는 질병을 모두 선택해 주세요.', options: [
    { text: '치매', score: 1 }, { text: '뇌졸중', score: 2 }, { text: '고혈압', score: 3 },
    { text: '당뇨병', score: 4 }, { text: '관절염', score: 5 }, { text: '골절', score: 10 }
  ], type: 'checkbox' },
  { id: 48, group: '질병', text: '가장 주된 질병 하나를 선택해 주세요.', options: [], type: 'radio-dynamic' }
];

const CONVERSION_TABLES: any = {
  신체기능: { 0: 0, 12: 48.76, 26: 80, 36: 100 },
  인지기능: { 0: 0, 1: 19.71, 7: 100 },
  행동변화: { 0: 0, 1: 18.22, 14: 100 },
  간호처치: { 0: 0, 1: 19.64, 10: 100 },
  재활: { 0: 0, 1: 11.51, 30: 100 },
};

const DECISION_TREE = {
  청결: (ans: any, conv: any) => conv.신체기능 <= 34.15 ? (ans[14] === 0 ? 5.3 : 8.0) : 12.0,
  배설: (ans: any, conv: any) => ans[6] === 1 ? 1.2 : 12.8,
  식사: (ans: any, conv: any) => (ans[5] || 0) < 3 ? 10.0 : 25.0,
  기능보조: (ans: any, conv: any) => conv.신체기능 <= 47.64 ? 5.0 : 15.0,
  행동대응: (ans: any, conv: any) => conv.행동변화 <= 34.69 ? 1.0 : 4.0,
  간접지원: (ans: any, conv: any) => conv.신체기능 <= 25.14 ? 12.5 : 20.0,
  간호처치: (ans: any, conv: any) => ans[35]?.includes(4) ? 14.0 : 8.0,
  재활훈련: (ans: any, conv: any) => conv.재활 === 0 ? 2.5 : 5.0
};

const GradeTest: React.FC = () => {
  const [isIntro, setIsIntro] = useState(true);
  const [chatHistory, setChatHistory] = useState<any[]>([]);
  const [answers, setAnswers] = useState<any>({});
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [result, setResult] = useState<any>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const TALLY_URL = "https://tally.so/r/9q9xA1";

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, isBotTyping]);

  const addBotMessage = (text: string, options?: any, qId?: number, type?: string) => {
    return new Promise<void>((resolve) => {
      setIsBotTyping(true);
      setTimeout(() => {
        setChatHistory(prev => [...prev, { type: 'bot', text, options, qId, qType: type }]);
        setIsBotTyping(false);
        resolve();
      }, 600);
    });
  };

  const addUserMessage = (text: string) => {
    setChatHistory(prev => [...prev, { type: 'user', text }]);
  };

  const startTest = async () => {
    setIsIntro(false);
    setChatHistory([]);
    setResult(null);
    setAnswers({});
    
    await addBotMessage("반가워요! 아크의 AI 상담원 '아키'입니다.");
    await addBotMessage("어르신의 상태를 분석해 예상 등급을 판정해 드릴게요.");
    
    const firstQ = QUESTIONS[0];
    await addBotMessage(firstQ.text, firstQ.options, firstQ.id, firstQ.type);
  };

  const handleSelect = async (qId: number, score: any, label: string) => {
    if (isBotTyping) return;
    
    addUserMessage(label);
    const newAnswers = { ...answers, [qId]: score };
    setAnswers(newAnswers);

    let nextIdx = QUESTIONS.findIndex(q => q.id === qId) + 1;
    if (qId === 34 && score === 0) nextIdx = QUESTIONS.findIndex(q => q.id === 36);
    if (qId === 46 && score === 0) {
      finishTest(newAnswers);
      return;
    }

    if (nextIdx < QUESTIONS.length) {
      const nextQ = QUESTIONS[nextIdx];
      if (nextQ.id === 48) {
        const q47Ids = newAnswers[47] || [];
        const dynamicOptions = QUESTIONS.find(q => q.id === 47)?.options.filter(o => q47Ids.includes(o.score)) || [];
        if (dynamicOptions.length === 0) { finishTest(newAnswers); return; }
        await addBotMessage(nextQ.text, dynamicOptions, nextQ.id);
      } else {
        await addBotMessage(nextQ.text, nextQ.options, nextQ.id, nextQ.type);
      }
    } else {
      finishTest(newAnswers);
    }
  };

  const handleCheckbox = (qId: number, score: number) => {
    const current = answers[qId] || [];
    const updated = current.includes(score) ? current.filter((s: any) => s !== score) : [...current, score];
    setAnswers({ ...answers, [qId]: updated });
  };

  const submitCheckbox = (qId: number) => {
    const selected = answers[qId] || [];
    const label = selected.length === 0 ? "해당 사항 없음" : `${selected.length}개 선택`;
    handleSelect(qId, selected, label);
  };

  const finishTest = async (finalAnswers: any) => {
    await addBotMessage("분석이 끝났습니다. 결과를 확인해 보세요!");
    setTimeout(() => calculateResult(finalAnswers), 1000);
  };

  const calculateResult = (ans: any) => {
    const raw: any = { 신체기능: 0, 인지기능: 0, 행동변화: 0, 간호처치: 0, 재활: 0 };
    Object.keys(ans).forEach(key => {
      const qId = parseInt(key);
      const q = QUESTIONS.find(quest => quest.id === qId);
      if (q && q.group in raw) {
        const val = ans[key];
        raw[q.group] += Array.isArray(val) ? val.length : val;
      }
    });

    const conv: any = {};
    Object.keys(raw).forEach(k => {
      const table = CONVERSION_TABLES[k];
      const keys = Object.keys(table).map(Number).sort((a, b) => a - b);
      let closestKey = keys[0];
      for (const key of keys) if (raw[k] >= key) closestKey = key;
      conv[k] = table[closestKey] || 0;
    });

    let total = 0;
    Object.values(DECISION_TREE).forEach((fn: any) => total += fn(ans, conv));

    let grade = "등급 외";
    let desc = "일상생활 수행 능력이 대체로 양호한 편입니다.";
    if (total >= 95) { grade = "1등급"; desc = "전적으로 다른 사람의 도움이 필요한 상태입니다."; }
    else if (total >= 75) { grade = "2등급"; desc = "상당 부분 다른 사람의 도움이 필요한 상태입니다."; }
    else if (total >= 60) { grade = "3등급"; desc = "부분적으로 다른 사람의 도움이 필요한 상태입니다."; }
    else if (total >= 51) { grade = "4등급"; desc = "일정 부분 다른 사람의 도움이 필요한 상태입니다."; }
    else if (total >= 45) { grade = "5등급"; desc = "치매 환자로서 일상생활에 지장이 있는 상태입니다."; }

    setResult({ grade, desc, score: Math.min(100, total).toFixed(1) });
  };

  return (
    <section id="grade-test" className="pt-32 pb-24 md:pt-60 md:pb-40 bg-white overflow-hidden scroll-mt-24 font-pretendard">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* 헤더 영역 - 이미지 스타일 반영 */}
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12 mb-20 md:mb-32 max-w-4xl mx-auto reveal">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-[#E8F1FE] text-[#3285E8] rounded-full font-black text-sm md:text-xl tracking-tight shadow-sm border border-blue-100/50">
            <HelpCircle className="w-5 h-5 md:w-6 md:h-6" /> 등급이 없으신가요?
          </div>
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-4xl md:text-[88px] font-black text-gray-900 leading-[1.05] tracking-tighter px-4">
              어르신의 <span className="text-[#3285E8]">예상 등급</span>을<br />
              아키에게 물어보세요
            </h3>
            <p className="text-lg md:text-2xl text-gray-400 font-bold max-w-3xl mx-auto leading-relaxed">
              AI 상담원 '아키'가 공단 판정 로직으로<br className="md:hidden" /> 예상 등급을 즉시 확인해 드립니다.
            </p>
          </div>
        </div>

        {/* 채팅창 영역 */}
        <div className="w-full max-w-4xl mx-auto px-2 reveal">
          <div className="bg-gray-50 rounded-[3rem] md:rounded-[5rem] border border-gray-100 flex flex-col h-[700px] md:h-[900px] relative shadow-[0_50px_100px_-20px_rgba(50,133,232,0.12)] overflow-hidden premium-card">
            
            {/* 채팅창 헤더 */}
            <div className="bg-white px-8 md:px-12 py-6 md:py-10 border-b flex items-center justify-between z-10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-slate-50 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 flex items-center justify-center">
                  <img src={ARKI_IMG} alt="Arki" className="w-full h-full object-contain p-1.5" />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-xl md:text-2xl tracking-tight">AI 상담원 아키</h4>
                  <span className="text-xs md:text-sm font-bold text-emerald-500 flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" /> 정밀 판정 로직 가동 중
                  </span>
                </div>
              </div>
              {!isIntro && (
                <button onClick={() => setIsIntro(true)} className="p-3 text-gray-300 hover:text-[#3285E8] transition-all hover:rotate-180 duration-500">
                  <RefreshCcw className="w-6 h-6 md:w-8 md:h-8" />
                </button>
              )}
            </div>

            {/* 채팅 히스토리 */}
            <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-8 md:p-16 space-y-10 md:space-y-12 custom-scrollbar">
              {isIntro ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-10 animate-in fade-in zoom-in duration-1000">
                  <div className="w-40 h-40 md:w-64 md:h-64 relative">
                    <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-[80px] animate-pulse-soft"></div>
                    <img src={ARKI_IMG} alt="Arki" className="w-full h-full object-contain relative z-10 animate-float" />
                  </div>
                  <div className="space-y-4">
                    <h5 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">"정밀 분석을 시작할까요?"</h5>
                    <p className="text-lg md:text-xl text-gray-400 font-bold max-w-sm mx-auto leading-relaxed">부모님의 상태를 꼼꼼하게<br />확인해 드릴게요.</p>
                  </div>
                  <button onClick={startTest} className="px-14 py-6 md:px-20 md:py-8 bg-[#3285E8] text-white rounded-[2rem] md:rounded-[2.5rem] font-black text-2xl md:text-3xl hover:bg-blue-600 transition-all shadow-2xl shadow-blue-500/20 active:scale-95">
                    상담 시작하기
                  </button>
                </div>
              ) : (
                <>
                  {chatHistory.map((chat, idx) => (
                    <div key={idx} className={`flex ${chat.type === 'bot' ? 'justify-start' : 'justify-end'} animate-[reveal-up_0.5s_ease-out]`}>
                      <div className={`flex items-start gap-4 max-w-[90%] ${chat.type === 'user' ? 'flex-row-reverse' : ''}`}>
                        {chat.type === 'bot' && (
                          <div className="w-10 h-10 md:w-16 md:h-16 rounded-[1rem] md:rounded-[1.5rem] bg-white border border-slate-100 p-1.5 shrink-0 mt-1 shadow-sm overflow-hidden flex items-center justify-center">
                             <img src={ARKI_IMG} alt="Arki" className="w-full h-full object-contain" />
                          </div>
                        )}
                        <div className={`p-6 md:p-8 rounded-[1.8rem] md:rounded-[2.5rem] text-lg md:text-2xl font-bold leading-snug shadow-sm ${
                          chat.type === 'bot' 
                          ? 'bg-white text-gray-700 rounded-tl-none border border-gray-100' 
                          : 'bg-[#3285E8] text-white rounded-tr-none'
                        }`}>
                          {chat.text}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isBotTyping && (
                    <div className="flex justify-start items-center gap-4">
                      <div className="w-10 h-10 md:w-16 md:h-16 rounded-[1rem] md:rounded-[1.5rem] bg-white border border-slate-100 p-1.5 shrink-0 shadow-sm overflow-hidden flex items-center justify-center">
                         <img src={ARKI_IMG} alt="Arki" className="w-full h-full object-contain" />
                      </div>
                      <div className="p-5 bg-white rounded-[1.8rem] rounded-tl-none border border-gray-100">
                        <div className="flex gap-2">
                          <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce"></div>
                          <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce delay-75"></div>
                          <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce delay-150"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* 컨트롤 영역 */}
            {!isIntro && !result && (
              <div className="p-8 md:p-16 bg-white border-t z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
                {!isBotTyping && chatHistory[chatHistory.length - 1]?.options ? (
                  <div className="flex flex-col gap-4 max-w-2xl mx-auto">
                    {chatHistory[chatHistory.length - 1].qType === 'checkbox' ? (
                      <>
                        <div className="flex flex-col gap-3 max-h-72 overflow-y-auto p-1 custom-scrollbar">
                          {chatHistory[chatHistory.length - 1].options.map((opt: any) => (
                            <button
                              key={opt.score}
                              onClick={() => handleCheckbox(chatHistory[chatHistory.length - 1].qId, opt.score)}
                              className={`w-full p-5 rounded-2xl border-2 transition-all font-black text-center text-lg ${
                                (answers[chatHistory[chatHistory.length - 1].qId] || []).includes(opt.score)
                                ? 'border-[#3285E8] bg-blue-50 text-[#3285E8]'
                                : 'border-gray-100 bg-gray-50 text-gray-400'
                              }`}
                            >
                              {opt.text}
                            </button>
                          ))}
                        </div>
                        <button onClick={() => submitCheckbox(chatHistory[chatHistory.length - 1].qId)} className="w-full py-6 bg-[#3285E8] text-white rounded-2xl font-black text-xl md:text-2xl mt-4 shadow-xl active:scale-95 transition-all">
                          선택 완료
                        </button>
                      </>
                    ) : (
                      <div className="flex flex-col gap-4">
                        {chatHistory[chatHistory.length - 1].options.map((opt: any) => (
                          <button
                            key={opt.score}
                            onClick={() => handleSelect(chatHistory[chatHistory.length - 1].qId, opt.score, opt.text)}
                            className="w-full py-5 md:py-6 px-8 bg-gray-50 border-2 border-transparent hover:border-[#3285E8] hover:bg-blue-50 text-gray-700 font-black rounded-[1.8rem] md:rounded-[2.2rem] transition-all text-left flex justify-between items-center group active:scale-[0.98]"
                          >
                            <span className="text-lg md:text-2xl">{opt.text}</span>
                            <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-[#3285E8] group-hover:translate-x-1 transition-all" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-6 text-gray-300 font-black text-sm tracking-widest uppercase animate-pulse">Analyzing...</div>
                )}
              </div>
            )}

            {/* 결과 판정 */}
            {result && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-2xl z-50 flex flex-col items-center justify-center p-12 rounded-[3rem] md:rounded-[5rem] animate-in zoom-in duration-700">
                <div className="w-48 h-48 md:w-64 md:h-64 mb-8 flex items-center justify-center relative">
                   <div className="absolute inset-0 bg-blue-200/30 rounded-full blur-[60px] animate-pulse"></div>
                   <img src={ARKI_IMG} alt="Arki" className="w-full h-full object-contain relative z-10" />
                </div>
                <h5 className="text-2xl md:text-3xl font-black text-gray-400 mb-3 tracking-tight">분석 완료! 예상 등급은</h5>
                <h6 className="text-7xl md:text-[120px] font-black text-[#3285E8] mb-12 tracking-tighter leading-none">{result.grade}</h6>
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 mb-14 max-w-xl text-center shadow-inner">
                   <p className="text-xl md:text-2xl font-bold text-gray-600 italic">"{result.desc}"</p>
                </div>
                <div className="w-full max-w-md space-y-6">
                  <a 
                    href={TALLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-8 bg-[#3285E8] text-white rounded-[2rem] font-black text-2xl flex items-center justify-center gap-4 shadow-2xl shadow-blue-500/30 hover:scale-105 transition-all active:scale-95"
                  >
                    아크 전문가 상담받기 <PhoneCall className="w-8 h-8" />
                  </a>
                  <button onClick={() => setIsIntro(true)} className="w-full text-gray-400 font-black text-lg hover:text-[#3285E8] transition-colors">처음부터 다시하기</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GradeTest;
