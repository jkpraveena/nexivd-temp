import { motion } from 'motion/react';
import { ClipboardList, Search, Mountain, GitBranch, ShieldCheck, Microscope, Factory, UserPlus, PackageCheck, FileSignature } from 'lucide-react';

export default function Timeline() {
  const steps = [
    { title: "Product Portfolio Planning", icon: <ClipboardList />, color: "bg-blue-500" },
    { title: "Feasibility Studies", icon: <Search />, color: "bg-cyan-500" },
    { title: "Raw Material Selection", icon: <PackageCheck />, color: "bg-teal-500" },
    { title: "Assay Development", icon: <Microscope />, color: "bg-highlight" },
    { title: "Method Validation", icon: <ShieldCheck />, color: "bg-primary" },
    { title: "Quality Control", icon: <FileSignature />, color: "bg-indigo-500" },
    { title: "Stability Studies", icon: <Mountain />, color: "bg-blue-600" },
    { title: "Regulatory Documentation", icon: <GitBranch />, color: "bg-slate-700" },
    { title: "Plant Setup Guidance", icon: <Factory />, color: "bg-cyan-600" },
    { title: "Production Training", icon: <UserPlus />, color: "bg-primary" }
  ];

  return (
    <section id="consultancy" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 sticky top-32">
            <span className="text-highlight font-bold tracking-widest uppercase text-xs mb-4 block">End-to-End Support</span>
            <h2 className="text-4xl font-display font-bold text-primary mb-8 leading-tight">
              Our Consultancy & IVD Manufacturing Support
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We provide complete turnkey solutions from the initial concept phase to commercialization and final handover. Our structured roadmap below outlines how we work with you.
            </p>
          </div>

          <div className="lg:w-2/3">
            <div className="relative">
              {/* Vertical line for desktop */}
              <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-slate-100 hidden sm:block" />
              
              <div className="grid gap-8">
                {steps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="relative flex items-center gap-6 sm:pl-16 group"
                  >
                    {/* Circle marker */}
                    <div className={`shrink-0 w-14 h-14 rounded-full ${step.color} text-white flex items-center justify-center p-3 z-10 shadow-lg shadow-primary/10 group-hover:scale-110 transition-transform relative border-4 border-white`}>
                      {step.icon}
                    </div>

                    <div className="glass flex-grow p-6 rounded-3xl border border-slate-100 group-hover:border-highlight/30 group-hover:shadow-xl group-hover:shadow-primary/5 transition-all">
                      <div className="flex justify-between items-center">
                         <h3 className="text-lg font-display font-bold text-primary">{step.title}</h3>
                         <span className="text-slate-300 font-display font-black group-hover:text-highlight/20 transition-colors">0{idx + 1}</span>
                      </div>
                      <p className="text-sm text-slate-500 mt-2">
                        Specialized {step.title.toLowerCase()} tailored to your IVD product requirements and market regulations.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                 initial={{ scale: 0.8, opacity: 0 }}
                 whileInView={{ scale: 1, opacity: 1 }}
                 className="mt-12 ml-14 p-8 glass-dark rounded-3xl text-white relative overflow-hidden"
              >
                  <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8">
                    <div className="sm:w-2/3">
                      <h3 className="text-2xl font-display font-bold mb-3">Final Handover & Support</h3>
                      <p className="text-slate-300 text-sm">
                        Transition smoothly to full-scale production with our final handover support, training, and ongoing technical assistance.
                      </p>
                    </div>
                    <button className="bg-accent text-primary px-8 py-4 rounded-xl font-bold whitespace-nowrap hover:bg-white transition-all">
                       Talk to an Expert
                    </button>
                  </div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-highlight/20 rounded-full blur-[60px] -z-0" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
