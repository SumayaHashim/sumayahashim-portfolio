import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";
import { useEffect, useRef } from "react";

const skills = [
  "Python", "Machine Learning", "Deep Learning", "Data Preprocessing", "Pandas", "NumPy", "Matplotlib",
  "Scikit-Learn", "TensorFlow", "Keras", "PyTorch", "Node.js", "React", "HTML & CSS", "Git", "Postman",
  "Model Optimization", "Hyperparameter Tuning", "Time Management", "Teamwork", "Communication",
  "Adaptability", "Attention to Detail"
];

const projects = [
  {
    title: "AI-Powered Recommendation System",
    points: [
      "Movie recommender using collaborative and content-based filtering",
      "Evaluated with RMSE and precision-recall"
    ]
  },
  {
    title: "Deep Learning Image Classifier",
    points: [
      "CNNs on CIFAR-10 & MNIST with strong accuracy",
      "Augmentation and dropout for generalization"
    ]
  },
  {
    title: "Time Series Forecasting with RNNs",
    points: [
      "LSTM for power consumption forecasting",
      "Compared GRUs and BiLSTMs; feature engineering"
    ]
  }
];

const experiences = [
  {
    role: "AI/ML Fellow",
    company: "Bytewise Ltd, Islamabad",
    period: "June 2024 — September 2024",
    details: [
      "Built & fine-tuned ML models (classification, regression, recommendations)",
      "Feature selection, preprocessing, hyperparameter tuning",
      "Designed & trained CNNs for image tasks"
    ]
  },
  {
    role: "Full Stack Web Development Trainee",
    company: "Decentral Developers, Islamabad",
    period: "November 2024 — February 2025",
    details: [
      "Developed full‑stack apps with React, Node.js, MongoDB & auth",
      "Built RESTful APIs serving AI models"
    ]
  }
];

const Education = () => (
  <section id="education" className="py-16">
    <div className="container max-w-5xl">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>NUML, Islamabad — BSc Artificial Intelligence</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>February 2023 — January 2027</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Machine Learning & Deep Learning</li>
              <li>Natural Language Processing</li>
              <li>Computer Vision</li>
              <li>Data Science & Big Data</li>
              <li>Reinforcement Learning</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>IMCG, Islamabad — ICS</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>November 2021 — July 2022</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-16">
    <div className="container max-w-5xl">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Card key={p.title} className="hover-scale">
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {p.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-16">
    <div className="container max-w-5xl">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="relative pl-6 border-l">
        {experiences.map((e) => (
          <article key={e.role} className="mb-10">
            <div className="absolute -left-2 mt-2 h-3 w-3 rounded-full bg-primary" />
            <h3 className="text-xl font-semibold">{e.role} — <span className="text-muted-foreground">{e.company}</span></h3>
            <p className="text-sm text-muted-foreground mb-2">{e.period}</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              {e.details.map(d => <li key={d}>{d}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-16">
    <div className="container max-w-5xl">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map(s => <Badge key={s} variant="secondary">{s}</Badge>)}
      </div>
    </div>
  </section>
);

const services = [
  { title: "AI Model Development", desc: "Supervised/unsupervised learning, CNNs, RNNs, transformers.", bullets: ["Problem framing", "Data prep & labeling", "Training & evaluation"] },
  { title: "MLOps & Deployment", desc: "Serve models reliably, monitor performance, iterate fast.", bullets: ["REST/GraphQL APIs", "CI/CD & containers", "Observability"] },
  { title: "Full‑stack AI Apps", desc: "Modern UX with React + production backends.", bullets: ["UI/UX implementation", "Auth & payments", "Analytics"] },
];

const Services = () => (
  <section id="services" className="py-16">
    <div className="container max-w-5xl">
      <h2 className="text-3xl font-bold mb-8">Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <Card key={s.title} className="hover-scale">
            <CardHeader>
              <CardTitle>{s.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p className="mb-3">{s.desc}</p>
              <ul className="list-disc pl-6 space-y-1">
                {s.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <Button variant="hero" asChild>
          <a href="mailto:sumayahashim559@gmail.com?subject=Project%20Inquiry%20—%20AI/ML%20Freelance">Book a free consultation</a>
        </Button>
      </div>
    </div>
  </section>
);
const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--x', `${e.clientX - rect.left}px`);
      el.style.setProperty('--y', `${e.clientY - rect.top}px`);
    };
    el.addEventListener('pointermove', handler);
    return () => el.removeEventListener('pointermove', handler);
  }, []);

  return (
    <header ref={ref} className="relative overflow-hidden">
      <div className="pointer-light" aria-hidden="true" />
      <div className="container max-w-5xl py-20">
        <nav className="flex items-center justify-between mb-10">
          <a href="#" className="font-bold tracking-tight text-lg">SH</a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#skills" className="story-link">Skills</a>
            <a href="#experience" className="story-link">Experience</a>
            <a href="#projects" className="story-link">Projects</a>
            <a href="#education" className="story-link">Education</a>
            <a href="#contact" className="story-link">Contact</a>
          </div>
        </nav>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-enter">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Sumaya Hashim</h1>
            <p className="text-lg text-muted-foreground mb-6">AI/ML Engineer crafting intelligent systems and full‑stack AI apps.</p>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" asChild>
                <a href="mailto:sumayahashim559@gmail.com">Contact Me</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/SpunkySam-cyber" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  <Github className="size-4" /> GitHub
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="https://www.linkedin.com/in/sumaya-hashim" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  <Linkedin className="size-4" /> LinkedIn
                </a>
              </Button>
            </div>
          </div>
          <div className="relative rounded-xl p-6 bg-card border animate-scale-in">
            <div className="rounded-full p-[3px] bg-gradient-primary inline-block">
              <img
                src="/images/sumaya-avatar.png.jpg"
                alt="Sumaya Hashim — AI/ML Engineer portrait"
                loading="lazy"
                decoding="async"
                className="h-56 w-56 md:h-72 md:w-72 rounded-full object-cover"
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Signature style: reactive teal/cyan glow following your cursor.</p>
          </div>
        </div>
      </div>
    </header>
  );
};

const Contact = () => (
  <section id="contact" className="py-16">
    <div className="container max-w-5xl">
      <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
      <div className="flex flex-wrap gap-3">
        <Button asChild variant="secondary"><a href="mailto:sumayahashim559@gmail.com">Email</a></Button>
        <Button asChild variant="outline"><a href="tel:03120551998">Call</a></Button>
        <Button asChild variant="ghost"><a href="https://github.com/SpunkySam-cyber" target="_blank" rel="noreferrer"><Github className="mr-2" />GitHub</a></Button>
      </div>
    </div>
  </section>
);

const JsonLd = () => (
  <script type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Sumaya Hashim",
      "jobTitle": "AI/ML Engineer",
      "email": "mailto:sumayahashim559@gmail.com",
      "telephone": "+923120551998",
      "url": window.location.origin,
      "image": `${window.location.origin}/images/sumaya-avatar.png`,
      "sameAs": ["https://github.com/SpunkySam-cyber"]
    }) }} />
);

const Index = () => {
  return (
    <main>
      <Hero />
      <section className="py-8">
        <div className="container max-w-5xl">
          <p className="text-muted-foreground max-w-3xl">Enthusiastic AI/ML Engineer with hands‑on in preprocessing, feature engineering, and deploying models with TensorFlow/PyTorch. I integrate AI into full‑stack apps to solve meaningful problems.</p>
        </div>
      </section>
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <JsonLd />
    </main>
  );
};

export default Index;
