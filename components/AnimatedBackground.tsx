"use client";

import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-[#E5D9C0]">
      {/* Structural drafting grid */}
      <div className="absolute inset-0 cyber-grid-overlay opacity-80" />
      
      {/* Subtle blueprint-style logo stamp in the bottom-right corner */}
      <div className="absolute right-[-80px] bottom-[-80px] md:right-12 md:bottom-12 w-[320px] h-[350px] md:w-[480px] md:h-[512px] opacity-30 pointer-events-none mix-blend-multiply select-none">
        <img
          src="/Portfolio/logo.png"
          alt="Workstation Seal"
          className="w-full h-full object-contain filter grayscale contrast-125 brightness-95"
        />
      </div>
    </div>
  );
}

// "use client";

// import React from "react";

// export default function AnimatedBackground() {
//   return (
//     <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden bg-[#E5D9C0]">
//       {/* Structural drafting grid */}
//       <div className="absolute inset-0 cyber-grid-overlay opacity-80" />
//     </div>
//   );
// }