"use client";

import { useState, useRef, useEffect } from "react";
import "@/styles/chatbot.css";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WELCOME =
  "Ask me anything about Sanne and her work experience, and I'll do my best to answer!";

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [streamingMessage, setStreamingMessage] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const windowRef = useRef<HTMLDivElement>(null); // ← ny

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: "assistant", content: WELCOME }]);
    }
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, messages.length]);

  // Lyssna på open-aisan event (från nav "Ai Assistans" länk)
  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("open-aisan", handler);
    return () => window.removeEventListener("open-aisan", handler);
  }, []);

  // Stäng vid klick utanför
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      const toggle = document.querySelector(".chat-toggle");
      if (
        windowRef.current &&
        !windowRef.current.contains(e.target as Node) &&
        !toggle?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingMessage]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);
    setStreamingMessage("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const reader = res.body!.getReader();
      const decoder = new TextDecoder("utf-8");
      let result = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        result += chunk;
        setStreamingMessage(result);
      }

      setMessages((prev) => [...prev, { role: "assistant", content: result }]);
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
      setStreamingMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <button
        className="chat-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg className="chat-toggle__icon" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 4L16 16M16 4L4 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg className="chat-toggle__icon" viewBox="0 0 22 22" fill="none">
            <path
              d="M11 2C6.03 2 2 5.8 2 10.5c0 2.1.82 4 2.16 5.5L3 20l4.3-1.12A9.3 9.3 0 0011 19c4.97 0 9-3.8 9-8.5S15.97 2 11 2z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {!isOpen && <span className="chat-toggle__label"></span>}
      </button>

      {isOpen && (
        <div
          className="chat-window"
          role="dialog"
          aria-label="Chat with AiSan"
          ref={windowRef}
        >
          <div className="chat-window__header">
            <div className="chat-window__avatar">A</div>
            <div className="chat-window__info">
              <div className="chat-window__name">AiSan</div>
              <div className="chat-window__sub">Sanne&apos;s AI assistant</div>
            </div>
            <button
              className="chat-window__close"
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

          <div className="chat-window__messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg chat-msg--${msg.role}`}>
                {msg.content}
              </div>
            ))}
            {(loading || streamingMessage) && (
              <div className="chat-msg chat-msg--assistant">
                {streamingMessage || (
                  <span className="chat-typing">
                    <span />
                    <span />
                    <span />
                  </span>
                )}
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="chat-window__input">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask something..."
              disabled={loading}
              aria-label="Message input"
            />
            <button
              className="chat-window__send"
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              aria-label="Send message"
            >
              <svg className="chat-send__icon" viewBox="0 0 18 18" fill="none">
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
