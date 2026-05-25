import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-highlight font-bold tracking-widest uppercase text-xs mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 leading-tight">
              Let's Discuss Your Diagnostic Innovation
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Whether you are looking for manufacturing support, regulatory consultancy, or academic collaboration, our team is here to help.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+91-9848218585", href: "tel:+919848218585" },
                { icon: <Mail className="w-5 h-5" />, label: "Email", value: "info@nexivdlabs.com", href: "mailto:info@nexivdlabs.com" },
                { 
                  icon: <MapPin className="w-5 h-5" />, 
                  label: "Address", 
                  value: (
                    <span className="block text-primary font-bold text-sm leading-relaxed">
                      NexIVD Laboratories Pvt. Ltd.<br />
                      Plot No. 54, Pillar No: A1507,<br />
                      Andhra Bank Colony, Moosarambagh,<br />
                      Hyderabad, Telangana, India – 500036
                    </span>
                  ), 
                  href: "https://maps.google.com" 
                }
              ].map((item, idx) => (
                <a 
                  key={idx}
                  href={item.href}
                  className="flex items-start gap-4 p-6 glass rounded-2xl border border-white hover:border-highlight/20 hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary text-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">{item.label}</p>
                    <div className="text-primary font-bold">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-dark p-8 sm:p-12 rounded-[40px] text-white"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-display font-bold mb-2">Send us a Message</h3>
              <p className="text-slate-400 text-sm">We respond within 24 hours.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Work Email</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-accent transition-colors appearance-none">
                  <option className="bg-slate-900">IVD Manufacturing Support</option>
                  <option className="bg-slate-900">Regulatory Consultancy</option>
                  <option className="bg-slate-900">Academic Collaboration</option>
                  <option className="bg-slate-900">Others</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              
              <button className="w-full bg-accent text-primary py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-all shadow-xl shadow-accent/20 active:scale-95 group">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Floating CTA for WhatsApp */}
      <motion.a
        href="https://wa.me/919848218585"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl z-40"
      >
        <MessageSquare className="w-8 h-8" />
      </motion.a>
    </section>
  );
}
