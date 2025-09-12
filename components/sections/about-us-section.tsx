export function AboutUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6 font-asul">
            About Us
          </h1>
          <p className="text-xl text-gray-600 mb-12 font-raleway">
            EventHub – No 1. Most Trusted Event Marketplace
          </p>
          
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p className="text-lg font-raleway">
              EventHub is a modern platform that connects vendors, planners, and clients, 
              simplifying the event planning process. We understand that organizing events 
              can be overwhelming, which is why we've created a comprehensive marketplace 
              that brings together all the essential services you need.
            </p>
            <p className="text-lg font-raleway">
              Our platform ensures seamless, reliable, and stress-free event organization 
              by providing verified vendors, secure payment systems, and transparent communication. 
              Whether you're planning a wedding, corporate event, birthday party, or any 
              special celebration, EventHub is your trusted partner in making it memorable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
