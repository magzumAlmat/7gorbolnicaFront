'use client';

import dynamic from 'next/dynamic';

const KazakhstanMap = dynamic(
  () => import('./LeafletMap').then((mod) => mod.default),
  { 
    ssr: false,
    loading: () => <div style={{ height: '400px', width: '100%', background: '#eee' }}>Загрузка...</div>
  }
);

export default KazakhstanMap;