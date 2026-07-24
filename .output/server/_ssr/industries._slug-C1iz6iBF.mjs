import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as industriesBySlug } from "./industries-data-CTGHhnIE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries._slug-C1iz6iBF.js
var $$splitNotFoundComponentImporter = () => import("./industries._slug-BLlgNRuX.mjs");
var $$splitComponentImporter = () => import("./industries._slug-poD5gMiX.mjs");
var Route = createFileRoute("/industries/$slug")({
	loader: ({ params }) => {
		const industry = industriesBySlug[params.slug];
		if (!industry) throw notFound();
		return industry;
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Industry not found | BLUETORN" }, {
			name: "robots",
			content: "noindex"
		}] };
		const i = loaderData;
		return {
			meta: [
				{ title: `${i.name} Software Solutions | BLUETORN Technologies` },
				{
					name: "description",
					content: i.hero
				},
				{
					property: "og:title",
					content: `${i.name} Solutions | BLUETORN`
				},
				{
					property: "og:description",
					content: i.hero
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
				href: `/industries/${i.slug}`
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
