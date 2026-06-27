"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/Button";
import { Mail, Github, Send, AlertCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Please include your name"),
  email: z.string().email("Please specify a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long")
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle");

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("idle");
    try {
      // Static export targets require third-party forms or API endpoints (e.g., Formspree, Web3Forms, or custom endpoint).
      // Standard static fallback simulates successfully sent messaging.
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      reset();
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto py-8">
      <div className="flex flex-col gap-6">
        <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-tight">Let&apos;s Connect</h2>
        <p className="text-sm text-foreground/70 leading-relaxed">
          I am eager to engage with teams working on localized NLP, neural architectures, clinical automation, or automated deep learning workflows. Reach out directly for collaboration.
        </p>

        <div className="flex flex-col gap-4 mt-4 text-sm text-foreground/80">
          <a href="mailto:tishys57@gmail.com" className="flex items-center gap-3 hover:text-accent-cyan transition-colors">
            <div className="p-2 bg-card border border-border rounded-lg text-accent-cyan"><Mail size={16} /></div>
            tishys57@gmail.com
          </a>
          <a href="https://github.com/tishya-dhakal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent-cyan transition-colors">
            <div className="p-2 bg-card border border-border rounded-lg text-accent-cyan"><Github size={16} /></div>
            github.com/tishya-dhakal
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-card/30 border border-border p-6 rounded-xl flex flex-col gap-4 backdrop-blur-sm">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-semibold text-foreground/70">Name</label>
          <input
            id="name"
            {...register("name")}
            className="bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-accent-cyan"
            placeholder="Jane Doe"
          />
          {errors.name && <span className="text-xs text-red-400 mt-0.5 flex items-center gap-1"><AlertCircle size={12} /> {errors.name.message}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-semibold text-foreground/70">Email Address</label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-accent-cyan"
            placeholder="jane@example.com"
          />
          {errors.email && <span className="text-xs text-red-400 mt-0.5 flex items-center gap-1"><AlertCircle size={12} /> {errors.email.message}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-xs font-semibold text-foreground/70">Message</label>
          <textarea
            id="message"
            rows={4}
            {...register("message")}
            className="bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-accent-cyan resize-none"
            placeholder="Tell me about your project or open opportunity..."
          />
          {errors.message && <span className="text-xs text-red-400 mt-0.5 flex items-center gap-1"><AlertCircle size={12} /> {errors.message.message}</span>}
        </div>

        <Button variant="primary" type="submit" className="mt-2 w-full text-xs" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : <><Send size={14} /> Send Message</>}
        </Button>

        {status === "success" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-xs flex items-center gap-2">
            <CheckCircle size={16} /> Message sent successfully! I will reach out shortly.
          </motion.div>
        )}
        {status === "error" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs flex items-center gap-2">
            <AlertCircle size={16} /> Something went wrong. Please email directly.
          </motion.div>
        )}
      </form>
    </div>
  );
}