import { useEffect } from 'react';

export default function AtlasPage() {
  useEffect(() => {
    window.location.replace('/atlas-3d.html');
  }, []);

  return (
    <section className="page route-loading">
      <p className="section-kicker glow-text">LOADING ATLAS</p>
    </section>
  );
}
