'use client';

import Image from 'next/image';

const GOOGLE_FORM_URL = 'https://forms.gle/your-google-form-id'; // Replace with actual Google Form link

export default function Register() {

  return (
    <section id="register" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <h2 className="section-title mb-12 text-center">Register Now</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Information & Benefits */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Join the 9th SAENIS TTTMS International Conference 2026 and be part of the thermal technologies revolution. Limited seats available!
              </p>

              <div className="space-y-4">
                <div className="card-dark group hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                  <h3 className="text-lg font-bold text-cyan-400 mb-2 flex items-center gap-2">
                    <span className="text-2xl">✓</span>
                    Access to All Sessions
                  </h3>
                  <p className="text-gray-400">Attend all keynotes, technical sessions, and workshops</p>
                </div>

                <div className="card-dark group hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                  <h3 className="text-lg font-bold text-purple-400 mb-2 flex items-center gap-2">
                    <span className="text-2xl">✓</span>
                    Networking Opportunities
                  </h3>
                  <p className="text-gray-400">Connect with researchers and industry professionals</p>
                </div>

                <div className="card-dark group hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                  <h3 className="text-lg font-bold text-cyan-400 mb-2 flex items-center gap-2">
                    <span className="text-2xl">✓</span>
                    Conference Materials
                  </h3>
                  <p className="text-gray-400">Receive proceedings, certificates, and resources</p>
                </div>

                <div className="card-dark group hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                  <h3 className="text-lg font-bold text-purple-400 mb-2 flex items-center gap-2">
                    <span className="text-2xl">✓</span>
                    Meals & Refreshments
                  </h3>
                  <p className="text-gray-400">Complimentary meals and beverages throughout the conference</p>
                </div>
              </div>

              {/* Pricing info */}
              <div className="border-t border-slate-700 pt-6 mt-8">
                <h3 className="text-lg font-bold text-cyan-400 mb-4">Registration Tiers</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <p className="text-sm text-gray-400">Student Rate</p>
                    <p className="text-2xl font-bold text-cyan-400">$50</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <p className="text-sm text-gray-400">Professional Rate</p>
                    <p className="text-2xl font-bold text-purple-400">$150</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - QR Code & Registration Link */}
            <div className="space-y-6">
              {/* QR Code Card */}
              <div className="card-dark border-2 border-cyan-500/30 flex flex-col items-center p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Scan to Register</h3>

                <div className="relative w-64 h-64 mb-6 bg-white rounded-lg p-4 flex items-center justify-center">
                  <Image
                    src="/registration-qr.jpg"
                    alt="Registration QR Code"
                    width={240}
                    height={240}
                    className="object-contain"
                  />
                </div>

                <p className="text-center text-gray-300 mb-6">
                  Scan the QR code with your mobile device to access the registration form
                </p>

                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-register w-full text-center"
                >
                  Open Registration Form
                </a>

                <p className="text-center text-xs text-gray-500 mt-4">
                  Or click the button above to fill the form directly
                </p>
              </div>

              {/* Additional Info */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <h4 className="text-lg font-bold text-purple-400 mb-3">Need Help?</h4>
                <p className="text-gray-300 text-sm mb-4">
                  If you experience any issues with the registration form, please contact us at:
                </p>
                <p className="text-cyan-400 font-semibold text-sm">
                  conference@saenis-tttms.org
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
