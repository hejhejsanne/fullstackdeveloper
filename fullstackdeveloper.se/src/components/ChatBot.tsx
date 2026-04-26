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
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: "assistant", content: WELCOME }]);
    }
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("open-aisan", handler);
    return () => window.removeEventListener("open-aisan", handler);
  }, []);
  const [isMinimized, setIsMinimized] = useState(false);
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      const toggle = document.querySelector(".chat-toggle");
      if (
        windowRef.current &&
        !windowRef.current.contains(e.target as Node) &&
        !toggle?.contains(e.target as Node)
      ) {
        if (isMinimized) return;
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, isMinimized]);
  useEffect(() => {
    if (isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      const toggle = document.querySelector(".chat-toggle");
      if (
        windowRef.current &&
        !windowRef.current.contains(e.target as Node) &&
        !toggle?.contains(e.target as Node)
      ) {
        if (isMinimized) return;
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, isMinimized]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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

  const textareaRef = useRef<HTMLTextAreaElement>(null);

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
        onClick={() => {
          setIsOpen((prev) => !prev);
          setIsMinimized(false);
        }}
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
        {!isOpen && <span className="chat-toggle-label"></span>}
      </button>

      {isOpen && isMinimized && (
        <button
          className="chat-bubble"
          onClick={() => setIsMinimized(false)}
          aria-label="Open chat"
        >
          <svg viewBox="0 0 22 22" fill="none" width="18" height="18">
            <path
              d="M11 2C6.03 2 2 5.8 2 10.5c0 2.1.82 4 2.16 5.5L3 20l4.3-1.12A9.3 9.3 0 0011 19c4.97 0 9-3.8 9-8.5S15.97 2 11 2z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {isOpen && !isMinimized && (
        <div
          className="chat-window"
          role="dialog"
          aria-label="Chat with AiSan"
          ref={windowRef}
        >
          <div className="chat-header">
            <div className="chat-avatar">A</div>
            <div className="chat-info">
              <div className="chat-name">AiSan</div>
              <div className="chat-sub">Sanne&rsquo;s AI assistant</div>
            </div>
            <div className="chat-header-actions">
              <button
                className="chat-minimize"
                onClick={() => setIsMinimized(true)}
                aria-label="Minimize chat"
              >
                <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
                  <path
                    d="M4 10H16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
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
        </div>
      )}
    </>
  );
}
