import React from "react";
import "@/styles/components/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        fullstack<span>developer</span>.se
      </div>
      <div>© {new Date().getFullYear()}</div>
    </footer>
  );
}
