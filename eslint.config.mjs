import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

const config = [
  ...nextVitals,
  ...nextTypeScript,
  { ignores: [".next/**", "out/**", "node_modules/**", "coverage/**", ".preview/**", "specs/**", "cv/**", "public/cv/**"] },
];

export default config;
