import { Quote } from 'lucide-react';

const QualityPolicy = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      
      <div className="section-container relative">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            Quality Policy
          </span>
          
          <div className="relative">
            <Quote className="absolute -top-4 -left-4 w-16 h-16 text-accent/20" />
            <Quote className="absolute -bottom-4 -right-4 w-16 h-16 text-accent/20 rotate-180" />
            
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-heading font-medium text-foreground leading-relaxed px-8">
              <span className="text-primary">"TACHO TELE"</span> strives to facilitate communication 
              connectivity across the globe through continual improvement in infrastructure, cost 
              efficiency, focusing on regular upgradation of skills and knowledge of its manpower 
              at all levels thus providing high degree of reliability for the masses by{' '}
              <span className="text-accent">fail-safe installation</span>.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityPolicy;
