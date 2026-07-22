import type { PortfolioReview } from "@/lib/schema";

export function formatCapabilitiesForDisplay(review: PortfolioReview): string {
  return review.capabilities
    .map((cap) => {
      const items = cap.evidence
        .map((item) => item.achievement)
        .join("\n\n");
      return `${cap.name}\n${items}`;
    })
    .join("\n\n---\n\n");
}

export function formatCapabilitiesForCopy(review: PortfolioReview): string {
  return formatCapabilitiesForDisplay(review);
}
