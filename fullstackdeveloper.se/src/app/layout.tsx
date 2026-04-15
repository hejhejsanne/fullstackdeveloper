import "@/styles/globals.css";
import ChatBot from "@/components/ChatBot";

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
        <script dangerouslySetInnerHTML={{ __html: `
          (function () {
            var els = document.querySelectorAll('.fade-in');
            if (!('IntersectionObserver' in window)) {
              els.forEach(function (el) { el.classList.add('visible'); });
              return;
            }
            var observer = new IntersectionObserver(
              function (entries) {
                entries.forEach(function (entry) {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                  }
                });
              },
              { threshold: 0.08 }
            );
            els.forEach(function (el) { observer.observe(el); });
          })();
        `}} />
      </body>
    </html>
  );
}
