import React from "react";


const FeatureCard= ({ title, desc, videoSrc }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/10  transition-all duration-500 hover:scale-[1.02] ">
      <img
        src={videoSrc}
        alt={title}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center justify-end h-[380px] p-8 text-white text-center">
        <h2 className="text-2xl font-semibold mb-3 text-white/90 group-hover:text-white transition-colors duration-300">
          {title}
        </h2>
        <p className="text-sm text-gray-400 leading-relaxed max-w-xs group-hover:text-gray-200 transition-colors duration-300">
          {desc}
        </p>

        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>
    </div>
  );
};

export default FeatureCard;
