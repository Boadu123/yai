import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#00A896] mb-12">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Section - Contact Details */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#00A896]">
              Let's Connect
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Have questions about our multipurpose fan or want to partner with
              us? Reach out and let’s discuss how we can innovate cooling,
              lighting, and sound solutions together.
            </p>
            <div className="space-y-6 text-lg">
              <div className="flex items-center space-x-4">
                <Mail className="text-[#009c4a] w-6 h-6" />
                <span className="text-gray-700">info@multipurposefan.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-[#009c4a] w-6 h-6" />
                <span className="text-gray-700">+233 987 654 321</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-[#009c4a] w-6 h-6" />
                <span className="text-gray-700">Accra, Ghana</span>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-[#00A896] mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#004721]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#004721]"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-[#004721]"
              ></textarea>
              <button
                type="submit"
                className="bg-[#00A896] hover:bg-[#007BFF] text-white px-6 py-3 rounded-2xl text-lg shadow-lg transition-transform transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
