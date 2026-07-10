'use client';

import Link from "next/link";
import { useState, type FormEvent } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(event: FormEvent) {
    event.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    alert(data.message);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-16 text-white">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">Join E-mart</p>
          <h1 className="mt-2 text-3xl font-bold">Create your account</h1>
          <p className="mt-2 text-sm text-slate-400">Sign up to save your details and manage orders.</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-yellow-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-yellow-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            minLength={6}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-yellow-500"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-yellow-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-yellow-400"
          >
            Create account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-yellow-400 hover:text-yellow-300">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
