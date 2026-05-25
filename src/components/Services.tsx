import { motion } from 'motion/react';
import { PenTool, CheckCircle2, FlaskConical, Gavel, Database, TrendingUp, Briefcase, Cpu, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Medical Writing & Scientific Affairs",
      desc: "Preparation of scientific documentation, clinical evidence, and technical files to support regulatory submissions.",
      icon: <PenTool className="w-8 h-8" />,
      color: "bg-blue-500"
    },
    {
      title: "IVD Devices Verification & Validation",
      desc: "Confirming device design inputs and intended use fulfilment through comprehensive V&V services.",
      icon: <CheckCircle2 className="w-8 h-8" />,
      color: "bg-cyan-500"
    },
    {
      title: "Laboratory & Preclinical Support",
      desc: "Cutting-edge testing across Hematology, Clinical Chemistry, Immunology, and Biomarker validation.",
      icon: <FlaskConical className="w-8 h-8" />,
      color: "bg-indigo-500"
    },
    {
      title: "IVD Regulatory Affairs",
      desc: "Guidance on global and national IVD regulations ensuring compliance and smooth approvals.",
      icon: <Gavel className="w-8 h-8" />,
      color: "bg-slate-700"
    },
    {
      title: "Data Management & Biostatistics",
      desc: "Design of CRFs, clinical database management, and rigorous statistical analysis for data validation.",
      icon: <Database className="w-8 h-8" />,
      color: "bg-teal-500"
    },
    {
      title: "Business Development & Client Services",
      desc: "Partner engagement, customer training, and dedicated after-sales support for long-term growth.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "bg-blue-600"
    },
    {
      title: "Project & Vendor Management",
      desc: "Seamless coordination with manufacturers and suppliers for timely project delivery.",
      icon: <Briefcase className="w-8 h-8" />,
      color: "bg-slate-800"
    },
    {
      title: "Technology & Support Services",
      desc: "Instrument installation, software validation, and end-to-end technical assistance.",
      icon: <Cpu className="w-8 h-8" />,
      color: "bg-cyan-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-highlight font-bold tracking-widest uppercase text-xs mb-4 block"
          >
            What We Offer
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary mb-6"
          >
            Comprehensive Support Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-lg"
          >
            Empowering IVD manufacturing industries and research laboratories with specialized expertise and innovative solutions.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group glass p-8 rounded-3xl border border-slate-200 hover:border-highlight/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full bg-white/50"
            >
              <div className={`w-16 h-16 rounded-2xl ${item.color} text-white flex items-center justify-center p-4 mb-6 shadow-lg shadow-primary/10 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-4 leading-tight">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                {item.desc}
              </p>
              <button className="flex items-center gap-2 text-primary font-bold text-sm hover:text-highlight transition-colors mt-auto group/btn">
                Learn More 
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative SVG */}
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent opacity-50 z-0 pointer-events-none" />
    </section>
  );
}
