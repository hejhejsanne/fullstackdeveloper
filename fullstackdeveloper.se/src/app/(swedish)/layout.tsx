import SiteLayout, { siteMetadata } from "../site-layout";
export const metadata = siteMetadata;
export default function SwedishLayout({ children }: { children: React.ReactNode }) {
  return <SiteLayout lang="sv">{children}</SiteLayout>;
}
