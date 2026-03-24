"use client";
import { useState, useEffect } from 'react';

// 核心数据：已同步为你最新的 6 个分类
const projectsData = [
  {
    "id": 1,
    "name": "品牌全案与视觉识别 (Brand Identity)",
    "tagline": "【视觉语言】极简主义美学，构建品牌系统化核心识别。",
    "coverImage": "https://i.postimg.cc/qvTBNRNn/wei-biao-ti-1-kan-tu-wang.png",
    "description": "立足品牌资产系统化构建，深度解构行业属性，展现多维度媒介高度一致性与溢价力。"
  },
  {
    "id": 2,
    "name": "多维包装工程设计 (Advanced Packaging)",
    "tagline": "【感官美学】深耕 Eco-Luxury 材质逻辑，赋予产品第二生命力。",
    "coverImage": "https://i.postimg.cc/FsnwYFT4/wei-biao-ti-1.png",
    "description": "从特种纸礼盒到环保可持续包装。结合结构设计与材料感官，在 3D 渲染间寻找溢价平衡点。"
  },
  {
    "id": 3,
    "name": "电商转化视觉 Lab (E-commerce Lab)",
    "tagline": "【转化驱动】场景化建模与高精视觉逻辑，精准驱动消费决策。",
    "coverImage": "https://i.postimg.cc/MGBMjTxK/wei-biao-ti-1.png",
    "description": "通过 3D 精准建模与超现实光影重构，缩短消费决策链路，构建极致信任感与吸引力。"
  },
  {
    "id": 4,
    "name": "商业广告与品牌推广 (Ad & Marketing)",
    "tagline": "【全渠道传播】涵盖名片、高定画册、店铺招牌及线下展陈物料。",
    "coverImage": "https://i.postimg.cc/mr4mgVcf/wei-biao-ti-1.png", 
    "description": "聚焦视觉在物理媒介上的质感呈现。通过对特种印刷工艺与材质的精准把控，提升品牌在现实场景中的传播穿透力。"
  },
  {
    "id": 5,
    "name": "文化视觉与空间美陈 (Spatial Culture)",
    "tagline": "【空间美学】企业文化墙设计、艺术美陈及导视系统落地。",
    "coverImage": "https://i.postimg.cc/3NLbVG9K/wei-biao-ti-1.png",
    "description": "将平面语言转化为空间叙事。致力于通过文化墙与空间美陈设计，营造极具沉浸感的品牌环境氛围与文化归属感。"
  },
  {
    "id": 6,
    "name": "概念创新与 AIGC 实验 (AIGC Lab)",
    "tagline": "【前沿探索】超现实主义风格，利用 AIGC 驱动品牌未来语言。",
    "coverImage": "https://i.postimg.cc/HLJMTzVs/wei-biao-ti-1.png",
    "description": "探索设计与 AI 交互边界，展示通过 Prompt 驱动高精度商业资产生成，赋能未来沟通。"
  }
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') setSelectedImage(null); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] selection:bg-blue-100 font-sans">
      
      {/* 🚀 高清灯箱 */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out animate-in fade-in duration-500"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Detail" 
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/10 animate-in zoom-in-95 duration-500"
          />
        </div>
      )}

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-110"
          style={{ backgroundImage: "url('https://i.postimg.cc/SRWYnwxr/44.png')" }}
        />
        <div className="absolute inset-0 z-10 bg-white/5 backdrop-blur-[1px]" />
        
        <div className="relative z-20 max-w-4xl w-full mx-6 p-10 md:p-16 bg-white/10 backdrop-blur-3xl rounded-[48px] border border-white/20 shadow-2xl">
          <div className="text-left space-y-8">
            <p className="text-blue-600 font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase">Visual Designer Portfolio</p>
            <h1 className="text-5xl md:text-8xl font-black text-gray-900 leading-[0.95] tracking-tighter">
              Hi there, <br /><span className="text-gray-400 font-light italic">我是</span> 刘伟琪-Vicky
            </h1>
            <p className="text-lg md:text-2xl text-gray-800 font-light leading-relaxed max-w-2xl opacity-80">
              致力于通过顶级视觉叙事，<br />
              <span className="text-gray-950 font-medium">为品牌注入超越时空的溢价力。</span>
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section - 3列网格布局 */}
      <section className="max-w-[1440px] mx-auto px-6 py-24 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-700 border border-gray-100 cursor-zoom-in"
              onClick={() => setSelectedImage(project.coverImage)}
            >
              <div className="aspect-[16/11] relative overflow-hidden bg-gray-50">
                <img 
                  src={project.coverImage} 
                  alt={project.name} 
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-[2s] ease-out"
                />
              </div>
              
              <div className="p-8 md:p-10 space-y-4">
                <h3 className="text-xl font-black text-gray-900 tracking-tight leading-tight">{project.name}</h3>
                <p className="text-gray-400 text-xs font-light leading-relaxed">{project.tagline}</p>
                <p className="text-gray-700 text-sm font-normal leading-relaxed pt-2 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-20 text-center text-gray-400 text-[10px] tracking-[0.4em] border-t border-gray-100">
        &copy; 2026 VICKY PORTFOLIO. DESIGNED WITH PASSION & AI.
      </footer>
    </main>
  );
}
