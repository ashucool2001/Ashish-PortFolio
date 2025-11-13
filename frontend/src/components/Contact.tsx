import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { toast } from "sonner";
import { useRef } from "react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = () => {
    toast.success("Message sent! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss your next project or just say hello
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT CARD */}
          <Card className="p-8 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <p className="text-muted-foreground">
                Feel free to reach out through any of these platforms
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:tanwarashish877@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span>tanwarashish877@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/ashish-singh-tanwar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <span>LinkedIn Profile</span>
              </a>

              <a
                href="https://github.com/ashucool2001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <span>GitHub Profile</span>
              </a>

              <a
                href="tel:+917339869590"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span>+91 7339869590</span>
              </a>

              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span>Jaipur, Rajasthan</span>
              </div>
            </div>
          </Card>

          {/* RIGHT — FORM */}
          <Card className="p-8">
            <form
              ref={formRef}
              action="https://formsubmit.co/tanwarashish877@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* ANTI-SPAM + FORM SUBMIT SETTINGS */}
              <input type="hidden" name="_captcha" value="false" />

              {/* 💡 BEST anti-spam template */}
              <input type="hidden" name="_template" value="box" />

              {/* 💡 Strong subject prevents spam */}
              <input
                type="hidden"
                name="_subject"
                value="📩 New Message from Ashish's Portfolio"
              />

              {/* 💡 MOST IMPORTANT: avoid spoofing */}
              <input
                type="hidden"
                name="_from"
                value="Portfolio Contact Form"
              />

              {/* Redirect to local Thank You page */}
              <input
                type="hidden"
                name="_next"
                value="http://localhost:5173/thank-you"
              />

              <div>
                <label className="text-sm font-medium mb-2 block">Name</label>
                <Input name="name" placeholder="Your name" required />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                {/* reply-to email for legit headers → prevent spam */}
                <Input
                  type="email"
                  name="replyTo"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
