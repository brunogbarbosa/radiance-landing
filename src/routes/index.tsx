import { createFileRoute } from "@tanstack/react-router";
import Landing from "@/components/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Raiane Araújo | Dentista & Implantodontista" },
      { name: "description", content: "Implantes, lentes em resina, próteses e laminados cerâmicos em Patos de Minas e Vazante — MG. Sorrisos que transformam vidas." },
      { property: "og:title", content: "Dra. Raiane Araújo | Dentista & Implantodontista" },
      { property: "og:description", content: "Sorrisos que transformam vidas. Atendimento em Patos de Minas e Vazante — MG." },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "icon", type: "image/jpeg", href: "/favicon.jpg" },
    ],
  }),
  component: Landing,
});
