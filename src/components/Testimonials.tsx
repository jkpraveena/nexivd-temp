import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Director, Clinical Labs",
      text: "NexIVD's regulatory consultancy was pivotal in our recent IVD product approval. Their attention to detail in documentation is unmatched.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "Founder, Biotech Startup",
      text: "The turnkey manufacturing support we received allowed us to set up our QC laboratory in record time. Excellent professionals.",
      rating: 5
    },
    {
      name: "Prakash Sharma",
      role: "Research Scientist",
      text: "Collaborating with NexIVD on method validation provided the rigorous scientific evidence we needed for our international trial.",
      rating: 4
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-highlight font-bold tracking-widest uppercase text-xs mb-4 block">Trust & Success</span>
          <h2 className="text-4xl font-display font-bold text-primary mb-6">
            Client Testimonials
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-[40px] border border-slate-100 flex flex-col items-center text-center relative hover:shadow-2xl transition-all"
            >
              <div className="absolute top-[-20px] bg-primary p-4 rounded-2xl text-accent shadow-xl">
                 <Quote className="w-6 h-6 fill-accent" />
              </div>
              
              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className={`w-4 h-4 ${idx < t.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`} />
                ))}
              </div>

              <p className="text-slate-600 mb-8 italic leading-relaxed">
                "{t.text}"
              </p>

              <div className="mt-auto">
                <h4 className="font-display font-bold text-primary">{t.name}</h4>
                <p className="text-sm text-slate-400">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
