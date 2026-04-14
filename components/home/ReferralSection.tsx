import React from "react";

const ReferralSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          Empfehle Taskey und sichere dir <span className="text-yellow-300">3 Monate kostenlos!</span>
        </h2>
        <p className="text-lg mb-8">
          Lade deine Freunde ein, Taskey zu nutzen, und erhalte für jede erfolgreiche Empfehlung drei Monate gratis.
        </p>
        <a
          href="/referral"
          className="inline-block bg-yellow-300 text-blue-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-400 transition-all"
        >
          Jetzt Freunde einladen
        </a>
      </div>
    </section>
  );
};

export default ReferralSection;
