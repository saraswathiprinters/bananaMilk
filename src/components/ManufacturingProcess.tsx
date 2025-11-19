import { Check, Droplets, Scissors, Flame, Settings, Package } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Check,
    title: 'Selection',
    description: 'We choose fully matured, chemical-free bananas from certified farms.'
  },
  {
    number: '02',
    icon: Droplets,
    title: 'Cleaning',
    description: 'Triple-stage washing removes impurities and ensures absolute hygiene.'
  },
  {
    number: '03',
    icon: Scissors,
    title: 'Peeling & Slicing',
    description: 'Uniform slicing guarantees even dehydration.'
  },
  {
    number: '04',
    icon: Flame,
    title: 'Drying Technology',
    description: 'Hot air drying / Spray drying / Freeze drying (based on requirement).'
  },
  {
    number: '05',
    icon: Settings,
    title: 'Grinding & Sieving',
    description: 'Ultra-fine powder produced in stainless steel mills.'
  },
  {
    number: '06',
    icon: Package,
    title: 'Packaging',
    description: 'Moisture-proof, export-safe packaging with nitrogen flushing.'
  }
];

export default function ManufacturingProcess() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-brown mb-4">
          How We Make Export-Grade Banana Powder
        </h2>
        <div className="w-24 h-1 bg-yellow mx-auto mb-16"></div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-yellow/30 -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-cream p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center text-2xl font-bold text-brown">
                      {step.number}
                    </div>
                    <div className="w-12 h-12 bg-green/10 rounded-full flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-green" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-brown mb-2">{step.title}</h3>
                  <p className="text-brown-light leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
