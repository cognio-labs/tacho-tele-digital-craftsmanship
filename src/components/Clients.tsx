const clients = [
  { name: 'TCS', logo: 'TCS Consultancy Services' },
  { name: 'NCC Limited', logo: 'NCC Limited' },
  { name: 'HFCL Group', logo: 'HFCL Group' },
  { name: 'Pace Digitek', logo: 'Pace Digitek' },
  { name: 'Skipper Limited', logo: 'Skipper Limited' },
  { name: 'Dilip Buildcon', logo: 'Dilip Buildcon Limited' },
];

const Clients = () => {
  return (
    <section className="py-16 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Our Clients
          </span>
          <h2 className="heading-section text-foreground">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center gap-4 p-6 rounded-xl hover:bg-secondary transition-all hover:shadow-lg"
            >
              {/* Logo placeholder - Replace with actual images */}
              <div className="w-28 h-28 rounded-lg bg-gradient-to-br from-muted to-secondary flex items-center justify-center group-hover:from-primary group-hover:to-navy-light transition-all shadow-brand-sm group-hover:shadow-lg transform group-hover:scale-105">
                <span className="font-heading font-bold text-lg text-center text-muted-foreground group-hover:text-primary-foreground transition-colors px-2">
                  {client.name}
                </span>
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                {client.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
