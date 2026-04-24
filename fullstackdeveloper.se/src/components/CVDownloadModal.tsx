"use client";
import "@/styles/components/cvmodal.css";

import { useState, useRef, useEffect } from "react";

interface CVDownloadModalProps {
  onClose: () => void;
}

export default function CVDownloadModal({ onClose }: CVDownloadModalProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/cv-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      const link = document.createElement("a");
      link.href = "/cv.pdf";
      link.download = "Sanne_Delin_CV.pdf";
      link.click();

      onClose();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <div
      className="cv-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      <div className="cv-box" onClick={(e) => e.stopPropagation()}>
        <button className="cv-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <h2 className="cv-title" id="cv-modal-title">
          Download CV
        </h2>
        <p className="cv-desc">
          Enter your email and the download starts immediately.
        </p>

        <form onSubmit={handleSubmit} className="cv-form">
          <input
            ref={inputRef}
            type="email"
            className="cv-input"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading"}
          />
          {status === "error" && (
            <p className="cv-error" role="alert">
              {errorMsg}
            </p>
          )}
          <button
            type="submit"
            className="btn-primary cv-submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Please wait…" : "Download"}
          </button>
        </form>
      </div>
    </div>
  );
}
