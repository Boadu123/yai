import { useState } from "react";

export default function Product() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      id: 1,
      title: "Smart Battery Management System",
      description:
        "Optimize battery usage and extend lifespan with our intelligent battery management system, ensuring maximum efficiency and longevity.",
      icon: "🔋",
      gradient: "from-green-500 to-green-600",
      details: {
        specifications: [
          "Adaptive charging technology",
          "Real-time battery health monitoring",
          "Optimized power distribution",
          "Overcharge and temperature protection",
        ],
        benefits: [
          "Longer battery life",
          "Energy-efficient power consumption",
          "Reduced maintenance costs",
          "Safe and stable power management",
        ],
        technicalSpecs: {
          battery: "Lithium-ion 72V 30Ah",
          charging: "Fast charging in 3 hours",
          lifespan: "1000+ charge cycles",
          efficiency: "95% energy conversion",
        },
      },
    },
    {
      id: 2,
      title: "Regenerative Braking System",
      description:
        "Recover energy while braking, extending battery life and improving efficiency for longer rides.",
      icon: "⚡",
      gradient: "from-blue-500 to-blue-600",
      details: {
        specifications: [
          "Automatic energy recovery",
          "Seamless integration with braking system",
          "Improved energy efficiency",
          "Extended battery range",
        ],
        benefits: [
          "Increased riding range",
          "Reduced battery drain",
          "Improved braking response",
          "Eco-friendly energy usage",
        ],
        technicalSpecs: {
          recovery: "Up to 30% energy regen",
          response: "Instant activation",
          durability: "50,000+ braking cycles",
          compatibility: "Integrated with disc brakes",
        },
      },
    },
    {
      id: 3,
      title: "GPS-Enabled Theft Protection",
      description:
        "Ensure security with real-time GPS tracking, anti-theft alerts, and geo-fencing capabilities.",
      icon: "📍",
      gradient: "from-red-500 to-red-600",
      details: {
        specifications: [
          "Live location tracking",
          "Geo-fencing alerts",
          "Remote immobilization",
          "Tamper detection sensors",
        ],
        benefits: [
          "Enhanced motorcycle security",
          "Quick theft recovery",
          "Peace of mind for owners",
          "Remote access via mobile app",
        ],
        technicalSpecs: {
          tracking: "GPS + GLONASS dual system",
          accuracy: "Up to 1 meter",
          battery: "48-hour backup in theft mode",
          connectivity: "4G LTE & Bluetooth 5.0",
        },
      },
    },
  ];

  return (
    <section
      id="products"
      className="w-full py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
            Smart Electric Motorcycle Innovations
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our battery-powered motorcycles redefine urban mobility, offering efficiency, security, and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

              <div className="p-8">
                <div className="relative">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                <div className="mt-6 flex items-center justify-start">
                  <button
                    onClick={() => setSelectedFeature(feature)}
                    className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300 flex items-center"
                  >
                    Learn more
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedFeature && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-6 border-b border-gray-100 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedFeature.gradient} flex items-center justify-center mr-4`}
                  >
                    <span className="text-2xl">{selectedFeature.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {selectedFeature.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-600 mb-8">
                {selectedFeature.description}
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedFeature.details.specifications.map((spec, index) => (
                      <li key={index} className="text-gray-600 flex items-center">
                        ✅ {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
