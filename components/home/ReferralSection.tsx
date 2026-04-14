import React from "react";

const ReferralSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          Empfehlen Sie Taskey weiter – und sparen Sie <span className="text-yellow-300">3 Monate Beitrag.</span>
        </h2>
        <p className="text-lg mb-8">
          Kennen Sie einen anderen Reinigungsbetrieb, dem Taskey helfen koennte? Fuer jede erfolgreiche Empfehlung bekommen Sie 3 Monate gratis.
        </p>
        <a
          href="/referral"
          className="inline-block bg-yellow-300 text-blue-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-400 transition-all"
        >
          Jetzt empfehlen
        </a>
      </div>
    </section>
  );
};

export default ReferralSection;
