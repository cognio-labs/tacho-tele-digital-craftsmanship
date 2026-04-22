import { BadgeCheck, ClipboardList, Headset, ShieldCheck, Sparkles, Target, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const whyChoosePoints = [
  'Experienced engineering and project management team',
  'Quality materials and international standards',
  'Timely execution with safety compliance',
  'Competitive pricing with high ROI',
  'End-to-end support and long-term reliability',
];

const scopeOfWork = [
  {
    title: 'System Design & Engineering',
    description: 'Detailed site survey, load analysis, and optimized solar system design as per industry standards.',
  },
  {
    title: 'Supply of Solar Components',
    description:
      'Procurement and supply of PV modules, inverters, control panels, DC/AC cables, junction boxes and accessories.',
  },
  {
    title: 'Structure, Pedestal & Cable Management',
    description: 'Design and installation of mounting structures, pedestals, and cable conduit systems for durability.',
  },
  {
    title: 'Installation & Commissioning',
    description: 'Complete installation, testing, and commissioning of electrical and mechanical components.',
  },
  {
    title: 'Project Planning & Control',
    description: 'Strict timelines, quality control, and safety compliance with regular reporting and coordination.',
  },
  {
    title: 'Technical Support & Documentation',
    description: 'Drawings, test reports, and documentation required for statutory and regulatory approvals.',
  },
];

const solarServices = [
  'Residential and commercial rooftop solar projects',
  'Industrial and utility-scale solar power plants',
  'On-grid, off-grid and hybrid systems',
  'Solar O&M and performance optimization',
  'High efficiency panels and smart inverters',
];

const featureCards = [
  {
    icon: ShieldCheck,
    title: 'Reliable Execution',
    description: 'Project delivery with strict quality, safety and performance verification at every stage.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Seasoned professionals handling engineering, delivery and solar commissioning.',
  },
  {
    icon: Headset,
    title: 'End-to-End Support',
    description: 'From initial consultation to long-term maintenance, we ensure success for every installation.',
  },
];

const galleryCards = [
  {
    title: 'Solar Panels Close-up',
    description: 'Solar Panels Close-up installations and solar plant projects displaying modern renewable energy.',
  },
  {
    title: 'Large Scale Solar Plant',
    description: 'Large scale plant installations and projects delivering clean, reliable and reachable power.',
  },
  {
    title: 'Rooftop Solar',
    description: 'Rooftop solar installations for businesses and telecom infrastructure across communities.',
  },
];

const SolarSection = () => {
  return (
    <section id="solar" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Advanced Solar Power Solutions
          </span>
          <h2 className="heading-section text-foreground">
            Driving a Sustainable Future with <span className="text-primary">Solar Energy</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
            Tacho Tele India Private Limited delivers complete Solar EPC services, including design, supply,
            installation, testing, and commissioning. We make solar power clean, reliable and reachable for businesses,
            telecom infrastructure and communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-2 grid gap-6">
            <Card className="shadow-brand-sm border-border/60">
              <CardHeader>
                <CardTitle className="text-xl">About Our Company</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed">
                  Tacho Tele India Private Limited is a technology-driven infrastructure and renewable energy company.
                  We provide complete Solar EPC solutions including design, supply, installation, testing and
                  commissioning. Our mission is to support businesses with sustainable and cost-effective solar energy.
                </p>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="shadow-brand-sm border-border/60">
                <CardHeader className="flex-row items-center gap-3 space-y-0">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    <Target className="w-5 h-5 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    To become a global leader in manufacturing and providing high quality and cost effective complete
                    solar system solutions that provide clean, reliable and grid competitive electric power.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-brand-sm border-border/60">
                <CardHeader className="flex-row items-center gap-3 space-y-0">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    <BadgeCheck className="w-5 h-5 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    To help expand and make solar power a clean, reliable and reachable energy source for everyone in
                    the world.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-navy-deep to-navy-medium text-primary-foreground p-8 shadow-brand-lg">
            <h3 className="text-2xl font-heading font-bold mb-3">Why Choose Tacho Tele</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              We combine engineering excellence, quality sourcing, smart execution and long-term service to deliver
              future-ready solar projects.
            </p>
            <ul className="space-y-3">
              {whyChoosePoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <BadgeCheck className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-primary-foreground/90">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border/60 bg-background shadow-brand-sm overflow-hidden">
          <div className="grid lg:grid-cols-3">
            <div className="lg:col-span-2 p-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Scope of Work</h3>
              <p className="text-muted-foreground mb-6">
                End-to-end Solar EPC solutions for commercial, industrial and telecom projects that are reliable,
                efficient and future-ready.
              </p>

              <div className="grid gap-4">
                {scopeOfWork.map((item) => (
                  <div key={item.title} className="rounded-xl border border-border/70 bg-card p-5">
                    <div className="font-heading font-semibold text-foreground">{item.title}</div>
                    <div className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-navy-deep to-navy-light p-8 text-primary-foreground flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center">
                  <ClipboardList className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-bold">Our Solar Services</h3>
              </div>
              <ul className="space-y-3">
                {solarServices.map((service) => (
                  <li key={service} className="flex gap-3">
                    <span className="mt-0.5 h-2 w-2 rounded-full bg-accent" />
                    <span className="text-sm text-primary-foreground/90">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {featureCards.map((card) => (
            <Card key={card.title} className="shadow-brand-sm border-border/60">
              <CardHeader className="flex-row items-center gap-4 space-y-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-gold-light flex items-center justify-center">
                  <card.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border/60 bg-background shadow-brand-sm p-8">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Solar Project Gallery</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryCards.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-brand-sm">
                <div className="h-24 bg-gradient-to-br from-navy-deep via-navy-medium to-emerald-500/70 flex items-center justify-center px-6">
                  <div className="text-primary-foreground font-heading font-semibold text-center">{item.title}</div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarSection;
