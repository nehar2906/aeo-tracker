"use client";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Day 1", ChatGPT: 60, Gemini: 40, Claude: 50 },
  { day: "Day 2", ChatGPT: 75, Gemini: 55, Claude: 45 },
  { day: "Day 3", ChatGPT: 68, Gemini: 60, Claude: 58 },
  { day: "Day 4", ChatGPT: 80, Gemini: 70, Claude: 62 },
  { day: "Day 5", ChatGPT: 72, Gemini: 65, Claude: 64 },
];

const tableData = [
  { keyword: "AI tools", engine: "ChatGPT", visibility: 88, citations: 5 },
  { keyword: "AI tools", engine: "Gemini", visibility: 64, citations: 3 },
  { keyword: "Retail AI", engine: "Claude", visibility: 73, citations: 4 },
  { keyword: "Machine Learning", engine: "ChatGPT", visibility: 79, citations: 6 },
  { keyword: "Product Catalog", engine: "Gemini", visibility: 58, citations: 2 },
];

export default function Dashboard() {
  const [selected, setSelected] = useState("all");

  const filtered = selected === "all"
    ? tableData
    : tableData.filter((t) => t.engine === selected);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">AEO Visibility Tracker</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
          + Add Project
        </button>
      </div>

      {/* Dashboard Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow p-4 text-center">
          <p className="text-gray-500 text-sm">Avg Visibility</p>
          <h2 className="text-3xl font-semibold text-blue-600">72%</h2>
        </div>
        <div className="bg-white rounded-xl shadow p-4 text-center">
          <p className="text-gray-500 text-sm">Top Engine</p>
          <h2 className="text-3xl font-semibold text-green-600">ChatGPT</h2>
        </div>
        <div className="bg-white rounded-xl shadow p-4 text-center">
          <p className="text-gray-500 text-sm">Tracked Keywords</p>
          <h2 className="text-3xl font-semibold text-purple-600">12</h2>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4">Visibility Trend (Last 5 Days)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="ChatGPT" stroke="#8884d8" />
            <Line type="monotone" dataKey="Gemini" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Claude" stroke="#ff7300" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Filter + Table */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Keyword Performance</h3>
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="border rounded-md px-3 py-2"
          >
            <option value="all">All Engines</option>
            <option value="ChatGPT">ChatGPT</option>
            <option value="Gemini">Gemini</option>
            <option value="Claude">Claude</option>
          </select>
        </div>

        <table className="min-w-full text-left border border-gray-200">
          <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
            <tr>
              <th className="px-4 py-2">Keyword</th>
              <th className="px-4 py-2">Engine</th>
              <th className="px-4 py-2">Visibility</th>
              <th className="px-4 py-2">Citations</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{row.keyword}</td>
                <td className="px-4 py-2">{row.engine}</td>
                <td className="px-4 py-2">{row.visibility}%</td>
                <td className="px-4 py-2">{row.citations}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recommendations */}
      <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
        <h3 className="font-semibold text-blue-700 mb-2">Recommendations</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Increase citations for <strong>"AI tools"</strong> on Gemini.</li>
          <li>Missing visibility for <strong>"Retail AI"</strong> on Claude.</li>
          <li>Focus on <strong>keyword diversity</strong> to improve rankings.</li>
        </ul>
      </div>
    </div>
  );
}
