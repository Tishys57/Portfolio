"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export function Button({ variant = "primary", children, className, ...props }: ButtonProps) {
  const baseStyle = "clip-cyber-btn relative px-8 py-3.5 font-mono-tech text-sm tracking-wider uppercase flex items-center justify-center gap-3 transition-all duration-300 border-2";
  const variants = {
    primary: "bg-[#BC6034] border-[#433347] text-[#F7EFE2] font-black shadow-[4px_4px_0px_0px_#433347] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#433347]",
    secondary: "bg-transparent border-[#433347] text-[#2E2430] font-bold hover:bg-[#BC6034]/15"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyle, variants[variant], className)}
      {...(props as any)}
    >
      <span className="w-2 h-2 bg-[#2E2430] rounded-none animate-pulse" />
      {children}
    </motion.button>
  );
}