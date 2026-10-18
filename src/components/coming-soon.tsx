import { site } from "@/config/site";

type ComingSoonProps = {
  page: string;
};

export function ComingSoon({ page }: ComingSoonProps) {
  return (
    <main className="page-shell container" id="main-content">
      <span className="eyebrow">{page}</span>
      <h1>{site.placeholders.title}</h1>
      <p>{site.placeholders.message}</p>
    </main>
  );
}
