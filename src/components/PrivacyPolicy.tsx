import React from 'react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
        
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Welcome to Automations.Solutions' Privacy Policy</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Thank you for visiting Automations.Solutions. We respect your privacy and are committed to protecting your personal data. 
            This Privacy Policy outlines how we collect, use, and protect your information when you use our website.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">What Information Do We Collect?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">We collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li><strong>Contact Information:</strong> Name, Email, Phone Number (when you submit a contact form or request more information)</li>
            <li><strong>Website Usage Data:</strong> IP Address, Browser Type, Device Type, Pages Visited (for website analytics and improvement)</li>
            <li><strong>Cookie Data:</strong> Essential cookies for website functionality and analytics cookies for site improvement</li>
          </ul>
        </section>

        {/* Use of Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How Do We Use Your Information?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li><strong>Respond to Your Inquiries:</strong> Provide more information about our services</li>
            <li><strong>Improve Our Website:</strong> Analyze website usage data to enhance user experience</li>
            <li><strong>Comply with Legal Requirements:</strong> Meet regulatory obligations (if applicable)</li>
          </ul>
        </section>

        {/* Sharing of Information */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Do We Share Your Information?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We do not share your information with third-party companies for marketing purposes. However, we may share your information with:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li><strong>Service Providers:</strong> Trusted partners who assist with website maintenance, analytics, or contact form management</li>
            <li><strong>Legal Authorities:</strong> In response to a court order, subpoena, or other legal requirement (if applicable)</li>
          </ul>
        </section>

        {/* Security */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">How Do We Protect Your Information?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">We implement the following security measures to protect your information:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li><strong>SSL Encryption:</strong> Secure Sockets Layer (SSL) encryption for data transmission</li>
            <li><strong>Access Controls:</strong> Restricted access to authorized personnel only</li>
            <li><strong>Regular Updates:</strong> Regular software and security updates to prevent vulnerabilities</li>
          </ul>
        </section>

        {/* Changes to Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Updates to Our Privacy Policy</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We reserve the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting on our website. 
            Please review this policy regularly for updates.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Have Questions or Concerns?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">If you have any questions or concerns about our Privacy Policy, please:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Email us at: contact@automations.solutions</li>
            <li>Call us at: +1 (717) 904-4104</li>
            <li>Use our contact form on the Contact page</li>
          </ul>
        </section>

        {/* Last Updated */}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}