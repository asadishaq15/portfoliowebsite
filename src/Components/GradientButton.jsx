const GradientButton = ({ children, onClick, className = '' }) => {
  return (
    <button 
      onClick={onClick}
      className={`group relative px-8 py-2 md:px-8 md:py-3 text-white rounded-full text-base md:text-lg font-medium
      border-[4px] border-white/20
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A3B] via-[#ED991D] to-[#095D5D] transition-all duration-700 ease-in-out group-hover:scale-95 group-hover:opacity-0 group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,50%_50%,0_100%)]"></div>
      </div>
      
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
      
      {/* Simple blinking red dot */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3
        rounded-full bg-red-700
        scale-0 group-hover:scale-100
        transition-transform duration-700
        group-hover:animate-[pulse_2s_ease-in-out_infinite]"
      ></div>
      
      {/* Button text */}
      <span className="relative z-10 font-syne whitespace-nowrap transition-all duration-500 ease-out">{children}</span>
    </button>
  );
};

export default GradientButton;