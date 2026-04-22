const clients = [
  { name: 'NCC', initials: 'NCC' },
  { name: 'Skipper India Limited', initials: 'SIL' },
  { name: 'TCS', initials: 'TCS' },
  { name: 'Dilip Buildcon Limited', initials: 'DBL' },
  { name: 'Pace Digitek', initials: 'PD' },
  { name: 'HFCL', initials: 'HF' },
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
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-3 p-6 rounded-xl hover:bg-secondary transition-colors"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center group-hover:from-primary group-hover:to-navy-light transition-all shadow-brand-sm">
                <span className="font-heading font-bold text-2xl text-muted-foreground group-hover:text-primary-foreground transition-colors">
                  {client.initials}
                </span>
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
