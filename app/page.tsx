"use client";
import { useState, useEffect } from "react";
type Message = { id: number; name: string; content: string; createdAt: string };

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function load() {
    const res = await fetch("/api/messages");
    setMessages(await res.json());
  }

  useEffect(() => { load(); }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(""); setLoading(true);
    const res = await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, content }),
    });
    setLoading(false);
    if (!res.ok) { setError((await res.json()).error); }
    else { setName(""); setContent(""); load(); }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">留言板</h1>
          <p className="text-gray-500 mt-2">Next.js + Supabase + Vercel</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg">{error}</div>}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">你的名字</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="输入名字"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">留言内容</label>
              <textarea value={content} onChange={(e) => setContent(e.target.value)} required rows={3} placeholder="写下你想说的话..."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm resize-none" />
            </div>
            <button type="submit" disabled={loading}
              className="w-full bg-gray-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50">
              {loading ? "提交中..." : "提交留言"}
            </button>
          </form>
        </div>
        <div className="space-y-4">
          {messages.length === 0
            ? <p className="text-center text-gray-400 text-sm py-8">还没有留言，来第一个吧～</p>
            : messages.map((msg) => (
              <div key={msg.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900 text-sm">{msg.name}</span>
                  <span className="text-xs text-gray-400">{new Date(msg.createdAt).toLocaleString("zh-CN")}</span>
                </div>
                <p className="text-gray-700 text-sm">{msg.content}</p>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
