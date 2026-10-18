import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";
import { site } from "@/config/site";

const pageLabel = site.navigation.find(({ href }) => href === "/contact")?.label ?? site.name;

export const metadata: Metadata = { title: pageLabel, description: site.description };

export default function ContactPage() {
  return <ComingSoon page={pageLabel} />;
}
