import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as servicesBySlug } from "./services-data-Ca5PnO-D.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-Dhqf6BwU.js
var $$splitNotFoundComponentImporter = () => import("./services._slug-BD6cDwSE.mjs");
var $$splitComponentImporter = () => import("./services._slug-BOGMKmjc.mjs");
var Route = createFileRoute("/services/$slug")({
	loader: ({ params }) => {
		const service = servicesBySlug[params.slug];
		if (!service) throw notFound();
		return service;
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Service not found | BLUETORN" }, {
			name: "robots",
			content: "noindex"
		}] };
		const s = loaderData;
		return {
			meta: [
				{ title: `${s.title} | BLUETORN Technologies` },
				{
					name: "description",
					content: s.hero
				},
				{
					property: "og:title",
					content: `${s.title} | BLUETORN`
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
				href: `/services/${s.slug}`
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
