import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-[-10%] w-[400px] h-[400px] bg-highlight/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-black text-primary leading-[1.15] mb-8 max-w-4xl tracking-tight">
            Your Trusted Partner in <span className="bg-gradient-to-r from-highlight to-accent bg-clip-text text-transparent">IVD Manufacturing</span> & Regulatory Consultancy
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl leading-relaxed">
            End-to-End Turnkey Solutions for IVD Manufacturing & Compliance. 
            Science with Care; Service with Innovation.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <button className="bg-primary hover:bg-highlight text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 transition-all shadow-xl shadow-primary/20 hover:shadow-highlight/20 active:scale-95 group text-base">
              Book Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white text-primary border border-slate-200/80 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-95 text-base shadow-sm">
              Explore Services
            </button>
          </div>

          {/* Stats/Badges */}
          <div className="mt-16 flex items-center justify-center gap-10 sm:gap-16">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-display font-black text-primary">100%</span>
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-500 mt-2 font-display">Regulatory Compliance</span>
            </div>
            <div className="w-[1px] h-16 bg-slate-200" />
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-display font-black text-primary">Turnkey</span>
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-500 mt-2 font-display">Solution Expert</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
