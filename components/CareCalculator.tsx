
import React, { useState, useEffect } from 'react';
import { 
  AlertCircle, 
  Calculator, 
  Info, 
  ArrowRight,
  CalendarDays,
  Clock4,
  CircleDollarSign,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Wallet
} from 'lucide-react';

// --- 1. 데이터 정의 ---
const VISITING_GRADE_LIMITS: Record<number, number> = {
  1: 2512900,
  2: 2331200,
  3: 1528200,
  4: 1409700,
  5: 1208900,
};

const VISITING_SERVICE_RATES: Record<number, number> = {
  180: 57020, // 3시간
  240: 70080, // 4시간
};

const COPAY_RATES = [
  { label: '일반 (15%)', value: 0.15 },
  { label: '경감 (9%)', value: 0.09 },
  { label: '경감 (6%)', value: 0.06 },
  { label: '기초 (0%)', value: 0 },
];

const FAMILY_CALC_DATA: any = {
  60: {
    gross: { workDays: 20, payPerSession: 22000, totalPay: 440000, bathPay: 84000, grossSalary: 524000 },
    deductions: {
      0.15: { coPayment: -106020, insurance: -4300 },
      0.09: { coPayment: -63616,  insurance: -4300 },
      0.06: { coPayment: -42404,  insurance: -4300 },
      0:    { coPayment: 0,       insurance: -4300 }
    }
  },
  90: {
    gross: { workDays: 31, payPerSession: 31000, totalPay: 961000, bathPay: 84000, grossSalary: 1045000 },
    deductions: {
      0.15: { coPayment: -188718, insurance: -8850 },
      0.09: { coPayment: -113237, insurance: -8850 },
      0.06: { coPayment: -75481,  insurance: -8850 },
      0:    { coPayment: 0,       insurance: -8850 }
    }
  }
};

