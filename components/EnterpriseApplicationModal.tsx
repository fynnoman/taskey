'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

type EnterpriseApplicationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type Question = {
  id: string;
  question: string;
  options: string[];
};

const CONTENT = {
  de: {
    closeAria: 'Schließen',
    questionLabel: (cur: number, total: number) => `Frage ${cur} von ${total}`,
    title: 'Enterprise-Bewerbung',
    subtitle: 'Bewerben Sie sich für Taskey Enterprise. Unser Team prüft Ihre Anfrage individuell.',
    labelName: 'Vollständiger Name *',
    placeholderName: 'Ihr vollständiger Name',
    labelCompany: 'Unternehmen *',
    placeholderCompany: 'Ihr Unternehmensname',
    labelEmail: 'Geschäftliche E-Mail *',
    placeholderEmail: 'ihre.email@unternehmen.de',
    labelPhone: 'Telefonnummer *',
    placeholderPhone: '+49 123 456789',
    info: 'Ihre Bewerbung wird vom Enterprise-Team geprüft. Wir melden uns bei passender Eignung.',
    next: 'Weiter',
    back: 'Zurück',
    submit: 'Bewerbung absenden',
    sending: 'Wird gesendet...',
    successAlert: '✅ Vielen Dank für Ihre Enterprise-Bewerbung! Unser Enterprise-Team wird Ihre Anfrage prüfen und sich in Kürze bei Ihnen melden.',
    errorGeneric: 'Es gab ein Problem beim Senden Ihrer Bewerbung. Bitte versuchen Sie es erneut.',
    errorNetwork: '❌ Verbindungsfehler. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.',
    questions: [
      {
        id: 'industry_type',
        question: 'In welchem Sektor ist Ihr Unternehmen tätig?',
        options: [
          'Gebäudereinigung & Unterhaltsreinigung',
          'Facility Management & Infrastruktur',
          'Industriereinigung & Sonderreinigung',
          'Öffentlicher Sektor / Behörden',
          'Andere Reinigungsbereiche',
        ],
      },
      {
        id: 'compliance_needs',
        question: 'Welche Compliance- und Sicherheitsanforderungen haben Sie?',
        options: [
          'ISO 27001 oder vergleichbare Zertifizierung erforderlich',
          'Branchenspezifische Compliance (z.B. KRITIS)',
          'Erweiterte Datenschutzanforderungen',
          'On-Premise oder Private Cloud erforderlich',
          'Standard DSGVO-Konformität ausreichend',
        ],
      },
      {
        id: 'integration_requirements',
        question: 'Welche Integrationsanforderungen haben Sie?',
        options: [
          'ERP-System (SAP, Oracle, Microsoft Dynamics)',
          'CRM-System (Salesforce, HubSpot, etc.)',
          'HR-System (Workday, SAP SuccessFactors)',
          'Custom API-Integrationen',
          'Keine spezifischen Integrationen',
        ],
      },
      {
        id: 'decision_timeline',
        question: 'Wann planen Sie eine Implementierung?',
        options: [
          'In den nächsten 1-3 Monaten',
          'In 3-6 Monaten',
          'In 6-12 Monaten',
          'Langfristige Planung (12+ Monate)',
        ],
      },
    ],
  },
  en: {
    closeAria: 'Close',
    questionLabel: (cur: number, total: number) => `Question ${cur} of ${total}`,
    title: 'Enterprise application',
    subtitle: 'Apply for Taskey Enterprise. Our team reviews your request individually.',
    labelName: 'Full name *',
    placeholderName: 'Your full name',
    labelCompany: 'Company *',
    placeholderCompany: 'Your company name',
    labelEmail: 'Business email *',
    placeholderEmail: 'your.email@company.com',
    labelPhone: 'Phone number *',
    placeholderPhone: '+49 123 456789',
    info: 'Your application will be reviewed by the Enterprise team. We will reach out if there is a fit.',
    next: 'Next',
    back: 'Back',
    submit: 'Submit application',
    sending: 'Sending...',
    successAlert: '✅ Thank you for your Enterprise application! Our Enterprise team will review your request and get back to you shortly.',
    errorGeneric: 'There was a problem sending your application. Please try again.',
    errorNetwork: '❌ Connection error. Please check your internet connection and try again.',
    questions: [
      {
        id: 'industry_type',
        question: 'In which sector does your company operate?',
        options: [
          'Building cleaning & maintenance cleaning',
          'Facility management & infrastructure',
          'Industrial cleaning & specialised cleaning',
          'Public sector / authorities',
          'Other cleaning areas',
        ],
      },
      {
        id: 'compliance_needs',
        question: 'What compliance and security requirements do you have?',
        options: [
          'ISO 27001 or comparable certification required',
          'Industry-specific compliance (e.g. KRITIS)',
          'Advanced data protection requirements',
          'On-premise or private cloud required',
          'Standard DSGVO compliance is sufficient',
        ],
      },
      {
        id: 'integration_requirements',
        question: 'What integration requirements do you have?',
        options: [
          'ERP system (SAP, Oracle, Microsoft Dynamics)',
          'CRM system (Salesforce, HubSpot, etc.)',
          'HR system (Workday, SAP SuccessFactors)',
          'Custom API integrations',
          'No specific integrations',
        ],
      },
      {
        id: 'decision_timeline',
        question: 'When do you plan to implement?',
        options: [
          'Within the next 1-3 months',
          'In 3-6 months',
          'In 6-12 months',
          'Long-term planning (12+ months)',
        ],
      },
    ],
  },
  fr: {
    closeAria: 'Fermer',
    questionLabel: (cur: number, total: number) => `Question ${cur} sur ${total}`,
    title: 'Candidature Enterprise',
    subtitle: 'Postulez pour Taskey Enterprise. Notre équipe examine votre demande individuellement.',
    labelName: 'Nom complet *',
    placeholderName: 'Votre nom complet',
    labelCompany: 'Entreprise *',
    placeholderCompany: 'Le nom de votre entreprise',
    labelEmail: 'E-mail professionnel *',
    placeholderEmail: 'votre.email@entreprise.com',
    labelPhone: 'Numéro de téléphone *',
    placeholderPhone: '+49 123 456789',
    info: 'Votre candidature sera examinée par l’équipe Enterprise. Nous vous recontacterons en cas de correspondance.',
    next: 'Suivant',
    back: 'Retour',
    submit: 'Envoyer la candidature',
    sending: 'Envoi en cours...',
    successAlert: '✅ Merci pour votre candidature Enterprise ! Notre équipe Enterprise examinera votre demande et vous recontactera sous peu.',
    errorGeneric: 'Un problème est survenu lors de l’envoi de votre candidature. Veuillez réessayer.',
    errorNetwork: '❌ Erreur de connexion. Veuillez vérifier votre connexion Internet et réessayer.',
    questions: [
      {
        id: 'industry_type',
        question: 'Dans quel secteur votre entreprise est-elle active ?',
        options: [
          'Nettoyage de bâtiments & nettoyage d’entretien',
          'Facility Management & infrastructure',
          'Nettoyage industriel & nettoyage spécial',
          'Secteur public / administrations',
          'Autres domaines de nettoyage',
        ],
      },
      {
        id: 'compliance_needs',
        question: 'Quelles exigences de conformité et de sécurité avez-vous ?',
        options: [
          'ISO 27001 ou certification comparable requise',
          'Conformité sectorielle (p. ex. KRITIS)',
          'Exigences avancées en matière de protection des données',
          'On-premise ou private cloud requis',
          'Conformité standard au RGPD suffisante',
        ],
      },
      {
        id: 'integration_requirements',
        question: 'Quelles exigences d’intégration avez-vous ?',
        options: [
          'Système ERP (SAP, Oracle, Microsoft Dynamics)',
          'Système CRM (Salesforce, HubSpot, etc.)',
          'Système RH (Workday, SAP SuccessFactors)',
          'Intégrations API personnalisées',
          'Aucune intégration spécifique',
        ],
      },
      {
        id: 'decision_timeline',
        question: 'Quand prévoyez-vous une mise en œuvre ?',
        options: [
          'Dans les 1 à 3 prochains mois',
          'Dans 3 à 6 mois',
          'Dans 6 à 12 mois',
          'Planification à long terme (12+ mois)',
        ],
      },
    ],
  },
} as const;

