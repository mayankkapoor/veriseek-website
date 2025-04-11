
import React from "react"

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-primary mb-8">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p className="mb-4">
          This Privacy Policy explains how we collect, use, and safeguard your information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          We may collect the following types of information through registration forms and interactions on our website:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Full name of student and/or school representative</li>
          <li>School name and contact details</li>
          <li>Student's age or date of birth</li>
          <li>Parent/guardian contact information</li>
          <li>Email addresses and phone numbers</li>
          <li>Media (photos/videos) from event participation</li>
          <li>Payment-related details (processed via secure third-party services)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use your data for the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>To manage competition registration and logistics</li>
          <li>To contact participants or their guardians regarding event updates</li>
          <li>To verify eligibility and school representation</li>
          <li>To share results, certificates, or follow-up materials</li>
          <li>For event promotion (with consent), including use of photos or videos</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">3. Media and Publicity Consent</h2>
        <p className="mb-4">
          By registering for the competition, participants and guardians consent to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Event photography and videography</li>
          <li>Use of media content for promotional materials, social media, and reports</li>
        </ul>
        <p className="mb-4">
          If you wish to opt out of media usage, please email us at team@veriseekeducation.com.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">4. Data Protection and Storage</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>All personal information is stored securely and is only accessible to authorized event organizers.</li>
          <li>We do not sell your information to third parties for marketing purposes.</li>
          <li>Payment details are handled securely by our payment processor and are never stored on our servers.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">5. Cookies and Tracking</h2>
        <p className="mb-4">
          Our website may use cookies to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Improve user experience</li>
          <li>Track page views and analytics</li>
        </ul>
        <p className="mb-4">
          You can control cookie settings via your browser.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">6. Updates to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated effective date.
        </p>
      </div>
    </div>
  )
}
