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
        <div className="overflow-hidden">
          <div className="marquee flex w-max items-center gap-14 py-2">
            {items.map((client, index) => (
              <div key={`${client.name}-${index}`} className="flex items-center justify-center px-2">
                <img
                  src={client.src}
                  alt={client.subtitle}
                  className="h-16 sm:h-20 w-auto max-w-[220px] sm:max-w-[260px] object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
