import type { NewsletterLabels } from "@/components/newsletter/NewsletterForm";
import type { Locale } from "@/lib/i18n-metadata";

/**
 * Zentrale Labels für die Newsletter-Anmeldung. Die drei Sprachen liegen
 * hier gebündelt, damit Textänderungen an einer Stelle passieren und die
 * Landingpages nur ihren eigenen source / source_label setzen müssen.
 */
export const NEWSLETTER_LABELS: Record<Locale, NewsletterLabels> = {
  de: {
    heading: "Newsletter für Reinigungsbetriebe",
    subheading:
      "Monatlich ein Update mit Rechnern, Ratgebern und Praxiswissen für die Gebäudereinigung. Kein Spam, jederzeit abbestellbar.",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "name@firma.de",
    consentText:
      "Ja, ich möchte den Newsletter mit Tipps und Neuigkeiten erhalten. Die Einwilligung kann ich jederzeit widerrufen.",
    submitButton: "Anmelden",
    submitting: "Einen Moment",
    successMessage:
      "Fast geschafft. Wir haben Ihnen eine E-Mail geschickt. Bitte bestätigen Sie darin Ihre Anmeldung.",
    errorGeneric: "Das hat leider nicht geklappt. Bitte später erneut versuchen.",
    errorInvalidEmail: "Bitte eine gültige E-Mail-Adresse eingeben.",
    errorConsentRequired: "Bitte bestätigen Sie die Einwilligung.",
    errorNetwork:
      "Verbindung fehlgeschlagen. Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.",
    privacyLinkText: "Zur Datenschutzerklärung",
    privacyLinkHref: "/datenschutz",
  },
  en: {
    heading: "Newsletter for cleaning companies",
    subheading:
      "Monthly update with calculators, guides and practical know-how for commercial cleaning. No spam, unsubscribe anytime.",
    emailLabel: "Email address",
    emailPlaceholder: "name@company.com",
    consentText:
      "Yes, I would like to receive the newsletter with tips and updates. I can withdraw my consent at any time.",
    submitButton: "Subscribe",
    submitting: "One moment",
    successMessage:
      "Almost done. We have sent you an email. Please confirm your subscription in that email.",
    errorGeneric: "Something went wrong. Please try again later.",
    errorInvalidEmail: "Please enter a valid email address.",
    errorConsentRequired: "Please confirm the consent.",
    errorNetwork:
      "Connection failed. Please check your internet connection and try again.",
    privacyLinkText: "Privacy policy",
    privacyLinkHref: "/en/datenschutz",
  },
  fr: {
    heading: "Newsletter pour sociétés de nettoyage",
    subheading:
      "Mise à jour mensuelle avec calculateurs, guides et savoir-faire pratique pour la propreté. Sans spam, désinscription à tout moment.",
    emailLabel: "Adresse e-mail",
    emailPlaceholder: "nom@entreprise.fr",
    consentText:
      "Oui, je souhaite recevoir la newsletter avec conseils et actualités. Je peux retirer mon consentement à tout moment.",
    submitButton: "S'inscrire",
    submitting: "Un instant",
    successMessage:
      "Presque terminé. Nous vous avons envoyé un e-mail. Veuillez y confirmer votre inscription.",
    errorGeneric: "Une erreur est survenue. Veuillez réessayer plus tard.",
    errorInvalidEmail: "Veuillez saisir une adresse e-mail valide.",
    errorConsentRequired: "Veuillez confirmer le consentement.",
    errorNetwork:
      "Connexion échouée. Vérifiez votre connexion internet et réessayez.",
    privacyLinkText: "Politique de confidentialité",
    privacyLinkHref: "/fr/datenschutz",
  },
};
