import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order processing.",
      image: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://e-commerce-weld-kappa.vercel.app/",
      githubUrl: "https://github.com/Sharkolly/e-commerce",
    },
    {
      title: "Real Estate Website",
      description:
        "Real estate platform for buying, selling, and renting properties.",
      image: "🪴",
      technologies: ["React", "TypeScript", "Tailwind", "Express"],
      liveUrl: "https://perfect-homes-rouge.vercel.app/",
      githubUrl: "https://github.com/Sharkolly/Perfect-Homes",
    },

    {
      title: "Crypto Rates",
      description:
        "Cryptocurrency app that shows the current rates, price and market increase and decrease according to their Volume(24h).",
      image: "📊 ",
      technologies: ["React", "Python", "D3.js", "Redis"],
      liveUrl: "https://crypto-rate-app.vercel.app/",
      githubUrl: "https://github.com/Sharkolly/crypto-rates-app",
    },
    {
      title: "Foland Realty",
      description:
        "Real estate platform with property listings, user authentication, and interactive maps.",
      image: "🏘️",
      technologies: [
        "Socket-IO",
        "Express",
        "MongoDB",
        "Mapbox",
        "Nextjs",
        "Typescript",
      ],
      liveUrl: "foland-realty.vercel.app",
      githubUrl: "https://github.com/Sharkolly/foland-realty",
    },
  ];

  return (
    <section id="projects" className="pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="text-6xl mb-4 text-center">{project.image}</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 border border-white/30 text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
