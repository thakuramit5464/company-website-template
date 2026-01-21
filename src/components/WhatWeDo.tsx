interface Benefit {
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    title: "Accelerate Time to Market",
    description: "We streamline development processes and leverage proven frameworks to deliver your product faster without compromising quality."
  },
  {
    title: "Scale with Confidence",
    description: "Our solutions are built with scalability in mind, ensuring your applications grow seamlessly with your business needs."
  },
  {
    title: "Reduce Technical Debt",
    description: "Through modern architecture and best practices, we create maintainable codebases that save time and resources long-term."
  },
  {
    title: "Enhance User Experience",
    description: "We focus on intuitive design and smooth performance, creating applications that users love and businesses trust."
  },
  {
    title: "Ensure Security & Compliance",
    description: "Security is built into every layer of our solutions, protecting your data and meeting industry compliance standards."
  },
  {
    title: "Provide Ongoing Excellence",
    description: "Beyond launch, we offer continuous support, monitoring, and optimization to keep your systems performing at peak efficiency."
  }
];

export default function WhatWeDo() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 px-2">
            How We Help Your Business
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4">
            Real-world impact through strategic software development
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative p-5 sm:p-6 rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-900 border-l-4 border-blue-600 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 sm:mt-12 lg:mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Transform Your Business?</h3>
          <p className="text-base sm:text-lg mb-4 sm:mb-6 text-blue-100 px-2">
            Let's discuss how our expertise can drive your digital transformation
          </p>
          <a
            href="#contact"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300 text-sm sm:text-base"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
