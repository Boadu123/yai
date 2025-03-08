import { useState } from "react";

export default function Product() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      id: 1,
      title: "Advanced Cooling System",
      description:
        "Experience superior cooling performance with our state-of-the-art system, ensuring optimal airflow and temperature control.",
      icon: "❄️",
      gradient: "from-green-500 to-green-600",
      details: {
        specifications: [
          "High-efficiency fan blades",
          "Smart temperature regulation",
          "Low-noise operation",
          "Energy-saving mode",
        ],
        benefits: [
          "Faster and better cooling",
          "Whisper-quiet performance",
          "Optimized power consumption",
          "Reliable and durable design",
        ],
        technicalSpecs: {
          power: "50W energy-efficient motor",
          noiseLevel: "Less than 30dB",
          speed: "3 adjustable levels",
          durability: "Designed for 10+ years of use",
        },
      },
    },
    {
      id: 2,
      title: "Multi-Functional LED Lighting",
      description:
        "Illuminate your space with bright, adjustable LED lighting, perfect for any environment or mood.",
      icon: "💡",
      gradient: "from-blue-500 to-blue-600",
      details: {
        specifications: [
          "Adjustable brightness levels",
          "Warm and cool light options",
          "Energy-efficient LEDs",
          "Long-lasting durability",
        ],
        benefits: [
          "Customizable lighting ambiance",
          "Low power consumption",
          "Enhanced visibility and comfort",
          "Sleek and modern design",
        ],
        technicalSpecs: {
          brightness: "Up to 1000 lumens",
          lifespan: "50,000+ hours",
          powerUsage: "5W ultra-efficient LED",
          colorModes: "Daylight, warm, and cool white",
        },
      },
    },
    {
      id: 3,
      title: "Built-in Bluetooth Speaker",
      description:
        "Enjoy crystal-clear sound with an integrated Bluetooth speaker, perfect for music, calls, and more.",
      icon: "🔊",
      gradient: "from-red-500 to-red-600",
      details: {
        specifications: [
          "High-definition audio",
          "Seamless Bluetooth connectivity",
          "Built-in microphone for calls",
          "Compact and powerful design",
        ],
        benefits: [
          "Immersive sound experience",
          "Wireless convenience",
          "Hands-free calling support",
          "Long-lasting battery life",
        ],
        technicalSpecs: {
          connectivity: "Bluetooth 5.0",
          batteryLife: "Up to 10 hours of playback",
          frequencyRange: "20Hz - 20kHz",
          chargingTime: "Fully charges in 2 hours",
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
            Next-Generation Multipurpose Fan
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Combining cooling, lighting, and sound in one powerful device for
            ultimate convenience and comfort.
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
                    {selectedFeature.details.specifications.map(
                      (spec, index) => (
                        <li
                          key={index}
                          className="text-gray-600 flex items-center"
                        >
                          ✅ {spec}
                        </li>
                      )
                    )}
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
