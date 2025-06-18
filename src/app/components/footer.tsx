// components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">Get in Touch</h2>
        </div>

        <div className="space-y-1">
          <p>Email: <a href="mailto:saweramunawar99@gmail.com" className="text-blue-400 hover:underline">saweramunawar99@gmail.com</a></p>
          <p>Phone: <a href="tel:+923321319835" className="text-blue-400 hover:underline">+92 332 1319835</a></p>
        </div>
      </div>
    </footer>
  );
}
