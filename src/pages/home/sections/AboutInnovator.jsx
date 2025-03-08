import React from 'react';
import InnovatorImage from '../../../images/innovator.png';
import { Award, Lightbulb, Brain, PenTool } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#00A896] mb-4">
            Meet the Innovator
          </h2>
          <div className="w-24 h-1 bg-[#00A896] mx-auto"></div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image section */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-tr-[4rem] rounded-bl-[4rem] -rotate-6"></div>
            <img
              src={InnovatorImage}
              alt="Prosper Mensah working on the Multipurpose Fan"
              className="relative w-full h-[600px] object-cover rounded-tr-[3rem] rounded-bl-[3rem] shadow-2xl"
            />
          </div>

          {/* Content section */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#007BFF] mb-4">Revolutionizing Portable Cooling</h3>
              <p className="text-gray-700 leading-relaxed">
                Prosper Mensah is transforming how people experience comfort with his innovative Multipurpose Fan. Designed for versatility, this rechargeable fan integrates lighting, a speaker, and a power bank to provide convenience in various settings, from homes to outdoor adventures.
              </p>
            </div>

            {/* Achievement cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Award className="w-8 h-8 text-green-500 mb-3" />
                <h4 className="font-semibold text-lg mb-2">Award-Winning Design</h4>
                <p className="text-sm text-gray-600">Recognized for its innovative combination of functionality and efficiency.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <Brain className="w-8 h-8 text-green-500 mb-3" />
                <h4 className="font-semibold text-lg mb-2">Smart Engineering</h4>
                <p className="text-sm text-gray-600">Developed with a unique power system for extended battery life.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <PenTool className="w-8 h-8 text-green-500 mb-3" />
                <h4 className="font-semibold text-lg mb-2">Multi-Functionality</h4>
                <p className="text-sm text-gray-600">Equipped with a fan, LED light, and Bluetooth speaker for maximum utility.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <Lightbulb className="w-8 h-8 text-green-500 mb-3" />
                <h4 className="font-semibold text-lg mb-2">Sustainable Innovation</h4>
                <p className="text-sm text-gray-600">Designed to be energy-efficient and adaptable for off-grid use.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
