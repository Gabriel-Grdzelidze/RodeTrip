"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Polyline = dynamic(() => import("react-leaflet").then((mod) => mod.Polyline), { ssr: false });

export default function TripMap({ route }) {
  const [mounted, setMounted] = useState(false);
  const [map, setMap] = useState(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (map && route?.coords?.length) {
      map.fitBounds(route.coords, { padding: [40, 40] });
    }
  }, [route, map]);

  if (!mounted) return null;

  return (
    <MapContainer
      center={[41.7151, 44.8271]}
      zoom={7}
      scrollWheelZoom
      style={{ height: "100%", width: "100%" }}
      whenCreated={setMap}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {route && (
        <>
          <Polyline positions={route.coords} color="blue" />
          {route.coords.map((c, i) => (
            <Marker key={i} position={c} />
          ))}
        </>
      )}
    </MapContainer>
  );
}
