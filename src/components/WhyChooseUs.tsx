import { Shield, Target, Lightbulb, Users, Leaf, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Award,
    title: 'Best Quality',
    description: 'Reliable and timely service is a key aspect of quality in telecom infrastructure. We uphold up-to-date safety standards, conducting regular training, and using advanced technology to prevent failures ensuring that networks, signals, and infrastructure are regularly inspected and maintained.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Tacho Tele is committed to upholding high standards in its business operations, safety practices, customer interactions, and social responsibility. It\'s about doing the right thing consistently and adhering to ethical principles and corporate governance in all aspects of telecom services.',
  },
  {
    icon: Target,
    title: 'Strategy',
    description: 'Our strategy focuses on enhancing operational efficiency, modernizing infrastructure, ensuring sustainability, and creating a competitive advantage in a rapidly changing industry. A long-term vision for growth underpinned by smart infrastructure and data-driven decision-making.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'A telecommunications infrastructure company\'s first priority should be innovation and reliability. Tacho Tele upholds the highest quality and performance standards, ensuring that networks, signals, and other infrastructure meet the necessary national and international standards.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Tacho Tele not only provides reliable connectivity but also participates in charitable and social responsibility programs that benefit society and community, such as educational outreach, infrastructure development, and environmental conservation initiatives.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Tacho Tele uses energy-efficient technologies by investing in green systems and related technologies. We are committed to providing best quality, upholding integrity, with correct strategic framework, through ensuring safety, by taking initiatives in social welfare programs.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Excellence in Every <span className="text-accent">Connection</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We bring decades of expertise, unwavering commitment to quality, and innovative 
            solutions to every telecommunications infrastructure project we undertake.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card border-border shadow-brand-sm card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-navy-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="heading-card text-foreground group-hover:text-accent transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
