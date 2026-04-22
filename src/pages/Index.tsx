import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import OurApproach from '@/components/OurApproach';
import ProjectGlimpse from '@/components/ProjectGlimpse';
import Statistics from '@/components/Statistics';
import Founder from '@/components/Founder';
import Clients from '@/components/Clients';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhyChooseUs />
      <OurApproach />
      <ProjectGlimpse />
      <Statistics />
      <Founder />
      <Clients />
      <Footer />
    </div>
  );
};

export default Index;
