import { motion } from "motion/react";
import { Cpu, Globe, Smartphone, Brain, Cloud, Shield, Server, Layers, Code2, Database, Layout, Lock } from "lucide-react";

const services = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    desc: "We build robust, scalable, and secure custom software tailored to your specific business needs. From complex enterprise systems to innovative startups, we deliver excellence.",
    benefits: ["Scalable Architecture", "Seamless Integration", "High Performance", "Dedicated Support"],
    tech: ["Node.js", "Python", "Go", "Java", "C++"],
    icon: Cpu,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "web-apps",
    title: "Web Application Development",
    desc: "Modern, responsive, and lightning-fast web applications that provide an exceptional user experience across all devices and browsers.",
    benefits: ["SEO Optimized", "Progressive Web Apps", "Responsive Design", "Fast Load Times"],
    tech: ["React", "Next.js", "TypeScript", "Tailwind", "Vite"],
    icon: Globe,
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    desc: "Creating engaging mobile experiences for iOS and Android. We specialize in both native and cross-platform development using the latest technologies.",
    benefits: ["Native Performance", "Intuitive UI/UX", "Offline Capabilities", "App Store Optimization"],
    tech: ["React Native", "Flutter", "Swift", "Kotlin"],
    icon: Smartphone,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "ai-solutions",
    title: "AI & Automation Solutions",
    desc: "Harness the power of AI to automate repetitive tasks, gain deep insights from your data, and create intelligent user experiences.",
    benefits: ["Predictive Analytics", "NLP Integration", "Process Automation", "Data-Driven Decisions"],
    tech: ["PyTorch", "TensorFlow", "OpenAI", "LangChain"],
    icon: Brain,
    color: "from-orange-500 to-red-500"
  },
  {
    id: "cloud-infra",
    title: "Cloud Infrastructure",
    desc: "Reliable, scalable, and secure cloud systems designed for modern businesses. We help you migrate, manage, and optimize your cloud presence.",
    benefits: ["99.9% Uptime", "Cost Optimization", "Auto-Scaling", "Disaster Recovery"],
    tech: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
    icon: Cloud,
    color: "from-indigo-500 to-blue-500"
  },
  {
    id: "enterprise-software",
    title: "Enterprise Software",
    desc: "Comprehensive software solutions for large-scale organizations. We focus on security, reliability, and seamless multi-department integration.",
    benefits: ["Role-Based Access", "Data Security", "Legacy Migration", "Enterprise Support"],
    tech: ["SAP", "Oracle", "Salesforce", "Custom ERP"],
    icon: Shield,
    color: "from-slate-500 to-zinc-500"
  }
];

export default function Services() {
  return (
    <div className="relative z-10 pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg"
          >
            We offer a full spectrum of technology services to help you innovate, scale, and lead in your industry.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-[40px] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group hover:border-brand-primary/30 transition-all"
            >
              <div className="space-y-8">
                <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <service.icon className="text-white w-8 h-8" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{service.title}</h2>
                  <p className="text-white/60 leading-relaxed text-lg">{service.desc}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {service.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div className="glass rounded-3xl p-8 bg-white/5">
                  <h3 className="text-sm font-bold tracking-widest text-white/30 uppercase mb-6">Technologies We Use</h3>
                  <div className="flex flex-wrap gap-3">
                    {service.tech.map((t, k) => (
                      <div key={k} className="px-4 py-2 glass rounded-full text-sm font-medium hover:bg-brand-primary hover:text-black transition-colors cursor-default">
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between p-6 glass rounded-3xl bg-linear-to-br from-white/5 to-transparent">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((n) => (
                      <div key={n} className="w-10 h-10 rounded-full border-2 border-bg-dark bg-zinc-800 flex items-center justify-center text-[10px] font-bold">
                        DEV
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-bold text-white/40 tracking-widest uppercase">Expert Team Assigned</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
