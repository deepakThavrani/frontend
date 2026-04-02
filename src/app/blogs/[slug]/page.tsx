"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import api from "@/lib/api";

interface Blog {
  _id: string;
  title: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: string;
  createdAt: string;
  views: number;
  likes: number;
}

interface Comment {
  _id: string;
  name: string;
  content: string;
  createdAt: string;
}

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentForm, setCommentForm] = useState({ name: "", email: "", content: "" });
  const [submitting, setSubmitting] = useState(false);
  const [commentMsg, setCommentMsg] = useState("");
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [views, setViews] = useState(0);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await api.get(`/blogs/slug/${params.slug}`);
        setBlog(res.data);
        setLikes(res.data.likes || 0);
        setViews(res.data.views || 0);
        // Check if already liked from localStorage
        const likedBlogs = JSON.parse(localStorage.getItem("liked_blogs") || "[]");
        setLiked(likedBlogs.includes(res.data._id));
        // Increment view count
        const viewedKey = `viewed_${res.data._id}`;
        if (!sessionStorage.getItem(viewedKey)) {
          const viewRes = await api.put(`/blogs/${res.data._id}/view`);
          setViews(viewRes.data.views);
          sessionStorage.setItem(viewedKey, "true");
        }
        const commentsRes = await api.get(`/comments/blog/${res.data._id}`);
        setComments(commentsRes.data);
      } catch {
        setBlog(null);
      }
      setLoading(false);
    };
    fetchBlog();
  }, [params.slug]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blog) return;
    setSubmitting(true);
    setCommentMsg("");
    try {
      await api.post(`/comments/blog/${blog._id}`, commentForm);
      setCommentMsg("Comment submitted! It will appear after approval.");
      setCommentForm({ name: "", email: "", content: "" });
    } catch {
      setCommentMsg("Failed to submit comment. Please try again.");
    }
    setSubmitting(false);
  };

  const handleLike = async () => {
    if (!blog || liked) return;
    try {
      const res = await api.put(`/blogs/${blog._id}/like`);
      setLikes(res.data.likes);
      setLiked(true);
      const likedBlogs = JSON.parse(localStorage.getItem("liked_blogs") || "[]");
      likedBlogs.push(blog._id);
      localStorage.setItem("liked_blogs", JSON.stringify(likedBlogs));
    } catch {
      // silently fail
    }
  };

  if (loading) {
    return (
      <div style={{ paddingTop: "108px" }} className="min-h-screen flex items-center justify-center">
        <p className="text-[#5f6360]">Loading...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div style={{ paddingTop: "108px" }} className="min-h-screen flex items-center justify-center">
        <p className="text-[#5f6360]">Blog post not found.</p>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "108px" }}>
      {/* Cover Image with Back Button */}
      {blog.coverImage && (
        <div className="w-full h-[50vh] overflow-hidden relative">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
          <button
            onClick={() => router.push("/blogs")}
            style={{
              position: "absolute",
              top: 24,
              left: "5%",
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 14,
              fontWeight: 600,
              color: "#fff",
              backgroundColor: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(8px)",
              border: "none",
              cursor: "pointer",
              padding: "10px 20px",
              borderRadius: 50,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#E02222")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.5)")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Blogs
          </button>
        </div>
      )}

      {/* Content */}
      <article style={{ backgroundColor: "#fff", padding: "40px 8% 60px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <span className="text-xs font-semibold text-[#E02222] uppercase tracking-wider">
            {blog.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-[#171200] mt-2 mb-4">
            {blog.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-[#5f6360] mb-4">
            <span>By {blog.author}</span>
            <span>•</span>
            <span>
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-6 mb-10">
            <span className="flex items-center gap-1.5 text-sm text-[#5f6360]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              {views} views
            </span>
            <button
              onClick={handleLike}
              className="flex items-center gap-1.5 text-sm transition-colors"
              style={{ color: liked ? "#E02222" : "#5f6360" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill={liked ? "#E02222" : "none"} stroke={liked ? "#E02222" : "currentColor"} strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              {likes} {likes === 1 ? "like" : "likes"}
            </button>
          </div>

          {/* Rich HTML Content */}
          <div
            className="prose prose-lg max-w-none text-[#171200]"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Tags */}
          {blog.tags.length > 0 && (
            <div style={{ marginTop: 50, paddingTop: 30, borderTop: "2px solid #171200" }}>
              <h4 style={{ fontSize: 18, fontWeight: 700, color: "#171200", marginBottom: 20 }}>Tags</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 14,
                      backgroundColor: "#171200",
                      color: "#fff",
                      padding: "12px 24px",
                      borderRadius: 50,
                      fontWeight: 500,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
          {/* Comments Section */}
          <div style={{ marginTop: 50, paddingTop: 40, borderTop: "2px solid #171200" }}>
            <h3 className="text-2xl font-bold text-[#171200] mb-8">
              Comments {comments.length > 0 && <span className="text-[#E02222]">({comments.length})</span>}
            </h3>

            {comments.length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 50 }}>
                {comments.map((comment) => (
                  <div key={comment._id} style={{ backgroundColor: "#f9f9f9", borderRadius: 14, padding: "28px 32px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                        <div style={{
                          width: 44,
                          height: 44,
                          borderRadius: "50%",
                          backgroundColor: "#E02222",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontSize: 16,
                          fontWeight: 700,
                        }}>
                          {comment.name.charAt(0).toUpperCase()}
                        </div>
                        <span style={{ fontWeight: 600, color: "#171200", fontSize: 16 }}>{comment.name}</span>
                      </div>
                      <span style={{ fontSize: 13, color: "#5f6360" }}>
                        {new Date(comment.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <p style={{ color: "#5f6360", fontSize: 15, lineHeight: 1.7, paddingLeft: 58 }}>{comment.content}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: "#5f6360", fontSize: 15, marginBottom: 50 }}>No comments yet. Be the first to comment!</p>
            )}

            {/* Comment Form */}
            <div style={{ backgroundColor: "#f9f9f9", borderRadius: 16, padding: "36px 32px", marginTop: 20 }}>
              <h4 style={{ fontSize: 22, fontWeight: 700, color: "#171200", marginBottom: 28 }}>Leave a Comment</h4>
              {commentMsg && (
                <div style={{
                  fontSize: 14,
                  padding: "14px 18px",
                  borderRadius: 10,
                  marginBottom: 24,
                  backgroundColor: commentMsg.includes("Failed") ? "#fef2f2" : "#f0fdf4",
                  color: commentMsg.includes("Failed") ? "#dc2626" : "#16a34a",
                  border: commentMsg.includes("Failed") ? "1px solid #fecaca" : "1px solid #bbf7d0",
                }}>
                  {commentMsg}
                </div>
              )}
              <form onSubmit={handleCommentSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={commentForm.name}
                    onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                    required
                    style={{
                      width: "100%",
                      backgroundColor: "#fff",
                      border: "1px solid #e0e0e0",
                      borderRadius: 10,
                      padding: "16px 20px",
                      fontSize: 15,
                      color: "#171200",
                      outline: "none",
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#E02222"}
                    onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={commentForm.email}
                    onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                    required
                    style={{
                      width: "100%",
                      backgroundColor: "#fff",
                      border: "1px solid #e0e0e0",
                      borderRadius: 10,
                      padding: "16px 20px",
                      fontSize: 15,
                      color: "#171200",
                      outline: "none",
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#E02222"}
                    onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
                  />
                </div>
                <textarea
                  placeholder="Write your comment..."
                  value={commentForm.content}
                  onChange={(e) => setCommentForm({ ...commentForm, content: e.target.value })}
                  required
                  rows={6}
                  style={{
                    width: "100%",
                    backgroundColor: "#fff",
                    border: "1px solid #e0e0e0",
                    borderRadius: 10,
                    padding: "16px 20px",
                    fontSize: 15,
                    color: "#171200",
                    outline: "none",
                    resize: "none",
                    marginBottom: 24,
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#E02222"}
                  onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
                />
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    backgroundColor: "#E02222",
                    color: "#fff",
                    padding: "16px 40px",
                    fontSize: 14,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    borderRadius: 10,
                    border: "none",
                    cursor: "pointer",
                    opacity: submitting ? 0.5 : 1,
                  }}
                >
                  {submitting ? "Submitting..." : "Post Comment"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
