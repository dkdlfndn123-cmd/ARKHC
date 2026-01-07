
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import GradeTest from './components/GradeTest';
import B2BSolution from './components/B2BSolution';
import VisitCare from './components/VisitCare';
import CognitiveShowcase from './components/CognitiveShowcase';
import { 
  Star,
  PhoneCall,
  MapPin,
  Instagram,
  Youtube,
  Facebook,
  Mail,
  Phone
} from 'lucide-react';

const App: React.FC = () => {
  const TALLY_URL = "https://tally.so/r/9q9xA1";

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden font-pretendard">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* B2C 시니어케어: 방문요양 & 급여 안내 */}
        <section id="b2c" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-50 overflow-hidden scroll-mt-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center space-y-8 md:space-y-12 mb-24 md:mb-32 max-w-4xl mx-auto reveal">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue-100/50 text-[#3285E8] rounded-full font-black text-sm md:text-xl tracking-[0.2em] uppercase mx-auto">
                <Star className="w-5 h-5 md:w-6 md:h-6 fill-[#3285E8]" /> ARK Senior Care
              </div>
              <h2 className="text-5xl md:text-[88px] font-black text-gray-900 leading-[1.05] tracking-tighter">
                어르신을 위한<br />
                <span className="text-[#3285E8]">프리미엄 맞춤 돌봄</span>
              </h2>
            </div>
            <VisitCare />
          </div>
        </section>

        {/* 등급 모의평가: 아키 AI 상담 */}
        <section id="grade-test" className="reveal scroll-mt-20">
          <GradeTest />
        </section>

        {/* 인지 특화 시리즈: 워크북 쇼케이스 */}
        <section id="b2c-cognitive" className="reveal scroll-mt-20">
          <CognitiveShowcase />
        </section>

        {/* B2B 파트너 솔루션: 멤버십 & AI ERP */}
        <section id="b2b" className="reveal scroll-mt-20">
          <B2BSolution />
        </section>

        {/* 아크 소개: 비전 & 히스토리 */}
        <section id="about" className="reveal scroll-mt-20">
          <About />
        </section>

        {/* 하단 CTA 섹션 */}
        <section id="contact" className="py-32 md:py-60 bg-[#1A365D] text-center relative overflow-hidden px-4 reveal">
          <div className="max-w-6xl mx-auto space-y-16 md:space-y-24 relative z-10 text-white">
            <h3 className="text-5xl md:text-[100px] font-black leading-[1.05] tracking-tight">
              부모님을 위한<br />
              단 하나의 <span className="text-blue-400 uppercase">Ark</span>
            </h3>
            <div className="flex justify-center pt-8">
              <a 
                href={TALLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-16 py-8 md:px-24 md:py-12 bg-[#3285E8] text-white rounded-[2.5rem] md:rounded-[3.5rem] font-black text-2xl md:text-4xl hover:bg-blue-600 transition-all shadow-2xl flex items-center justify-center gap-6 mx-auto animate-float active:scale-95"
              >
                상담 1551-2519 <PhoneCall className="w-10 h-10 md:w-14 md:h-14" />
              </a>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-[#3285E8] rounded-full blur-[300px] opacity-10 -mr-96 -mt-96"></div>
        </section>
      </main>

      <footer className="bg-gray-950 text-gray-500 py-32 md:py-48 px-10 reveal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20 mb-32 text-center md:text-left">
          <div className="space-y-12 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-4">
              <img src="https://i.imgur.com/VF5wN7p.png" alt="ARK" className="h-10 w-auto brightness-0 invert opacity-90" />
              <span className="text-3xl font-black text-white uppercase tracking-tighter">Ark <span className="opacity-30 font-light tracking-widest">Healthcare</span></span>
            </div>
            <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-xs">시니어 헬스케어의 미래를<br />데이터로 증명합니다.</p>
            <div className="flex gap-6">
              {[Instagram, Youtube, Facebook].map((Icon, idx) => (
                <div key={idx} className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#3285E8] text-gray-400 hover:text-white transition-all cursor-pointer">
                  <Icon className="w-7 h-7" />
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block space-y-10">
            <h5 className="text-white font-black text-xl uppercase tracking-widest">About Us</h5>
            <ul className="space-y-5 text-lg font-bold">
              <li className="hover:text-blue-400 cursor-pointer transition-colors">기업 이념</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">히스토리</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">CI/BI</li>
            </ul>
          </div>
          <div className="hidden md:block space-y-10">
            <h5 className="text-white font-black text-xl uppercase tracking-widest">Our Service</h5>
            <ul className="space-y-5 text-lg font-bold">
              <li className="hover:text-blue-400 cursor-pointer transition-colors">방문요양</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">인지프로그램</li>
              <li className="hover:text-blue-400 cursor-pointer transition-colors">등급판정</li>
            </ul>
          </div>
          <div className="space-y-10">
            <h5 className="text-white font-black text-xl uppercase tracking-widest">Quick Contact</h5>
            <div className="space-y-6 text-base md:text-xl font-medium flex flex-col items-center md:items-start">
              <div className="flex items-start gap-4"><MapPin className="w-6 h-6 text-blue-500 shrink-0 mt-1" /><span>서울 금천구 디지털로10길 78</span></div>
              <div className="flex items-center gap-4"><Phone className="w-6 h-6 text-blue-500 shrink-0" /><span>1551-2519</span></div>
              <div className="flex items-center gap-4"><Mail className="w-6 h-6 text-blue-500 shrink-0" /><span>info@arkhc.kr</span></div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-black tracking-[0.4em] uppercase opacity-30">
          <p>© 2024 ARK Healthcare. All Rights Reserved.</p>
          <div className="flex gap-10"><span>Terms of Use</span><span>Privacy Policy</span></div>
        </div>
      </footer>
    </div>
  );
};

export default App;
