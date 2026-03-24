"use client";
import { useState, useEffect } from 'react';

const projectsData = [
  { "id": 1, "name": "品牌全案与视觉识别", "tagline": "【视觉语言】极简主义美学。", "coverImage": "https://i.postimg.cc/qvTBNRNn/wei-biao-ti-1-kan-tu-wang.png", "description": "立足品牌资产系统化构建，展现多维度媒介高度一致性。" },
  { "id": 2, "name": "多维包装工程设计", "tagline": "【感官美学】深耕材质逻辑。", "coverImage": "https://i.postimg.cc/FsnwYFT4/wei-biao-ti-1.png", "description": "从特种纸礼盒到环保可持续包装，在3D渲染间寻找溢价点。" },
  { "id": 3, "name": "电商转化视觉 Lab", "tagline": "【转化驱动】场景化建模。", "coverImage": "https://i.postimg.cc/MGBMjTxK/wei-biao-ti-1.png", "description": "通过3D光影重构，缩短消费决策链路，构建极致吸引力。" },
  { "id": 4, "name": "商业广告与品牌推广", "tagline": "【全渠道传播】线下展陈物料。", "coverImage": "https://i.postimg.cc/mr4mgVcf/wei-biao-ti-1.png", "description": "聚焦物理媒介质感呈现，提升品牌在现实场景中的穿透力。" },
  { "id": 5, "name": "文化视觉与空间美陈", "tagline": "【空间美学】艺术美陈落地。", "coverImage": "https://i.postimg.cc/3NLbVG9K/wei-biao-ti-1.png", "description": "将平面语言转化为空间叙事，营造沉浸感环境氛围。" },
  { "id": 6, "name": "概念创新与 AIGC 实验", "tagline": "【前沿探索】超现实风格。", "coverImage": "https://i.postimg.cc/HLJMTzVs/wei-biao-ti-1.png", "description": "利用AIGC驱动品牌未来语言，赋能未来视觉沟通。" }
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="min-h-screen bg-[#F5F5F7] font-sans">
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" />
        </div>
      )}

      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('https://i.postimg.cc/SRWYnwxr/44.png')" }} />
        <div className="absolute inset-0 z-10 bg-white/5 backdrop-blur-[1px]" />
        <div className="relative z-20 max-w-4xl mx-6 p-10 bg-white/10 backdrop-blur-3xl rounded-[48px] border border-white/20 shadow-2xl">
          <h1 className="text-5xl md:text-8xl font-black text-gray-900 tracking-tighter">Hi, <br /><span className="text-gray-400 font-light">我是</span> 刘伟琪</h1>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div key={project.id} className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all cursor-zoom-in" onClick={() => setSelectedImage(project.coverImage)}>
            <div className="aspect-[16/11] overflow-hidden"><img src={project.coverImage} className="w-full h-full object-cover" /></div>
            <div className="p-8">
              <h3 className="text-xl font-black mb-2">{project.name}</h3>
              <p className="text-gray-400 text-xs mb-4">{project.tagline}</p>
              <p className="text-gray-700 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
