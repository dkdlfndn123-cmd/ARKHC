
import React, { useState } from 'react';
import { 
  Rocket, 
  ChevronRight,
  ShoppingCart,
  Layout,
  Plus,
  CircleCheck,
  FileText,
  Headset,
  Users,
  PlayCircle,
  ShieldCheck,
  TrendingUp,
  Search
} from 'lucide-react';
import { ERP_FEATURES } from '../constants';
import NetworkMap from './NetworkMap';

const B2BSolution: React.FC = () => {
  const [showPriceTable, setShowPriceTable] = useState(false);

  const CONSULTING_STEPS = [
    {
      step: '01',
      title: '상권 분석 및 입지 선정',
      desc: '공단 데이터와 인구 통계를 바탕으로 최적의 사업 부지를 추천합니다.',
      icon: <Search className="w-6 h-6" />,
      tags: ['데이터 분석', '현장 실사']
    },
    {
      step: '02',
      title: '지정 심사 완벽 대비',
      desc: '복잡한 지정제 심사 서류와 시설 기준 충족을 1:1로 밀착 지원합니다.',
      icon: <ShieldCheck className="w-6 h-6" />,
      tags: ['서류 대행', '인테리어 가이드']
    },
    {
      step: '03',
      title: '전문 인력 채용 및 교육',
      desc: '검증된 요양보호사 채용 노하우와 센터장님을 위한 운영 실무를 교육합니다.',
      icon: <Users className="w-6 h-6" />,
      tags: ['채용 브랜딩', '실무 매뉴얼']
    },
    {
      step: '04',
      title: '안정적 성장 및 운영 관리',
      desc: '오픈 이후에도 마케팅과 재무회계 관리를 통해 수익 구조를 안정화합니다.',
      icon: <TrendingUp className="w-6 h-6" />,
      tags: ['마케팅 지원', '재무회계']
    }
  ];

  return (
    <section id="b2b" className="py-24 md:py-48 bg-white overflow-hidden scroll-mt-24 font-pretendard">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. 멤버십 헤더 & 혜택 */}
        <div id="b2b-membership" className="mb-32 md:mb-48 flex flex-col items-center reveal scroll-mt-32">
          <div className="text-center mb-24 space-y-10 max-w-5xl relative">
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-[#E8F1FE] text-[#3285E8] rounded-full font-black text-xs md:text-sm tracking-widest shadow-sm border border-blue-100/50">
              <span className="shrink-0"><Users className="w-4 h-4 md:w-5 md:h-5" /></span> ARK FAMILY MEMBERSHIP
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-6xl lg:text-[74px] font-black text-gray-900 tracking-tighter leading-[1.08] break-keep">
                <span className="text-[#3285E8] block mb-4">아크패밀리 멤버십</span>
                복잡한 센터 운영,<br />아크가 해결합니다.
              </h2>
              {/* 폰트 크기 조정: text-base md:text-2xl -> text-sm md:text-xl */}
              <p className="text-sm md:text-xl text-gray-400 font-bold max-w-2xl mx-auto leading-relaxed tracking-tight opacity-90 break-keep">
                전국 70여 개 파트너 센터와 함께 성장하는 아크만의 프리미엄 운영 지원 솔루션
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-6xl mb-32">
            {[
              { title: '평가 매뉴얼', desc: '검증된 평가 자료 제공', icon: <FileText className="w-8 h-8" /> },
              { title: '1:1 운영 멘토링', desc: '전담 매니저 매칭 상담', icon: <Headset className="w-8 h-8" /> },
              { title: '마케팅 지원', desc: '블로그 홈페이지 제작', icon: <Layout className="w-8 h-8" /> },
              { title: '전용 케어몰', desc: '운영 물품 최저가 구매', icon: <ShoppingCart className="w-8 h-8" /> }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.02)] premium-card group reveal flex flex-col items-center text-center transition-all duration-500" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-50 text-[#3285E8] rounded-[2rem] flex items-center justify-center mb-10 shadow-inner group-hover:bg-[#3285E8] group-hover:text-white transition-all duration-500">
                  {benefit.icon}
                </div>
                <h5 className="text-xl md:text-2xl font-black text-gray-900 mb-3 tracking-tight">{benefit.title}</h5>
                <p className="text-sm md:text-base text-gray-400 font-bold leading-relaxed tracking-tight">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="w-full max-w-5xl mx-auto reveal mt-12 mb-32">
            <div className="text-center mb-16 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#3285E8] rounded-xl font-black text-xs uppercase tracking-widest">
                <PlayCircle className="w-4 h-4" /> Partner Story
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter break-keep">
                "진짜를 경험한 센터장님들의<br />
                <span className="text-[#3285E8]">생생한 운영 인터뷰"</span>
              </h3>
            </div>
            
            <div className="relative aspect-video rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(50,133,232,0.25)] border-[12px] border-white bg-slate-100 group">
              <iframe 
                title="vimeo-player" 
                src="https://player.vimeo.com/video/1145501566?h=22458c4eaf" 
                className="absolute inset-0 w-full h-full"
                frameBorder="0" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* 2. 멤버십 플랜 & 요금표 */}
        <div id="b2b-membership-plans" className="mb-48 w-full flex flex-col items-center reveal scroll-mt-32">
          <div className="text-center space-y-8 mb-24 break-keep max-w-3xl">
             <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-tight">
               투명하고 합리적인<br />
               <span className="text-[#3285E8]">멤버십 플랜</span>
             </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">
            {/* Lite Plan */}
            <div className="bg-white rounded-[4rem] p-12 md:p-16 border border-gray-100 shadow-xl flex flex-col items-start premium-card relative overflow-hidden group">
              <div className="mb-12">
                <p className="text-slate-400 font-black text-xs tracking-[0.3em] uppercase mb-3">Essential</p>
                <h4 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter">Lite</h4>
              </div>
              <ul className="space-y-6 mb-16 w-full">
                {["평가 매뉴얼 제공", "1:1 운영 상담 예약", "행정 서류 샘플 제공", "케어몰 전용가 적용", "블로그 홈페이지 제작"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-base md:text-xl font-bold text-gray-500 tracking-tight">
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <CircleCheck className="w-4 h-4 text-blue-400" /> 
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto w-full py-7 bg-slate-50 text-slate-300 rounded-3xl font-black text-2xl text-center uppercase tracking-[0.2em]">Free</div>
            </div>

            {/* Premium Plan */}
            <div className="bg-[#1A365D] rounded-[4rem] p-12 md:p-16 shadow-2xl relative flex flex-col items-center text-white overflow-hidden group premium-card">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#3285E8] rounded-full blur-[120px] opacity-20 -mr-40 -mt-40"></div>
              <div className="mb-12 w-full text-left relative z-10">
                <p className="text-blue-400 font-black text-xs tracking-[0.3em] uppercase mb-3">Full-Service</p>
                <h4 className="text-5xl md:text-7xl font-black text-white tracking-tighter">Premium</h4>
              </div>
              <div className="w-full flex flex-col items-center text-center space-y-8 mb-16 relative z-10 py-16 px-6 rounded-[3.5rem] bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all duration-500">
                <p className="text-lg md:text-xl font-bold text-blue-100/70 tracking-tight"> Lite 멤버십 모든 서비스</p>
                <div className="flex justify-center"><Plus className="w-10 h-10 text-[#3285E8] animate-pulse-soft" /></div>
                {/* 폰트 크기 추가 조정: text-xl md:text-2xl -> text-lg md:text-xl */}
                <p className="text-lg md:text-xl font-black text-white tracking-tight leading-tight">재무회계 + 노무/세무 대행</p>
              </div>
              <div className="mt-auto w-full py-7 bg-white/10 rounded-3xl border border-white/10 text-center relative z-10 text-lg md:text-xl font-black text-blue-400 tracking-tight">
                통합 관리 비용 별도 안내
              </div>
            </div>
          </div>

          <button 
            onClick={() => setShowPriceTable(!showPriceTable)}
            className="mt-20 px-12 py-6 md:px-16 md:py-8 bg-[#3285E8] text-white rounded-[2.5rem] font-black text-xl md:text-2xl hover:bg-blue-600 transition-all shadow-2xl flex items-center justify-center gap-4 active:scale-95"
          >
            프리미엄 요금표 확인 <ChevronRight className={`w-7 h-7 md:w-9 md:h-9 transition-transform duration-500 ${showPriceTable ? 'rotate-90' : ''}`} />
          </button>
        </div>

        {/* 3. 전국 네트워크 지도 */}
        <div className="w-full mb-32 md:mb-48 reveal">
           <div className="text-center mb-20 space-y-6">
             <h4 className="text-[#3285E8] font-black text-base tracking-[0.3em] uppercase">Across South Korea</h4>
             <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter leading-tight">전국 곳곳에서 아크의<br/>패밀리 멤버십을 만나보실 수 있습니다.</h3>
           </div>
           <NetworkMap />
        </div>

        {/* 4. AI ERP 솔루션 */}
        <div id="b2b-erp" className="mb-48 md:mb-72 w-full text-center reveal scroll-mt-32">
          <div className="space-y-10 max-w-5xl mx-auto mb-32 px-4">
            <h3 className="text-4xl md:text-7xl lg:text-[88px] font-black text-gray-900 tracking-tighter leading-[1.08]">
              AI가 주도하는<br /><span className="text-[#3285E8]">행정 시스템</span>
            </h3>
            <p className="text-lg md:text-2xl text-gray-400 font-bold leading-relaxed tracking-tight opacity-90 max-w-3xl mx-auto break-keep">
              현장의 복잡함은 걷어내고, 운영의 본질에만 집중할 수 있도록<br className="hidden md:block" />
              센터 운영에 <span className="text-gray-900">진짜 필요한 핵심 기능</span>만을 정교하게 담았습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-24">
            {ERP_FEATURES.map((feature, idx) => (
              <div key={idx} className="p-12 md:p-16 bg-slate-50 rounded-[4rem] md:rounded-[5rem] border border-gray-100 premium-card flex flex-col items-center group reveal transition-all duration-500" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white text-[#3285E8] rounded-[2.5rem] flex items-center justify-center mb-10 shadow-sm group-hover:bg-[#3285E8] group-hover:text-white transition-all duration-500">
                  {React.cloneElement(feature.icon as React.ReactElement<any>, { className: "w-8 h-8 md:w-10 md:h-10" })}
                </div>
                <h4 className="font-black text-gray-900 mb-5 text-xl md:text-3xl group-hover:text-[#3285E8] transition-colors tracking-tight">{feature.title}</h4>
                <p className="text-base md:text-xl text-gray-500 font-bold leading-relaxed tracking-tight break-keep">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <button className="px-16 py-8 md:px-20 md:py-10 bg-[#3285E8] text-white rounded-[3rem] font-black text-xl md:text-3xl hover:bg-blue-600 transition-all shadow-2xl flex items-center gap-5 mx-auto active:scale-95">
            무료 데모 신청 <Rocket className="w-8 h-8 md:w-10 md:h-10" />
          </button>
        </div>

        {/* 5. 창업/운영 컨설팅 로드맵 (마지막) */}
        <div id="b2b-consulting" className="py-24 md:py-40 bg-slate-50/50 rounded-[5rem] mb-48 w-full flex flex-col items-center reveal scroll-mt-32 border border-slate-100">
          <div className="max-w-5xl px-6 w-full">
            <div className="text-center space-y-8 mb-24">
              <div className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-white text-[#3285E8] rounded-full font-black text-sm uppercase tracking-widest shadow-sm border border-blue-100/50 mx-auto">
                <Rocket className="w-5 h-5" /> ARK CONSULTING ROADMAP
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight break-keep">
                막막한 방문요양 창업,<br />
                <span className="text-[#3285E8]">아크가 지도가 되어드립니다.</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {CONSULTING_STEPS.map((step, idx) => (
                <div key={idx} className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-sm border border-gray-100 flex flex-col items-start premium-card group">
                  <div className="flex justify-between items-start w-full mb-10">
                    <div className="w-16 h-16 bg-slate-50 text-[#3285E8] rounded-2xl flex items-center justify-center group-hover:bg-[#3285E8] group-hover:text-white transition-all duration-500">
                      {step.icon}
                    </div>
                    <span className="text-5xl font-black text-slate-100 group-hover:text-blue-50 transition-colors">{step.step}</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-[#3285E8] transition-colors">{step.title}</h4>
                  <p className="text-base md:text-xl text-gray-500 font-bold leading-relaxed mb-8 tracking-tight break-keep">{step.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-4 py-1.5 bg-slate-50 text-slate-400 rounded-full text-xs font-black tracking-tighter border border-slate-100 group-hover:border-blue-100 group-hover:text-[#3285E8] transition-all">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-20 p-10 bg-white rounded-[3rem] border-2 border-dashed border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center shrink-0">
                  <CircleCheck className="w-8 h-8" />
                </div>
                <div>
                  <h5 className="text-xl font-black text-gray-900 tracking-tight">이미 운영 중이신가요?</h5>
                  <p className="text-slate-400 font-bold text-base">지정 갱신 심사 및 운영 효율화 진단도 아크와 함께하세요.</p>
                </div>
              </div>
              <button className="px-10 py-5 bg-[#1A365D] text-white rounded-2xl font-black text-lg hover:bg-slate-800 transition-all flex items-center gap-2 whitespace-nowrap">
                운영 진단 신청 <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BSolution;
