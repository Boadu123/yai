import Battery4 from '../../../images/battery4.png';
import Battery2 from '../../../images/battery2.png';
import Battery1 from '../../../images/battery1.png';

export default function ShowcaseSection() {
  return (
    <section
      id="showcase"
      className="w-full py-20 bg-white"
      style={{ fontFamily: 'Times New Roman' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#00A896] mb-12">
          Electric Motorcycle Innovations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow">
            <img
              src={Battery4}
              alt="Advanced Battery System"
              className="w-full h-56 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-2xl font-semibold text-[#00A896] mb-2">
              Advanced Battery System
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Experience longer rides with our high-capacity lithium-ion batteries, engineered for efficiency and rapid charging.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow">
            <img
              src={Battery2}
              alt="Smart Energy Management"
              className="w-full h-56 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-2xl font-semibold text-[#00A896] mb-2">
              Smart Energy Management
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Optimize power usage with AI-driven energy distribution, ensuring a balanced and sustainable performance on every trip.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow">
            <img
              src={Battery1}
              alt="Robust & Sustainable Design"
              className="w-full h-56 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-2xl font-semibold text-[#00A896] mb-2">
              Robust & Sustainable Design
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Built with eco-friendly materials, our motorcycles offer superior durability while reducing environmental impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