const CareCalculator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'visiting' | 'family'>('visiting');

  // --- 방문요양 상태 ---
  const [vGrade, setVGrade] = useState(4);
  const [vCopayRate, setVCopayRate] = useState(0.15);
  const [vDuration, setVDuration] = useState(180);
  const [vDays, setVDays] = useState(20);
  const [vResult, setVResult] = useState({
    limit: 0, total: 0, user: 0, gov: 0, remain: 0, isOver: false
  });

  // --- 가족요양 상태 ---
  const [fDuration, setFDuration] = useState(60);
  const [fCopayRate, setFCopayRate] = useState(0.15);

  const TALLY_URL = "https://tally.so/r/9q9xA1";

  useEffect(() => {
    if (vGrade === 5) {
      if (vDuration === 240) setVDuration(180);
      if (vDays === 24) setVDays(20);
    }
  }, [vGrade]);

  useEffect(() => {
    const limit = VISITING_GRADE_LIMITS[vGrade];
    const rate = VISITING_SERVICE_RATES[vDuration] || 0;
    const totalCost = rate * vDays;
    const costWithinLimit = Math.min(totalCost, limit);
    const costExceedingLimit = Math.max(0, totalCost - limit);
    const userCost = Math.floor(costWithinLimit * vCopayRate) + costExceedingLimit;
    const govCost = costWithinLimit - Math.floor(costWithinLimit * vCopayRate);
    setVResult({
      limit, total: totalCost, user: userCost, gov: govCost,
      remain: limit - costWithinLimit, isOver: totalCost > limit
    });
  }, [vGrade, vCopayRate, vDuration, vDays]);

  const formatCurrency = (amount: number, sizeClass: string = 'text-lg') => {
    const formatted = new Intl.NumberFormat('ko-KR').format(Math.round(amount));
    return (
      <span className={`inline-flex items-baseline gap-0.5 whitespace-nowrap ${sizeClass}`}>
        <span className="font-black">{formatted}</span>
        <span className="text-[0.7em] font-bold opacity-70">원</span>
      </span>
    );
  };

  const fData = FAMILY_CALC_DATA[fDuration];
  const fGross = fData.gross;
  const fDeduc = fData.deductions[fCopayRate];
  const fNetSalary = fGross.grossSalary + fDeduc.coPayment + fDeduc.insurance;

  return (
    <div className="w-full bg-white rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(26,54,93,0.12)] overflow-hidden border border-gray-100 max-w-7xl mx-auto">
      {/* 1. 컨트롤 패널 헤더 */}
      <div className="bg-[#1A365D] text-white p-8 md:p-12 border-b border-white/5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-[#3285E8] rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/20 shrink-0 transform -rotate-3">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-3 py-0.5 bg-blue-500/30 text-blue-300 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap">Simulation</span>
                <h3 className="text-3xl md:text-4xl font-black tracking-tight whitespace-nowrap">급여 계산기</h3>
              </div>
              <p className="text-blue-100/50 text-base md:text-lg font-bold">정부지원금을 제외한 실제 금액을 확인하세요.</p>
            </div>
          </div>

          <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/10 w-full lg:w-auto shrink-0">
            <button
              onClick={() => setActiveTab('visiting')}
              className={`flex-1 lg:flex-none px-8 py-4 text-lg font-black rounded-xl transition-all duration-300 ${
                activeTab === 'visiting' ? 'bg-white text-[#1A365D] shadow-xl' : 'text-white/40 hover:text-white'
              }`}
            >
              방문요양
            </button>
            <button
              onClick={() => setActiveTab('family')}
              className={`flex-1 lg:flex-none px-8 py-4 text-lg font-black rounded-xl transition-all duration-300 ${
                activeTab === 'family' ? 'bg-white text-[#1A365D] shadow-xl' : 'text-white/40 hover:text-white'
              }`}
            >
              가족요양
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {activeTab === 'visiting' ? (
          <>
            <div className="lg:w-[65%] p-8 md:p-14 space-y-12 bg-white">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-50 text-[#3285E8] rounded-lg flex items-center justify-center font-black text-sm shrink-0">1</div>
                    <h4 className="text-xl font-black text-gray-900 whitespace-nowrap">어르신 등급</h4>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {[1, 2, 3, 4, 5].map((g) => (
                      <button
                        key={g}
                        onClick={() => setVGrade(g)}
                        className={`group relative py-2.5 rounded-lg transition-all border-2 ${
                          vGrade === g 
                          ? 'bg-[#3285E8] border-[#3285E8] text-white shadow-lg font-bold text-base' 
                          : 'bg-gray-50 border-transparent text-gray-400 hover:border-gray-200 font-medium text-sm'
                        }`}
                      >
                        {g}등급
                      </button>
                    ))}
                  </div>
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                    <span className="text-gray-400 font-bold text-base whitespace-nowrap">정부 지원 한도액</span>
                    <span className="text-xl font-black text-[#3285E8] tracking-tight">{formatCurrency(vResult.limit, 'text-lg')}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-50 text-[#3285E8] rounded-lg flex items-center justify-center font-black text-sm shrink-0">2</div>
                    <h4 className="text-xl font-black text-gray-900 whitespace-nowrap">본인부담률</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {COPAY_RATES.map((rate) => (
                      <button
                        key={rate.value}
                        onClick={() => setVCopayRate(rate.value)}
                        className={`py-4 px-3 rounded-xl font-black text-base transition-all border-2 whitespace-nowrap ${
                          vCopayRate === rate.value 
                          ? 'bg-white border-[#3285E8] text-[#3285E8] shadow-md ring-2 ring-blue-50' 
                          : 'bg-gray-50 border-transparent text-gray-400 hover:bg-gray-100'
                        }`}
                      >
                        {rate.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-gray-100 space-y-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-50 text-[#3285E8] rounded-lg flex items-center justify-center font-black text-sm shrink-0">3</div>
                  <h4 className="text-xl font-black text-gray-900 whitespace-nowrap">서비스 이용 계획</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 whitespace-nowrap">
                      <Clock4 className="w-4 h-4" /> 일일 요양 시간
                    </label>
                    <div className="flex gap-3 p-1.5 bg-gray-50 rounded-2xl border border-gray-100">
                      {[180, 240].map((t) => {
                        const isDisabled = vGrade === 5 && t === 240;
                        return (
                          <button
                            key={t}
                            onClick={() => !isDisabled && setVDuration(t)}
                            disabled={isDisabled}
                            className={`flex-1 py-4 rounded-xl font-black text-lg transition-all whitespace-nowrap ${
                              isDisabled ? 'opacity-20 cursor-not-allowed bg-transparent' :
                              vDuration === t ? 'bg-white text-[#3285E8] shadow-sm' : 'text-gray-400 hover:text-gray-600'
                            }`}
                          >
                            {t === 180 ? '3시간' : '4시간'}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 whitespace-nowrap">
                      <CalendarDays className="w-4 h-4" /> 한 달 이용 일수
                    </label>
                    <div className="flex gap-3 p-1.5 bg-gray-50 rounded-2xl border border-gray-100">
                      {[20, 24].map((d) => {
                        const isDisabled = vGrade === 5 && d === 24;
                        return (
                          <button
                            key={d}
                            onClick={() => !isDisabled && setVDays(d)}
                            disabled={isDisabled}
                            className={`flex-1 py-4 rounded-xl font-black text-lg transition-all whitespace-nowrap ${
                              isDisabled ? 'opacity-20 cursor-not-allowed bg-transparent' :
                              vDays === d ? 'bg-white text-[#3285E8] shadow-sm' : 'text-gray-400 hover:text-gray-600'
                            }`}
                          >
                            {d}일
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-[35%] bg-slate-50/70 p-8 md:p-14 border-l border-gray-100 flex flex-col justify-between">
              <div className="space-y-8">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="text-lg font-black text-gray-900 whitespace-nowrap">상세 정산 내역</h5>
                  <span className="text-blue-500 font-bold bg-blue-50 px-3 py-0.5 rounded-full text-[10px] shrink-0 whitespace-nowrap">실시간 반영</span>
                </div>
                <div className="space-y-4 bg-white p-7 rounded-[2rem] border border-gray-100 shadow-sm">
                  <div className="flex justify-between items-center group gap-4">
                    <span className="text-gray-400 font-bold text-base group-hover:text-gray-900 transition-colors whitespace-nowrap">총 이용 요금</span>
                    <span className="text-gray-900 font-black text-base">{formatCurrency(vResult.total, 'text-base')}</span>
                  </div>
                  <div className="flex justify-between items-center group gap-4">
                    <span className="text-emerald-500 font-bold text-base flex items-center gap-2 whitespace-nowrap">
                      <Zap className="w-3.5 h-3.5" /> 국가 지원금
                    </span>
                    <span className="text-emerald-500 font-black text-base">-{formatCurrency(vResult.gov, 'text-base')}</span>
                  </div>
                  
                  {vResult.isOver && (
                    <div className="p-4 bg-rose-50 rounded-xl border border-rose-100 text-[11px] text-rose-600 font-black flex gap-3 items-start animate-pulse leading-tight">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <div>정부 한도액 {formatCurrency(vResult.total - vResult.limit, 'text-xs')} 초과<br/><span className="opacity-70">(초과분은 전액 보호자 부담)</span></div>
                    </div>
                  )}

                  <div className="pt-4 mt-4 border-t border-gray-100 flex justify-between items-center group gap-4">
                    <span className="text-gray-400 font-bold text-[13px] whitespace-nowrap">잔여 한도액</span>
                    <span className={`text-base font-black ${vResult.remain < 0 ? 'text-rose-400' : 'text-gray-700'}`}>
                      {vResult.remain < 0 ? '0원' : formatCurrency(vResult.remain, 'text-base')}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-10 space-y-6">
                <div className="bg-[#3285E8] p-8 md:p-10 rounded-[2.5rem] text-white text-center shadow-2xl shadow-blue-500/30 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                  <p className="text-blue-100/70 font-black uppercase tracking-widest text-[11px] mb-2 whitespace-nowrap">실제 납부 예상 본인부담금</p>
                  <h5 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 whitespace-nowrap">{formatCurrency(vResult.user, 'text-4xl md:text-5xl')}</h5>
                  <a 
                    href={TALLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-5 bg-white text-[#1A365D] rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-blue-50 transition-all shadow-xl hover:scale-[1.02] active:scale-95 whitespace-nowrap"
                  >
                    방문요양 상담신청 <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
                <div className="flex items-center gap-2 justify-center text-gray-400 text-xs font-bold text-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> <span className="whitespace-nowrap">전문 상담사가 상세히 안내해 드립니다.</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="lg:w-[65%] p-8 md:p-14 space-y-12 bg-white">
              <div className="space-y-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-50 text-[#3285E8] rounded-lg flex items-center justify-center font-black text-sm shrink-0">1</div>
                    <h4 className="text-xl font-black text-gray-900 whitespace-nowrap">하루 요양 시간 선택</h4>
                  </div>
                  <span className="self-start md:self-auto text-[10px] font-black text-[#3285E8] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 whitespace-nowrap tracking-tight uppercase">2026년 급여 기준</span>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  {[60, 90].map((t) => (
                    <button
                      key={t}
                      onClick={() => setFDuration(t)}
                      className={`relative py-4 md:py-6 rounded-[1.5rem] font-black text-3xl transition-all border-4 flex items-baseline justify-center gap-1 ${
                        fDuration === t 
                        ? 'bg-white border-[#3285E8] text-[#3285E8] shadow-xl scale-105' 
                        : 'bg-gray-50 border-transparent text-gray-300 hover:bg-gray-100 hover:text-gray-400'
                      }`}
                    >
                      {t}<span className="text-base font-bold">분</span>
                    </button>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: '한달 근무 횟수', value: <span>{fGross.workDays}회</span>, icon: <CalendarDays className="w-4 h-4" /> },
                    { label: '1회 가족요양급여', value: formatCurrency(fGross.payPerSession, 'text-base'), icon: <CircleDollarSign className="w-4 h-4" /> },
                    { label: '월 기본 급여액', value: formatCurrency(fGross.totalPay, 'text-base'), icon: <Wallet className="w-4 h-4" /> },
                    { label: '목욕 추가 수당', value: <span className="flex items-baseline">+{formatCurrency(fGross.bathPay, 'text-base')}</span>, icon: <CheckCircle2 className="w-4 h-4" /> }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col gap-1.5 min-w-0">
                      <span className="text-[10px] font-black text-gray-400 uppercase flex items-center gap-1.5 whitespace-nowrap overflow-hidden">
                        <span className="shrink-0">{item.icon}</span>
                        <span className="truncate">{item.label}</span>
                      </span>
                      <span className="text-base font-black text-gray-800 tracking-tight whitespace-nowrap overflow-hidden truncate">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-blue-50/50 rounded-[1.5rem] border border-blue-100 flex items-center justify-between shadow-inner gap-4 overflow-hidden">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#3285E8] shadow-sm shrink-0">
                      <Zap className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-black text-gray-700 whitespace-nowrap">총 급여 합계액 <span className="hidden sm:inline-block text-xs font-bold text-gray-400 ml-1">(세전)</span></span>
                  </div>
                  <span className="text-2xl font-black text-[#3285E8] shrink-0">{formatCurrency(fGross.grossSalary, 'text-2xl')}</span>
                </div>
              </div>

              <div className="pt-10 border-t border-gray-100 space-y-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-50 text-[#3285E8] rounded-lg flex items-center justify-center font-black text-sm shrink-0">2</div>
                  <h4 className="text-xl font-black text-gray-900 whitespace-nowrap">본인부담률 설정</h4>
                </div>
                <div className="grid grid-cols-4 gap-2.5 md:gap-3">
                  {[0.15, 0.09, 0.06, 0].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => setFCopayRate(rate)}
                      className={`py-4 rounded-xl font-black text-base transition-all border-2 whitespace-nowrap ${
                        fCopayRate === rate 
                        ? 'bg-white border-[#3285E8] text-[#3285E8] shadow-md ring-2 ring-blue-50 scale-105' 
                        : 'bg-gray-50 border-transparent text-gray-400 hover:border-gray-200'
                      }`}
                    >
                      {rate === 0 ? '기초' : `${Math.round(rate * 100)}%`}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-[35%] bg-slate-50/70 p-8 md:p-14 border-l border-gray-100 flex flex-col justify-between">
              <div className="space-y-8">
                <h5 className="text-xl font-black text-gray-900 flex items-center gap-2 whitespace-nowrap">
                  <Info className="w-5 h-5 text-[#3285E8] shrink-0" /> 급여 정산서
                </h5>
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-lg space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50/50 -mr-12 -mt-12 rounded-full pointer-events-none"></div>
                  <div className="space-y-5 relative z-10">
                    <div className="flex justify-between items-center group gap-4">
                      <span className="text-gray-400 font-bold text-base group-hover:text-gray-600 transition-colors flex items-center gap-2 whitespace-nowrap">
                        <Wallet className="w-4 h-4 shrink-0" /> 본인부담금
                      </span>
                      <span className="text-rose-500 font-black text-base whitespace-nowrap">-{formatCurrency(Math.abs(fDeduc.coPayment), 'text-base')}</span>
                    </div>
                    <div className="flex justify-between items-center group gap-4">
                      <span className="text-gray-400 font-bold text-base group-hover:text-gray-600 transition-colors flex items-center gap-2 whitespace-nowrap">
                        <ShieldCheck className="w-4 h-4 shrink-0" /> 고용보험료
                      </span>
                      <span className="text-rose-500 font-black text-base whitespace-nowrap">-{formatCurrency(Math.abs(fDeduc.insurance), 'text-base')}</span>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-dashed border-gray-200 flex flex-col gap-4">
                    <div className="flex items-start gap-2.5 text-[11px] font-bold text-[#3285E8] bg-blue-50/50 p-3.5 rounded-xl leading-relaxed">
                      <Info className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>센터 상황에 따라 실제 수령액은 차이가 발생할 수 있습니다.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 space-y-6">
                <div className="bg-[#1A365D] p-8 md:p-10 rounded-[2.5rem] text-white text-center shadow-2xl relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -mr-16 -mt-16 rounded-full blur-xl pointer-events-none"></div>
                  <div className="relative z-10">
                    <p className="text-blue-200/50 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 whitespace-nowrap">예상 실 수령액</p>
                    <h5 className="text-3xl md:text-4xl font-black tracking-tighter mb-10 whitespace-nowrap leading-none">{formatCurrency(fNetSalary, 'text-3xl md:text-4xl')}</h5>
                    <a 
                      href={TALLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-5 bg-[#3285E8] text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-xl hover:scale-[1.02] active:scale-95 whitespace-nowrap"
                    >
                      가족요양 1:1 상담 <ArrowRight className="w-5 h-5 shrink-0" />
                    </a>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-[11px] font-bold whitespace-nowrap overflow-hidden truncate">업계 최고 수준의 처우, 아크가 약속드립니다.</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CareCalculator;
