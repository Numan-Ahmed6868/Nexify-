import { motion } from "motion/react";
import { Users, Target, Shield, Rocket, Heart, Zap, Award, Globe } from "lucide-react";

const values = [
  { title: "Innovation", desc: "We constantly push boundaries and explore new technologies.", icon: Zap },
  { title: "Reliability", desc: "Our systems are built to be robust and dependable.", icon: Shield },
  { title: "Scalability", desc: "We design for the future, ensuring your product grows with you.", icon: Rocket },
  { title: "Excellence", desc: "We strive for perfection in every line of code we write.", icon: Award }
];

const stats = [
  { label: "Years Experience", value: "8+" },
  { label: "Projects Completed", value: "150+" },
  { label: "Happy Clients", value: "50+" },
  { label: "Team Members", value: "25+" }
];

export default function About() {
  return (
    <div className="relative z-10 pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              Innovating <br />
              <span className="text-gradient">The Digital</span> <br />
              Landscape
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Nexify was founded with a single mission: to empower businesses through cutting-edge technology. We believe that software should not only solve problems but also inspire growth and innovation.
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              Based in the heart of the tech world, our team of expert engineers and designers work tirelessly to deliver high-end solutions that stand the test of time.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-video glass rounded-[40px] overflow-hidden relative group">
              <img 
                src="https://picsum.photos/seed/tech-office/1200/800" 
                alt="Nexify Office" 
                className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-bg-dark via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-xs font-bold tracking-widest text-brand-primary uppercase mb-2">Our Headquarters</p>
                <h3 className="text-2xl font-bold">Silicon Valley East</h3>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl text-center space-y-2"
            >
              <p className="text-4xl md:text-5xl font-black text-brand-primary">{stat.value}</p>
              <p className="text-xs font-bold tracking-widest text-white/40 uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[40px] space-y-6"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-primary">
              <Target size={24} />
            </div>
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-white/60 leading-relaxed">
              To provide businesses with the technological tools they need to succeed in an ever-evolving digital world. We focus on creating value through intelligent engineering and user-centric design.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass p-12 rounded-[40px] space-y-6"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-secondary/20 flex items-center justify-center text-brand-secondary">
              <Globe size={24} />
            </div>
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="text-white/60 leading-relaxed">
              To be the global leader in innovative software solutions, recognized for our commitment to excellence, scalability, and the positive impact we create for our clients and the world.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Core Values</h2>
            <p className="text-white/50 max-w-2xl mx-auto">The principles that guide everything we do at Nexify.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl space-y-6 group hover:border-brand-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-black transition-colors">
                  <value.icon size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Culture */}
        <div className="glass rounded-[40px] p-12 md:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-brand-primary/5 to-transparent pointer-events-none" />
          <div className="max-w-2xl space-y-8 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">A Culture of <br /> <span className="text-brand-primary">Innovation</span></h2>
            <p className="text-white/60 text-lg leading-relaxed">
              At Nexify, we foster an environment where creativity meets technical rigor. Our team is encouraged to experiment, learn, and grow every single day. We believe that a happy, inspired team builds the best software.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div key={n} className="w-12 h-12 rounded-full border-4 border-bg-dark bg-zinc-800 flex items-center justify-center text-xs font-bold">
                    TEAM
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-white/40 tracking-widest uppercase">Join our growing family</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
