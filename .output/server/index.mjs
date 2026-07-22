globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/BluetornLogo.webp": {
		"type": "image/webp",
		"etag": "\"63cc-FmuTCPQBfVC96qOxznBXNsUC3W4\"",
		"mtime": "2026-07-22T15:49:40.703Z",
		"size": 25548,
		"path": "../public/BluetornLogo.webp"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"63cc-FmuTCPQBfVC96qOxznBXNsUC3W4\"",
		"mtime": "2026-07-22T15:49:40.703Z",
		"size": 25548,
		"path": "../public/favicon.ico"
	},
	"/assets/about-DyzrtgbM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"204f-get8UG9CZl1U47BkY9JFf8Vv4/c\"",
		"mtime": "2026-07-22T17:45:24.208Z",
		"size": 8271,
		"path": "../public/assets/about-DyzrtgbM.js"
	},
	"/assets/BluetornLogo-aqbH8UbY.webp": {
		"type": "image/webp",
		"etag": "\"63cc-FmuTCPQBfVC96qOxznBXNsUC3W4\"",
		"mtime": "2026-07-22T17:45:24.255Z",
		"size": 25548,
		"path": "../public/assets/BluetornLogo-aqbH8UbY.webp"
	},
	"/assets/biomatric-access-BrNvyCIj.webp": {
		"type": "image/webp",
		"etag": "\"819a-Bo5XeW6dtLmv2OnJsFC2JYsHthY\"",
		"mtime": "2026-07-22T17:45:24.259Z",
		"size": 33178,
		"path": "../public/assets/biomatric-access-BrNvyCIj.webp"
	},
	"/assets/arrow-right-B3RFGDXB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f-lxs/E1q0xyvzDlhLxk2UHS8Oy8I\"",
		"mtime": "2026-07-22T17:45:24.210Z",
		"size": 159,
		"path": "../public/assets/arrow-right-B3RFGDXB.js"
	},
	"/assets/businessman-thinking-33HZXmMx.webp": {
		"type": "image/webp",
		"etag": "\"5834-38O4Z8FWKudtrHGrexYNfK6fivA\"",
		"mtime": "2026-07-22T17:45:24.263Z",
		"size": 22580,
		"path": "../public/assets/businessman-thinking-33HZXmMx.webp"
	},
	"/assets/businessman-thinking-DHJKWyoO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"42-GMCqGxOrgElyrjdON623Yao00qM\"",
		"mtime": "2026-07-22T17:45:24.212Z",
		"size": 66,
		"path": "../public/assets/businessman-thinking-DHJKWyoO.js"
	},
	"/assets/claud-computing-C6XKKlG2.webp": {
		"type": "image/webp",
		"etag": "\"454e-nkIqXDi3A8ZnOBiQaXzTkqHfJIk\"",
		"mtime": "2026-07-22T17:45:24.265Z",
		"size": 17742,
		"path": "../public/assets/claud-computing-C6XKKlG2.webp"
	},
	"/assets/cyber-security-Dkq04oEy.webp": {
		"type": "image/webp",
		"etag": "\"64d6-6kkpJ51PrZ2ds8Am7gEnlApCDlU\"",
		"mtime": "2026-07-22T17:45:24.267Z",
		"size": 25814,
		"path": "../public/assets/cyber-security-Dkq04oEy.webp"
	},
	"/assets/contact-CpYtPFac.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2a3a-ct00ki7WxOmjfUc+5xa0Y/9vyoA\"",
		"mtime": "2026-07-22T17:45:24.215Z",
		"size": 10810,
		"path": "../public/assets/contact-CpYtPFac.js"
	},
	"/assets/cloud-DYin2KR-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"699-dGFuAj6gktE6z7peNIVFNtRQ+e8\"",
		"mtime": "2026-07-22T17:45:24.213Z",
		"size": 1689,
		"path": "../public/assets/cloud-DYin2KR-.js"
	},
	"/assets/data_analesys-BXWCYvGm.webp": {
		"type": "image/webp",
		"etag": "\"5a02-ekWxMS45kCUcjLCl1zWA4l1KCCE\"",
		"mtime": "2026-07-22T17:45:24.277Z",
		"size": 23042,
		"path": "../public/assets/data_analesys-BXWCYvGm.webp"
	},
	"/assets/data-analetics-t5uWFES6.webp": {
		"type": "image/webp",
		"etag": "\"62e8-rLM1WIaNcbl5ix6yokmg6IeD+PU\"",
		"mtime": "2026-07-22T17:45:24.275Z",
		"size": 25320,
		"path": "../public/assets/data-analetics-t5uWFES6.webp"
	},
	"/assets/Dribbble_Touren-Cjlr-OFv.webp": {
		"type": "image/webp",
		"etag": "\"358f0-TtKIfmqCU4iBy0zhMKFNkVZTvdQ\"",
		"mtime": "2026-07-22T17:45:24.257Z",
		"size": 219376,
		"path": "../public/assets/Dribbble_Touren-Cjlr-OFv.webp"
	},
	"/assets/industries._slug-DdLoWncW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1df6-auHbJGBu+YN8tBnuKSA7eVCIXGo\"",
		"mtime": "2026-07-22T17:45:24.219Z",
		"size": 7670,
		"path": "../public/assets/industries._slug-DdLoWncW.js"
	},
	"/assets/industries-2CnddwSg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9cd-mvl0XS4Y2zSqV/KwyXZ5bkZj7bw\"",
		"mtime": "2026-07-22T17:45:24.217Z",
		"size": 2509,
		"path": "../public/assets/industries-2CnddwSg.js"
	},
	"/assets/industries._slug-_DyCFi1L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c7-dicMVtN56/dfx3Ds3nx+8D9mhYA\"",
		"mtime": "2026-07-22T17:45:24.221Z",
		"size": 455,
		"path": "../public/assets/industries._slug-_DyCFi1L.js"
	},
	"/assets/introducing-chatgpt-DcY_OpwU.webp": {
		"type": "image/webp",
		"etag": "\"1871a-dZkIJ/Fmwr+wj9leru4XdwaDphI\"",
		"mtime": "2026-07-22T17:45:24.292Z",
		"size": 100122,
		"path": "../public/assets/introducing-chatgpt-DcY_OpwU.webp"
	},
	"/assets/index-Drqfjsih.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6a0e6-/uVNazQZMM7oT2eOj0UYl7f0CMA\"",
		"mtime": "2026-07-22T17:45:24.203Z",
		"size": 434406,
		"path": "../public/assets/index-Drqfjsih.js"
	},
	"/assets/investment-platform-finance-professionals-profitability-DI_g9xrh.webp": {
		"type": "image/webp",
		"etag": "\"3bb8a-YroHA5zKsR3zD2kTbbRrGG8pSnQ\"",
		"mtime": "2026-07-22T17:45:24.295Z",
		"size": 244618,
		"path": "../public/assets/investment-platform-finance-professionals-profitability-DI_g9xrh.webp"
	},
	"/assets/brand-performance-dashboard-CPLEya5-.png": {
		"type": "image/png",
		"etag": "\"981fc-KRBBGOyVlXWdVsiPGzikKPbhi54\"",
		"mtime": "2026-07-22T17:45:24.261Z",
		"size": 623100,
		"path": "../public/assets/brand-performance-dashboard-CPLEya5-.png"
	},
	"/assets/email-marketing-platform-CMcFcywk.png": {
		"type": "image/png",
		"etag": "\"82b87-V2s2F6NMrbrmblg1BQH9m0BWNm4\"",
		"mtime": "2026-07-22T17:45:24.280Z",
		"size": 535431,
		"path": "../public/assets/email-marketing-platform-CMcFcywk.png"
	},
	"/assets/google-ads-dashboard-ClqroRl4.png": {
		"type": "image/png",
		"etag": "\"a9f5d-t3WY0uEOh43FXs+uFtzZgJ4EfIw\"",
		"mtime": "2026-07-22T17:45:24.290Z",
		"size": 696157,
		"path": "../public/assets/google-ads-dashboard-ClqroRl4.png"
	},
	"/assets/learning-ADkZRtIL.webp": {
		"type": "image/webp",
		"etag": "\"4b4c-3WjWQqJbN/nAIJMbSYA14yPRvvs\"",
		"mtime": "2026-07-22T17:45:24.296Z",
		"size": 19276,
		"path": "../public/assets/learning-ADkZRtIL.webp"
	},
	"/assets/marketing-automation-platform-CYyp8RB1.png": {
		"type": "image/png",
		"etag": "\"709f2-5zum4ZipVuhH12uHgaMq9IkMg9E\"",
		"mtime": "2026-07-22T17:45:24.299Z",
		"size": 461298,
		"path": "../public/assets/marketing-automation-platform-CYyp8RB1.png"
	},
	"/assets/mental-wellness-emotional-support-app-CoXhLKlt.webp": {
		"type": "image/webp",
		"etag": "\"15cee-m7FMH9CFCwlPMoXrzGUGHQBdxOs\"",
		"mtime": "2026-07-22T17:45:24.305Z",
		"size": 89326,
		"path": "../public/assets/mental-wellness-emotional-support-app-CoXhLKlt.webp"
	},
	"/assets/programing_workflow-CV5drXiA.webp": {
		"type": "image/webp",
		"etag": "\"693c-9A4FnDfoX0mRHXsC8AXbyVaMGOc\"",
		"mtime": "2026-07-22T17:45:24.313Z",
		"size": 26940,
		"path": "../public/assets/programing_workflow-CV5drXiA.webp"
	},
	"/assets/react_developer-Dra9d2zr.webp": {
		"type": "image/webp",
		"etag": "\"612e-7xvp8DCNNy0ySDkJb4Pk7rAlZD0\"",
		"mtime": "2026-07-22T17:45:24.314Z",
		"size": 24878,
		"path": "../public/assets/react_developer-Dra9d2zr.webp"
	},
	"/assets/routes-BflU7wza.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8648-4ZndNsi/bOP6ObKkeplxBcTTLD4\"",
		"mtime": "2026-07-22T17:45:24.223Z",
		"size": 34376,
		"path": "../public/assets/routes-BflU7wza.js"
	},
	"/assets/services-DjZYbgru.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ef8-qlAiFex+m2ov5Xit9LWyvXw7mIo\"",
		"mtime": "2026-07-22T17:45:24.225Z",
		"size": 3832,
		"path": "../public/assets/services-DjZYbgru.js"
	},
	"/assets/services._slug-BPjEHBnm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"237-LoWuX9UiCHafSbFyx/unp6T5T78\"",
		"mtime": "2026-07-22T17:45:24.228Z",
		"size": 567,
		"path": "../public/assets/services._slug-BPjEHBnm.js"
	},
	"/assets/services._slug-BLknMzCD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"22fa-wyWHRF0SQq0KgWRnF58HSRYS3Ns\"",
		"mtime": "2026-07-22T17:45:24.226Z",
		"size": 8954,
		"path": "../public/assets/services._slug-BLknMzCD.js"
	},
	"/assets/solutions._slug-A7rIRSpv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1afb-RZjPfcxUccpj9cfd1Dfk/NYRxVw\"",
		"mtime": "2026-07-22T17:45:24.234Z",
		"size": 6907,
		"path": "../public/assets/solutions._slug-A7rIRSpv.js"
	},
	"/assets/solutions._slug-C0WlYlrb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c5-YHA+MuGsjx23+dNkfcetT9KeuPw\"",
		"mtime": "2026-07-22T17:45:24.237Z",
		"size": 453,
		"path": "../public/assets/solutions._slug-C0WlYlrb.js"
	},
	"/assets/SiteLayout-CLzH5Txq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b158-SmAmiYfGoP1M8fSkTA97GcvaoTw\"",
		"mtime": "2026-07-22T17:45:24.206Z",
		"size": 176472,
		"path": "../public/assets/SiteLayout-CLzH5Txq.js"
	},
	"/assets/solutions-_HrxXtZP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ab0-Qht13Nhq8DikVbzEwc09x/2MyT8\"",
		"mtime": "2026-07-22T17:45:24.231Z",
		"size": 2736,
		"path": "../public/assets/solutions-_HrxXtZP.js"
	},
	"/assets/workflow-C5wMu1eA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"524-GeIlMPg0fsAzpQCkBIgujsyNyXk\"",
		"mtime": "2026-07-22T17:45:24.243Z",
		"size": 1316,
		"path": "../public/assets/workflow-C5wMu1eA.js"
	},
	"/assets/styles-COogv2RU.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1bdd7-VhjMbvSoPV2oPphHQ2HxCYXlbNg\"",
		"mtime": "2026-07-22T17:45:24.323Z",
		"size": 114135,
		"path": "../public/assets/styles-COogv2RU.css"
	},
	"/assets/mobile-first-charter-bus-booking-system-CUw10fq3.webp": {
		"type": "image/webp",
		"etag": "\"bee7a-21GMMfNjPUzlg1/EGZbNkU7IWKE\"",
		"mtime": "2026-07-22T17:45:24.309Z",
		"size": 781946,
		"path": "../public/assets/mobile-first-charter-bus-booking-system-CUw10fq3.webp"
	},
	"/assets/seo-analytics-dashboard-Bv_nyRs-.png": {
		"type": "image/png",
		"etag": "\"948cf-heiPfL5K/kqMXHfhAWSSaR5+4iA\"",
		"mtime": "2026-07-22T17:45:24.317Z",
		"size": 608463,
		"path": "../public/assets/seo-analytics-dashboard-Bv_nyRs-.png"
	},
	"/assets/social-media-campaign-dashboard-js_vCSVs.png": {
		"type": "image/png",
		"etag": "\"9a559-zWn3bVwYlypJCkZGI8hIemgAgPI\"",
		"mtime": "2026-07-22T17:45:24.320Z",
		"size": 632153,
		"path": "../public/assets/social-media-campaign-dashboard-js_vCSVs.png"
	},
	"/assets/3D_hero_animation_premium_design-DfB_uQN2.mp4": {
		"type": "video/mp4",
		"etag": "\"752783-ZU3IaxlRhff9W/gJefnA0O08554\"",
		"mtime": "2026-07-22T17:45:24.253Z",
		"size": 7677827,
		"path": "../public/assets/3D_hero_animation_premium_design-DfB_uQN2.mp4"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_7hAl4u = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_7hAl4u
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
