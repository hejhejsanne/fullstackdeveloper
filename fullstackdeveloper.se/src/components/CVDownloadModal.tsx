// src/components/CVDownloadModal.tsx
"use client";
import "@/styles/cvmodal.css";
/**
 * CVDownloadModal
 *
 * Renders a modal that asks for the visitor's email before
 * downloading the CV. On submit it calls the API route which
 * notifies you via email, then triggers the download instantly.
 */

import { useState, useRef, useEffect } from "react";

interface CVDownloadModalProps {
  onClose: () => void;
}

export default function CVDownloadModal({ onClose }: CVDownloadModalProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on open
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Close on Escape key
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

      // Trigger download immediately after successful API call
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
    // Backdrop
    <div
      className="cv-modal__backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      {/* Modal — stop click propagating to backdrop */}
      <div className="cv-modal__box" onClick={(e) => e.stopPropagation()}>
        <button
          className="cv-modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        <h2 className="cv-modal__title" id="cv-modal-title">
          Download CV
        </h2>
        <p className="cv-modal__desc">
          Enter your email and the download starts immediately.
        </p>

        <form onSubmit={handleSubmit} className="cv-modal__form">
          <input
            ref={inputRef}
            type="email"
            className="cv-modal__input"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading"}
          />
          {status === "error" && (
            <p className="cv-modal__error" role="alert">
              {errorMsg}
            </p>
          )}
          <button
            type="submit"
            className="btn-primary cv-modal__submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Please wait…" : "Download"}
          </button>
        </form>
      </div>
    </div>
  );
}
