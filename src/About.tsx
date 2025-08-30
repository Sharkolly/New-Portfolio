import { Code, Globe, Server } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-white/80 leading-relaxed">
              I'm a passionate Full Stack Developer with over 4+ years of
              experience in creating robust web applications. My journey in
              software development started with a curiosity about how things
              work, which led me to explore various technologies and frameworks.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              I specialize in modern JavaScript frameworks like React, Node.js,
              and have extensive experience with databases. I believe in writing
              clean, maintainable code and creating user experiences that make a
              difference.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              {/* <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">32+</div>
                <div className="text-white/70">Projects Completed</div>
              </div> */}
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  4+
                </div>
                <div className="text-white/70">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Code className="w-8 h-8 text-blue-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Frontend Development
                    </h3>
                    <p className="text-white/70">
                      React, TypeScript, Tailwind CSS
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Server className="w-8 h-8 text-purple-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Backend Development
                    </h3>
                    <p className="text-white/70">
                      Node.js, Express, Python, PostgreSQL
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Globe className="w-8 h-8 text-green-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Full Stack Solutions
                    </h3>
                    <p className="text-white/70">
                      End-to-end application development
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
