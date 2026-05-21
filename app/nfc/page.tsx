import { permanentRedirect } from "next/navigation";

// 301-Redirect: /nfc wurde durch die stärkere Pillar-Page /nfc-zeiterfassung ersetzt.
// Vermeidet Duplicate Content und bündelt Link-Equity auf einer URL.
export default function NFCPage() {
  permanentRedirect("/nfc-zeiterfassung");
}
