
import React from 'react';
import { HISTORY } from '../constants';
import { 
  Palette,
  Target
} from 'lucide-react';

const About: React.FC = () => {
  const groupedHistory = HISTORY.reduce((acc: any, item) => {
    if (!acc[item.year]) acc[item.year] = [];
    acc[item.year].push(item);
    return acc;
  }, {});
  const years = Object.keys(groupedHistory).sort((a, b) => a.localeCompare(b));

  const coreValues = [
    {
      letter: 'A', title: 'dvance', desc: '끊임없는 기술 혁신으로 대한민국 요양 산업의 패러다임을 바꿉니다.',
      image: 'https://i.imgur.com/v4Nqv3c.png', animation: 'animate-float'
    },
    {
      letter: 'R', title: 'eliability', desc: '어디서든 신뢰할 수 있는 데이터 기반 시스템으로 안전한 돌봄을 실현합니다.',
      image: 'https://i.imgur.com/eEaD3Mz.png', animation: 'animate-float-delayed'
    },
    {
      letter: 'K', title: 'eep care', desc: '지속 가능한 케어 생태계를 구축하여 요양 산업에 긍정적인 임팩트를 전합니다.',
      image: 'https://i.imgur.com/zNEBzOa.png', animation: 'animate-float'
    }
  ];

  return (
    <section id="about" className="py-24 md:py-48 bg-white overflow-hidden scroll-mt-24 font-pretendard">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* 기업이념 & 비전 - 앵커 지점 */}
        <div id="about-vision" className="w-full mb-48 md:mb-72 flex flex-col items-center text-center reveal scroll-mt-32">
          <div className="max-w-5xl space-y-12 mb-32">
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-blue-50 text-[#3285E8] rounded-full font-black text-sm uppercase tracking-[0.3em] mx-auto border border-blue-100/30">
              <Target className="w-4 h-4" /> Our Vision
            </div>
            <h2 className="text-4xl md:text-8xl font-black text-gray-900 leading-[1.1] tracking-tighter break-keep">
              디지털 혁신으로 활기찬<br />
              <span className="text-[#3285E8]">시니어 라이프 실현</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-20 w-full max-w-6xl mx-auto">
            {coreValues.map((val, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-10 group reveal transition-all duration-700" style={{ transitionDelay: `${idx * 0.2}s` }}>
                <div className={`w-44 h-44 md:w-64 md:h-64 transition-transform duration-700 group-hover:scale-110 ${val.animation}`}>
                  <img src={val.image} alt={val.letter} className="w-full h-full object-contain drop-shadow-2xl" />
                </div>
                <div className="space-y-6 max-w-sm">
                  <h5 className="text-4xl md:text-5xl font-light text-gray-800 tracking-tighter transition-colors group-hover:text-[#3285E8]">
                    <span className="text-[#3285E8] font-black">{val.letter}</span>{val.title}
                  </h5>
                  <p className="text-lg md:text-xl text-gray-400 font-bold leading-relaxed tracking-tight break-keep group-hover:text-gray-600 transition-colors">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 아크 히스토리 - 히스토리 앵커 지점 */}
        <div id="about-history" className="mb-48 md:mb-72 pt-32 w-full flex flex-col items-center scroll-mt-32">
          <div className="text-center mb-24 space-y-6 reveal">
            <h4 className="text-[#3285E8] font-black text-base tracking-[0.4em] uppercase">ARK History</h4>
            <h3 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter">우리가 걸어온 혁신의 길</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 w-full max-w-7xl">
            {years.map((year, yIdx) => (
              <div key={year} className="bg-slate-50/50 rounded-[4rem] p-12 md:p-24 flex flex-col items-center shadow-sm border border-slate-100 premium-card reveal transition-all duration-700" style={{ transitionDelay: `${yIdx * 0.2}s` }}>
                <h4 className="text-8xl md:text-[140px] font-black text-[#3285E8] tracking-tighter mb-20 text-center leading-none opacity-90">{year}</h4>
                <div className="w-full space-y-10">
                  {groupedHistory[year].map((item: any, idx: number) => (
                    <div key={idx} className="flex items-start gap-6 group/item">
                      <div className={`w-3 h-3 md:w-5 md:h-5 rounded-full shrink-0 mt-3 md:mt-4 transition-all duration-500 group-hover/item:scale-125 ${item.isMilestone ? 'bg-[#3285E8] shadow-[0_0_15px_rgba(50,133,232,0.5)]' : 'bg-slate-200'}`}></div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 w-full">
                        <span className="text-2xl md:text-4xl font-black text-[#3285E8] shrink-0 leading-tight group-hover/item:translate-x-1 transition-transform">
                          {item.month}
                        </span>
                        <span className="text-lg md:text-2xl font-bold text-gray-700 tracking-tight leading-snug break-keep transition-colors group-hover/item:text-gray-900">
                          {item.event}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 브랜드 아이덴티티 - CI/BI 앵커 지점 */}
        <div id="about-cibi" className="pt-32 border-t border-gray-100 w-full flex flex-col items-center reveal scroll-mt-32">
          <div className="text-center space-y-6 mb-24">
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-slate-100 text-slate-500 rounded-full font-black text-xs tracking-[0.3em] uppercase">
              <Palette className="w-4 h-4" /> Visual Identity
            </div>
            <h3 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter leading-tight">아크의 가치를 담은<br/>브랜드 이미지</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
            <div className="bg-gray-50 rounded-[5rem] p-16 flex flex-col items-center text-center space-y-10 border border-gray-100 premium-card transition-all duration-500">
              <span className="text-[#3285E8] font-black text-xs tracking-[0.4em] uppercase">CI - 아크헬스케어</span>
              <div className="bg-white p-16 rounded-[4rem] shadow-sm border border-gray-50 flex items-center justify-center w-full aspect-square max-w-[340px]">
                <img src="https://i.imgur.com/gKdTAx1.png" alt="CI" className="w-full h-full object-contain hover:scale-110 transition-transform duration-700" />
              </div>
              <p className="text-gray-400 font-bold text-xl leading-relaxed tracking-tight">미래 헬스케어 인프라와<br />신뢰를 상징하는 기업 아이덴티티</p>
            </div>

            <div className="bg-[#1A365D] rounded-[5rem] p-16 flex flex-col items-center text-center space-y-10 border border-white/5 premium-card transition-all duration-500">
              <span className="text-blue-400 font-black text-xs tracking-[0.4em] uppercase">BI - 아크시니어케어</span>
              <div className="bg-white p-16 rounded-[4rem] shadow-sm border border-white/10 flex items-center justify-center w-full aspect-square max-w-[340px]">
                <img src="https://i.imgur.com/Yh0Py1b.png" alt="BI" className="w-full h-full object-contain hover:scale-110 transition-transform duration-700" />
              </div>
              <p className="text-blue-100/40 font-bold text-xl leading-relaxed tracking-tight">따뜻한 서비스와 정성을 상징하는<br />서비스 브랜드 아이덴티티</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
