// app/refund-policy/page.tsx
import React from "react";

const RefundPolicyPage = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Sharkathon Refund Policy</h1>
      <p className="mb-6 text-lg text-gray-700">
        To maintain transparency and fairness, the following refund terms apply to all participants of the Sharkathon programme:
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-600">A. Participant-Initiated Cancellations</h2>
        <p className="text-gray-700">
          No refunds will be issued in the event a participant voluntarily withdraws from the programme, regardless of the timing or reason.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-600">B. Organiser-Initiated Cancellations</h2>
        <p className="text-gray-700 mb-4">In the unlikely event that the Sharkathon programme is cancelled by the organisers, the following refund structure shall apply:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Before Round 1:</strong> 100% refund</li>
          <li><strong>After Round 1 but before Round 2:</strong> 75% refund</li>
          <li><strong>After Round 2 but before Round 3:</strong> 50% refund</li>
          <li><strong>After Round 3:</strong> No refund</li>
        </ul>
        <p className="mt-4 text-gray-700">
          Refunds will be processed to the original mode of payment within 10 working days from the date of formal communication.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-600">Refund Request Process</h2>
        <p className="text-gray-700 mb-4">
          Eligible refund requests (in the case of organiser-led cancellations) must be submitted in writing to:
        </p>
        <ul className="list-none text-gray-700 mb-4">
          <li>📧 <strong>Email:</strong> <a href="mailto:team@veriseekeducation.com" className="text-blue-500 underline">team@veriseekeducation.com</a></li>
          <li>📞 <strong>Phone:</strong> <a href="tel:+919953371191" className="text-blue-500 underline">+91 9953371191</a></li>
        </ul>
        <p className="text-gray-700">
          Please include the participant’s full name, registered email ID, school name, and payment reference.
        </p>
      </section>

      <p className="text-gray-700 font-medium">
        <strong>Note:</strong> Transaction fees and applicable GST will be deducted from the refund amount.
      </p>
    </main>
  );
};

export default RefundPolicyPage;
