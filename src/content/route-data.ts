import { allProjects } from "./projects";

export const projectStaticParams = (["es", "en"] as const).flatMap((locale) => allProjects.map(({ slug }) => ({ locale, slug })));
