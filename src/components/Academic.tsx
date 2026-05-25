import { motion } from 'motion/react';
import { GraduationCap, BookOpen, UserCheck, Network, Lightbulb, Microscope, ArrowRight } from 'lucide-react';

export default function Academic() {
  const highlights = [
    { title: "Hands-on Lab Exposure", desc: "Get real-world experience with advanced laboratory techniques and instrumentation.", icon: <Microscope /> },
    { title: "GCP/GLP Workflows", desc: "Learn industry-standard Good Clinical Practice and Good Laboratory Practice compliance.", icon: <GraduationCap /> },
    { title: "Industry Mentorship", desc: "Guided by experienced professionals with deep domain expertise in IVD.", icon: <UserCheck /> },
    { title: "Research Support", desc: "Assistance with project reports, thesis submissions, and publication research.", icon: <BookOpen /> },
    { title: "Networking", desc: "Build connections with clinical researchers, manufacturers, and industry leaders.", icon: <Network /> },
    { title: "On-going Projects", desc: "Opportunities to contribute to live research and validation studies.", icon: <Lightbulb /> }
  ];

  return (
    <section id="academics" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((h, i) => (
                <div key={i} className="glass p-6 rounded-3xl border border-white hover:border-highlight/20 hover:shadow-xl transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {h.icon}
                  </div>
                  <h4 className="font-bold text-primary mb-2">{h.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-highlight font-bold tracking-widest uppercase text-xs mb-4 block">Education & Partnerships</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 leading-tight">
              Empowering the Next Generation of Scientists
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              At NexIVD, we believe in bridging the gap between academia and industry. Our collaboration programs offer students and research scholars real-world exposure to diagnostic innovation.
            </p>
            
            <div className="space-y-4 mb-10">
               {[
                 "Summer Internships & Dissertations",
                 "Hands-on Training Workshops",
                 "Collaborative Research Projects",
                 "Industry-driven Thesis Guidance"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                       <ArrowRight className="w-3 h-3 text-primary" />
                    </div>
                    <span className="font-medium text-slate-700">{item}</span>
                 </div>
               ))}
            </div>

            <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-highlight transition-all shadow-xl shadow-primary/20 group">
              Apply for Internship
              <GraduationCap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-20 z-0" />
    </section>
  );
}
