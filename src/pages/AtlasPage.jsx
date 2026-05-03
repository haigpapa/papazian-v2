import { useEffect } from 'react';

export default function AtlasPage() {
  useEffect(() => {
    window.location.replace(new URL(`${import.meta.env.BASE_URL}atlas-3d-147.html`, window.location.origin).toString());
  }, []);

  return (
    <section className="page route-loading">
      <p className="section-kicker glow-text">LOADING ATLAS</p>
    </section>
  );
}
