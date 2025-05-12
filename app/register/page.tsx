// For App Router (app/register/page.tsx)
"use client";

import RegistrationForm from "@/components/sharkathon/registration-form";

export default function RegisterPage() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="pt-8 text-3xl font-bold text-primary">Register for Sharkathon</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Take the first step toward an incredible investment evaluation journey
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
}