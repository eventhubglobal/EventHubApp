import { Shield, Lightbulb, Users, Award } from 'lucide-react';

export function ValuesSection() {
  const values = [
    {
      icon: Shield,
      title: 'Trust'
    },
    {
      icon: Lightbulb,
      title: 'Innovation'
    },
    {
      icon: Users,
      title: 'Community'
    },
    {
      icon: Award,
      title: 'Excellence'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6 font-asul">
            Our Values
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-brand-blue-light/20 rounded-full flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-brand-blue" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-brand-blue">
                {value.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
