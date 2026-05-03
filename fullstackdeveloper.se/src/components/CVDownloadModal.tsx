"use client";
import "@/styles/components/cvmodal.css";
import { useRouter } from "next/navigation";
import { useEffect, useCallback } from "react";

interface CVDownloadModalProps {
  onClose?: () => void;
}

export default function CVDownloadModal({ onClose }: CVDownloadModalProps) {
  const router = useRouter();

  const handleClose = useCallback(() => {
    if (onClose) onClose();
    else router.back();
  }, [onClose, router]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleClose]);

  return (
    <div
      className="cv-backdrop"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      <div className="cv-box" onClick={(e) => e.stopPropagation()}>
        <button className="cv-close" onClick={handleClose} aria-label="Close">
          ✕
        </button>
        <h2 className="cv-title" id="cv-modal-title">
          Download my ATS-CV
        </h2>
        <p className="cv-desc">
          Since this CV contains personal information, I want to know
          who&rsquo;s accessing it.
        </p>

        <p className="cv-desc">
          Authorize with LinkedIn — I built this integration myself, and once
          you authenticate, I&rsquo;ll receive a notification with your name and
          title.
        </p>

        <p className="cv-desc">
          Fair enough, right? You are reading about me — I get to know a little
          about you too.
        </p>

        <a
          href="/api/auth/linkedin"
          className="btn-primary cv-submit"
          style={{
            display: "block",
            textAlign: "center",
            textDecoration: "none",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ marginRight: "8px", verticalAlign: "middle" }}
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          Authorize with LinkedIn
        </a>
      </div>
    </div>
  );
}

// "use client";
// import "@/styles/components/cvmodal.css";

// import { useState, useRef, useEffect } from "react";
// import { useRouter } from "next/navigation";

// interface CVDownloadModalProps {
//   onClose?: () => void;
// }

// export default function CVDownloadModal({ onClose }: CVDownloadModalProps) {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
//   const [errorMsg, setErrorMsg] = useState("");
//   const inputRef = useRef<HTMLInputElement>(null);

//   const handleClose = () => {
//     if (onClose) {
//       onClose();
//     } else {
//       router.back();
//     }
//   };

//   useEffect(() => {
//     inputRef.current?.focus();
//   }, []);

//   useEffect(() => {
//     const handleKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") handleClose();
//     };
//     window.addEventListener("keydown", handleKey);
//     return () => window.removeEventListener("keydown", handleKey);
//   }, [onClose]);

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     setStatus("loading");
//     setErrorMsg("");

//     try {
//       const res = await fetch("/api/cv-download", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       if (!res.ok) {
//         const data = await res.json();
//         throw new Error(data.error || "Something went wrong");
//       }

//       const link = document.createElement("a");
//       link.href = "/sannedelin-ats-en.docx";
//       link.download = "sannedelin-ats-en.docx";
//       link.click();

//       handleClose();
//     } catch (err) {
//       setStatus("error");
//       setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
//     }
//   }

//   return (
//     <div
//       className="cv-backdrop"
//       onClick={handleClose}
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="cv-modal-title"
//     >
//       <div className="cv-box" onClick={(e) => e.stopPropagation()}>
//         <button className="cv-close" onClick={handleClose} aria-label="Close">
//           ✕
//         </button>

//         <h2 className="cv-title" id="cv-modal-title">
//           Download CV
//         </h2>
//         <p className="cv-desc">
//           Enter your email and the download starts immediately.
//         </p>

//         <form onSubmit={handleSubmit} className="cv-form">
//           <input
//             ref={inputRef}
//             type="email"
//             className="cv-input"
//             placeholder="you@example.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             disabled={status === "loading"}
//           />
//           {status === "error" && (
//             <p className="cv-error" role="alert">
//               {errorMsg}
//             </p>
//           )}
//           <button
//             type="submit"
//             className="btn-primary cv-submit"
//             disabled={status === "loading"}
//           >
//             {status === "loading" ? "Please wait…" : "Download"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
