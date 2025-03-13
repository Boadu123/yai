import { FaTiktok } from "react-icons/fa";
import { Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#00A896] text-white py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-lg">
          &copy; 2025 MultiPurpose Fans Ghana. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://www.tiktok.com/@prosper.multipurp?_t=ZM-8uI4yghaAAX&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FaTiktok className="w-6 h-6 hover:text-[#009c4a] transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/prosper-multipurpose-fan-988b42353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 hover:text-[#009c4a] transition-colors" />
          </a>
          <a
            href="https://www.instagram.com/multipurpose_led_fan?igsh=c3drZWdpa2tvMGNo&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 hover:text-[#009c4a] transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}
