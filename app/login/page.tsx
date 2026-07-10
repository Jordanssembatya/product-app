'use client';

import Link from "next/link";
import { useState, type FormEvent } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    alert(data.message);
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-16 text-white flex items-center justify-center">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">Welcome back</p>
          <h1 className="mt-2 text-3xl font-bold">Sign in to your account</h1>
          <p className="mt-2 text-sm text-slate-400">Access your dashboard and manage your orders.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none ring-0 focus:border-yellow-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none ring-0 focus:border-yellow-500"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-yellow-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-yellow-400"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Don&apos;t have an account?{' '}
          <Link href="/" className="font-semibold text-yellow-400 hover:text-yellow-300">
            Go back home
          </Link>
        </p>
      </div>
    </div>
  );
}