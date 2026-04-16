import "@/styles/globals.css";
import ChatBot from "@/components/ChatBot";
import FadeInObserver from "@/components/FadeInObserver";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <ChatBot />
        <FadeInObserver /> {/* ← replaces the inline script */}
      </body>
    </html>
  );
}
