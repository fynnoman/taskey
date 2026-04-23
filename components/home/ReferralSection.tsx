import React from "react";

const ReferralSection = () => {
  return (
    <section className="bg-blue-900 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          Empfehlen Sie Taskey weiter – und sparen Sie <span className="text-white">3 Monate Beitrag.</span>
        </h2>
        <p className="text-lg mb-8 text-white/80">
          Kennen Sie einen anderen Betrieb, dem Taskey helfen könnte? Für jede erfolgreiche Empfehlung bekommen Sie 3 Monate gratis.
        </p>
        <a
          href="/referral"
          className="inline-block bg-white text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Jetzt empfehlen
        </a>
      </div>
    </section>
  );
};

export default ReferralSection;
