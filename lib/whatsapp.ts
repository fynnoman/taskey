export const TASKEY_WHATSAPP_NUMBER = '4915168488999';

const DEFAULT_MESSAGES: Record<string, string> = {
	de: 'Hallo Taskey, ich hätte eine Frage zu eurer Software.',
	en: 'Hi Taskey, I have a question about your software.',
	fr: 'Bonjour Taskey, j’ai une question sur votre logiciel.',
};

const ENTERPRISE_MESSAGES: Record<string, string> = {
	de: 'Hallo Taskey, ich interessiere mich für Taskey Enterprise und würde gern die Details besprechen.',
	en: 'Hi Taskey, I am interested in Taskey Enterprise and would like to discuss the details.',
	fr: 'Bonjour Taskey, je suis intéressé(e) par Taskey Enterprise et j’aimerais en discuter.',
};

const PARTNER_MESSAGES: Record<string, string> = {
	de: 'Hallo Taskey, ich interessiere mich für eine Partnerschaft und würde mich gern kurz vorstellen.',
	en: 'Hi Taskey, I am interested in becoming a partner and would like to introduce myself.',
	fr: 'Bonjour Taskey, je suis intéressé(e) par un partenariat et j’aimerais me présenter.',
};

type Context = 'default' | 'enterprise' | 'partner';

function pickMessage(context: Context, locale: string): string {
	const key = locale.toLowerCase();
	const table =
		context === 'enterprise'
			? ENTERPRISE_MESSAGES
			: context === 'partner'
			? PARTNER_MESSAGES
			: DEFAULT_MESSAGES;
	return table[key] ?? table.de;
}

export function getWhatsAppUrl(locale?: string, context: Context = 'default') {
	const message = pickMessage(context, locale ?? 'de');
	return `https://wa.me/${TASKEY_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
