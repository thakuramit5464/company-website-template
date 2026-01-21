interface Advantage {
  title: string;
  description: string;
  icon: string;
}

const advantages: Advantage[] = [
  {
    title: "Enterprise-Grade Quality",
    description: "We adhere to industry best practices, comprehensive testing, and code reviews to ensure robust, production-ready software.",
    icon: "✓"
  },
  {
    title: "Scalable Architecture",
    description: "Every solution is designed to grow with your business, handling increased load and complexity without major rewrites.",
    icon: "📈"
  },
  {
    title: "Modern Standards",
    description: "We stay current with the latest technologies and frameworks, ensuring your software uses contemporary, maintainable approaches.",
    icon: "⚡"
  },
  {
    title: "Transparent Communication",
    description: "Regular updates, clear timelines, and open dialogue keep you informed throughout every phase of development.",
    icon: "💬"
  },
  {
    title: "Proven Track Record",
    description: "Years of experience delivering successful projects across industries, from startups to enterprise clients.",
    icon: "🏆"
  },
  {
    title: "Flexible Engagement",
    description: "Whether you need a full team, individual specialists, or ongoing support, we adapt to your requirements.",
    icon: "🔄"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 px-2">
            Why Choose Tech4Services
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
            We combine technical expertise with business understanding to deliver exceptional results
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="relative p-6 sm:p-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-700 dark:to-slate-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 font-bold text-blue-600 dark:text-blue-400">
                {advantage.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
                {advantage.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div className="p-4 sm:p-6">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">100+</div>
            <div className="text-sm sm:text-base text-slate-600 dark:text-slate-300">Projects Delivered</div>
          </div>
          <div className="p-4 sm:p-6">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
            <div className="text-sm sm:text-base text-slate-600 dark:text-slate-300">Happy Clients</div>
          </div>
          <div className="p-4 sm:p-6">
            <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</div>
            <div className="text-sm sm:text-base text-slate-600 dark:text-slate-300">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
