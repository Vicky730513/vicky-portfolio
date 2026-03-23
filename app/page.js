"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [toast, setToast] = useState("");

  // 获取本地数据
  useEffect(() => {
    fetch('/data/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("加载数据失败", err));
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setToast("已复制到剪贴板");
    setTimeout(() => setToast(""), 2000);
  };

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] selection:bg-blue-100 font-sans">
      {/* iOS 风格 Toast 提示 */}
      {toast && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-gray-200 animate-in fade-in zoom-in duration-300">
          <span className="text-sm font-medium">{toast}</span>
        </div>
      )}

      {/* Hero Section 第一屏 */}
      <section className="h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* 背景光斑动画 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50 opacity-60 animate-pulse" style={{ animationDuration: '10s' }} />
        
        <div className="relative z-10 max-w-3xl w-full p-12 bg-white/40 backdrop-blur-2xl rounded-[32px] border border-white/40 shadow-2xl animate-in slide-in-from-bottom-12 fade-in duration-1000">
          <h1 className="text-2xl md:text-4xl font-semibold leading-snug tracking-tight text-gray-900">
            Hi there，我是Vicky。<br />
            很开心能和你分享我用AI做的小工具，希望可以帮助到你。<br />
            Last but not least，希望你有美好的一天。
          </h1>
          <div className="mt-16 flex flex-col items-center animate-bounce opacity-30">
            <span className="text-[10px] uppercase tracking-[0.2em] mb-2">Scroll to explore</span>
            <div className="w-[1px] h-12 bg-gray-400"></div>
          </div>
        </div>
      </section>

      {/* Projects Section 项目展示区 */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100">
              {/* 项目封面图 */}
              <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                <img 
                  src={project.coverImage} 
                  alt={project.name} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* 项目信息 */}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed h-10 line-clamp-2">{project.tagline}</p>
                
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => copyToClipboard(project.promptText)}
                    className="w-full py-3.5 bg-[#0071E3] text-white rounded-full text-sm font-medium hover:bg-[#0077ED] active:scale-[0.98] transition-all"
                  >
                    复制 Prompt
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="py-3 bg-gray-50 rounded-full text-sm font-medium hover:bg-gray-100 active:scale-[0.98] transition-all text-center"
                    >
                      Github
                    </button>
                    <button 
                      onClick={() => window.open(project.geminiShareUrl, '_blank')}
                      className="py-3 bg-gray-50 rounded-full text-sm font-medium hover:bg-gray-100 active:scale-[0.98] transition-all text-center"
                    >
                      Gemini 项目
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-20 text-center text-gray-400 text-xs tracking-widest">
        &copy; 2026 VICKY PORTFOLIO. MADE WITH AI.
      </footer>
    </main>
  );
}
