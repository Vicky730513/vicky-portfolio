"use client";
import { useState } from 'react';

// 直接在这里定义你的四大类目数据，彻底解决路径 404 问题
const projectsData = [
  {
    "id": 1,
    "name": "品牌全案与视觉识别 (Brand Identity)",
    "tagline": "【视觉语言】极简主义美学，构建品牌系统化核心识别。",
    "coverImage": "https://i.postimg.cc/qvTBNRNn/wei-biao-ti-1-kan-tu-wang.png",
    "promptText": "立足于品牌资产的系统化构建。通过深度解构行业属性，展现视觉语言在多维度媒介中的高度一致性与商业溢价力。",
    "githubUrl": "https://github.com/Vicky730513/vicky-portfolio",
    "geminiShareUrl": "https://ai.studio"
  },
  {
    "id": 2,
    "name": "多维包装工程设计 (Advanced Packaging)",
    "tagline": "【感官美学】深耕 Eco-Luxury 材质逻辑，赋予产品第二生命力。",
    "coverImage": "https://i.postimg.cc/FsnwYFT4/wei-biao-ti-1.png",
    "promptText": "从特种纸礼盒到环保可持续包装。结合结构设计与材料感官，在 3D 渲染与实物落地间寻找商业溢价的平衡点。",
    "githubUrl": "https://github.com/Vicky730513/vicky-portfolio",
    "geminiShareUrl": "https://ai.studio"
  },
  {
    "id": 3,
    "name": "电商转化与视觉营销 (E-commerce Lab)",
    "tagline": "【转化驱动】高转化率视觉构图与场景建模，精准驱动决策逻辑。",
    "coverImage": "https://i.postimg.cc/MGBMjTxK/wei-biao-ti-1.png",
    "promptText": "利用 3D 精准建模与超现实光影重构，缩短消费者的心理决策链路，构建极致的信任感与品牌视觉吸引力。",
    "githubUrl": "https://github.com/Vicky730513/vicky-portfolio",
    "geminiShareUrl": "https://ai.studio"
  },
  {
    "id": 4,
    "name": "概念创新与 AI 视觉实验 (AIGC Lab)",
    "tagline": "【前沿探索】超现实主义风格，利用 AIGC 探索视觉叙事的边界。",
    "coverImage": "https://i.postimg.cc/HLJMTzVs/wei-biao-ti-1.png",
    "promptText": "探索设计与 AI 的交互边界，展示如何通过 Prompt 驱动高精度的商业级视觉资产生成，赋能未来品牌沟通。",
    "githubUrl": "https://github.com/Vicky730513/vicky-portfolio",
    "geminiShareUrl": "https://ai.studio"
  }
];

export default function Home() {
  const [toast, setToast] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setToast("已复制到剪贴板");
    setTimeout(() => setToast(""), 2000);
  };

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] selection:bg-blue-100 font-sans">
      {/* Toast 提示 */}
      {toast && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-gray-200">
          <span className="text-sm font-medium">{toast}</span>
        </div>
      )}

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* 这里请务必再次检查你的背景图链接是否有效 */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-110"
          style={{ 
            backgroundImage: "url('https://i.postimg.cc/SRWYnwxr/44.png')" 
          }}
        />
        
        <div className="absolute inset-0 z-10 bg-white/10 backdrop-blur-[2px]" />
        
        <div className="relative z-20 max-w-4xl w-full mx-6 p-8 md:p-16 bg-white/20 backdrop-blur-2xl rounded-[40px] border border-white/30 shadow-2xl">
          <div className="text-left space-y-8">
            <p className="text-blue-600 font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase opacity-90">
              Visual Designer Portfolio
            </p>
            <h1 className="text-4xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tighter">
              Hi there, <br />
              <span className="text-gray-300 font-light italic">我是</span> 刘伟琪-Vicky
            </h1>
            <p className="text-lg md:text-2xl text-gray-800 font-light leading-relaxed max-w-2xl">
              很幸运在这里分享我的作品集，<br />
              <span className="text-gray-900 font-medium">希望其中蕴含的创意，能触动你的视觉。</span>
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
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
                    className="w-full py-3.5 bg-[#0071E3] text-white rounded-full text-sm font-medium hover:bg-[#0077ED] transition-all"
                  >
                    复制设计理念
                  </button>
                  <div className="grid grid-cols-2 gap-3">
                    <button onClick={() => window.open(project.githubUrl, '_blank')} className="py-3 bg-gray-50 rounded-full text-sm font-medium hover:bg-gray-100 transition-all text-center">Github</button>
                    <button onClick={() => window.open(project.geminiShareUrl, '_blank')} className="py-3 bg-gray-50 rounded-full text-sm font-medium hover:bg-gray-100 transition-all text-center">Gemini</button>
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
