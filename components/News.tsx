
import React from 'react';
import { ArrowUpRight, Calendar } from 'lucide-react';

const NEWS_DATA = [
  {
    category: 'Investment',
    title: '아크헬스케어, 카이스트청년창업투자지주로부터 시드 투자 유치',
    date: '2025.08.14',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=800&auto=format&fit=crop'
  },
  {
    category: 'Expansion',
    title: "'아크시니어케어 서울남산센터' 개소 - 직영 3호점 거점 확대",
    date: '2025.07.22',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop'
  },
  {
    category: 'Award',
    title: "창업진흥원 '예비창업패키지' 최우수 기업 선정 및 중기부 장관상 후보",
    date: '2025.01.10',
    image: 'https://images.unsplash.com/photo-1578574515323-c3c8992442e1?q=80&w=800&auto=format&fit=crop'
  }
];

const News: React.FC = () => {
  return (
    <section id="news" className="py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
          <div className="space-y-6">
            <h4 className="text-[#3285E8] font-black text-2xl tracking-[0.3em] uppercase">Press & Media</h4>
            <h3 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
              시니어 헬스케어의<br />
              <span className="text-[#3285E8]">새로운 기록</span>
            </h3>
          </div>
          <button className="flex items-center gap-3 text-2xl font-black text-gray-400 hover:text-[#3285E8] transition-colors group">
            전체 소식 보기 <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          {NEWS_DATA.map((news, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative h-[400px] rounded-[3rem] overflow-hidden mb-8 shadow-xl">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-8 left-8">
                  <span className="px-6 py-2 bg-white/90 backdrop-blur-md rounded-full text-[#3285E8] font-black text-sm uppercase tracking-widest shadow-sm">
                    {news.category}
                  </span>
                </div>
              </div>
              <div className="px-6 space-y-4">
                <div className="flex items-center gap-2 text-gray-400 font-bold">
                  <Calendar className="w-5 h-5" />
                  <span>{news.date}</span>
                </div>
                <h4 className="text-2xl font-black text-gray-900 leading-snug group-hover:text-[#3285E8] transition-colors">
                  {news.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership CTA (Integrated into News) */}
        <div className="mt-32 p-16 bg-[#1A365D] rounded-[3.5rem] flex flex-col lg:flex-row items-center justify-between gap-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
          <div className="space-y-4 relative z-10">
            <h4 className="text-4xl font-black leading-tight">아크와 함께 시니어 헬스케어의<br />혁신을 이끌어갈 파트너를 찾습니다.</h4>
            <p className="text-xl text-blue-200/60 font-medium">홍보 협력 및 보도자료 문의 : pr@arkhc.kr</p>
          </div>
          <button className="px-12 py-6 bg-[#3285E8] text-white rounded-[2rem] font-black text-xl hover:bg-blue-600 transition-all shadow-2xl relative z-10">
            제휴 문의하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
