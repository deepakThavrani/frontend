"use client";

import { useState, useRef } from "react";
import api from "@/lib/api";

export default function ContactSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitMsg, setSubmitMsg] = useState("");

  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMsg("");
    setSuccess(false);
    try {
      await api.post("/contacts", formData);
      setSuccess(true);
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch {
      setSubmitMsg("Something went wrong. Please try again.");
    }
    setSubmitting(false);
  };

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      id="contact"
      className="bg-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* Left - Video */}
        <div
          className="md:w-[42%] relative cursor-pointer flex items-center justify-center"
          onClick={toggleVideo}
          style={{ minHeight: 500 }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-contain"
            style={{ mixBlendMode: 'darken' }}
          >
            <source src="/mr.mp4" type="video/mp4" />
          </video>
          {/* Pause/Play indicator */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black/30 text-4xl font-light pointer-events-none"
            style={{
              opacity: isPlaying ? 0 : 1,
              transition: "opacity 0.3s",
            }}
          >
            ▶
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="md:w-[58%] py-16 md:py-24 px-8 md:px-16">
          {success ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", minHeight: 400 }}>
              <div style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                backgroundColor: "rgba(76,175,80,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 28,
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
              <h2 style={{ fontSize: 32, fontWeight: 800, color: "#171200", marginBottom: 12 }}>Thank You!</h2>
              <p style={{ fontSize: 16, color: "#666", maxWidth: 400, lineHeight: 1.7, marginBottom: 32 }}>
                Your message has been sent successfully. We&apos;ll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setSuccess(false)}
                style={{
                  backgroundColor: "#E02222",
                  color: "#fff",
                  padding: "14px 40px",
                  fontSize: 14,
                  fontWeight: 600,
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                  letterSpacing: "0.05em",
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
          <>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: '#171200', marginBottom: 32 }}>
            Contact us
          </h2>

          {submitMsg && (
            <div style={{
              backgroundColor: "#fef2f2",
              color: "#dc2626",
              padding: "14px 20px",
              borderRadius: 10,
              fontSize: 14,
              marginBottom: 24,
              border: "1px solid #fecaca",
            }}>
              {submitMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: '#E02222', display: 'block', marginBottom: 8 }}>
                  First name <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  style={{
                    width: '100%',
                    border: '1px solid #ccc',
                    padding: '12px 14px',
                    fontSize: 14,
                    color: '#171200',
                    outline: 'none',
                    background: 'transparent',
                  }}
                />
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: '#171200', display: 'block', marginBottom: 8 }}>
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  style={{
                    width: '100%',
                    border: '1px solid #ccc',
                    padding: '12px 14px',
                    fontSize: 14,
                    color: '#171200',
                    outline: 'none',
                    background: 'transparent',
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: '#E02222', display: 'block', marginBottom: 8 }}>
                  Email <span>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    border: '1px solid #ccc',
                    padding: '12px 14px',
                    fontSize: 14,
                    color: '#171200',
                    outline: 'none',
                    background: 'transparent',
                  }}
                />
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: '#E02222', display: 'block', marginBottom: 8 }}>
                  Phone <span>*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    width: '100%',
                    border: '1px solid #ccc',
                    padding: '12px 14px',
                    fontSize: 14,
                    color: '#171200',
                    outline: 'none',
                    background: 'transparent',
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: '#E02222', display: 'block', marginBottom: 8 }}>
                Message <span>*</span>
              </label>
              <textarea
                placeholder="Message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: '100%',
                  border: '1px solid #ccc',
                  padding: '12px 14px',
                  fontSize: 14,
                  color: '#171200',
                  outline: 'none',
                  resize: 'none',
                  background: 'transparent',
                }}
              />
            </div>

            <div>
              <button
                type="submit"
                style={{
                  backgroundColor: '#E02222',
                  color: '#fff',
                  padding: '14px 60px',
                  fontSize: 14,
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: '0.05em',
                }}
              >
                Submit
              </button>
            </div>
          </form>
          </>
          )}
        </div>
      </div>
    </section>
  );
}
