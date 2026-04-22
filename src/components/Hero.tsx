import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-telecom.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Telecommunications infrastructure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-medium/85 to-navy-light/70" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <div className="animate-slide-up">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6 border border-accent/30">
              Leading Telecom Infrastructure Provider
            </span>
          </div>

          <h1 className="heading-display text-primary-foreground mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Building the Future of{' '}
            <span className="text-accent">Connectivity</span>
          </h1>

          <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Tacho Tele delivers world-class telecommunications infrastructure solutions, 
            connecting communities and businesses with reliable, cutting-edge technology 
            across the nation.
          </p>

          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-gold-dark font-semibold shadow-accent group">
              Our Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            {[
              { value: '20+', label: 'Years Experience' },
              { value: '500+', label: 'Projects Completed' },
              { value: '15', label: 'States Covered' },
              { value: '1000+', label: 'KMs Network' },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-accent font-heading">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
