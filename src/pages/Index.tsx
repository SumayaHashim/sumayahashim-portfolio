import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const skills = [
  "Python", "Machine Learning", "Deep Learning", "Data Preprocessing", "Pandas", "NumPy", "Matplotlib",
  "Scikit-Learn", "TensorFlow", "Keras", "PyTorch", "Node.js", "React", "HTML & CSS", "Git", "Postman",
  "Model Optimization", "Hyperparameter Tuning", "Time Management", "Teamwork", "Communication",
  "Adaptability", "Attention to Detail"
];

const projects = [
  {
    title: "AI Agent RAG",
    points: [
      "AI-powered retrieval augmented generation chatbot",
      "React frontend integrated with Node.js and Python backend",
      "Supports document uploads and conversational AI"
    ],
    link: "https://github.com/SpunkySam-cyber/ai-agent-rag",
    demo: "" // Add your live demo URL if available
  },
  {
    title: "Sumaya Hashim Portfolio",
    points: [
      "Personal portfolio website built with React and Vite",
      "Responsive design with modern UI components",
      "Deployed on Vercel/GitHub Pages"
    ],
    link: "https://github.com/SumayaHashim/sumayahashimportfolio",
    demo: "https://sumayahashimportfolio.lovable.app"
  },
  {
    title: "Image Moderation API",
    points: [
      "Backend API for moderating images using AI models",
      "Built with Node.js and Python",
      "Integrated with client applications"
    ],
    link: "https://github.com/SpunkySam-cyber/imagemoderation-api"
  },
  {
    title: "Sid Image Enhancer (WIP)",
    points: [
      "Image enhancement tool using AI (work in progress)",
      "Built with [tech stack]",
      "Planned features include [feature list]"
    ],
    link: "https://github.com/SpunkySam-cyber/sid-image-enhancer"
  },
  {
    title: "PlantPal Application",
    points: [
      "Desktop app for plant care built with Python and Tkinter",
      "Local application focusing on usability and features"
    ],
    link: "https://github.com/SpunkySam-cyber/plantpal-application"
  },
  {
    title: "Counter App",
    points: [
      "Simple counter implemented with JavaScript, HTML, CSS",
      "Demonstrates basic frontend development skills"
    ],
    link: "https://github.com/SpunkySam-cyber/counter-app"
  }
];

