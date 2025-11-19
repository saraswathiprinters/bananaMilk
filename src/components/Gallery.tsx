import { Factory, Package, Truck, Award } from 'lucide-react';

const galleryItems = [
  {
    icon: Factory,
    title: 'Factory Facilities',
    description: 'State-of-the-art manufacturing unit'
  },
  {
    icon: Package,
    title: 'Processing Line',
    description: 'Advanced drying and grinding equipment'
  },
  {
    icon: Truck,
    title: 'Packaging Unit',
    description: 'Hygienic packaging with nitrogen flushing'
  },
  {
    icon: Award,
    title: 'Finished Product',
    description: 'Premium quality banana powder ready for export'
  }
];

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-brown mb-4">
          Our Manufacturing Excellence
        </h2>
        <div className="w-24 h-1 bg-yellow mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 bg-gradient-to-br from-yellow-50 to-cream h-80"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-24 h-24 bg-yellow rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-12 h-12 text-brown" />
                </div>
                <h3 className="text-2xl font-bold text-brown mb-3">{item.title}</h3>
                <p className="text-brown-light text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
