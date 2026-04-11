"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCredentials(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);
    if (res?.error) setError("邮箱或密码错误");
    else { router.push("/"); router.refresh(); }
  }

  async function handleGoogle() {
    await signIn("google", { callbackUrl: "/" });
  }

  async function handleLinkedIn() {
    await signIn("linkedin", { callbackUrl: "/" });
  }

  return (
    <div className="min-h-screen flex" style={{ background: "#f5f4f0" }}>
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-sm">

          <div className="mb-10">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#1a1a1a" }}>
                <span className="text-white text-sm font-bold">W</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">Wizzme</span>
            </div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">Welcome back</h1>
            <p className="text-gray-500 text-sm">Sign in to continue your story</p>
          </div>

          <div className="space-y-3 mb-6">
            <button
              onClick={handleGoogle}
              className="w-full flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
            >
              <svg width="18" height="18" viewBox="0 0 18 18">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853"/>
                <path d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z" fill="#FBBC05"/>
                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 6.293C4.672 4.166 6.656 3.58 9 3.58z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            <button
              onClick={handleLinkedIn}
              className="w-full flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect width="18" height="18" rx="3" fill="#0A66C2"/>
                <path d="M5.4 7.2H3.6V14.4H5.4V7.2ZM4.5 6.3C5.1 6.3 5.4 5.9 5.4 5.4C5.4 4.9 5 4.5 4.5 4.5C3.9 4.5 3.6 4.9 3.6 5.4C3.6 5.9 4 6.3 4.5 6.3ZM14.4 14.4H12.6V10.8C12.6 9.9 12.3 9.3 11.4 9.3C10.8 9.3 10.4 9.7 10.2 10.1C10.2 10.2 10.2 10.4 10.2 10.6V14.4H8.4V7.2H10.2V8.1C10.4 7.7 11 7.1 12 7.1C13.4 7.1 14.4 8 14.4 10V14.4Z" fill="white"/>
              </svg>
              Continue with LinkedIn
            </button>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <form onSubmit={handleCredentials} className="space-y-4">
            {error && (
              <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl">
                {error}
              </div>
            )}
            <div>
              <label className="block text-sm text-gray-600 mb-1.5">Email</label>
              <input
                type="email" value={email}
                onChange={(e) => setEmail(e.target.value)}
                required placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
              />
            </div>
            <div>
              <div className="flex justify-between mb-1.5">
                <label className="text-sm text-gray-600">Password</label>
                <a href="#" className="text-sm text-gray-400 hover:text-gray-600">Forgot?</a>
              </div>
              <input
                type="password" value={password}
                onChange={(e) => setPassword(e.target.value)}
                required placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
              />
            </div>
            <button
              type="submit" disabled={loading}
              className="w-full py-3 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
              style={{ background: "#1a1a1a" }}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            No account?{" "}
            <Link href="/register" className="text-gray-900 font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 items-center justify-center rounded-l-3xl m-3" style={{ background: "#1a1a1a" }}>
        <div className="max-w-xs text-center px-8">
          <div className="text-5xl mb-6">✦</div>
          <p className="text-white text-xl font-medium leading-relaxed mb-4">
            "Write your story. Share your world."
          </p>
          <p className="text-gray-500 text-sm">
            Join thousands of writers sharing their stories on Wizzme.
          </p>
        </div>
      </div>
    </div>
  );
}
