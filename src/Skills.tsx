import { Code, Database, Server } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Tanstack Query", level: 86 },
        { name: "Next.js", level: 88 },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-8 h-8" />,
      skills: [
        { name: "Node.js", level: 93 },
        { name: "Express.js", level: 90 },
        { name: "MySQL", level: 82 }, 
        { name: "MongoDB", level: 87 },
        { name: "Prisma", level: 84 }, 
        
      ],
    },
    {
      title: "Tools & Others",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "Git", level: 95 },
        { name: "SocketIO", level: 86 },         
        { name: "C++", level: 67 },
        { name: "Firebase", level: 85 },
        { name: "Python", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-purple-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-blue-400">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white/90 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-white/70">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;