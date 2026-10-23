export type Project = {
  slug: string;
  name: string;
  sector: string;
  tag: string;
  description: string;
  image?: string;
  url?: string;
  challenge?: string;
  solution?: string;
  results?: string;
};

export const projects: Project[] = [
  {
    slug: "jijau-industries",
    name: "Jijau Industries",
    sector: "Manufacturing · 3-wheeler and 2-wheeler seating",
    tag: "Website design and development",
    description: "A website for a manufacturer of 3-wheeler and 2-wheeler seating, built to showcase their products and make it easy for customers to get in touch.",
  },
  {
    slug: "dandeli-adventure-resorts",
    name: "Dandeli Adventure Resorts",
    sector: "Tourism · Adventure resort",
    tag: "Website design and development",
    description: "A website for an adventure resort in Dandeli, built to showcase the stay and its experiences and make enquiries easy.",
  },
];
