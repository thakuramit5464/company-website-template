interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern frameworks, ensuring fast performance, scalability, and exceptional user experiences across all devices.",
    icon: "🌐"
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for Android and iOS, delivering seamless performance and intuitive interfaces.",
    icon: "📱"
  },
  {
    title: "Desktop Development",
    description: "Robust desktop applications for Windows, Linux, and macOS, tailored to your business needs with native performance.",
    icon: "💻"
  },
  {
    title: "iPhone & macOS Development",
    description: "Specialized development for Apple ecosystem, leveraging Swift, SwiftUI, and native frameworks for optimal performance.",
    icon: "🍎"
  },
  {
    title: "Cross-platform Development",
    description: "Unified codebase solutions that work seamlessly across multiple platforms, reducing development time and maintenance costs.",
    icon: "🔄"
  },
  {
    title: "Project Modernization & Legacy Upgrades",
    description: "Transform outdated systems into modern, maintainable solutions. We migrate legacy code to current technologies while preserving business logic.",
    icon: "⚡"
  },
  {
    title: "Ongoing Maintenance & Support",
    description: "Comprehensive technical support, regular updates, security patches, and proactive monitoring to keep your systems running smoothly.",
    icon: "🛠️"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 px-2">
            Our Services
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700"
            >
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{service.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
