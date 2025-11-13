import { Code2, Server, Database, Rocket, Globe, Zap } from "lucide-react";
import { Card } from "./ui/card";

const skills = [
  {
    icon: Server,
    title: "Backend Development",
    skills: ["Node.js", "NestJS", "Express.js", "TypeScript"],
  },
  {
    icon: Database,
    title: "Database & ORM",
    skills: ["PostgreSQL", "Prisma ORM", "MongoDB", "Redis"],
  },
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python"],
  },
  {
    icon: Rocket,
    title: "DevOps & Tools",
    skills: ["Docker", "Git", "Postman", "RabbitMQ"],
  },
  {
    icon: Globe,
    title: "Frontend Technologies",
    skills: ["HTML5", "CSS", "JavaScript", "React"],
  },
  {
    icon: Zap,
    title: "APIs & Integrations",
    skills: ["RESTful APIs", "Swagger", "SendGrid", "Worker Threads"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build scalable backend solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="p-6 card-hover border-2 hover:border-primary/50"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((item, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
