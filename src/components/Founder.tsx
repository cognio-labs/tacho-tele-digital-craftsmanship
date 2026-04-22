import founderImage from '@/assets/founder.jpg';

const Founder = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Background decoration */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-accent/20 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/20 rounded-2xl" />
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-brand-xl">
                <img
                  src={founderImage}
                  alt="Founder"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Founder's Background
            </span>
            <h2 className="heading-section text-foreground mb-6">
              Visionary <span className="text-accent">Leadership</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Mr. Rajesh Kumar, the visionary founder of Tacho Tele, brings over 35 years of 
                experience in the Telecommunications Industry. He set out to create a company 
                that works for the development and building of the country's communication 
                infrastructure. He started his journey in 1989 as an engineer and rose to key 
                positions in leading telecom infrastructure companies.
              </p>
              
              <p>
                After working for several years in major telecommunications firms at key 
                managerial positions, Mr. Rajesh Kumar noticed gaps and demand in the market 
                for reliable telecom infrastructure development. Driven by a passion for 
                connecting communities through technology, he decided to leave the corporate 
                world and build something meaningful from the ground up.
              </p>
              
              <p>
                With a background in Electronics & Communication Engineering, Mr. Rajesh Kumar 
                has worked in Fiber Optic Networks, 5G Infrastructure, Tower Installation, and 
                Data Center Development, earning many accolades within the industry and from 
                regulatory bodies.
              </p>
            </div>

            {/* Legacy badge */}
            <div className="mt-8 inline-flex items-center gap-4 p-4 bg-card rounded-xl shadow-brand-sm border border-border">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-navy-light flex items-center justify-center">
                <span className="font-heading font-bold text-2xl text-primary-foreground">35</span>
              </div>
              <div>
                <div className="font-heading font-bold text-xl text-foreground">Years of Legacy</div>
                <div className="text-sm text-muted-foreground">Building connections that matter</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
