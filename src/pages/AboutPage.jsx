import { ABOUT_CONTENT } from '../data/siteContent';

export default function AboutPage() {
  return (
    <div className="page about-page">
      <section className="section-head section-head--stacked section-head--spaced">
        <p className="section-kicker">ABOUT</p>
        <h1 className="page-title">{ABOUT_CONTENT.title}</h1>
      </section>

      <div className="about-grid">
        <div className="about-grid__image">
          <div className="portrait-placeholder">
            <span>ART-DIRECTED PORTRAIT / STILL</span>
          </div>
        </div>
        <div className="about-grid__text">
          {ABOUT_CONTENT.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="about-grid__notes">
            {ABOUT_CONTENT.notes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
