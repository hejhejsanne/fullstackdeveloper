import React from "react";
import "@/styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        fullstack<span>developer</span>.se
      </div>
      {/* <div>Built with TypeScript &amp; care</div> */}
      <div>© {new Date().getFullYear()}</div>
    </footer>
  );
}
