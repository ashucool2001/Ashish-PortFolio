import { Briefcase } from "lucide-react";
import { Card } from "./ui/card";

const experiences = [
  {
    title: "Associate Software Engineer",
    company: "Goforsys Technologies",
    period: "Oct 2025 - Present",
    description: "Designing and developing RESTful APIs using NestJS, PostgreSQL, and Prisma ORM for scalable backend systems. Implemented Worker Threads for asynchronous processing, integrated SendGrid API for automated notifications, and collaborated with frontend teams to optimize performance using Redis caching. Following Agile methodologies with Git, Docker, and Postman.",
    highlights: [
      "Improved notification reliability with SendGrid integration",
      "Reduced API response latency by 30% using Redis caching",
      "Developed Python scripts for automation and data migration"
    ]
  },
  {
    title: "Trainee Software Engineer",
    company: "Goforsys Technologies",
    period: "Apr 2025 - Oct 2025",
    description: "Completed intensive hands-on training in backend technologies including Node.js, NestJS, Express.js, and PostgreSQL. Learned and implemented RESTful API development, JWT authentication, and middleware patterns. Gained practical experience with modern development tools and practices.",
    highlights: [
      "Mastered backend technologies and RESTful API design",
      "Implemented JWT authentication and middleware",
      "Worked on internal projects practicing clean code"
    ]
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Work Experience</h2>
          <p className="text-lg text-muted-foreground">
            My professional journey in backend software development
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background z-10" />
                
                <div className="flex-1" />
                
                <Card className="flex-1 p-6 card-hover ml-16 md:ml-0">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                      {exp.highlights && (
                        <ul className="space-y-1 pt-2">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
