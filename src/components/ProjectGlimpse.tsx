import { ExternalLink } from 'lucide-react';
import projectTower from '@/assets/project-tower.jpg';
import projectFiber from '@/assets/project-fiber.jpg';
import projectDatacenter from '@/assets/project-datacenter.jpg';

const projects = [
  {
    image: projectTower,
    title: 'Tower Installation',
    category: 'Telecommunications',
    description: '5G tower deployment across urban and rural areas',
  },
  {
    image: projectFiber,
    title: 'Fiber Optic Network',
    category: 'Infrastructure',
    description: 'Underground fiber cable laying and installation',
  },
  {
    image: projectDatacenter,
    title: 'Data Center Setup',
    category: 'Enterprise',
    description: 'State-of-the-art data center infrastructure',
  },
];

const ProjectGlimpse = () => {
  return (
    <section id="projects" className="section-padding bg-primary">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-4">
            Project Glimpse
          </span>
          <h2 className="heading-section text-primary-foreground mb-4">
            Our Latest <span className="text-accent">Projects</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Explore some of our recent telecommunications infrastructure projects 
            that are connecting communities across the nation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-brand-lg cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold mb-3">
                  {project.category}
                </span>
                <h3 className="heading-card text-primary-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGlimpse;
