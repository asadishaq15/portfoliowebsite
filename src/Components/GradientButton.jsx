const GradientButton = ({ children, onClick, className = '' }) => {
  return (
    <button 
      onClick={onClick}
      className={`group relative px-10 py-3 md:px-10 md:py-4 text-white rounded-full text-base md:text-lg font-medium
      border-[3px] border-white/20
      shadow-[0_0_15px_rgba(255,255,255,0.1)]
      hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
      backdrop-blur-[8px] 
      bg-white/5 
      transition-transform duration-500 ease-out
      transform origin-left hover:scale-x-110
      ${className}`}
    >
      {/* Background gradient with scatter effect */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D76B30] to-[#2D9B8A] transition-all duration-700 ease-in-out group-hover:scale-95 group-hover:opacity-0 group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,50%_50%,0_100%)]"></div>
      </div>
      
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
      
      {/* Red dot with black hole effect */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-red-600
        scale-0 group-hover:scale-150
        transition-all duration-700
        group-hover:shadow-[0_0_20px_2px_rgba(220,38,38,0.6)]
        group-hover:animate-[pulse_1.5s_ease-in-out_infinite]
        before:content-['']
        before:absolute
        before:inset-0
        before:rounded-full
        before:bg-red-600
        before:animate-[spin_2s_linear_infinite]
        before:opacity-0
        group-hover:before:opacity-40
        after:content-['']
        after:absolute
        after:inset-[-8px]
        after:rounded-full
        after:bg-red-600
        after:animate-[ping_1s_ease-in-out_infinite]
        after:opacity-0
        group-hover:after:opacity-30
        md:w-2 md:h-2"
      ></div>
      
      {/* Button text */}
      <span className="relative z-10 font-syne whitespace-nowrap transition-all duration-500 ease-out">{children}</span>
    </button>
  );
};

export default GradientButton;