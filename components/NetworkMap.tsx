
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Globe2, BarChart3, TrendingUp, Award } from 'lucide-react';

/**
 * 숫자가 0부터 목표치까지 올라가는 애니메이션 컴포넌트
 * 화면에 보일 때(Intersection) 애니메이션이 시작됩니다.
 */
const AnimatedNumber: React.FC<{ value: number; duration?: number }> = ({ value, duration = 2000 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStarted(true);
          observer.disconnect(); // 한 번 실행 후 관찰 종료
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOutExpo 효과 적용 (초반에 빠르고 끝에 천천히)
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setDisplayValue(Math.floor(easeOutExpo * value));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration, isStarted]);

  return <span ref={elementRef}>{displayValue}</span>;
};

// 총 70개소를 맞추기 위한 데이터 셋업
const PARTNERS_DATA = [
  ...Array(18).fill({ region: '서울' }),
  ...Array(30).fill({ region: '경기/인천' }),
  ...Array(13).fill({ region: '충청/대전/세종' }),
  ...Array(5).fill({ region: '경상/대구/부산' }),
  ...Array(2).fill({ region: '전라/호남' }),
  ...Array(1).fill({ region: '강원' }),
  ...Array(1).fill({ region: '제주' })
];

const NetworkMap: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const stats = useMemo(() => {
    const counts: Record<string, number> = {};
    PARTNERS_DATA.forEach(p => {
      counts[p.region] = (counts[p.region] || 0) + 1;
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, []);

  const totalCenters = PARTNERS_DATA.length; // 70

  return (
    <div className="w-full flex flex-col items-center font-pretendard">
      <div className="w-full max-w-6xl flex flex-col items-center gap-12">
        
        {/* 메인 통계 하이라이트 */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
           <div className="md:col-span-2 bg-[#0F172A] rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#3285E8] rounded-full blur-[120px] opacity-20"></div>
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black tracking-[0.3em] uppercase text-blue-400">
                    <Globe2 className="w-3.5 h-3.5" /> Ark Network Status
                  </div>
                  <h3 className="text-7xl md:text-9xl font-black tracking-tighter leading-none mt-4">
                    <AnimatedNumber value={totalCenters} />
                    <span className="text-2xl md:text-3xl text-slate-500 font-bold ml-4 align-baseline tracking-normal">Centers</span>
                  </h3>
                  <p className="text-slate-400 text-lg md:text-2xl font-bold leading-relaxed max-w-md">
                    전국의 우수한 센터들이 아크와 함께<br/>대한민국 시니어 케어의 표준을 만듭니다.
                  </p>
                </div>
              </div>
           </div>

           <div className="bg-slate-50 rounded-[4rem] p-10 flex flex-col justify-between border border-slate-100 shadow-sm relative group overflow-hidden">
              <div className="space-y-6 relative z-10">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#3285E8] shadow-sm">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <h5 className="text-gray-400 font-black text-xs uppercase tracking-widest mb-1">Membership Trust</h5>
                  <p className="text-3xl font-black text-gray-900 leading-tight">압도적인<br/>파트너 만족도</p>
                </div>
              </div>
              <div className="relative z-10">
                <span className="text-6xl font-black text-[#3285E8] tracking-tighter">
                  <AnimatedNumber value={98} />
                  <span className="text-2xl opacity-40 ml-1">%</span>
                </span>
                <p className="text-[11px] font-bold text-gray-400 mt-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-500" /> 재가입 및 유지율 기준
                </p>
              </div>
           </div>
        </div>

        {/* 행정 구역별 수치 그리드 */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 reveal">
          {stats.map(([region, count]) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(selectedRegion === region ? null : region)}
              className={`p-10 rounded-[3.5rem] border transition-all duration-500 text-center flex flex-col items-center justify-center gap-3 group ${
                selectedRegion === region 
                ? 'bg-[#3285E8] border-[#3285E8] text-white shadow-2xl scale-105' 
                : 'bg-white border-slate-100 text-slate-400 hover:border-blue-100 hover:bg-slate-50/50'
              }`}
            >
              <span className={`text-[10px] font-black tracking-[0.2em] uppercase transition-colors ${
                selectedRegion === region ? 'text-white/60' : 'text-slate-300'
              }`}>{region}</span>
              <h4 className={`text-5xl font-black tracking-tighter ${
                selectedRegion === region ? 'text-white' : 'text-slate-900'
              }`}>
                <AnimatedNumber value={count} duration={1500} />
              </h4>
              <div className={`mt-2 px-3 py-1 rounded-full text-[9px] font-black tracking-widest uppercase border ${
                selectedRegion === region ? 'bg-white/10 border-white/20 text-white' : 'bg-slate-50 border-transparent text-slate-400'
              }`}>
                Active Centers
              </div>
            </button>
          ))}
          
          {/* 전체 통계 요약 카드 (마지막 슬롯) */}
          <div className="p-10 rounded-[3.5rem] bg-slate-100/50 border border-transparent flex flex-col items-center justify-center text-center">
             <BarChart3 className="w-8 h-8 text-slate-300 mb-4" />
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-relaxed">
               전국 네트워크<br/>실시간 가동 현황
             </p>
          </div>
        </div>

        {/* 하단 풋노트 */}
        <div className="flex flex-col items-center gap-4 mt-8 reveal">
           <div className="h-px w-20 bg-slate-200"></div>
           <p className="text-[12px] font-bold text-slate-300 tracking-tighter">
             아크헬스케어의 파트너십은 매월 엄격한 심사를 통해 갱신됩니다.
           </p>
        </div>
      </div>
    </div>
  );
};

export default NetworkMap;
