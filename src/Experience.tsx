const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Bronze Stone Capital Limited",
      period: "2025 - Present",
      description:
        "Build responsive web applications with React, TailwindCSS, and WordPress, focusing on UI/UX enhancements, performance optimization, SEO improvements, and customizing WordPress themes and plugins to meet client needs.",
      technologies: ["React", "Node.js", "Wordpress", "TypeScript"],
    },
    {
      title: "Full Stack Developer",
      company: "Freelancer.",
      period: "2023 - 2025",
      description:
        "Design and develop end-to-end web solutions that are fast, scalable, and user-friendly. With hands-on expertise in React, TailwindCSS, Node.js, Express, MongoDB, and MySQL, I handle everything from building intuitive frontends to crafting robust backends and APIs.",
      technologies: ["React.js", "Express", "MongoDB", "MySQL", "Prisma"],
    },
    {
      title: "Frontend Developer",
      company: "Freelancer.",
      period: "2022 - 2023",
      description:
        "Built responsive web applications, optimized performance, and worked closely with designers to implement pixel-perfect UI components.",
      technologies: ["React", "JavaScript", "SASS", "TailwindCSS"],
    },
  ];

  return (
    <section id="experience" className="pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 max-md:mb-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Work <span className="text-purple-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 max-md:hidden"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative  flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900 max-md:hidden"></div>

              <div
                className={`ml-12 md:ml-0 max-md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400 font-semibold">{exp.company}</p>
                    <p className="text-white/60 text-sm">{exp.period}</p>
                  </div>

                  <p className="text-white/80 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
