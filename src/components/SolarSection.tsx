import { BatteryCharging, Leaf, Sun } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const highlights = [
  {
    icon: Sun,
    title: 'Solar-Ready Sites',
    description:
      'Design and deploy solar-capable telecom sites to reduce generator dependency and improve uptime in remote locations.',
  },
  {
    icon: BatteryCharging,
    title: 'Hybrid Power Systems',
    description:
      'Integrate battery storage and smart power management for stable performance across variable grid and weather conditions.',
  },
  {
    icon: Leaf,
    title: 'Sustainability by Design',
    description:
      'Lower emissions with efficient equipment layouts, right-sized loads, and proactive monitoring across your footprint.',
  },
];

const SolarSection = () => {
  return (
    <section id="solar" className="section-padding bg-secondary/40">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              Sustainability
            </span>
            <h2 className="heading-section text-foreground mb-6">
              Powering Networks with <span className="text-primary">Smarter Energy</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Reliable connectivity needs reliable power. We help operators plan and implement energy-efficient site
              solutions that improve resilience while keeping operating costs predictable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {highlights.map((item) => (
              <Card key={item.title} className="shadow-brand-sm border-border/60">
                <CardHeader className="flex-row items-center gap-4 space-y-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-gold-light flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarSection;

