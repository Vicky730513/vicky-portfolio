"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [toast, setToast] = useState("");

  // 保留：获取本地数据逻辑
  useEffect(() => {
    fetch('/data/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("加载数据失败", err));
  }, []);

  // 保留：剪贴板功能
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setToast("已复制到剪贴板");
    setTimeout(() => setToast(""), 2000);
  };

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] selection:bg-blue-100 font-sans">
      {/* 保留：iOS 风格 Toast 提示 */}
      {toast && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-gray-200 animate-in fade-in zoom-in duration-300">
          <span className="text-sm font-medium">{toast}</span>
        </div>
      )}

      {/* 升级版 Hero Section - 融入你的银色金属感大片 */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* 背景层：使用你的金属大片 */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-110"
          style={{ 
            backgroundImage: `url('https://i.postimg.cc/SRWYnwxr/44.png')`, // 请填入你上传后的链接
          }}
        />
        
        {/* 蒙版层：增加一点磨砂感，确保文字清晰 */}
        <div className="absolute inset-0 z-10 bg-white/10 backdrop-blur-[2px]" />
        
        {/* 内容层：保留你原有的排版逻辑，但改为悬浮感 */}
        <div className="relative z-20 max-w-4xl w-full mx-6 p-8 md:p-16 bg-white/20 backdrop-blur-2xl rounded-[40px] border border-white/30 shadow-2xl animate-in slide-in-from-bottom-12 fade-in duration-1000">
          
          <div className="text-left space-y-8">
            <p className="text-blue-600 font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase opacity-90">
              Visual Designer Portfolio
            </p>

            <h1 className="text-4xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tighter">
              Hi there, <br />
              <span className="text-gray-300 font-light italic">我是</span> 刘伟琪-Vicky
            </h1>

            <p className="text-lg md:text-2xl text-gray-800/80 font-light leading-relaxed max-w-2xl">
              很幸运在这里分享我的作品集，<br />
              <span className="text-gray-900 font-medium">希望其中蕴含的创意，能触动你的视觉。</span>
            </p>

            <div className="pt-10 flex items-center gap-6">
              <div className="w-16 h-[1px] bg-gray-900/20"></div>
              <p className="text-xs md:text-sm text-gray-500 font-light tracking-[0.1em] italic">
                Last but not least, 希望你有美好的一天。
              </p>
            </div>
          </div>

          {/* 向下滚动提示 */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30">
            <div className="w-[1px] h-10 bg-gray-900 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Projects Section 项目展示区 - 保持原样 */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100">
              <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                <img 
                  src={project.coverImage} 
                  alt={project.name} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                />
              </div>
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

      <footer className="py-20 text-center text-gray-400 text-[10px] tracking-[0.3em]">
        &copy; 2026 VICKY PORTFOLIO. DESIGNED WITH PASSION.
      </footer>
    </main>
  );
}
