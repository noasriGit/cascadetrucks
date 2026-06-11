import type { Author } from "@/lib/types";

// NOTE: When a named lead agent is confirmed, add their full name and Virginia
// P&C license number here to further strengthen E-E-A-T on resource guides.
export const authors: Author[] = [
  {
    id: "cascade-commercial-team",
    name: "Cascade Commercial Lines Team",
    title: "Licensed Commercial Insurance Advisors, Cascade Insurance Group",
    bio: "The Cascade Trucks Insurance team is the commercial lines division of Cascade Insurance Group, an independent agency based in Manassas, Virginia. Our licensed advisors place commercial auto, trucking, and fleet coverage for Virginia operators every day, working across multiple carrier partners to match dump truck, tow truck, contractor, and livery businesses with the right protection. The guides we publish reflect day-to-day experience with Virginia DMV requirements, FMCSA filings, and the coverages that keep commercial vehicles compliant and on the road.",
    credentials: [
      "Licensed property & casualty advisors in Virginia",
      "Commercial auto, trucking & fleet specialists",
      "Independent agency representing multiple carriers",
      "Based in Manassas, VA, serving operators statewide",
    ],
    image: "/images/Cascade-Insurance-Group-3.jpg",
  },
];

const authorMap = new Map(authors.map((a) => [a.id, a]));

export function getAuthor(id: string): Author | undefined {
  return authorMap.get(id);
}
