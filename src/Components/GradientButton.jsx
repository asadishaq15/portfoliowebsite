// components/GradientButton.jsx
const GradientButton = ({ children, onClick, className = '' }) => {
    return (
      <button 
        onClick={onClick}
        className={`group relative px-6 py-2 md:px-8 md:py-3 text-white rounded-full text-base md:text-lg font-medium transition-all duration-500 ease-in-out overflow-hidden border-2 border-white/30 backdrop-blur-sm ${className}`}
      >
        {/* Background gradient with scatter effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#D76B30] to-[#2D9B8A] transition-all duration-700 ease-in-out group-hover:scale-95 group-hover:opacity-0 group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,50%_50%,0_100%)]"></div>
        </div>
        
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
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
        <span className="relative z-10 font-syne">{children}</span>
      </button>
    );
  };
  
  export default GradientButton;