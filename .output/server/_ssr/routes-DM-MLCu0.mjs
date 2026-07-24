import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as BrainCircuit, B as Database, E as Lock, J as ChartLine, O as Layers, U as CodeXml, W as Cloud, b as Palette, et as Boxes, g as Rocket, i as Workflow, l as Sparkles, m as ShieldCheck, nt as ArrowUpRight, rt as ArrowRight, t as Zap, u as Smartphone } from "../_libs/lucide-react.mjs";
import { n as MagneticButton, r as SiteLayout } from "./SiteLayout-CL_625_D.mjs";
import { n as SectionEyebrow, t as Reveal } from "./Reveal-BiUVjIOd.mjs";
import { t as businessman_thinking_default } from "./businessman-thinking-xnPaGkOQ.mjs";
import { t as industries } from "./industries-data-CTGHhnIE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DM-MLCu0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Typewriter({ words }) {
	const [i, setI] = (0, import_react.useState)(0);
	const [text, setText] = (0, import_react.useState)("");
	const [deleting, setDeleting] = (0, import_react.useState)(false);
	const longest = (0, import_react.useMemo)(() => words.reduce((a, b) => b.length > a.length ? b : a, ""), [words]);
	(0, import_react.useEffect)(() => {
		const current = words[i % words.length];
		const t = setTimeout(() => {
			if (!deleting && text === current) setDeleting(true);
			else if (deleting && text === "") {
				setDeleting(false);
				setI((n) => n + 1);
			} else setText((prev) => deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1));
		}, !deleting && text === current ? 1600 : deleting && text === "" ? 400 : deleting ? 30 : 65);
		return () => clearTimeout(t);
	}, [
		text,
		deleting,
		i,
		words
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "relative inline-block align-baseline whitespace-nowrap",
		style: { maxWidth: "100%" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			className: "invisible whitespace-nowrap",
			children: longest
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "absolute inset-0 whitespace-nowrap text-teal-grad",
			children: [text, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "caret" })]
		})]
	});
}
var ReactIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	viewBox: "-11.5 -10.23174 23 20.46348",
	fill: "none",
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: "0",
		cy: "0",
		r: "2",
		fill: "#61DAFB"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		stroke: "#61DAFB",
		strokeWidth: "1",
		fill: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				rx: "11",
				ry: "4.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				rx: "11",
				ry: "4.2",
				transform: "rotate(60)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				rx: "11",
				ry: "4.2",
				transform: "rotate(120)"
			})
		]
	})]
});
var NextjsIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	viewBox: "0 0 128 128",
	fill: "none",
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "64",
			cy: "64",
			r: "64",
			fill: "#000000"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M101.3 108.6L46.8 38H36v52h10V52.8l46.7 60.1a63.6 63.6 0 008.6-4.3z",
			fill: "#FFFFFF"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M82 38h10v52H82z",
			fill: "#FFFFFF"
		})
	]
});
var TypeScriptIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	viewBox: "0 0 128 128",
	fill: "none",
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		width: "128",
		height: "128",
		rx: "20",
		fill: "#3178C6"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M71.5 61.6h17v8.5h-17v25.5h-9.5v-25.5h-17v-8.5h43.5zm31.3 17.5c-2.3-2.1-5.7-3.6-10.2-4.5-3.3-.6-5.4-1.3-6.4-2.1-1-.8-1.5-1.8-1.5-3.1 0-1.4.6-2.5 1.8-3.3 1.2-.8 3-1.2 5.3-1.2 2.3 0 4.2.4 5.7 1.3 1.5.9 2.5 2.1 3 3.7h8.8c-.6-3.8-2.4-6.8-5.4-9-3-2.2-7.1-3.3-12.2-3.3-5.2 0-9.4 1.1-12.6 3.4-3.2 2.3-4.8 5.4-4.8 9.5 0 3.1 1 5.6 3 7.5 2 1.9 5.3 3.3 9.9 4.3 3.7.8 6.1 1.6 7.2 2.4 1.1.8 1.7 1.9 1.7 3.3 0 1.5-.7 2.7-2 3.6-1.3.9-3.2 1.3-5.7 1.3-3 0-5.3-.6-7.1-1.8-1.8-1.2-2.9-2.9-3.4-5.2h-9c.6 4.6 2.6 8.2 6 10.7 3.4 2.5 8.1 3.7 14 3.7 5.6 0 10.1-1.2 13.5-3.6 3.4-2.4 5.1-5.7 5.1-9.9 0-3.4-1.1-6.1-3.3-8.2z",
		fill: "#FFFFFF"
	})]
});
var NodeIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	viewBox: "0 0 128 128",
	fill: "none",
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M64 8l52 30v60L64 128 12 98V38L64 8z",
		fill: "#339933"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M64 24L26 46v44l38 22 38-22V46L64 24zm20 54.5c0 6.5-5.5 10.5-12 10.5-6.5 0-11-3.5-12-8.5h8c.5 2 2 3.5 4 3.5 2 0 3.5-1 3.5-2.5 0-1.5-1-2-4-2.5l-3.5-.5c-5-1-8-3.5-8-8 0-6 5-10 11.5-10 6 0 10.5 3.5 11.5 8h-7.5c-.5-1.5-2-2.5-4-2.5-2 0-3 1-3 2 0 1 1 1.5 3.5 2l3.5.5c5.5 1 9 3.5 9 8z",
		fill: "#FFFFFF"
	})]
});
var PythonIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	viewBox: "0 0 128 128",
	fill: "none",
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M63 8c-20 0-18.7 8.7-18.7 8.7l.1 9h19v2.7H36c-8.7 0-16.3 5.3-16.3 16.3 0 11 5.3 15.6 15.6 15.6h5.3v-7.8c0-8.8 7.5-16.3 16.3-16.3h18.7v-2.7c0-8.7-7.4-15.5-12.6-15.5H63zm-5.3 5.3a2.7 2.7 0 110 5.4 2.7 2.7 0 010-5.4z",
		fill: "#3776AB"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M65 120c20 0 18.7-8.7 18.7-8.7l-.1-9h-19v-2.7h27.4c8.7 0 16.3-5.3 16.3-16.3 0-11-5.3-15.6-15.6-15.6h-5.3v7.8c0 8.8-7.5 16.3-16.3 16.3H47.4v2.7c0 8.7 7.4 15.5 12.6 15.5H65zm5.3-5.3a2.7 2.7 0 110-5.4 2.7 2.7 0 010 5.4z",
		fill: "#FFD43B"
	})]
});
var PostgresIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	viewBox: "0 0 128 128",
	fill: "none",
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: "64",
		cy: "64",
		r: "56",
		fill: "#336791"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M64 24c-18 0-32 12-32 28 0 10 6 19 15 24-2 6-8 14-15 18 10 0 19-4 24-9 3 1 6 1 8 1 18 0 32-12 32-28S82 24 64 24z",
		fill: "#FFFFFF",
		opacity: "0.9"
	})]
});
var MongoIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	viewBox: "0 0 128 128",
	fill: "none",
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M64 8c-2 0-3 1-3 3v47c-7 2-17 9-17 25 0 18 13 28 20 37 7-9 20-19 20-37 0-16-10-23-17-25V11c0-2-1-3-3-3z",
		fill: "#47A248"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M64 8v112c.5 0 1 0 1.5-.5 7-9 18.5-19 18.5-36.5 0-16-10-23-17-25V11c0-2-1-3-3-3z",
		fill: "#499D4A"
	})]
});
var RedisIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	viewBox: "0 0 128 128",
	fill: "none",
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		width: "128",
		height: "128",
		rx: "24",
		fill: "#DC382D"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M32 44l32-16 32 16-32 16-32-16zm0 24l32 16 32-16-32-16-32 16zm0 24l32 16 32-16-32-16-32 16z",
		fill: "#FFFFFF",
		opacity: "0.9"
	})]
});
var GraphQLIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	viewBox: "0 0 128 128",
	fill: "none",
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M64 16l42 24v48L64 112 22 88V40L64 16z",
			stroke: "#E10098",
			strokeWidth: "8",
			fill: "none"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "64",
			cy: "16",
			r: "10",
			fill: "#E10098"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "106",
			cy: "40",
			r: "10",
			fill: "#E10098"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "106",
			cy: "88",
			r: "10",
			fill: "#E10098"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "64",
			cy: "112",
			r: "10",
			fill: "#E10098"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "22",
			cy: "88",
			r: "10",
			fill: "#E10098"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "22",
			cy: "40",
			r: "10",
			fill: "#E10098"
		})
	]
});
var TailwindIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	viewBox: "0 0 128 128",
	fill: "none",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M32 48c5-10 13-15 24-15 16 0 20 12 28 14 6 2 11 0 16-6-5 10-13 15-24 15-16 0-20-12-28-14-6-2-11 0-16 6zm-16 28c5-10 13-15 24-15 16 0 20 12 28 14 6 2 11 0 16-6-5 10-13 15-24 15-16 0-20-12-28-14-6-2-11 0-16 6z",
		fill: "#06B6D4"
	})
});
var AWSIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	viewBox: "0 0 128 128",
	fill: "none",
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "128",
			height: "128",
			rx: "24",
			fill: "#232F3E"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M36 76c12 9 28 14 44 14 16 0 28-4 36-10m-36 6l8 4-2-8",
			stroke: "#FF9900",
			strokeWidth: "6",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: "64",
			y: "58",
			textAnchor: "middle",
			fill: "#FFFFFF",
			fontSize: "26",
			fontWeight: "bold",
			fontFamily: "sans-serif",
			children: "aws"
		})
	]
});
var AzureIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	viewBox: "0 0 128 128",
	fill: "none",
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M38 98L68 28h22L54 104H38z",
		fill: "#0089D6"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M24 88l30-46 16 26-28 32H24z",
		fill: "#0072C6"
	})]
});
var GCPIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	viewBox: "0 0 128 128",
	fill: "none",
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M42 42h44v44H42z",
			fill: "#4285F4",
			opacity: "0.2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M64 24L28 44v40l36 20 36-20V44L64 24z",
			stroke: "#4285F4",
			strokeWidth: "8",
			fill: "none"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "64",
			cy: "64",
			r: "16",
			fill: "#EA4335"
		})
	]
});
var DockerIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	viewBox: "0 0 128 128",
	fill: "none",
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "128",
			height: "128",
			rx: "24",
			fill: "#1D63ED"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M24 74c0 18 16 26 40 26s40-8 40-26c-4 0-14 2-20-4-6 6-18 4-24-2-4 4-16 6-20 2-4 2-12 4-16 4z",
			fill: "#FFFFFF"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "36",
			y: "56",
			width: "10",
			height: "10",
			rx: "2",
			fill: "#FFFFFF"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "50",
			y: "56",
			width: "10",
			height: "10",
			rx: "2",
			fill: "#FFFFFF"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "64",
			y: "56",
			width: "10",
			height: "10",
			rx: "2",
			fill: "#FFFFFF"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "50",
			y: "42",
			width: "10",
			height: "10",
			rx: "2",
			fill: "#FFFFFF"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "64",
			y: "42",
			width: "10",
			height: "10",
			rx: "2",
			fill: "#FFFFFF"
		})
	]
});
var K8sIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	viewBox: "0 0 128 128",
	fill: "none",
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "64",
			cy: "64",
			r: "56",
			fill: "#326CE5"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: "64,24 98,44 98,84 64,104 30,84 30,44",
			fill: "none",
			stroke: "#FFFFFF",
			strokeWidth: "6"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "64",
			cy: "64",
			r: "12",
			fill: "#FFFFFF"
		})
	]
});
var TerraformIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	viewBox: "0 0 128 128",
	fill: "none",
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		width: "128",
		height: "128",
		rx: "24",
		fill: "#844FBA"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M34 32l26 15v30L34 62V32zm30 30l26 15v30L64 92V62zm0-30l26 15v30L64 62V32zm30 30l26 15v30L94 92V62z",
		fill: "#FFFFFF",
		opacity: "0.9"
	})]
});
var OpenAIIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	viewBox: "0 0 128 128",
	fill: "none",
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "128",
			height: "128",
			rx: "24",
			fill: "#10A37F"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M88 64c0-13.3-10.7-24-24-24S40 50.7 40 64s10.7 24 24 24 24-10.7 24-24z",
			stroke: "#FFFFFF",
			strokeWidth: "8",
			fill: "none"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "64",
			cy: "64",
			r: "8",
			fill: "#FFFFFF"
		})
	]
});
var FlutterIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	viewBox: "0 0 128 128",
	fill: "none",
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M78 20L34 64l18 18L96 38H78z",
			fill: "#42A5F5"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M52 82l26 26h18L64 76l-12 6z",
			fill: "#0D47A1"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M78 56L52 82l12 12 32-38H78z",
			fill: "#29B6F6"
		})
	]
});
var StripeIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
	viewBox: "0 0 128 128",
	fill: "none",
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		width: "128",
		height: "128",
		rx: "24",
		fill: "#635BFF"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: "M86 52c0-6-5-9-14-9-12 0-24 5-30 9l-4-16c8-5 21-10 35-10 24 0 36 11 36 29 0 24-33 25-33 36 0 3 3 5 9 5 13 0 25-5 31-10l4 16c-8 6-22 11-37 11-24 0-37-11-37-29 0-25 34-26 34-36 0-3-2-4-7-4z",
		fill: "#FFFFFF"
	})]
});
var row1 = [
	{
		name: "React",
		category: "Frontend",
		Icon: ReactIcon,
		brandColor: "#61DAFB"
	},
	{
		name: "Next.js",
		category: "Framework",
		Icon: NextjsIcon,
		brandColor: "#000000"
	},
	{
		name: "TypeScript",
		category: "Language",
		Icon: TypeScriptIcon,
		brandColor: "#3178C6"
	},
	{
		name: "Node.js",
		category: "Runtime",
		Icon: NodeIcon,
		brandColor: "#339933"
	},
	{
		name: "Python",
		category: "AI / Data",
		Icon: PythonIcon,
		brandColor: "#3776AB"
	},
	{
		name: "PostgreSQL",
		category: "Database",
		Icon: PostgresIcon,
		brandColor: "#336791"
	},
	{
		name: "MongoDB",
		category: "NoSQL",
		Icon: MongoIcon,
		brandColor: "#47A248"
	},
	{
		name: "Redis",
		category: "Caching",
		Icon: RedisIcon,
		brandColor: "#DC382D"
	},
	{
		name: "GraphQL",
		category: "API",
		Icon: GraphQLIcon,
		brandColor: "#E10098"
	},
	{
		name: "Tailwind CSS",
		category: "Styling",
		Icon: TailwindIcon,
		brandColor: "#06B6D4"
	}
];
var row2 = [
	{
		name: "AWS",
		category: "Cloud",
		Icon: AWSIcon,
		brandColor: "#FF9900"
	},
	{
		name: "Azure",
		category: "Cloud",
		Icon: AzureIcon,
		brandColor: "#0089D6"
	},
	{
		name: "GCP",
		category: "Cloud",
		Icon: GCPIcon,
		brandColor: "#4285F4"
	},
	{
		name: "Docker",
		category: "Container",
		Icon: DockerIcon,
		brandColor: "#1D63ED"
	},
	{
		name: "Kubernetes",
		category: "Orchestration",
		Icon: K8sIcon,
		brandColor: "#326CE5"
	},
	{
		name: "Terraform",
		category: "IaC",
		Icon: TerraformIcon,
		brandColor: "#844FBA"
	},
	{
		name: "OpenAI",
		category: "AI Agents",
		Icon: OpenAIIcon,
		brandColor: "#10A37F"
	},
	{
		name: "Flutter",
		category: "Cross-Platform",
		Icon: FlutterIcon,
		brandColor: "#02569B"
	},
	{
		name: "React Native",
		category: "Mobile",
		Icon: ReactIcon,
		brandColor: "#61DAFB"
	},
	{
		name: "Stripe",
		category: "Fintech",
		Icon: StripeIcon,
		brandColor: "#635BFF"
	}
];
function Card({ t }) {
	const Icon = t.Icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group mx-3.5 flex min-w-[240px] items-center gap-3.5 rounded-2xl border border-border/80 bg-card/90 px-4 py-3.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_15px_30px_-15px_rgba(56,224,208,0.25)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-surface p-1.5 transition-transform duration-300 group-hover:scale-105",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-7 w-7" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-sm font-semibold leading-tight text-foreground transition-colors group-hover:text-teal",
				children: t.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[0.68rem] font-medium uppercase tracking-wider text-muted-foreground",
				children: t.category
			})]
		})]
	});
}
function Marquee({ items, direction = "left", speed = 45 }) {
	const [paused, setPaused] = (0, import_react.useState)(false);
	const dup = [
		...items,
		...items,
		...items
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative overflow-hidden py-1",
		onMouseEnter: () => setPaused(true),
		onMouseLeave: () => setPaused(false),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-background to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-background to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-max",
				style: {
					animation: `marquee-${direction} ${speed}s linear infinite`,
					animationPlayState: paused ? "paused" : "running"
				},
				children: dup.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { t }, `${t.name}-${i}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-33.333%); }
          to { transform: translateX(0); }
        }
      ` })
		]
	});
}
function TechMarquee() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {
			items: row1,
			direction: "left",
			speed: 45
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {
			items: row2,
			direction: "right",
			speed: 50
		})]
	});
}
var _3D_hero_animation_premium_design_default = "/assets/3D_hero_animation_premium_design-DfB_uQN2.mp4";
var claud_computing_default = "/assets/claud-computing-C6XKKlG2.webp";
var data_analesys_default = "/assets/data_analesys-BXWCYvGm.webp";
var react_developer_default = "/assets/react_developer-Dra9d2zr.webp";
var services = [
	{
		slug: "software-development",
		icon: CodeXml,
		title: "Custom Software",
		desc: "Bespoke engineering for mission-critical business logic and scale.",
		tags: [
			"Architecture",
			"APIs",
			"Security"
		]
	},
	{
		slug: "web-development",
		icon: Layers,
		title: "Web Development",
		desc: "Corporate sites, dashboards and web apps engineered for speed and SEO.",
		tags: [
			"Next.js",
			"React",
			"PWA"
		]
	},
	{
		slug: "mobile-development",
		icon: Smartphone,
		title: "Mobile Apps",
		desc: "iOS, Android and cross-platform apps with native-grade UX.",
		tags: [
			"Flutter",
			"React Native",
			"Swift"
		]
	},
	{
		slug: "ai-solutions",
		icon: BrainCircuit,
		title: "AI Solutions",
		desc: "LLM agents, RAG systems and AI automations tailored to your data.",
		tags: [
			"OpenAI",
			"LangChain",
			"RAG"
		]
	},
	{
		slug: "erp-solutions",
		icon: Database,
		title: "ERP Solutions",
		desc: "Manufacturing, hospital, school and inventory ERP with role-based access.",
		tags: [
			"Workflow",
			"RBAC",
			"Reporting"
		]
	},
	{
		slug: "crm-development",
		icon: Workflow,
		title: "CRM Development",
		desc: "Sales, service and lead-management CRMs built around your process.",
		tags: [
			"Pipelines",
			"Automation",
			"Insights"
		]
	},
	{
		slug: "saas-development",
		icon: Boxes,
		title: "SaaS Platforms",
		desc: "Multi-tenant, subscription-ready SaaS products from MVP to scale.",
		tags: [
			"Multi-tenant",
			"Billing",
			"Auth"
		]
	},
	{
		slug: "cloud-devops",
		icon: Cloud,
		title: "Cloud & DevOps",
		desc: "AWS, Azure, GCP infrastructure, cloud migration and CI/CD pipelines.",
		tags: [
			"AWS",
			"Docker",
			"CI/CD"
		]
	},
	{
		slug: "ui-ux-design",
		icon: Palette,
		title: "UI / UX Design",
		desc: "Product, dashboard and mobile design systems built for conversion.",
		tags: [
			"Product",
			"Design Systems",
			"Research"
		]
	}
];
var process = [
	{
		n: "01",
		title: "Discovery",
		desc: "We map goals, users and constraints — then align on outcomes, KPIs and success metrics before writing a single line of code."
	},
	{
		n: "02",
		title: "Design",
		desc: "Wireframes, prototypes and high-fidelity interfaces with a componentized design system your engineers can build against."
	},
	{
		n: "03",
		title: "Engineering",
		desc: "Two-week sprints, code reviews, automated tests and observability baked in from day one. You see progress every week."
	},
	{
		n: "04",
		title: "Launch & Scale",
		desc: "Blue/green deploys, performance tuning and 24×7 monitoring. We stay on as a long-term engineering partner, not a vendor."
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-0 pointer-events-none overflow-hidden",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					src: _3D_hero_animation_premium_design_default,
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					preload: "auto",
					className: "hero-video h-full w-full object-cover scale-[1.03]",
					style: {
						transform: "translateZ(0) scale(1.03)",
						willChange: "transform, opacity",
						backfaceVisibility: "hidden",
						WebkitBackfaceVisibility: "hidden"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/60 to-ink/45" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,oklch(0.19_0.03_200/0.5),oklch(0.13_0.025_200/0.7)_90%)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-fade opacity-30" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 pointer-events-none",
					style: { background: "radial-gradient(ellipse 70% 65% at 50% 50%, transparent 45%, oklch(0.12 0.025 200 / 0.55) 100%)" }
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative z-10 flex min-h-screen items-center overflow-hidden bg-transparent text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto w-full max-w-7xl px-6 pt-32 pb-20 md:px-8 md:pt-36 md:pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-w-3xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Official Website" }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							i: 1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-8 font-display text-5xl font-semibold leading-[1.02] text-balance md:text-7xl lg:text-[5.25rem]",
								children: [
									"Engineering",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Typewriter, { words: [
										"AI-First Software.",
										"Custom Software.",
										"Digital Transformation.",
										"Enterprise Solutions.",
										"Cloud & AI Innovation."
									] })
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							i: 2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-10 max-w-xl text-lg leading-relaxed text-white/70",
								children: "BLUETORN Technologies designs, engineers and deploys high-trust software — ERP systems, AI platforms and web architectures — for startups, SMEs and enterprises building the next decade of business."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							i: 3,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-12 flex flex-wrap items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
									to: "/portfolio",
									variant: "primary",
									children: ["Explore Case Studies ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
									to: "/contact",
									variant: "ghost",
									children: "Start a Project"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							i: 4,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-teal" }), "Enterprise-grade security"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4 text-teal" }), "Blazing-fast performance"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4 text-teal" }), "Long-term partnership"]
									})
								]
							})
						})
					] })
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative z-10 border-b border-border bg-surface shadow-2xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1fr_1.15fr] md:px-8 md:py-28 lg:gap-16 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "BLUETORN Technologies" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 font-display text-3xl font-semibold leading-tight text-balance md:text-4xl lg:text-5xl",
							children: "Clean, performance engineering for businesses that refuse to feel ordinary."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-base leading-relaxed text-muted-foreground",
							children: "Founded in 2026 in Navi Mumbai, BLUETORN is a boutique software engineering studio built for enterprises that value craft, security and long-term partnership over shortcuts."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full border border-teal/25 bg-teal/10 px-3.5 py-1.5 text-xs font-semibold text-teal",
									children: "Senior Engineering Studio"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full border border-teal/25 bg-teal/10 px-3.5 py-1.5 text-xs font-semibold text-teal",
									children: "Zero Shortcuts"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full border border-teal/25 bg-teal/10 px-3.5 py-1.5 text-xs font-semibold text-teal",
									children: "Navi Mumbai, MH"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-9",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
								to: "/about",
								variant: "outline",
								children: ["Learn More About Us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							})
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					i: 1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "group relative overflow-hidden rounded-3xl border border-border/80 bg-card p-3 shadow-[0_20px_60px_-25px_oklch(0.19_0.03_200/0.2)] transition-all duration-500 hover:border-teal/50 hover:shadow-[0_30px_70px_-20px_oklch(0.72_0.13_190/0.2)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/3] overflow-hidden rounded-2xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: react_developer_default,
									alt: "Software engineer at work",
									loading: "lazy",
									width: 1200,
									height: 900,
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/15 bg-ink/80 p-4 backdrop-blur-md text-white shadow-lg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[0.7rem] font-semibold text-teal uppercase tracking-widest",
										children: "Engineering Excellence"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-semibold mt-0.5",
										children: "High-Trust Codebases & Systems"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-teal/20 text-teal border border-teal/30",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
									})]
								})
							]
						})
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "services",
			className: "relative z-10 bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-2xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Our Services" }) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								i: 1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-5 font-display text-4xl font-semibold text-balance md:text-5xl",
									children: "Bespoke software services, engineered for outcomes."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								i: 2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-muted-foreground",
									children: "One integrated team across engineering, design and AI — building the systems that move your business forward."
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
						children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							i: i % 3,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/services/$slug",
								params: { slug: s.slug },
								className: "card-hover group block h-full rounded-3xl border border-border bg-card p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-12 w-12 place-items-center rounded-2xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-6 font-display text-xl font-semibold",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted-foreground",
										children: s.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 flex flex-wrap gap-2",
										children: s.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full border border-border bg-secondary px-2.5 py-1 text-[0.68rem] font-medium text-muted-foreground",
											children: t
										}, t))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal",
										children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })]
									})
								]
							})
						}, s.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
							to: "/services",
							variant: "outline",
							children: ["View All Services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative z-10 overflow-hidden bg-ink/75 backdrop-blur-[2px] text-white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grid-fade opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-[1fr_1.6fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sticky top-32",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "How We Build" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 font-display text-4xl font-semibold text-balance md:text-5xl",
								children: "A disciplined process, tuned for enterprise trust."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-md text-white/60",
								children: "Every engagement runs on the same battle-tested framework — the reason our clients come back for their next platform, not just their next feature."
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: process.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							i,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group flex gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:border-teal/40 hover:bg-white/[0.05]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-3xl font-semibold text-teal",
									children: p.n
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-semibold",
									children: p.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-white/65",
									children: p.desc
								})] })]
							})
						}, p.n))
					})]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative z-10 bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Flagship Work" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl font-semibold text-balance md:text-5xl",
							children: "Software that moves the needle."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-md text-muted-foreground",
							children: "A selection of the platforms we design and engineer — from ERP systems and AI copilots to conversion-focused corporate websites."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-6 lg:grid-cols-3",
						children: [
							{
								img: data_analesys_default,
								tag: "ERP Platform",
								title: "Enterprise ERP Suite",
								desc: "Modular ERP for manufacturing — inventory, HR, finance and reporting in one system."
							},
							{
								img: businessman_thinking_default,
								tag: "SaaS Product",
								title: "Customer CRM Cloud",
								desc: "Multi-tenant SaaS CRM with pipelines, automations and role-based access control."
							},
							{
								img: claud_computing_default,
								tag: "Cloud & AI",
								title: "AI Operations Console",
								desc: "LLM-powered internal console with RAG on private data and workflow automation."
							}
						].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							i,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group overflow-hidden rounded-3xl border border-border bg-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[4/3] overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: c.img,
										alt: c.title,
										loading: "lazy",
										className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-widest text-ink",
										children: c.tag
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-lg font-semibold",
										children: c.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: c.desc
									})]
								})]
							})
						}, c.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
							to: "/portfolio",
							variant: "outline",
							children: ["View All Projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative z-10 border-y border-border bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-20 md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Technology Stack" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-3xl font-semibold md:text-4xl",
							children: "Modern tools. Rigorously chosen. Engineered to last."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "Hover to pause."
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechMarquee, {})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative z-10 bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-[1fr_1.4fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Industries" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-4xl font-semibold text-balance md:text-5xl",
							children: "Deep experience across the industries that build India."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-muted-foreground",
							children: "From regulated healthcare and finance to fast-moving retail and logistics, our teams bring domain fluency to every engagement."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
								to: "/industries",
								variant: "outline",
								children: ["Explore Industries ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							})
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3 sm:grid-cols-3",
						children: industries.slice(0, 12).map((ind, i) => {
							const Icon = ind.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								i: i % 6,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/industries/$slug",
									params: { slug: ind.slug },
									className: "group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-teal hover:shadow-[0_20px_40px_-25px_oklch(0.72_0.13_190/0.4)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-9 w-9 place-items-center rounded-xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium",
										children: ind.name
									})]
								})
							}, ind.slug);
						})
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative z-10 bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Why BLUETORN" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl font-semibold text-balance md:text-5xl",
						children: "A boutique studio, engineered like an enterprise partner."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							icon: Rocket,
							title: "Senior teams only",
							desc: "Every engagement is led by senior engineers — no junior handoffs, no offshore surprises."
						},
						{
							icon: ShieldCheck,
							title: "Security-first",
							desc: "JWT, OAuth 2.0, SSL/TLS, RBAC and 2FA baked into every architecture we ship."
						},
						{
							icon: ChartLine,
							title: "Outcomes over output",
							desc: "We measure ourselves on business KPIs, not tickets closed. Growth is the deliverable."
						},
						{
							icon: Sparkles,
							title: "Long-term partnership",
							desc: "80% of our clients return for a second and third project. We build for the decade ahead."
						}
					].map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						i,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-full rounded-3xl border border-border bg-card p-7 card-hover",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-11 w-11 place-items-center rounded-2xl bg-ink text-teal",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.icon, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 font-display text-lg font-semibold",
									children: v.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: v.desc
								})
							]
						})
					}, v.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative z-10 overflow-hidden bg-ink/75 backdrop-blur-[2px] text-white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-24 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-teal/20 blur-[120px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-24 top-1/3 h-[500px] w-[500px] rounded-full bg-teal-glow/10 blur-[120px]" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-4xl px-6 py-24 text-center md:px-8 md:py-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Let's Build" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						i: 1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 font-display text-4xl font-semibold leading-tight text-balance md:text-6xl",
							children: "Let's craft something premium, together."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						i: 2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-6 max-w-xl text-white/70",
							children: "Talk to our team about your software, AI or digital transformation program. We reply within one working day."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						i: 3,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap justify-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
								to: "/contact",
								variant: "primary",
								children: ["Get a Quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
								to: "/portfolio",
								variant: "ghost",
								children: "See Our Work"
							})]
						})
					})
				]
			})]
		})
	] });
}
//#endregion
export { Home as component };
