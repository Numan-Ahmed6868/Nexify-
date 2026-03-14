import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Cpu, Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 pt-24 pb-12 px-6 border-t border-white/5 bg-black/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-linear-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
              <Cpu className="text-black w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tighter">
              NEXI<span className="text-brand-primary">FY</span>
            </span>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed">
            Building the future of digital experiences through intelligent software solutions. We transform complex ideas into scalable reality.
          </p>
          <div className="flex gap-4">
            {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand-primary transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li><Link to="/" className="hover:text-brand-primary transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-brand-primary transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li>Custom Software</li>
            <li>Web Applications</li>
            <li>Mobile Apps</li>
            <li>AI Solutions</li>
            <li>Cloud Systems</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-white/50">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-brand-primary" />
              numanahmed6868@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-brand-primary" />
              +92 307 7528413
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-brand-primary mt-1" />
              Tech Hub, Silicon Valley East,<br />Lahore, Pakistan
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
        <p>© 2026 NEXIFY SOFTWARE HOUSE. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
