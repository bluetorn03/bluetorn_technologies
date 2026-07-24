import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "sonner";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Wordmark } from "@/components/site/Logo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="flex flex-col items-center text-center max-w-md">
        <div className="mb-8">
          <Wordmark tone="dark" />
        </div>
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "BLUETORN Technologies — Premium Software Engineering & Digital Transformation" },
      {
        name: "description",
        content:
          "BLUETORN Technologies builds enterprise-grade software, AI, ERP, CRM, SaaS and cloud solutions for startups, SMEs and enterprises. Based in Navi Mumbai, India.",
      },
      { name: "author", content: "BLUETORN Technologies" },
      { property: "og:title", content: "BLUETORN Technologies — Premium Software Engineering & Digital Transformation" },
      { property: "og:description", content: "BLUETORN Technologies builds enterprise-grade software, AI, ERP, CRM, SaaS and cloud solutions for startups, SMEs and enterprises. Based in Navi Mumbai, India." },
      { property: "og:site_name", content: "BLUETORN Technologies" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "BLUETORN Technologies — Premium Software Engineering & Digital Transformation" },
      { name: "twitter:description", content: "BLUETORN Technologies builds enterprise-grade software, AI, ERP, CRM, SaaS and cloud solutions for startups, SMEs and enterprises. Based in Navi Mumbai, India." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/ee0f63fb-3c90-4d7e-a9b5-821e3d7e4e42" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/ee0f63fb-3c90-4d7e-a9b5-821e3d7e4e42" },
    ],
    script: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "BLUETORN Technologies",
          "url": "https://bluetorn.com",
          "logo": "https://bluetorn.com/BluetornLogo.webp",
          "email": "info@bluetorn.com",
          "telephone": "+91 77889 96579",
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+91 77889 96579",
              "contactType": "sales",
              "email": "info@bluetorn.com"
            },
            {
              "@type": "ContactPoint",
              "telephone": "+91 7788996549",
              "contactType": "customer service",
              "email": "contact@bluetorn.com"
            }
          ]
        })
      }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" },
      { rel: "icon", type: "image/webp", href: "/BluetornLogo.webp" },
      { rel: "shortcut icon", href: "/BluetornLogo.webp" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster position="bottom-right" theme="dark" richColors />
    </QueryClientProvider>
  );
}
