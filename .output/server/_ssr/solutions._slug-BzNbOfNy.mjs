import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as solutionsBySlug } from "./solutions-data-OZgwMN2x.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solutions._slug-BzNbOfNy.js
var $$splitNotFoundComponentImporter = () => import("./solutions._slug-D7cjWC-p.mjs");
var $$splitComponentImporter = () => import("./solutions._slug-DWU9by4m.mjs");
var Route = createFileRoute("/solutions/$slug")({
	loader: ({ params }) => {
		const solution = solutionsBySlug[params.slug];
		if (!solution) throw notFound();
		return solution;
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Solution not found | BLUETORN" }, {
			name: "robots",
			content: "noindex"
		}] };
		const s = loaderData;
		return {
			meta: [
				{ title: `${s.name} — Solution | BLUETORN Technologies` },
				{
					name: "description",
					content: s.hero
				},
				{
					property: "og:title",
					content: `${s.name} Solution | BLUETORN`
				},
				{
					property: "og:description",
					content: s.hero
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				}
			],
			links: [{
				rel: "canonical",
				href: `/solutions/${s.slug}`
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
