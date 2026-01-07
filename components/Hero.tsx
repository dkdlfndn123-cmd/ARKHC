
import React from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden bg-white px-4 md:px-0">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105 animate-[pulse-soft_10s_ease-in-out_infinite]"
          poster="https://i.imgur.com/RBmzRMn.png"
        >
          <source src="https://i.imgur.com/bntI2mg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white/95"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="max-w-4xl space-y-8 md:space-y-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-blue-100 text-[#3285E8] text-sm md:text-base font-black shadow-sm animate-[reveal-up_1s_ease-out]">
            <Sparkles className="w-4 h-4" />
            <span className="tracking-tight">AI 시니어 헬스케어의 새로운 표준</span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl md:text-8xl font-black text-gray-900 leading-[1.08] tracking-tighter animate-[reveal-up_1.2s_ease-out_0.2s_both]">
              기술로 지키는<br />
              따뜻한 <span className="text-[#3285E8]">돌봄의 방주</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 font-bold max-w-2xl mx-auto leading-relaxed animate-[reveal-up_1.2s_ease-out_0.4s_both] tracking-tight">
              어르신의 평안한 노후를 위한<br className="md:hidden" /> 데이터 기반의 정밀하고 따뜻한 케어 솔루션
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 w-full sm:w-auto px-4 pt-6 animate-[reveal-up_1.2s_ease-out_0.6s_both]">
            <a 
              href="#grade-test"
              className="px-10 py-5 md:px-12 md:py-6 bg-[#3285E8] text-white rounded-2xl font-black text-lg md:text-xl hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-200 hover:scale-105 active:scale-95"
            >
              등급 모의평가 <ChevronRight className="w-5 h-5" />
            </a>
            <a 
              href="#b2b"
              className="px-10 py-5 md:px-12 md:py-6 bg-white/95 backdrop-blur-md text-gray-700 border border-gray-200 rounded-2xl font-black text-lg md:text-xl hover:bg-white transition-all flex items-center justify-center gap-2 shadow-sm hover:scale-105 active:scale-95"
            >
              파트너십 문의
            </a>
          </div>

          <div className="flex flex-col items-center gap-3 pt-12 animate-[reveal-up_1.2s_ease-out_0.8s_both]">
            <div className="text-sm md:text-lg font-bold text-gray-400 tracking-tight">
              <span className="text-[#3285E8] font-black">1,200+</span> 가정이 이미 아크와 함께하고 있습니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
