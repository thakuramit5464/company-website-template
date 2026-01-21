interface TechCategory {
  category: string;
  technologies: string[];
}

const techStack: TechCategory[] = [
  {
    category: "Web Technologies",
    technologies: ["React", "Next.js", "Vue.js", "Angular", "Node.js", "TypeScript", "Python", "Django", "FastAPI"]
  },
  {
    category: "Mobile Development",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "SwiftUI", "Android SDK", "iOS SDK"]
  },
  {
    category: "Desktop Platforms",
    technologies: ["Electron", "Qt", ".NET", "JavaFX", "Tauri", "Native Windows/Linux/macOS"]
  },
  {
    category: "Cloud & Infrastructure",
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Microservices"]
  },
  {
    category: "Databases & Storage",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch", "Firebase"]
  },
  {
    category: "DevOps & Tools",
    technologies: ["Git", "GitHub Actions", "Jenkins", "Terraform", "Ansible", "Monitoring & Logging"]
  }
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 px-2">
            Technologies & Platforms
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
            We work with cutting-edge technologies to deliver modern, future-proof solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {techStack.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs sm:text-sm font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 sm:mt-10 lg:mt-12 text-center px-4">
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300">
            Not seeing your preferred technology? We're adaptable and can work with your existing stack or recommend the best tools for your project.
          </p>
        </div>
      </div>
    </section>
  );
}