const experiences = [
  {
    role: "ML/DL Fellow",
    company: "Buildables.dev",
    period: "August 2025 — Present",
    details: [
      "Working on machine learning and deep learning projects",
      "Applying advanced models to real-world problems",
      "Collaborating with cross-functional teams to deploy AI solutions"
    ]
  },
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

const servicesData = [
  {
    title: "AI Model Development",
    desc: "Building supervised and unsupervised models including CNNs, RNNs, and recommendation systems.",
    bullets: [
      "Classification, regression, recommendation systems",
      "Feature selection and hyperparameter tuning",
      "Training and evaluating models using TensorFlow, PyTorch, Scikit-Learn"
    ]
  },
  {
    title: "Full-stack AI Applications",
    desc: "Develop modern web applications integrating AI models with React and backend services.",
    bullets: [
      "React frontends with Node.js and Python backends",
      "Secure RESTful APIs serving AI functionality",
      "UI/UX improvements and analytics integration"
    ]
  },
  {
    title: "MLOps & Deployment",
    desc: "Deploy and manage AI models efficiently with monitoring and continuous integration.",
    bullets: [
      "REST/GraphQL APIs",
      "Model optimization and monitoring",
      "CI/CD pipelines and containerization"
    ]
  },
  {
    title: "Data Science & Analytics",
    desc: "Data preprocessing, feature engineering, and big data analysis to derive insights.",
    bullets: [
      "Data cleaning and transformation",
      "Time-series forecasting and anomaly detection",
      "Visualization with Matplotlib and other tools"
    ]
  },
  {
    title: "Computer Vision Solutions",
    desc: "Design and train CNN-based models for image classification and processing.",
    bullets: [
      "Image augmentation and dropout techniques",
      "Object detection and classification tasks",
      "Handling datasets like CIFAR-10, MNIST"
    ]
  },
  {
    title: "NLP & Reinforcement Learning",
    desc: "Implement natural language processing and reinforcement learning models.",
    bullets: [
      "Text data preprocessing and analysis",
      "Building chatbots and recommendation agents",
      "Applying RL algorithms to complex problems"
    ]
  }
];

const Education = () => (
  <section id="education" className="py-16 bg-gradient-to-r from-cyan-100 to-teal-100">
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

const ContactForm = () => {
  const whatsappNumber = "923120551998"; // WhatsApp number without plus or spaces
  const skillsServices = servicesData.map(s => s.title);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedService, setSelectedService] = useState(skillsServices[0]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:sumayahashim559@gmail.com?subject=Service%20Inquiry%20-%20${encodeURIComponent(selectedService)}&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  const handleWhatsAppClick = () => {
    const whatsappMessage = `Service Inquiry - ${selectedService}%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg border border-teal-300">
        <h3 className="text-xl font-semibold mb-4 text-teal-700">Contact Me</h3>
        <label className="block mb-3">
          Name:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="w-full mt-1 border border-teal-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </label>
        <label className="block mb-3">
          Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full mt-1 border border-teal-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </label>
        <label className="block mb-3">
          Service:
          <select
            value={selectedService}
            onChange={e => setSelectedService(e.target.value)}
            className="w-full mt-1 border border-teal-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            {skillsServices.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </label>
        <label className="block mb-4">
          Message:
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            rows={4}
            className="w-full mt-1 border border-teal-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-2 rounded hover:from-cyan-600 hover:to-teal-600 transition-all"
        >
          Send Email
        </button>
      </form>

      <div className="max-w-md mx-auto mt-4 text-center">
        <button
          onClick={handleWhatsAppClick}
          className="inline-flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          aria-label="Contact via WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.52 3.48A11.78 11.78 0 0012 0C5.383 0 0 5.383 0 12a11.9 11.9 0 002.049 6.158L0 24l5.916-2.036A11.95 11.95 0 0012 24c6.617 0 12-5.383 12-12 0-3.206-1.25-6.215-3.48-8.52zm-5.244 13.51c-.428.218-1.21.413-2.58-.908-1.345-1.31-1.74-2.187-1.96-2.606-.216-.397-.023-.91.296-1.21l.84-.84c.322-.322.79-.43 1.175-.304a1.764 1.764 0 011.223.965c.61 1.04.853 2.17.77 3.296z" />
          </svg>
          Contact via WhatsApp
        </button>
      </div>
    </>
  );
};

const Projects = () => (
  <section id="projects" className="py-16 bg-gradient-to-r from-cyan-100 to-teal-100">
    <div className="container max-w-5xl">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Card key={p.title} className="hover-scale border border-teal-400 hover:border-cyan-400 transition-colors">
            <CardHeader>
              <CardTitle className="text-teal-700">{p.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {p.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
              <div className="mt-4 flex gap-3">
                {p.link && (
                  <Button asChild size="sm" variant="outline" className="border-teal-600 hover:bg-cyan-200">
                    <a href={p.link} target="_blank" rel="noopener noreferrer">GitHub</a>
                  </Button>
                )}
                {p.demo && (
                  <Button asChild size="sm" variant="outline" className="border-teal-600 hover:bg-cyan-200">
                    <a href={p.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-16 bg-gradient-to-r from-cyan-100 to-teal-100">
    <div className="container max-w-5xl">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="relative pl-6 border-l border-teal-400">
        {experiences.map((e) => (
          <article key={e.role} className="mb-10">
            <div className="absolute -left-2 mt-2 h-3 w-3 rounded-full bg-teal-600" />
            <h3 className="text-xl font-semibold text-teal-700">{e.role} — <span className="text-muted-foreground">{e.company}</span></h3>
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
  <section id="skills" className="py-16 bg-gradient-to-r from-cyan-100 to-teal-100">
    <div className="container max-w-5xl">
      <h2 className="text-3xl font-bold mb-8 text-teal-800">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map(s => <Badge key={s} variant="secondary" className="bg-cyan-200 text-teal-700">{s}</Badge>)}
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-16 bg-gradient-to-r from-cyan-100 to-teal-100">
    <div className="container max-w-5xl">
      <h2 className="text-3xl font-bold mb-8 text-teal-800">Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {servicesData.map((s) => (
          <Card key={s.title} className="hover-scale border border-teal-400 hover:border-cyan-400 transition-colors">
            <CardHeader>
              <CardTitle className="text-teal-700">{s.title}</CardTitle>
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
    <header ref={ref} className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-teal-50">
      <div className="pointer-light" aria-hidden="true" />
      <div className="container max-w-5xl py-20">
        <nav className="flex items-center justify-between mb-10">
          <a href="#" className="font-bold tracking-tight text-lg text-teal-800" aria-label="Home">SH</a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#skills" className="story-link text-teal-700 hover:text-cyan-500" aria-label="Skills Section">Skills</a>
            <a href="#experience" className="story-link text-teal-700 hover:text-cyan-500" aria-label="Experience Section">Experience</a>
            <a href="#projects" className="story-link text-teal-700 hover:text-cyan-500" aria-label="Projects Section">Projects</a>
            <a href="#education" className="story-link text-teal-700 hover:text-cyan-500" aria-label="Education Section">Education</a>
            <a href="#services" className="story-link text-teal-700 hover:text-cyan-500" aria-label="Services Section">Services</a>
            <a href="#contact" className="story-link text-teal-700 hover:text-cyan-500" aria-label="Contact Section">Contact</a>
          </div>
        </nav>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-enter">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-teal-900">Sumaya Hashim</h1>
            <p className="text-lg text-muted-foreground mb-6">ML/DL Fellow @ Buildables.dev | AI/ML Engineer crafting intelligent systems and full‑stack AI apps.</p>
            <p className="mb-6">
              Enthusiastic AI/ML Engineer with hands‑on in preprocessing, feature engineering, and deploying models with TensorFlow/PyTorch.
              I integrate AI into full‑stack apps to solve meaningful problems. I also work as a freelancer on Upwork.{" "}
              <a href="https://www.upwork.com/freelancers/~01c135b397baf7c3be" className="text-cyan-500 underline" target="_blank" rel="noopener noreferrer">View my profile</a>.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" asChild className="hover:scale-105 transition-transform">
                <a href="mailto:sumayahashim559@gmail.com" aria-label="Contact Me">Contact Me</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/SpunkySam-cyber" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-teal-700 hover:text-cyan-500" aria-label="GitHub">
                  <Github className="size-4" /> GitHub
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="https://www.linkedin.com/in/sumaya-hashim-864308267/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-teal-700 hover:text-cyan-500" aria-label="LinkedIn">
                  <Linkedin className="size-4" /> LinkedIn
                </a>
              </Button>
            </div>
          </div>
          <div className="relative rounded-xl p-6 bg-card border animate-scale-in border-teal-400 flex justify-center items-center shadow-lg">
            <div className="rounded-full p-[3px] bg-gradient-to-r from-teal-500 to-cyan-400 inline-block shadow-md">
              <img
                src="/images/profile-pic.jpg"
                alt="Sumaya Hashim — AI/ML Engineer portrait"
                loading="lazy"
                decoding="async"
                className="h-56 w-56 md:h-72 md:w-72 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Contact = () => (
  <section id="contact" className="py-16 bg-gradient-to-r from-cyan-100 to-teal-100">
    <div className="container max-w-5xl">
      <h2 className="text-3xl font-bold mb-6 text-teal-800">Get in touch</h2>
      <ContactForm />
      <div className="mt-6 flex flex-wrap gap-3">
        <Button asChild variant="secondary"><a href="mailto:sumayahashim559@gmail.com">Email</a></Button>
        <Button asChild variant="outline"><a href="tel:03120551998">Call</a></Button>
        <Button asChild variant="ghost"><a href="https://github.com/SpunkySam-cyber" target="_blank" rel="noreferrer"><Github className="mr-2" />GitHub</a></Button>
      </div>
    </div>
  </section>
);

const JsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Sumaya Hashim",
      "jobTitle": "ML/DL Fellow @ Buildables.dev | AI/ML Engineer",
      "email": "mailto:sumayahashim559@gmail.com",
      "telephone": "+923120551998",
      "url": typeof window !== "undefined" ? window.location.origin : "",
      "image": typeof window !== "undefined" ? `${window.location.origin}/images/sumaya-avatar.png` : "",
      "sameAs": [
        "https://github.com/SpunkySam-cyber",
        "https://www.linkedin.com/in/sumaya-hashim-864308267/",
        "https://www.upwork.com/freelancers/~01c135b397baf7c3be"
      ]
    }) }}
  />
);

const Index = () => {
  return (
    <main>
      <Hero />
      {/* Removed duplicate introductory paragraph to reduce clutter */}
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Services />
      <Contact />
      <JsonLd />
    </main>
  );
};

export default Index;
