<<<<<<< HEAD
import { permanentRedirect } from "next/navigation";
=======
import NFCClient from "./nfc-client";
>>>>>>> 7e326fd (Fix enterprise-client export name)

// 301-Redirect: /nfc wurde durch die stärkere Pillar-Page /nfc-zeiterfassung ersetzt.
// Vermeidet Duplicate Content und bündelt Link-Equity auf einer URL.
export default function NFCPage() {
<<<<<<< HEAD
  permanentRedirect("/nfc-zeiterfassung");
=======
  return <NFCClient />;
>>>>>>> 7e326fd (Fix enterprise-client export name)
}
