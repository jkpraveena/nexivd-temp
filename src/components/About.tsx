import { motion } from 'motion/react';
import { Target, Lightbulb, Users, Shield } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: "Evidence-Based Practice",
      desc: "Science provides the foundation for understanding health and disease through rigorous research and data analysis.",
      icon: <Target className="w-6 h-6" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Compassion and Empathy",
      desc: "The 'Care' aspect ensures that scientific knowledge is applied with empathy, focusing on the well-being of the patient.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-teal-50 text-teal-600"
    },
    {
      title: "Ethical Considerations",
      desc: "Applying scientific knowledge with care involves ethical decision-making to benefit individuals and society responsibly.",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "AI & Innovation",
      desc: "Adopting new technologies such as AI to create more effective and accessible diagnostic services.",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "bg-cyan-50 text-cyan-600"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-highlight font-bold tracking-widest uppercase text-sm mb-4 block">About NexIVD</span>
            <h2 className="text-4xl font-display font-bold text-primary mb-6 leading-tight">
              Pioneering Diagnostics with Scientific Excellence
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              NexIVD Laboratories Pvt. Ltd combines scientific excellence, innovation, and compassionate healthcare support to empower IVD industries, research laboratories, and clinicians. 
              We go beyond distribution to deliver comprehensive support services that achieve reliable results with confidence.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div key={i} className="flex flex-col gap-3 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-highlight/30 hover:bg-white hover:shadow-lg transition-all">
                  <div className={`p-3 rounded-xl w-fit ${v.color}`}>
                    {v.icon}
                  </div>
                  <h3 className="font-bold text-primary">{v.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800" 
                alt="Modern Laboratory" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-[2px] w-12 bg-accent" />
                  <span className="text-accent font-bold uppercase tracking-widest text-xs">Our Vision</span>
                </div>
                <p className="text-xl font-display font-medium">
                  "Excellence in IVD Development & Global Consultancy"
                </p>
              </div>
            </div>

            {/* Decorative blob */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -z-10" />
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/10 rounded-full blur-[60px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
