import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Globe, Smartphone, Brain, Cloud, Shield, CheckCircle2, Zap, Users, Rocket } from "lucide-react";

const services = [
  {
    title: "Custom Software",
    desc: "Tailored solutions built from the ground up to solve your unique business challenges.",
    icon: Cpu,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Web Applications",
    desc: "High-performance, scalable web apps using modern frameworks like React and Next.js.",
    icon: Globe,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Mobile Apps",
    desc: "Native and cross-platform mobile experiences that engage users on iOS and Android.",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "AI Solutions",
    desc: "Integrating machine learning and AI to automate workflows and drive intelligence.",
    icon: Brain,
    color: "from-orange-500 to-red-500"
  }
];

const steps = [
  { title: "Idea", desc: "We brainstorm and define the vision.", icon: Zap },
  { title: "Design", desc: "Crafting intuitive user experiences.", icon: Globe },
  { title: "Develop", desc: "Writing clean, scalable code.", icon: Cpu },
  { title: "Launch", desc: "Deploying and scaling your product.", icon: Rocket }
];

export default function Home() {
  return (
    <div className="relative z-10 pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-bold tracking-widest text-brand-primary animate-pulse">
            <Zap size={14} />
            NEXT-GEN SOFTWARE SOLUTIONS
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
            Building the Future <br />
            <span className="text-gradient">Through Intelligent</span> <br />
            Software
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Nexify is a premium software house that transforms complex ideas into scalable, high-performance digital products. We don't just build apps; we engineer success.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-brand-primary transition-all hover:scale-105"
            >
              Start Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 glass rounded-full font-bold hover:bg-white/10 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Core Expertise</h2>
            <p className="text-white/50 max-w-2xl mx-auto">We provide a comprehensive suite of services to help your business thrive in the digital age.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group glass p-8 rounded-3xl hover:border-brand-primary/50 transition-all hover:translate-y-[-8px]"
              >
                <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <service.icon className="text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nexify */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Why Forward-Thinking <br />
              <span className="text-brand-primary">Companies Choose Us</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              We combine Silicon Valley innovation with global engineering excellence. Our approach is rooted in scalability, security, and user-centric design.
            </p>
            <div className="space-y-4">
              {[
                "Scalable Architecture for Growth",
                "Advanced Security Protocols",
                "User-Centric Design Philosophy",
                "Agile Development Methodology"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="text-brand-primary" size={20} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square glass rounded-[40px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-brand-primary/20 to-brand-secondary/20 animate-pulse" />
              <Cpu size={200} className="text-brand-primary/50 animate-bounce" />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -left-8 glass p-8 rounded-3xl space-y-2 neon-glow">
              <p className="text-4xl font-black text-brand-primary">99.9%</p>
              <p className="text-xs font-bold tracking-widest text-white/50 uppercase">Uptime Guaranteed</p>
            </div>
            <div className="absolute -top-8 -right-8 glass p-8 rounded-3xl space-y-2 neon-glow">
              <p className="text-4xl font-black text-brand-secondary">100+</p>
              <p className="text-xs font-bold tracking-widest text-white/50 uppercase">Projects Delivered</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Workflow</h2>
            <p className="text-white/50 max-w-2xl mx-auto">From initial concept to final deployment, we follow a rigorous process to ensure excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center space-y-6"
              >
                <div className="w-20 h-20 rounded-full glass flex items-center justify-center neon-glow group hover:bg-brand-primary transition-colors">
                  <step.icon className="text-brand-primary group-hover:text-black transition-colors" size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-sm text-white/40">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glass rounded-[40px] p-12 md:p-24 text-center space-y-8 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-brand-primary to-brand-secondary" />
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter">Ready to Build <br /> Something Epic?</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Join the ranks of innovative companies building the future with Nexify. Let's turn your vision into a digital masterpiece.
          </p>
          <div className="pt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-brand-primary text-black font-black rounded-full hover:scale-105 transition-transform shadow-2xl shadow-brand-primary/20"
            >
              Start Your Project Now
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
