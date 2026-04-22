import { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 20, suffix: '+', label: 'Years in Operation', unit: 'Years' },
  { value: 15, suffix: '', label: 'States Covered', unit: 'States' },
  { value: 500, suffix: '+', label: 'Projects Completed', unit: '' },
  { value: 850, suffix: '+', label: 'Towers Installed', unit: '' },
  { value: 1200, suffix: '+', label: 'KMs Network Laid', unit: 'KMs' },
];

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-primary via-navy-medium to-navy-light">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="relative inline-block mb-3">
                <span 
                  className={`text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-accent transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {stat.value}
                </span>
                <span className="text-2xl md:text-3xl font-bold text-accent">{stat.suffix}</span>
                {stat.unit && (
                  <span className="block text-sm font-medium text-primary-foreground/60">{stat.unit}</span>
                )}
              </div>
              <div 
                className={`text-sm md:text-base text-primary-foreground/80 font-medium transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 150 + 100}ms` }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
