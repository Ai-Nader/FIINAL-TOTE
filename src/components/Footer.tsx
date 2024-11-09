import React from 'react';
import { Link } from './Link';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">OCTA LLC</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <p>30 N Gould St Ste 27302, Sheridan, WY 82801</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={20} />
                <a href="tel:+17179044104" className="hover:text-white transition-colors">
                  +1 (717) 904-4104
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} />
                <a href="mailto:contact@automations.solutions" className="hover:text-white transition-colors">
                  contact@automations.solutions
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#services-section" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/make" className="hover:text-white transition-colors">Make.com Templates</Link></li>
              <li><Link href="/services/notion" className="hover:text-white transition-colors">Notion Templates</Link></li>
              <li><Link href="/services/n8n" className="hover:text-white transition-colors">N8N Templates</Link></li>
              <li><Link href="/services/reliance-ai" className="hover:text-white transition-colors">RELIANCE AI Templates</Link></li>
              <li><Link href="/services/custom" className="hover:text-white transition-colors">Custom Solutions</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest updates on automation solutions.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 dark:bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} OCTA LLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}