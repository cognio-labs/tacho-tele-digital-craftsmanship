import tcsLogo from '@/assets/clients/tcs.png';
import nccLogo from '@/assets/clients/ncc.png';
import hfclLogo from '@/assets/clients/hfcl.png';
import paceLogo from '@/assets/clients/pace-digitek.png';
import skipperLogo from '@/assets/clients/skipper.png';
import dilipLogo from '@/assets/clients/dilip-buildcon.png';

const clients = [
  { name: 'TCS', subtitle: 'TCS Consultancy Services', src: tcsLogo },
  { name: 'NCC Limited', subtitle: 'NCC Limited', src: nccLogo },
  { name: 'HFCL Group', subtitle: 'HFCL Group', src: hfclLogo },
  { name: 'Pace Digitek', subtitle: 'Pace Digitek', src: paceLogo },
  { name: 'Skipper Limited', subtitle: 'Skipper Limited', src: skipperLogo },
  { name: 'Dilip Buildcon', subtitle: 'Dilip Buildcon Limited', src: dilipLogo },
];

const Clients = () => {
  const items = [...clients, ...clients];

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
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />

          <div className="marquee flex w-max gap-8">
            {items.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="group flex w-[180px] flex-col items-center justify-center gap-4 rounded-xl border border-border/60 bg-card/60 p-5 shadow-brand-sm transition-all hover:bg-secondary hover:shadow-lg"
              >
                <div className="flex h-16 w-full items-center justify-center">
                  <img
                    src={client.src}
                    alt={client.subtitle}
                    className="max-h-16 w-full object-contain opacity-90 transition-opacity group-hover:opacity-100"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                  {client.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
