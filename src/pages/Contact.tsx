import { motion, useScroll, useTransform } from "motion/react";
import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const formY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const infoY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "Web App",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent. We will get back to you shortly.");
    setFormState({ name: "", email: "", projectType: "Web App", message: "" });
  };

  return (
    <div ref={containerRef} className="relative z-10 pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter"
          >
            Let's <span className="text-gradient">Connect</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg"
          >
            Have a project in mind? Or just want to say hello? We'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            style={{ y: formY }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-8 md:p-12 rounded-[40px] space-y-8 tilt-card"
          >
            <h2 className="text-3xl font-bold">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-slate-500 uppercase px-1">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-colors text-white"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-slate-500 uppercase px-1">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-colors text-white"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-slate-500 uppercase px-1">Project Type</label>
                <select
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-colors appearance-none text-white"
                  value={formState.projectType}
                  onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                >
                  <option className="bg-bg-dark">Web App</option>
                  <option className="bg-bg-dark">Mobile App</option>
                  <option className="bg-bg-dark">AI Solution</option>
                  <option className="bg-bg-dark">Custom Software</option>
                  <option className="bg-bg-dark">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-slate-500 uppercase px-1">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary transition-colors resize-none text-white"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-brand-primary text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-xl shadow-brand-primary/20 neon-glow-blue"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            style={{ y: infoY }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-black transition-colors">
                    <Mail size={24} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold tracking-widest text-white/40 uppercase">Email Us</p>
                    <p className="text-xl font-medium">numanahmed6868@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-black transition-colors">
                    <Phone size={24} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold tracking-widest text-white/40 uppercase">Call Us</p>
                    <p className="text-xl font-medium">+92 307 7528413</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold tracking-widest opacity-40 uppercase">Visit Us</p>
                    <p className="text-xl font-medium">Punjab, Lahore</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Follow Us</h2>
              <div className="flex gap-4">
                {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-14 h-14 rounded-2xl glass flex items-center justify-center hover:text-brand-primary hover:border-brand-primary transition-all"
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass rounded-[40px] aspect-video overflow-hidden relative">
              <img 
                src="https://picsum.photos/seed/map/800/600" 
                alt="Map" 
                className="w-full h-full object-cover opacity-30 grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass p-4 rounded-2xl flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-brand-primary animate-ping" />
                  <span className="text-sm font-bold tracking-widest uppercase">Nexify HQ</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
