import { business } from "@/config/business";

function formatCityList(cities: readonly string[]) {
  if (cities.length < 2) return cities[0] ?? "";
  return `${cities.slice(0, -1).join(", ")} and ${cities[cities.length - 1]}`;
}

export function WhereWeWork() {
  const content = business.whereWeWork;
  const description = content.description
    .replace("{region}", business.region)
    .replace("{cities}", formatCityList(business.cities))
    .replace("{country}", business.countryName);

  return (
    <section aria-labelledby="where-we-work-title" className="where-we-work-section section-pad">
      <div className="container where-we-work-content">
        <span className="eyebrow">{content.eyebrow}</span>
        <h2 id="where-we-work-title">{content.title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}
