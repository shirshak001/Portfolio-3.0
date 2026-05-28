// Server component — only exports generateStaticParams and renders the client component
import CaseStudyClient from "./CaseStudyClient";

const SLUGS = ["soilsaathi", "credmate", "layerforge", "safety-band"];

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  return <CaseStudyClient params={params} />;
}
