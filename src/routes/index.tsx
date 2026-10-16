import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mercedes-Benz · Change Management" },
      { name: "description", content: "Change Management Platform for tracking change requests and status." },
      { property: "og:title", content: "Mercedes-Benz · Change Management" },
      { property: "og:description", content: "Change Management Platform for tracking change requests and status." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/cmp.html"
      title="Mercedes-Benz · Change Management"
      className="fixed inset-0 h-screen w-screen border-0"
    />
  );
}
