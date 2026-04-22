import { Zap, Cog, RefreshCw } from 'lucide-react';
import operationsImage from '@/assets/operations-center.jpg';

const approaches = [
  {
    icon: Zap,
    title: 'Advancement',
    description: 'The company\'s recent investment in advanced technologies, including next-generation fiber optics and upgraded network infrastructure, is crucial in enhancing connectivity and reducing downtime. This demonstrates a proactive approach to building future-ready networks.',
  },
  {
    icon: Cog,
    title: 'Execution',
    description: 'Execution has been effective in terms of cost control, with the company successfully delivering projects on time within the allocated budgets. This financial discipline helps ensure sustainability and keeps the company on track to meet long-term goals.',
  },
  {
    icon: RefreshCw,
    title: 'Transformation',
    description: 'The company\'s transformation towards sustainability is a commendable shift. From legacy copper networks to fiber optics to 5G infrastructure, Tacho Tele has seen it all. The company uses a growth-driven approach to accomplish its projects.',
  },
];

const OurApproach = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              Our Approach
            </span>
            <h2 className="heading-section text-foreground mb-6">
              Driving Innovation in <span className="text-primary">Telecom Infrastructure</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              We combine cutting-edge technology with proven methodologies to deliver 
              telecommunications infrastructure that stands the test of time.
            </p>

            <div className="space-y-8">
              {approaches.map((approach, index) => (
                <div 
                  key={index} 
                  className="flex gap-5 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-gold-light flex items-center justify-center group-hover:scale-110 transition-transform">
                    <approach.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="heading-card text-foreground mb-2 group-hover:text-accent transition-colors">
                      {approach.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {approach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-brand-xl">
              <img
                src={operationsImage}
                alt="Operations Center"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-xl shadow-brand-lg border border-border max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-gold-light flex items-center justify-center">
                  <span className="font-heading font-bold text-accent-foreground">20+</span>
                </div>
                <div>
                  <div className="font-heading font-bold text-foreground">Years of Excellence</div>
                  <div className="text-sm text-muted-foreground">Trusted by industry leaders</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
