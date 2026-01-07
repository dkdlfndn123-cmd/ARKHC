
import React from 'react';
import { BrainCircuit, ArrowRight, Layers, Star, Info, CheckCircle2 } from 'lucide-react';

const COGNITIVE_DATA = [
  {
    seriesTitle: 'ARK PLAY MEMORY BOOK',
    seriesDesc: '기억의 조각을 맞추는 인지 자극 훈련의 시작',
    accentColor: 'text-[#3285E8]',
    borderColor: 'border-[#3285E8]/20',
    bgColor: 'bg-blue-50/50',
    books: [
      { id: 1, img: 'https://i.imgur.com/sYYPag9.png', title: 'Memory Book', level: '통합본', levelText: '전단계 인지 자극', badgeBg: 'bg-[#3285E8]' }
    ]
  },
  {
    seriesTitle: 'ARK JOY PALETTE',
    seriesDesc: '색채와 형상을 통한 감각 및 정서 자극 프로그램',
    accentColor: 'text-rose-500',
    borderColor: 'border-rose-500/20',
    bgColor: 'bg-rose-50/50',
    books: [
      { id: 2, img: 'https://i.imgur.com/D8TOE3c.png', title: 'Joy Palette (상)', level: '상', levelText: '심화 인지 활성화', badgeBg: 'bg-[#3285E8]' },
      { id: 3, img: 'https://i.imgur.com/CgP9VEm.png', title: 'Joy Palette (중)', level: '중', levelText: '표준 인지 훈련', badgeBg: 'bg-[#FBBF24]' },
      { id: 4, img: 'https://i.imgur.com/opQZiRs.png', title: 'Joy Palette (하)', level: '하', levelText: '기초 인지 유지', badgeBg: 'bg-[#F43F5E]' }
    ]
  },
  {
    seriesTitle: 'ARK THE MASTER PIECE',
    seriesDesc: '아크 인지 연구의 정수, 고난도 종합 인지 강화 프로그램',
    accentColor: 'text-[#2D5A41]',
    borderColor: 'border-[#2D5A41]/20',
    bgColor: 'bg-[#2D5A41]/10',
    books: [
      { id: 5, img: 'https://i.imgur.com/lcPGfU2.png', title: 'The Master Piece', level: '심화', levelText: '고난도 종합 인지', badgeBg: 'bg-[#2D5A41]' }
    ]
  },
  {
    seriesTitle: "LIFE'S COLORS PLAY BOOK",
    seriesDesc: '일상의 색을 되찾는 생애 주기 맞춤형 인지 활성화',
    accentColor: 'text-emerald-500',
    borderColor: 'border-emerald-500/20',
    bgColor: 'bg-emerald-50/50',
    books: [
      { id: 6, img: 'https://i.imgur.com/L717wIS.png', title: "Life's Colors (상)", level: '상', levelText: '심화 인지 활성화', badgeBg: 'bg-[#8B5CF6]' },
      { id: 7, img: 'https://i.imgur.com/HHeLLCb.png', title: "Life's Colors (중)", level: '중', levelText: '표준 인지 훈련', badgeBg: 'bg-[#10B981]' },
      { id: 8, img: 'https://i.imgur.com/cNt7e6E.png', title: "Life's Colors (하)", level: '하', levelText: '기초 인지 유지', badgeBg: 'bg-[#F59E0B]' }
    ]
  }
];

