
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { NAVIGATION } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const TALLY_URL = "https://tally.so/r/9q9xA1";

  const closeMenu = () => {
    setIsOpen(false);
    setActiveSubMenu(null);
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // 네비게이션 바 높이만큼 오프셋
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      closeMenu();
    }
  };

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); closeMenu(); }} 
              className="flex items-center gap-3 group"
            >
              <img 
                src="https://i.imgur.com/VF5wN7p.png" 
                alt="ARK Healthcare" 
                className="h-9 md:h-11 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <span className="text-2xl md:text-3xl font-black tracking-tighter flex items-center gap-1 text-[#3285E8]">
                ARK <span className="text-gray-900 font-light opacity-30 uppercase">HEALTHCARE</span>
              </span>
            </a>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center space-x-10">
              {NAVIGATION.map((item) => (
                <div 
                  key={item.name} 
                  className="relative group py-2"
                  onMouseEnter={() => setActiveSubMenu(item.name)}
                  onMouseLeave={() => setActiveSubMenu(null)}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className={`text-[17px] font-bold flex items-center gap-1 transition-colors duration-300 ${
                      scrolled ? 'text-gray-500 hover:text-[#3285E8]' : 'text-gray-600 hover:text-[#3285E8]'
                    }`}
                  >
                    {item.name}
                    {item.subItems && <ChevronDown className="w-4 h-4 opacity-40 group-hover:rotate-180 transition-transform" />}
                  </a>
                  
                  {item.subItems && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 min-w-[200px]">
                        <div className="space-y-3">
                          {item.subItems.map((sub) => (
                            <a 
                              key={sub.name} 
                              href={sub.href}
                              onClick={(e) => handleScrollTo(e, sub.href)}
                              className="block text-base font-semibold text-gray-500 hover:text-[#3285E8] transition-colors"
                            >
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <a
                href={TALLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#3285E8] text-white px-7 py-3.5 rounded-xl text-lg font-bold flex items-center gap-2 hover:bg-blue-600 transition-all shadow-none"
              >
                상담신청 <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-[64px] bg-white z-[90] transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 space-y-6 h-full overflow-y-auto">
          {NAVIGATION.map((item) => (
            <div key={item.name} className="space-y-4">
              <div className="w-full flex justify-between items-center">
                <a 
                  href={item.href} 
                  onClick={(e) => handleScrollTo(e, item.href)} 
                  className="text-2xl font-bold text-gray-800"
                >
                  {item.name}
                </a>
                {item.subItems && (
                  <button onClick={() => setActiveSubMenu(activeSubMenu === item.name ? null : item.name)}>
                    <ChevronDown className={`w-6 h-6 transition-transform ${activeSubMenu === item.name ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>
              {item.subItems && activeSubMenu === item.name && (
                <div className="pl-5 space-y-4 border-l-2 border-gray-100 ml-1">
                  {item.subItems.map((sub) => (
                    <a 
                      key={sub.name} 
                      href={sub.href} 
                      onClick={(e) => handleScrollTo(e, sub.href)}
                      className="block text-xl font-semibold text-gray-400 hover:text-[#3285E8]"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href={TALLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="block w-full bg-[#3285E8] text-white py-5 rounded-2xl font-bold text-xl text-center shadow-none"
          >
            지금 바로 상담 신청
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
