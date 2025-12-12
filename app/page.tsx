"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const TripMap = dynamic(() => import("./components/TripMap"), { ssr: false });

const ROUTES = [
  { id: 1, title: "Tbilisi → Gudauri → Kazbegi", grade: "7–12", summary: "Mountain adventure across the Caucasus.", coords: [[41.7151, 44.8271],[42.4776, 44.4833],[42.6606, 44.645]], image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
  { id: 2, title: "Tbilisi → Kutaisi → Prometheus Cave", grade: "6–12", summary: "Caves, waterfalls and ancient landmarks.", coords: [[41.7151, 44.8271],[42.2679, 42.6946],[42.3382, 42.5979]], image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2" },
  { id: 3, title: "Tbilisi → Mtatsminda → Borjomi", grade: "4–9", summary: "Fun parks, forest walks and Borjomi nature.", coords: [[41.7151, 44.8271],[41.6941, 44.782],[41.8397, 43.3946]], image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
];

export default function HomePage() {
  const [activeRoute, setActiveRoute] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const route = ROUTES.find((r) => r.id === activeRoute);

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="h-[75vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429')" }}>
        <div className="backdrop-blur bg-black/40 p-10 rounded-2xl max-w-2xl text-center">
          <h1 className="text-5xl font-bold mb-4">Discover Georgia</h1>
          <p className="text-lg opacity-90">Road trips for students and schools — curated, safe and exciting.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Interactive Route Map</h2>
        <div className="rounded-xl overflow-hidden shadow h-[500px]">
          {mounted && <TripMap route={route} />}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 bg-[#f1f1f1] rounded-2xl">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Popular Trips</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {ROUTES.map((r) => (
            <div key={r.id} onClick={() => setActiveRoute(r.id)} className={`cursor-pointer rounded-xl overflow-hidden shadow-lg transition-all hover:scale-[1.02] ${activeRoute === r.id ? "ring-2 ring-blue-500" : ""}`}>
              <div className="relative h-48 w-full">
                <img src={r.image} alt={r.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-xl text-slate-900">{r.title}</h3>
                <p className="text-sm text-slate-700">{r.summary}</p>
                <p className="text-xs mt-2 text-slate-600">Grades: {r.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t py-8 bg-white mt-8">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <small className="text-slate-600">© {new Date().getFullYear()} Georgia RoadTrips</small>
          <div className="flex gap-4 text-sm text-slate-600">
            <a>Privacy</a>
            <a>Terms</a>
            <a>Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

