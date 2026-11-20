import Link from "next/link";
import "./globals.css";

export default function NotFound() {
  return <html lang="en"><body><main className="simple-page"><div><p className="section-kicker">404</p><h1>Página no encontrada · Page not found</h1><p>No encontramos la página que buscas. · We couldn&apos;t find the page you&apos;re looking for.</p><div className="root-links"><Link className="button button-primary" href="/es/">Volver al inicio</Link><Link className="button button-secondary" href="/en/">Return home</Link></div></div></main></body></html>;
}
