import { site } from "@/config/site";
import Link from "next/link";

export default function RootRedirect() {
  return (
    <main className="root-redirect">
      <meta httpEquiv="refresh" content="3;url=/en/" />
      <script dangerouslySetInnerHTML={{ __html: "try{var l=(navigator.language||'en').toLowerCase();location.replace(l.startsWith('es')?'/es/':'/en/')}catch(e){}" }} />
      <p className="section-kicker">{site.shortName}</p>
      <h1>Developer portfolio</h1>
      <p>Choose your language / Elige tu idioma</p>
      <nav className="root-links" aria-label="Language"><Link href="/es/" lang="es">Español</Link><Link href="/en/" lang="en">English</Link></nav>
    </main>
  );
}
