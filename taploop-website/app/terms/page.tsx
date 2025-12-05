import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "TapLoop.ai Terms of Service - Terms and conditions for using our services.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-tight">
        <h1 className="font-display text-4xl font-bold text-neutral-900 mb-4">
          Terms of Service
        </h1>
        <p className="text-neutral-500 mb-12">Last updated: January 2025</p>

        <div className="prose prose-neutral max-w-none">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using TapLoop.ai's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h2>2. Description of Services</h2>
          <p>
            TapLoop.ai provides AI automation services, including but not limited to workflow automation, AI voice agents, CRM integrations, data pipelines, and related consulting services. The specific services provided will be outlined in individual service agreements.
          </p>

          <h2>3. Account Registration</h2>
          <p>
            To use certain features of our services, you may be required to create an account. You agree to:
          </p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Notify us immediately of any unauthorized access</li>
            <li>Be responsible for all activities under your account</li>
          </ul>

          <h2>4. Service Agreements</h2>
          <p>
            Specific automation projects will be governed by individual service agreements that outline scope, deliverables, timelines, and pricing. In case of conflict between these Terms and a service agreement, the service agreement shall prevail.
          </p>

          <h2>5. Payment Terms</h2>
          <p>
            Payment terms are specified in individual service agreements. Generally:
          </p>
          <ul>
            <li>Setup fees are due upon project commencement</li>
            <li>Monthly fees are billed in advance</li>
            <li>Invoices are due within 30 days unless otherwise specified</li>
            <li>Late payments may incur interest charges</li>
          </ul>

          <h2>6. Intellectual Property</h2>
          <h3>Our Intellectual Property</h3>
          <p>
            TapLoop.ai retains ownership of our proprietary tools, frameworks, methodologies, and pre-existing intellectual property. We grant you a license to use the deliverables created for your project.
          </p>
          <h3>Your Intellectual Property</h3>
          <p>
            You retain ownership of your data, content, and any pre-existing intellectual property you provide to us.
          </p>

          <h2>7. Confidentiality</h2>
          <p>
            We will maintain the confidentiality of your business information and data. We will not disclose your confidential information to third parties except as required to provide our services or as required by law.
          </p>

          <h2>8. Data Protection</h2>
          <p>
            We are committed to protecting your data. For healthcare and other regulated industries, we can enter into Business Associate Agreements (BAAs) and implement HIPAA-compliant practices as needed.
          </p>

          <h2>9. Service Level</h2>
          <p>
            We strive to provide reliable services. Specific uptime guarantees and support response times will be outlined in your service agreement. We are not liable for downtime caused by third-party services or force majeure events.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law:
          </p>
          <ul>
            <li>Our liability is limited to the fees paid for services in the preceding 12 months</li>
            <li>We are not liable for indirect, incidental, or consequential damages</li>
            <li>We are not liable for third-party service failures</li>
          </ul>

          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify and hold TapLoop.ai harmless from claims arising from your use of our services, your violation of these terms, or your violation of any rights of a third party.
          </p>

          <h2>12. Termination</h2>
          <p>
            Either party may terminate services as specified in the service agreement. Upon termination:
          </p>
          <ul>
            <li>You remain responsible for fees incurred before termination</li>
            <li>We will provide reasonable assistance in transitioning services</li>
            <li>Confidentiality obligations survive termination</li>
          </ul>

          <h2>13. Satisfaction Guarantee</h2>
          <p>
            We offer a 2-week satisfaction guarantee on new projects. If you are not satisfied within 14 days of project completion, we will work to resolve the issues or provide a refund of setup fees as outlined in your service agreement.
          </p>

          <h2>14. Modifications to Terms</h2>
          <p>
            We may modify these terms at any time. We will provide notice of material changes. Continued use of our services after changes constitutes acceptance of the modified terms.
          </p>

          <h2>15. Governing Law</h2>
          <p>
            These terms are governed by the laws of the State of California, without regard to conflict of law principles. Any disputes shall be resolved in the courts of San Francisco, California.
          </p>

          <h2>16. Contact Information</h2>
          <p>
            For questions about these Terms of Service, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> legal@taploop.ai<br />
            <strong>Address:</strong> TapLoop.ai, San Francisco, CA
          </p>
        </div>
      </div>
    </div>
  );
}
