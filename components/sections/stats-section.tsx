import { 
  Shield, 
  Calendar, 
  Users, 
  Star
} from 'lucide-react';

export function StatsSection() {
  const stats = [
    { label: 'Verified Vendors', value: '500+', icon: Shield },
    { label: 'Events Completed', value: '2,000+', icon: Calendar },
    { label: 'Happy Clients', value: '5000+', icon: Users },
    { label: 'Average Rating', value: '4.8', icon: Star },
  ];

  return (
    <section className="py-16 bg-brand-blue-light/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <stat.icon className="h-8 w-8 text-brand-blue" />
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-brand-blue mb-2">{stat.value}</div>
              <div className="text-brand-blue">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
