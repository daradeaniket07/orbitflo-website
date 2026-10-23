import { site } from "@/config/site";
import { ClosingCta } from "@/components/closing-cta";

type ComingSoonProps = {
  page: string;
};

export function ComingSoon({ page }: ComingSoonProps) {
  return (
    <main id="main-content">
      <div className="page-shell container">
        <span className="eyebrow">{page}</span>
        <h1>{site.placeholders.title}</h1>
        <p>{site.placeholders.message}</p>
      </div>
      <ClosingCta />
    </main>
  );
}
