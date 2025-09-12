import { Target, Telescope } from 'lucide-react';

export function MissionVisionSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Mission */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-brand-blue mb-6 font-asul">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-raleway">
              To simplify event planning by connecting people to trusted vendors and tools, 
              while upholding integrity, innovation, and excellence in every interaction.
            </p>
          </div>

          {/* Vision */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center">
                <Telescope className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-brand-blue mb-6 font-asul">
              Our Vision
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-raleway">
              To become the leading platform that redefines how events are planned and 
              executed across Africa and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
