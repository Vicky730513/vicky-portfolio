"use client";
import { useState, useEffect } from 'react';

// 直接在这里定义数据，确保路径万无一失
const projectsData = [
  {
    "id": 1,
    "name": "品牌全案与视觉识别",
    "tagline": "【视觉语言】极简主义美学，构建品牌系统化核心识别。",
    "coverImage": "https://i.postimg.cc/qvTBNRNn/wei-biao-ti-1-kan-tu-wang.png", // 确保这是你的高清长图链接
    "description": "立足品牌资产系统化构建，解构行业属性，展现视觉语言高度一致性与商业溢价力。"
  },
  {
    "id": 2,
    "name": "高端礼盒包装系统",
    "tagline": "【感官美学】深耕 Eco-Luxury 材质逻辑，赋予产品第二生命力。",
    "coverImage": "https://i.postimg.cc/FsnwYFT4/wei-biao-ti-1.png",
    "description": "从特种纸礼盒到环保可持续包装。结合结构设计与材料感官，在 3D 渲染间寻找溢价平衡点。"
  },
  {
    "id": 3,
    "name": "电商转化视觉 Lab",
    "tagline": "【转化驱动】场景化建模与高精视觉逻辑，精准驱动消费决策。",
    "coverImage": "https://i.postimg.cc/MGBMjTxK/wei-biao-ti-1.png",
    "description": "通过 3D 精准建模与超现实光影重构，缩短消费决策链路，构建极致信任感与吸引力。"
  },
  {
    "id": 4,
    "name": "概念创新与 AIGC 实验",
    "tagline": "【前沿探索】超现实主义风格，利用 AIGC 驱动品牌未来语言。",
    "coverImage": "https://i.postimg.cc/HLJMTzVs/wei-biao-ti-1.png",
    "description": "探索设计与 AI 交互边界，展示通过 Prompt 驱动高精度商业资产生成，赋能未来沟通。"
  }
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null); // 管理弹出的高清图路径

  // 监听 ESC 键关闭灯箱
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] selection:bg-blue-100 font-sans">
      
      {/* 🚀 图片灯箱 (Lightbox) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out animate-in fade-in duration-500"
          onClick={() => setSelectedImage(null)} // 点击空白处关闭
        >
          {/* 高清大图 */}
          <img 
            src={selectedImage} 
            alt="Product Detail" 
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border-4 border-white/10 animate-in zoom-in-95 duration-500"
          />
          {/* 关闭按钮 */}
          <button className="absolute top-8 right-8 p-3 bg-white/10 backdrop-blur-md rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      )}

      {/* Hero Section - 保持原样 */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-110"
          style={{ backgroundImage: "url('https://i.postimg.cc/SRWYnwxr/44.png')" }}
        />
        <div className="absolute inset-0 z-10 bg-white/10 backdrop-blur-[2px]" />
        <div className="relative z-20 max-w-4xl w-full mx-6 p-8 md:p-16 bg-white/20 backdrop-blur-2xl rounded-[40px] border border-white/30 shadow-2xl">
          <div className="text-left space-y-8">
            <p className="text-blue-600 font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase opacity-90">Visual Designer Portfolio</p>
            <h1 className="text-4xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tighter">Hi there, <br /><span className="text-gray-300 font-light italic">我是</span> 刘伟琪-Vicky</h1>
            <p className="text-lg md:text-2xl text-gray-800 font-light leading-relaxed max-w-2xl">很幸运在这里分享我的作品集，<br /><span className="text-gray-900 font-medium">希望其中蕴含的创意，能触动你的视觉。</span></p>
          </div>
        </div>
      </section>

      {/* Projects Section - 精简版项目展示区 */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-700 border border-gray-100 cursor-zoom-in"
              onClick={() => setSelectedImage(project.coverImage)} // 🛠️ 点击整个卡片放大图片
            >
              {/* 项目封面图 - 增加高度和呼吸感 */}
              <div className="aspect-[16/11] relative overflow-hidden bg-gray-50">
                <img 
                  src={project.coverImage} 
                  alt={project.name} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-[1.5s]"
                />
                {/* 悬浮时的“查看细节”提示 */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-6 py-3 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">
                    View Case Study
                  </span>
                </div>
              </div>
              
              {/* 项目信息 - 减少行间距与按钮，保持极简 */}
              <div className="p-10 md:p-12 space-y-4">
                <h3 className="text-2xl font-black text-gray-900 tracking-tighter">{project.name}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{project.tagline}</p>
                <p className="text-gray-800 text-base font-normal leading-relaxed pt-2 line-clamp-3">
                  {project.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 新增底部的“联系我”区域 */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tighter">
            Ready to elevate <br /> your brand vision?
          </h2>
          <p className="text-lg text-gray-500 mb-12 font-light">
            I'm currently accepting new freelance opportunities and full-time roles. Let's create something extraordinary together.
          </p>
          <a 
            href="https://www.upwork.com/freelancers/~你的UpworkID" 
            target="_blank" 
            className="inline-block px-12 py-5 bg-[#0071E3] text-white rounded-full text-base font-bold hover:bg-[#0077ED] hover:scale-105 hover:shadow-2xl transition-all"
          >
            Hire me on Upwork
          </a>
        </div>
      </section>

      <footer className="py-20 text-center text-gray-400 text-[10px] tracking-[0.3em]">
        &copy; 2026 VICKY PORTFOLIO. DESIGNED WITH PASSION.
      </footer>
    </main>
  );
}
