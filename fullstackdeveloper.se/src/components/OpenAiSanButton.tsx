"use client";

interface Props {
  label: string;
}

export default function OpenAiSanButton({ label }: Props) {
  return (
    <button
      className="btn-primary"
      onClick={() => window.dispatchEvent(new Event("open-aisan"))}
    >
      {label}
    </button>
  );
}
