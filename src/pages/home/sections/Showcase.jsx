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
          Multipurpose Fan Innovations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow">
            <img
              src={Battery4}
              alt="Rechargeable Battery System"
              className="w-full h-56 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-2xl font-semibold text-[#00A896] mb-2">
              Rechargeable Battery System
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Enjoy uninterrupted airflow with a high-capacity rechargeable battery, ensuring long-lasting performance even in off-grid situations.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow">
            <img
              src={Battery2}
              alt="Integrated LED Lighting"
              className="w-full h-56 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-2xl font-semibold text-[#00A896] mb-2">
              Integrated LED Lighting
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Stay illuminated in any setting with built-in energy-efficient LED lighting, perfect for outdoor and emergency use.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow">
            <img
              src={Battery1}
              alt="Built-in Sound System"
              className="w-full h-56 object-cover rounded-2xl mb-4"
            />
            <h3 className="text-2xl font-semibold text-[#00A896] mb-2">
              Built-in Sound System
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Enhance your experience with an integrated Bluetooth speaker, allowing you to enjoy music and hands-free calls on the go.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