export default function EnterpriseApplicationModal({ isOpen, onClose }: EnterpriseApplicationModalProps) {
  const { language } = useLanguage();
  const c = CONTENT[language];
  const [currentStep, setCurrentStep] = useState(0); // 0 = contact form, 1-5 = questions
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const questions: Question[] = c.questions as unknown as Question[];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Move to first question
    setCurrentStep(1);
  };

  const handleAnswerSelect = (answer: string) => {
    const currentQuestion = questions[currentStep - 1];
    setAnswers({
      ...answers,
      [currentQuestion.id]: answer,
    });
  };

  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch('https://mission-control.vars-development.com/api/forms/enterprise', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          answers,
        }),
      });

      if (response.ok) {
        alert(c.successAlert);
        setFormData({ name: '', email: '', phone: '', company: '' });
        setAnswers({});
        setCurrentStep(0);
        onClose();
      } else {
        const data = await response.json().catch(() => ({}));
        alert('❌ ' + (data.detail || c.errorGeneric));
      }
    } catch (error) {
      console.error('Error:', error);
      alert(c.errorNetwork);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  const currentQuestion = currentStep > 0 ? questions[currentStep - 1] : null;
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : null;
  const isLastQuestion = currentStep === questions.length;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-3 sm:p-4">
        {/* Backdrop with cyan theme */}
        <div
          className="fixed inset-0 bg-cyan-900/40 backdrop-blur-md transition-opacity"
          onClick={onClose}
        ></div>

        {/* Modal with cyan/enterprise theme */}
        <div className="relative bg-gradient-to-br from-white via-cyan-50/50 to-white rounded-2xl shadow-2xl max-w-md w-full p-5 sm:p-6 md:p-8 border-4 border-cyan-900/20 animate-[fadeIn_0.3s_ease-out]">

          <div className="relative z-10">
            {/* Header with close button and percentage */}
            <div className="flex justify-end items-center gap-2 mb-6">
              {/* Percentage badge */}
              {currentStep > 0 && (
                <span className="text-xs sm:text-sm font-bold text-cyan-800 animate-[bounceIn_0.5s_ease-out] bg-cyan-100 px-3 py-1.5 rounded-full">
                  {Math.round((currentStep / questions.length) * 100)}%
                </span>
              )}

              {/* Close button */}
              <button
                onClick={onClose}
                className="text-cyan-900 hover:text-cyan-700 transition-all duration-300 hover:rotate-90 transform group p-2 rounded-full hover:bg-cyan-100"
                aria-label={c.closeAria}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Progress indicator with cyan design */}
            {currentStep > 0 && (
              <div className="mb-6 animate-[slideDown_0.3s_ease-out]">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs sm:text-sm text-cyan-900 font-medium animate-[fadeIn_0.5s_ease-out]">
                    {c.questionLabel(currentStep, questions.length)}
                  </span>
                </div>
                <div className="w-full bg-cyan-100/50 rounded-full h-3 overflow-hidden border-2 border-cyan-200 relative shadow-inner">
                  {/* Animated shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_3s_ease-in-out_infinite]"></div>
                  <div
                    className="bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-400 h-full transition-all duration-700 ease-out relative overflow-hidden shadow-lg"
                    style={{ width: `${(currentStep / questions.length) * 100}%` }}
                  >
                    {/* Sliding highlight */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[slide_2s_ease-in-out_infinite]"></div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 0: Contact Form */}
            {currentStep === 0 && (
              <>
                <div className="mb-5 sm:mb-6 animate-[fadeIn_0.5s_ease-out]">
                  <h2 className="text-xl sm:text-2xl font-bold text-cyan-900 mb-2 pr-8">
                    {c.title}
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    {c.subtitle}
                  </p>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-3 sm:space-y-4">
                  {/* Name */}
                  <div className="animate-[slideUp_0.4s_ease-out]">
                    <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-cyan-900 mb-1 sm:mb-2">
                      {c.labelName}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white border-2 border-cyan-200 text-slate-900 rounded-lg focus:border-cyan-600 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-all placeholder-slate-400 hover:border-cyan-300 shadow-sm"
                      placeholder={c.placeholderName}
                    />
                  </div>

                  {/* Company */}
                  <div className="animate-[slideUp_0.45s_ease-out]">
                    <label htmlFor="company" className="block text-xs sm:text-sm font-semibold text-cyan-900 mb-1 sm:mb-2">
                      {c.labelCompany}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white border-2 border-cyan-200 text-slate-900 rounded-lg focus:border-cyan-600 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-all placeholder-slate-400 hover:border-cyan-300 shadow-sm"
                      placeholder={c.placeholderCompany}
                    />
                  </div>

                  {/* Email */}
                  <div className="animate-[slideUp_0.5s_ease-out]">
                    <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-cyan-900 mb-1 sm:mb-2">
                      {c.labelEmail}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white border-2 border-cyan-200 text-slate-900 rounded-lg focus:border-cyan-600 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-all placeholder-slate-400 hover:border-cyan-300 shadow-sm"
                      placeholder={c.placeholderEmail}
                    />
                  </div>

                  {/* Phone */}
                  <div className="animate-[slideUp_0.6s_ease-out]">
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-cyan-900 mb-1 sm:mb-2">
                      {c.labelPhone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white border-2 border-cyan-200 text-slate-900 rounded-lg focus:border-cyan-600 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-all placeholder-slate-400 hover:border-cyan-300 shadow-sm"
                      placeholder={c.placeholderPhone}
                    />
                  </div>

                  {/* Info text */}
                  <p className="text-xs text-slate-600 animate-[fadeIn_0.7s_ease-out]">
                    {c.info}
                  </p>

                  {/* Submit button with cyan theme */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-400 text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 transform hover:shadow-xl animate-[slideUp_0.7s_ease-out] group relative overflow-hidden shadow-lg"
                  >
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative">{c.next}</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </form>
              </>
            )}

            {/* Steps 1-5: Questions */}
            {currentStep > 0 && currentQuestion && (
              <>
                <div className="mb-6 animate-[fadeIn_0.5s_ease-out]">
                  <h2 className="text-lg sm:text-xl font-bold text-cyan-900 mb-6">
                    {currentQuestion.question}
                  </h2>

                  <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleAnswerSelect(option)}
                        style={{ animationDelay: `${index * 0.1}s` }}
                        className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all duration-300 transform hover:scale-[1.02] animate-[slideUp_0.5s_ease-out] relative group overflow-hidden shadow-sm ${currentAnswer === option
                          ? 'border-cyan-600 bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-400 text-white font-bold shadow-lg'
                          : 'border-cyan-200 bg-blue-600 text-white hover:border-cyan-400 hover:bg-cyan-50'
                          }`}
                      >
                        {/* Elegant shine effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ${currentAnswer === option ? 'opacity-50' : ''
                          }`}></div>

                        <div className="flex items-center gap-3 relative z-10">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${currentAnswer === option
                            ? 'border-white bg-white animate-[bounceIn_0.5s_ease-out]'
                            : 'border-cyan-300 bg-white'
                            }`}>
                            {currentAnswer === option && (
                              <svg className="w-3 h-3 text-cyan-700" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <span className="text-sm sm:text-base">{option}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Navigation buttons */}
                <div className="flex gap-3 animate-[fadeIn_0.6s_ease-out]">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-6 py-2.5 text-sm sm:text-base rounded-lg font-semibold border-2 border-cyan-200 text-slate-700 hover:bg-cyan-50 hover:border-cyan-400 hover:text-cyan-800 transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm"
                  >
                    <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>{c.back}</span>
                  </button>

                  {isLastQuestion ? (
                    <button
                      type="button"
                      onClick={handleFinalSubmit}
                      disabled={!currentAnswer || isSubmitting}
                      className="flex-1 bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-400 text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transform disabled:hover:scale-100 relative overflow-hidden group shadow-lg hover:shadow-xl"
                    >
                      {/* Elegant shine effect */}
                      {!isSubmitting && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      )}

                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2 relative">
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {c.sending}
                        </span>
                      ) : (
                        <span className="relative flex items-center justify-center gap-2">
                          {c.submit}
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      )}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!currentAnswer}
                      className="flex-1 bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-400 text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:scale-105 transform disabled:hover:scale-100 relative overflow-hidden group shadow-lg hover:shadow-xl"
                    >
                      {/* Elegant shine effect */}
                      {currentAnswer && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      )}

                      <span className="relative">{c.next}</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
