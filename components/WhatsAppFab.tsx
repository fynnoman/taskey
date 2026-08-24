"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const LABELS: Record<string, { aria: string; label: string }> = {
	de: { aria: "Per WhatsApp schreiben", label: "WhatsApp" },
	en: { aria: "Message us on WhatsApp", label: "WhatsApp" },
	fr: { aria: "Écrire sur WhatsApp", label: "WhatsApp" },
};

export default function WhatsAppFab() {
	const { language } = useLanguage();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const t = window.setTimeout(() => setMounted(true), 800);
		return () => window.clearTimeout(t);
	}, []);

	if (!mounted) return null;

	const labels = LABELS[language] ?? LABELS.de;
	const href = getWhatsAppUrl(language);

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={labels.aria}
			className="tk-whatsapp-fab group fixed z-[60] left-4 md:left-6 flex items-center gap-2.5 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white pl-3 pr-3 md:pl-4 md:pr-5 py-3 shadow-2xl transition-all duration-200 active:scale-[0.97]"
			style={{
				bottom: "max(1.25rem, env(safe-area-inset-bottom))",
			}}
		>
			<span
				aria-hidden
				className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 pointer-events-none"
				style={{ animation: "tk-wa-pulse 4s cubic-bezier(0, 0, 0.2, 1) infinite" }}
			/>
			<span className="relative flex items-center justify-center w-8 h-8 md:w-9 md:h-9">
				<svg
					viewBox="0 0 24 24"
					fill="currentColor"
					className="w-7 h-7 md:w-8 md:h-8"
					aria-hidden
				>
					<path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
				</svg>
			</span>
			<span className="relative hidden md:inline font-semibold text-sm whitespace-nowrap">
				{labels.label}
			</span>
			<style jsx global>{`
				@keyframes tk-wa-pulse {
					0% {
						transform: scale(1);
						opacity: 0.4;
					}
					80%,
					100% {
						transform: scale(1.8);
						opacity: 0;
					}
				}
			`}</style>
		</a>
	);
}
