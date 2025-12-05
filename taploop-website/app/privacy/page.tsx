import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "TapLoop.ai Privacy Policy - How we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-tight">
        <h1 className="font-display text-4xl font-bold text-neutral-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-neutral-500 mb-12">Last updated: January 2025</p>

        <div className="prose prose-neutral max-w-none">
          <h2>Introduction</h2>
          <p>
            TapLoop.ai ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website taploop.ai, use our services, or engage with us in other ways.
          </p>

          <h2>Information We Collect</h2>
          <h3>Information You Provide</h3>
          <p>We collect information you voluntarily provide, including:</p>
          <ul>
            <li>Contact information (name, email address, phone number)</li>
            <li>Company information (company name, industry, role)</li>
            <li>Communication content (messages, inquiries, feedback)</li>
            <li>Account information if you create an account</li>
            <li>Payment information for billing purposes</li>
          </ul>

          <h3>Information Automatically Collected</h3>
          <p>When you visit our website, we may automatically collect:</p>
          <ul>
            <li>Device information (browser type, operating system)</li>
            <li>IP address and location data</li>
            <li>Usage data (pages visited, time spent, clicks)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Analyze usage patterns to improve user experience</li>
            <li>Protect against fraud and unauthorized access</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share your information with:
          </p>
          <ul>
            <li>Service providers who assist in our operations</li>
            <li>Professional advisors (lawyers, accountants)</li>
            <li>Law enforcement when required by law</li>
            <li>Business partners with your consent</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Delete your personal information</li>
            <li>Object to or restrict processing</li>
            <li>Data portability</li>
            <li>Withdraw consent</li>
          </ul>

          <h2>Cookies</h2>
          <p>
            We use cookies and similar technologies to enhance your experience on our website. You can control cookies through your browser settings. Disabling cookies may affect the functionality of our website.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> privacy@taploop.ai<br />
            <strong>Address:</strong> TapLoop.ai, San Francisco, CA
          </p>
        </div>
      </div>
    </div>
  );
}