const CognitiveShowcase: React.FC = () => {
  return (
    <section id="b2c-cognitive" className="py-32 bg-slate-50 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* 섹션 메인 헤더 */}
        <div className="flex flex-col items-center text-center space-y-8 mb-40 max-w-4xl mx-auto reveal">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-blue-100/50 text-[#3285E8] rounded-full font-black text-lg tracking-widest uppercase animate-pulse-soft">
            <BrainCircuit className="w-6 h-6" /> Cognitive Research Lab
          </div>
          <h3 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight">
            어르신 맞춤형<br />
            <span className="text-[#3285E8]">인지 특화 시리즈</span>
          </h3>
          <p className="text-xl md:text-2xl text-gray-500 font-bold leading-relaxed max-w-3xl">
            어르신의 인지 단계에 맞춘 과학적 커리큘럼(상·중·하).<br className="hidden md:block" />
            표지 색상을 반영한 직관적 난이도 구분으로 더욱 편리합니다.
          </p>
        </div>

        {/* 시리즈 리스트 */}
        <div className="space-y-60">
          {COGNITIVE_DATA.map((series, sIdx) => (
            <div key={sIdx} className="space-y-20 flex flex-col items-center reveal" style={{ transitionDelay: `${sIdx * 0.1}s` }}>
              
              {/* 시리즈 타이틀 영역 */}
              <div className="flex flex-col items-center text-center space-y-6 w-full max-w-5xl">
                <div className={`px-8 py-2.5 ${series.bgColor} ${series.accentColor} rounded-2xl font-black text-sm uppercase tracking-[0.2em] border-2 ${series.borderColor} animate-float-subtle`}>
                  Series {String(sIdx + 1).padStart(2, '0')}
                </div>
                <div className="space-y-4">
                  <h4 className={`text-4xl md:text-6xl font-black tracking-tighter ${series.accentColor} uppercase group-hover:scale-105 transition-transform`}>
                    {series.seriesTitle}
                  </h4>
                  <p className="text-xl md:text-2xl text-gray-400 font-bold max-w-2xl mx-auto">
                    {series.seriesDesc}
                  </p>
                </div>
                <div className="w-24 h-1.5 bg-gray-200 rounded-full mt-4"></div>
              </div>

              {/* 워크북 카드 그리드 */}
              <div className={`grid grid-cols-1 gap-12 lg:gap-16 w-full justify-center ${
                series.books.length === 1 ? 'max-w-xl' : 
                series.books.length === 2 ? 'md:grid-cols-2 max-w-5xl' : 
                'md:grid-cols-2 lg:grid-cols-3'
              }`}>
                {series.books.map((book, bIdx) => (
                  <div key={book.id} className="group flex flex-col items-center space-y-10 w-full reveal" style={{ transitionDelay: `${bIdx * 0.2}s` }}>
                    <div className="relative w-full aspect-[3/4] bg-white rounded-[4rem] p-10 flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 premium-card">
                      <img 
                        src={book.img} 
                        alt={book.title} 
                        className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                      />
                      <div className={`absolute top-10 left-10 px-7 py-3 rounded-[1.5rem] font-black text-base shadow-2xl backdrop-blur-2xl border border-white/20 z-10 text-white transition-all group-hover:scale-110 ${book.badgeBg}`}>
                        난이도 {book.level}
                      </div>
                    </div>

                    <div className="text-center space-y-4 px-4">
                      <h5 className="text-3xl font-black text-gray-900 group-hover:text-[#3285E8] transition-colors tracking-tight">
                        {book.title}
                      </h5>
                      <div className="flex flex-col items-center gap-3">
                        <div className="flex items-center gap-2 text-gray-500 bg-gray-100 px-4 py-1.5 rounded-full group-hover:bg-[#3285E8]/10 group-hover:text-[#3285E8] transition-colors">
                          <CheckCircle2 className={`w-5 h-5 ${series.accentColor}`} />
                          <span className="text-base font-bold">{book.levelText}</span>
                        </div>
                        <button className="pt-4 flex items-center gap-2 text-[#3285E8] font-black text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                          상세 커리큘럼 보기 <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 하단 통합 CTA */}
        <div className="mt-60 bg-[#1A365D] rounded-[5rem] p-20 md:p-32 text-white text-center relative overflow-hidden group shadow-2xl shadow-blue-900/20 reveal">
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#3285E8] rounded-full blur-[300px] opacity-20 -mr-96 -mt-96 transition-transform duration-1000 group-hover:scale-110"></div>
          <div className="relative z-10 space-y-16 max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-white/10 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 border border-white/10 shadow-inner animate-float">
              <Layers className="w-12 h-12 text-blue-300" />
            </div>
            
            <div className="space-y-8">
              <h4 className="text-5xl md:text-8xl font-black leading-[1.05] tracking-tight">
                어르신의 내일을<br />
                <span className="text-blue-400">더 선명하게</span>
              </h4>
              <p className="text-2xl md:text-3xl text-blue-100/60 font-bold leading-relaxed">
                전국의 아크 케어 매니저들이 활용하는<br />
                검증된 인지 자극 솔루션을 우리 집에서 만나보세요.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-10">
              <button className="px-16 py-8 bg-[#3285E8] text-white rounded-[2.5rem] font-black text-2xl hover:bg-blue-600 transition-all shadow-2xl shadow-blue-500/20 transform hover:-translate-y-2 flex items-center gap-4 mx-auto sm:mx-0 active:scale-95">
                샘플 교재 신청 <ArrowRight className="w-8 h-8" />
              </button>
              <button className="px-16 py-8 bg-white/10 backdrop-blur-xl text-white border-2 border-white/10 rounded-[2.5rem] font-black text-2xl hover:bg-white/20 transition-all flex items-center gap-4 mx-auto sm:mx-0 active:scale-95">
                <Info className="w-8 h-8" /> 프로그램 도입 문의
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CognitiveShowcase;
