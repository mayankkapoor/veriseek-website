
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rules & Regulations | Veriseek Education",
  description: "Official rules and regulations for Veriseek Education's inter-school competitions.",
}

export default function RulesPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-primary mb-8">Inter-School Competition — Rules & Regulations</h1>
      <div className="prose max-w-none">
        <p className="mb-4 text-gray-600">Format: Hybrid (Online & Offline)<br />Participants: Students representing registered schools</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Eligibility</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Open to students across India and overseas</li>
          <li>Class categories must be adhered to (Class 9 to Class 12)</li>
          <li>There could be multiple participants per school</li>
          <li>Participants must have consent from their guardians and school authorities</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Registration</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Registration can be done online on the website, or through the school</li>
          <li>Every participant shall have to present a school ID card or a letter from the school at the time of the competition as proof of identity</li>
          <li>The Registration fee must be paid on the website or through the school in the designated manner at the time of registration</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Competition Format</h2>
        <p className="mb-4">The event will be conducted in two phases:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Online: Conducted via various online test taking platforms</li>
          <li>Offline Finals: Held in NCR / Gurugram, though online participations are also allowed</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Online Phase</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>All participants must have a stable internet connection, a working webcam, and microphone.</li>
          <li>Identity verification will be done before the competition starts.</li>
          <li>Any technical issues on the participant's side are their own responsibility.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Offline Phase</h3>
        <ul className="list-disc pl-6 mb-6">
          <li>Only shortlisted finalists from the online phase will be invited.</li>
          <li>Travel and accommodation arrangements are the responsibility of the school or parents.</li>
          <li>ID proof and school verification letter are mandatory for onsite entry.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Code of Conduct</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Any form of malpractice or dishonesty will result in disqualification.</li>
          <li>Participants must behave respectfully with judges, organizers, and other contestants.</li>
          <li>Offensive language, gestures, or disruptive behaviour will not be tolerated.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Judging & Scoring</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Judging criteria will be communicated before each event.</li>
          <li>The decision of the judges is final and binding.</li>
          <li>Scores will not be disclosed beyond winners, unless otherwise stated.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Awards & Prizes</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>While prizes will be awarded in each category, Special recognitions may be awarded for creativity, sportsmanship, or innovation.</li>
          <li>Certificates of Participation will be given to all verified participants.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Media & Consent</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>The event will be recorded for promotional and archival purposes.</li>
          <li>By participating, students and schools agree to allow the use of their names, photos, and videos for marketing and reporting.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Health & Safety (For Offline Events)</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>All participants must adhere to health and safety guidelines issued by local authorities.</li>
          <li>In case of an emergency, parents or guardians will be contacted immediately.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes & Cancellations</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>The organizers reserve the right to modify the event structure or cancel specific categories based on registration numbers or unforeseen circumstances.</li>
          <li>In case of event cancellation, a partial or full refund may be issued as per the refund policy.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">10. No Legal Liability</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>The organizers, sponsors, partners, and associated personnel shall not be held legally responsible for any loss, injury, damage, or mishap (including but not limited to physical, technical, or emotional issues) arising during or as a result of participation in the competition.</li>
          <li>Participants and their guardians acknowledge and accept that participation is voluntary and at their own risk.</li>
        </ul>
      </div>
    </div>
  )
}
