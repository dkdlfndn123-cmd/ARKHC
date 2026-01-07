
import React from 'react';
import { 
  HeartHandshake, 
  Utensils, 
  Sparkles, 
  BrainCircuit, 
  Coins
} from 'lucide-react';
import CareCalculator from './CareCalculator';

const VisitCare: React.FC = () => {
  return (
    <div id="b2c-visit" className="space-y-32 md:space-y-48 flex flex-col items-center scroll-mt-32">
      {/* 1. 리뷰/증언 */}
      <div className="w-full reveal">
        <div className="flex flex-col items-center text-center gap-12 max-w-5xl mx-auto">
          <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter keep-all">행복한 일상의 기록</h3>
          
          <div className="grid md:grid-cols-2 gap-8 w-full mt-6">
            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 premium-card">
              <div className="relative rounded-[1.8rem] overflow-hidden bg-black aspect-video mb-6">
                <video controls className="w-full h-full object-cover">
                  <source src="https://i.imgur.com/dvx9nqD.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="text-xl font-bold text-slate-800 italic tracking-tight">"매일이 기다려지는 시간입니다."</p>
            </div>

            <div className="bg-[#0F172A] p-6 rounded-[2.5rem] shadow-xl border border-white/5 premium-card">
              <div className="relative rounded-[1.8rem] overflow-hidden bg-black aspect-video mb-6">
                <video controls className="w-full h-full object-cover">
                  <source src="https://i.imgur.com/QRFP4vy.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="text-xl font-bold text-blue-500 italic tracking-tight">"안심하고 일상에 집중하게 되었어요."</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 서비스 항목 */}
      <div className="space-y-16 w-full reveal">
        <div className="text-center space-y-4">
          <h4 className="text-[#3285E8] font-black text-xs tracking-[0.4em] uppercase">Premium Care List</h4>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">아크가 함께하는 일상</h3>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { title: '신체지원', desc: '식사, 청결 도움', icon: <HeartHandshake className="w-7 h-7" />, color: 'bg-rose-50 text-rose-500' },
            { title: '가사지원', desc: '식사 준비 및 가사', icon: <Utensils className="w-7 h-7" />, color: 'bg-orange-50 text-orange-500' },
            { title: '인지자극', desc: '워크북 및 회상 요법', icon: <BrainCircuit className="w-7 h-7" />, color: 'bg-blue-50 text-blue-500' },
            { title: '정서/동행', desc: '말벗 및 병원 동행', icon: <Sparkles className="w-7 h-7" />, color: 'bg-violet-50 text-violet-500' }
          ].map((s, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center premium-card shadow-sm">
              <div className={`w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center mb-6 shadow-inner`}>
                {s.icon}
              </div>
              <h5 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">{s.title}</h5>
              <p className="text-sm text-slate-400 font-bold text-nowrap">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 급여안내 및 계산기 그룹 */}
      <div className="w-full space-y-12 md:space-y-16 flex flex-col items-center">
        {/* 3. 급여 안내 섹션 */}
        <div className="w-full max-w-7xl mx-auto px-4 reveal">
          <div className="flex flex-col items-center text-center space-y-8 mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 text-[#3285E8] rounded-full font-black text-xs md:text-sm tracking-widest border border-blue-100/50">
              <Coins className="w-4 h-4" /> ARK SENIOR COMPENSATION
            </div>
            <div className="space-y-4">
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1] text-nowrap">
                돌보는 분도 <span className="text-[#3285E8]">소중한 가족</span>입니다.
              </h3>
              <p className="text-xl md:text-2xl text-slate-400 font-bold text-nowrap">
                아크시니어케어는 <span className="text-[#3285E8]">최고 수준의 급여</span>로 보답합니다.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#3285E8] rounded-[2.5rem] p-10 text-white flex flex-col justify-center min-h-[260px] shadow-2xl shadow-blue-500/10 group">
              <div className="space-y-6">
                <div className="flex items-center">
                  <span className="text-white/80 font-black text-xl tracking-tight text-nowrap">방문요양 시급</span>
                </div>
                <div className="space-y-4">
                  <h5 className="text-4xl md:text-5xl font-black tracking-tighter text-nowrap">13,000원</h5>
                  <div className="h-px bg-white/10 w-full"></div>
                  <p className="text-white/60 font-black text-lg text-nowrap">* 요양보호사 수시 모집 중</p>
                </div>
              </div>
            </div>

            <div className="bg-[#3285E8] rounded-[2.5rem] p-10 text-white flex flex-col justify-center min-h-[260px] shadow-2xl shadow-blue-500/10 group">
              <div className="space-y-6">
                <div className="flex items-center">
                  <span className="text-white/80 font-black text-xl tracking-tight text-nowrap">60분 가족요양</span>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xl font-bold text-white/50 tracking-tight text-nowrap">22,000원</span>
                    <h5 className="text-3xl md:text-4xl font-black tracking-tighter text-nowrap">월 524,000원</h5>
                  </div>
                  <div className="h-px bg-white/10 w-full"></div>
                  <p className="text-xs text-white/40 font-bold leading-tight keep-all">
                    * 최대 20일 기준, 방문목욕(8회), 본인부담금(0%) 포함
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#3285E8] rounded-[2.5rem] p-10 text-white flex flex-col justify-center min-h-[260px] shadow-2xl shadow-blue-500/10 group">
              <div className="space-y-6">
                <div className="flex items-center">
                  <span className="text-white/80 font-black text-xl tracking-tight text-nowrap">90분 가족요양</span>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xl font-bold text-white/50 tracking-tight text-nowrap">31,000원</span>
                    <h5 className="text-3xl md:text-4xl font-black tracking-tighter text-nowrap">월 1,045,000원</h5>
                  </div>
                  <div className="h-px bg-white/10 w-full"></div>
                  <p className="text-xs text-white/40 font-bold leading-tight keep-all">
                    * 최대 31일 기준, 방문목욕(8회), 본인부담금(0%) 포함
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. 본인부담금 계산기 */}
        <div className="w-full reveal px-4">
          <div className="max-w-7xl mx-auto w-full">
            <CareCalculator />
          </div>
        </div>
      </div>
      
      <div className="pb-32 md:pb-48"></div>
    </div>
  );
};

export default VisitCare;
