import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-primary pt-24 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <Logo size="md" className="w-14 h-14" />
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-display font-black tracking-tight text-white leading-none">NexIVD</span>
                <span className="text-[12px] uppercase tracking-widest font-bold text-accent mt-1.5 leading-none">Laboratories</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Innovating Diagnostics • Empowering Healthcare. Providing end-to-end turnkey solutions for IVD manufacturing and compliance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-accent hover:text-primary transition-all"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-accent hover:text-primary transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-accent hover:text-primary transition-all"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Academic Collaboration', 'Industries', 'Careers', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-accent transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8">Specialized Services</h4>
            <ul className="space-y-4">
              {[
                'Medical Writing',
                'Verification & Validation',
                'Regulatory Affairs',
                'Plant Setup Guidance',
                'Assay Development',
                'Data Management'
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-slate-400 hover:text-accent transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8">Contact Us</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <p className="text-slate-400 text-sm leading-relaxed">
                  <strong>NexIVD Laboratories Pvt. Ltd.</strong><br />
                  Plot No. 54, Pillar No: A1507,<br />
                  Andhra Bank Colony, Moosarambagh,<br />
                  Hyderabad, Telangana, India – 500036
                </p>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <p className="text-slate-400 text-sm">+91 9848218585</p>
              </div>
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <p className="text-slate-400 text-sm">info@nexivdlabs.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
           <p>© 2026 NexIVD Laboratories Pvt. Ltd. All rights reserved.</p>
           <div className="flex gap-8">
             <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
