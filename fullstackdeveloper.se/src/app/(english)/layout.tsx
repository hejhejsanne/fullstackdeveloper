import SiteLayout, { siteMetadata } from "../site-layout";
export const metadata = siteMetadata;
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteLayout lang="en">{children}</SiteLayout>;
}
