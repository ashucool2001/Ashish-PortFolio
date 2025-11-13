import { GraduationCap, Award } from "lucide-react";
import { Card } from "./ui/card";

const education = [
  {
    degree: "Master's of Computer Application",
    specialization: "IBM, Full Stack Development",
    institution: "JECRC University",
    location: "Jaipur, India",
    period: "Jul 2023 - May 2025",
    icon: GraduationCap,
  },
  {
    degree: "Bachelor's of Computer Application",
    institution: "Maharaja Ganga Singh University",
    location: "Bikaner, India",
    period: "Jun 2020 - May 2023",
    icon: GraduationCap,
  },
];

const certifications = [
  {
    title: "Web Development & Back End with Node.js",
    issuer: "Coding Ninjas",
    date: "Apr 2025",
  },
  {
    title: "AI Immersion Week Program",
    issuer: "CII-HP Centre for AI (in association with upGrad Enterprise)",
    date: "Mar 2025",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Education & Certifications</h2>
          <p className="text-lg text-muted-foreground">
            Academic background and professional certifications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {education.map((edu, index) => (
            <Card key={index} className="p-6 card-hover border-2 hover:border-primary/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <edu.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  {edu.specialization && (
                    <p className="text-sm font-medium text-primary">{edu.specialization}</p>
                  )}
                  <p className="font-medium text-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.location}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-primary" />
            Certifications & Awards
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-5 card-hover border-l-4 border-l-primary">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h4 className="font-semibold text-lg">{cert.title}</h4>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
