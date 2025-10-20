"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-center p-6">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
        AEO Visibility Tracker
      </h1>
      <p className="text-gray-600 max-w-lg mb-8">
        Monitor AI search engine visibility, keyword trends, and performance
        metrics — all in one clean dashboard.
      </p>
      <Link
        href="/dashboard"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-md transition-transform hover:scale-105"
      >
        🚀 Go to Dashboard
      </Link>
    </main>
  );
}
