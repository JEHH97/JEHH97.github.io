export function ThemeScript() {
  const script = `try{var t=localStorage.getItem('portfolio-theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d)}catch(e){}`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
