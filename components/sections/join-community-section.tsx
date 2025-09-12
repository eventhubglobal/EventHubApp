import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function JoinCommunitySection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-16 sm:px-6 lg:px-56">
        <div className="bg-white rounded-2xl overflow-hidden border-8 border-brand-blue">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Image */}
            <div className="relative h-80 lg:h-full">
              <Image
                src="/images/image001.png"
                alt="Community event with people celebrating"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right Side - Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center items-center text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4 font-asul">
                Join our community for seamless event experience!
              </h2>
              <p className="text-lg text-black mb-8 font-raleway">
                Discover. &nbsp; Book. &nbsp; Celebrate.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* Book an Event Button */}
                <Button
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue-hover text-white font-semibold px-8 py-6 rounded-md"
                  asChild
                >
                  <Link href="/vendors">
                    Book an event
                  </Link>
                </Button>

                {/* Join as Vendor Button */}
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white hover:bg-gray-50 text-brand-blue border-2 border-brand-blue font-semibold px-8 py-6 rounded-md"
                  asChild
                >
                  <Link href="/register">
                    Join As Vendor
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
