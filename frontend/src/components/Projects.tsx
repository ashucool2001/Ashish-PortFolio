import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "BookWrench",
    subtitle: "Live Field Service Management Platform",
    period: "Apr 2025 - Present",
    description: "Backend developer for a live field service management platform. Designed and optimized RESTful APIs for job scheduling, service requests, and technician workflows. Implemented background processing and integrated automated email notifications.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    tags: ["NestJS", "PostgreSQL", "Prisma", "Redis", "RabbitMQ", "Worker Threads", "SendGrid"],
    highlights: [
      "Reduced API response latency by 30% using Redis",
      "Automated email/SMS notifications",
      "Improved system reliability with retry logic"
    ],
    status: "Live Project"
  },
  {
    title: "Movie Ticket Booking Website",
    period: "Jun 2024 - Jul 2024",
    description: "Developed a responsive movie ticket booking website allowing users to browse movies, select showtimes, and book seats. Designed an interactive UI with focus on clean layout and usability.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop",
    tags: ["HTML5", "CSS", "JavaScript", "DOM Manipulation"],
    highlights: [
      "Interactive seat selection system",
      "Dynamic booking confirmation",
      "Responsive design for all devices"
    ]
  },
  {
    title: "Stock Market Analysis",
    period: "Jan 2024 - Feb 2024",
    description: "Developed a Stock Market Analysis project that provides real-time data and insights into stock performance, helping users make informed investment decisions. Created an interactive dashboard for displaying stock data.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    tags: ["HTML5", "CSS", "JavaScript", "Data Visualization"],
    highlights: [
      "Real-time stock data integration",
      "Interactive data visualization",
      "User-friendly dashboard interface"
    ]
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications and personal projects showcasing my development skills
          </p>
        </div>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden card-hover border-2 hover:border-primary/50">
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-2 aspect-video md:aspect-auto overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="md:col-span-3 p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold">{project.title}</h3>
                      {project.status && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {project.status}
                        </Badge>
                      )}
                    </div>
                    {project.subtitle && (
                      <p className="text-sm font-medium text-primary">{project.subtitle}</p>
                    )}
                    <p className="text-sm text-muted-foreground">{project.period}</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  {project.highlights && (
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
