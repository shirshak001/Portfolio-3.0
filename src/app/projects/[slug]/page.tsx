import CaseStudyClient from "./CaseStudyClient";

const SLUGS = ["soilsaathi", "credmate", "polygov", "safety-band", "gymflex", "attendease", "layerforge"];

export function generateStaticParams() {
  return SLUGS.map(slug => ({ slug }));
}

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  return <CaseStudyClient params={params} />;
}
