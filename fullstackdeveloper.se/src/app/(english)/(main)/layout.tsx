import Footer from "@/components/Footer";
export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}<Footer /></>;
}
