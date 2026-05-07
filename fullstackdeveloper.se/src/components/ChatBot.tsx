"use client";

import { useState, useRef, useEffect } from "react";
import "@/styles/components/chatbot.css";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WELCOME =
  "Hi! I'm AiSan - Sanne's AI assistant. Ask me anything about her work, projects or experience, and I'll answer in whatever language you write in.";

const QUICK_REPLIES = [
  "What's her tech stack?",
  "Tell me about one of her projects",
  "What kind of role would put Sanne's full potential to use?",
];

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState({ width: 360, height: 560 });

  const chatEndRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: "assistant", content: WELCOME }]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("open-aisan", handler);
    return () => window.removeEventListener("open-aisan", handler);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleDragStart = (e: React.MouseEvent) => {
    if (window.matchMedia("(max-width: 600px)").matches) return;
    if ((e.target as HTMLElement).closest("button")) return;
    isDragging.current = true;

    const rect = windowRef.current!.getBoundingClientRect();
    dragOffset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    const onMove = (e: MouseEvent) => {
      if (!isDragging.current || !windowRef.current) return;
      const x = Math.max(
        0,
        Math.min(
          window.innerWidth - size.width,
          e.clientX - dragOffset.current.x,
        ),
      );
      const y = Math.max(
        0,
        Math.min(
          window.innerHeight - size.height,
          e.clientY - dragOffset.current.y,
        ),
      );
      windowRef.current.style.left = `${x}px`;
      windowRef.current.style.top = `${y}px`;
      windowRef.current.style.right = "auto";
      windowRef.current.style.bottom = "auto";
    };

    const onUp = () => {
      isDragging.current = false;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const handleResizeStart = (e: React.MouseEvent, corner: string) => {
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const startW = size.width;
    const startH = size.height;
    const rect = windowRef.current!.getBoundingClientRect();

    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      let newW = startW;
      let newH = startH;

      if (corner.includes("right")) newW = Math.max(280, startW + dx);
      if (corner.includes("left")) {
        newW = Math.max(280, startW - dx);
        windowRef.current!.style.left = `${rect.left + dx}px`;
        windowRef.current!.style.right = "auto";
      }
      if (corner.includes("bottom")) newH = Math.max(300, startH + dy);
      if (corner.includes("top")) {
        newH = Math.max(300, startH - dy);
        windowRef.current!.style.top = `${rect.top + dy}px`;
        windowRef.current!.style.bottom = "auto";
      }

      setSize({ width: newW, height: newH });
    };

    const onUp = () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const sendMessage = async (overrideInput?: string) => {
    const messageText = overrideInput ?? input;
    if (!messageText.trim() || loading) return;

    const userMessage: Message = { role: "user", content: messageText };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.main },
      ]);

      if (data.followup) {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { role: "assistant", content: data.followup },
          ]);
        }, 600);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    const el = e.target;
    el.style.height = "12px";
    el.style.height = `${el.scrollHeight}px`;
  };

  return (
    <>
      <button
        className="chat-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg className="chat-toggle-icon" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 4L16 16M16 4L4 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg className="chat-toggle-icon" viewBox="0 0 22 22" fill="none">
            <path
              d="M11 2C6.03 2 2 5.8 2 10.5c0 2.1.82 4 2.16 5.5L3 20l4.3-1.12A9.3 9.3 0 0011 19c4.97 0 9-3.8 9-8.5S15.97 2 11 2z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      <div
        className="chat-window"
        role="dialog"
        aria-label="Chat with AiSan"
        ref={windowRef}
        style={{
          display: isOpen ? "flex" : "none",
          width: size.width,
          height: size.height,
        }}
      >
        <div className="chat-header" onMouseDown={handleDragStart}>
          <div className="chat-avatar">A</div>
          <div className="chat-info">
            <div className="chat-name">AiSan</div>
            <div className="chat-sub">Sanne&rsquo;s AI assistant</div>
          </div>
          <div className="chat-header-actions">
            <button
              className="chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                <path
                  d="M4 4L16 16M16 4L4 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-msg chat-msg-${msg.role}`}>
              {msg.content}
              {msg.role === "assistant" && i === 0 && !loading && (
                <div className="chat-quick-replies">
                  {QUICK_REPLIES.map((q) => (
                    <button
                      key={q}
                      className="chat-quick-reply"
                      onClick={() => sendMessage(q)}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          {loading && (
            <div className="chat-msg chat-msg-assistant">
              <span className="chat-typing">
                <span />
                <span />
                <span />
              </span>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="chat-input">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder="Ask something..."
            disabled={loading}
            aria-label="Message input"
            rows={1}
          />
          <button
            className="chat-send"
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
            aria-label="Send message"
          >
            <svg className="chat-send-icon" viewBox="0 0 18 18" fill="none">
              <path
                d="M2 9L16 2L9 16L8 10L2 9Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div
          className="chat-resize-handle top-left"
          onMouseDown={(e) => handleResizeStart(e, "top-left")}
        />
        <div
          className="chat-resize-handle top-right"
          onMouseDown={(e) => handleResizeStart(e, "top-right")}
        />
        <div
          className="chat-resize-handle bottom-left"
          onMouseDown={(e) => handleResizeStart(e, "bottom-left")}
        />
        <div
          className="chat-resize-handle bottom-right"
          onMouseDown={(e) => handleResizeStart(e, "bottom-right")}
        />
      </div>
    </>
  );
}
