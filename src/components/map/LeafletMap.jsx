'use client';

import React, { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';

const locations = [
  { pos: [51.169392, 71.449074], title: 'Астана' },
  { pos: [43.238949, 76.889709], title: 'Алматы' },
  { pos: [49.948175, 82.628540], title: 'Усть-Каменогорск' },
  { pos: [42.896088, 71.398430], title: 'Тараз' },
];

export default function LeafletMap({ center: propCenter, zoom: propZoom }) {
  const containerRef = useRef(null);
  const mapInstance = useRef(null);
  const markersRef = useRef([]);
  const [L, setL] = useState(null);

  // 1. Load Leaflet library on client only
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('leaflet').then((leaf) => {
        setL(leaf.default || leaf);
      });
    }
  }, []);

  // 2. Initialize Map
  useEffect(() => {
    if (!L || !containerRef.current || mapInstance.current) return;

    // Standard icon fix
    const DefaultIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    // Create map
    const map = L.map(containerRef.current).setView(propCenter || [48.0, 67.0], propZoom || 5);
    mapInstance.current = map;

    // Tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Initial markers
    locations.forEach(loc => {
      const marker = L.marker(loc.pos).addTo(map).bindPopup(loc.title);
      markersRef.current.push(marker);
    });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
        markersRef.current = [];
      }
    };
  }, [L]);

  // 3. React to prop updates (Clicking on office)
  useEffect(() => {
    if (mapInstance.current && propCenter) {
      mapInstance.current.setView(propCenter, propZoom || 12, { animate: true });
    }
  }, [propCenter, propZoom]);

  return (
    <div 
      ref={containerRef} 
      style={{ height: '100%', width: '100%', minHeight: '400px', background: '#eee' }} 
    />
  );
}
