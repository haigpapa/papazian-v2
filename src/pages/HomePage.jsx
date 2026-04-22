import { Link } from 'react-router-dom';
import { FEATURED_PROJECTS, HOME_MANIFESTO, WRITING_GROUPS, PROJECT_MAP } from '../data/siteContent';

const writingHighlights = WRITING_GROUPS.flatMap((group) => group.projectIds)
  .slice(0, 3)
  .map((id) => PROJECT_MAP[id])
  .filter(Boolean);

export default function HomePage() {
  return (
    <div className="page page--home">
      <section className="home-threshold">
        <p className="section-kicker glow-text">{HOME_MANIFESTO.eyebrow}</p>
      </section>

      <section className="home-reel">
        <div className="home-reel__inner">
          <p className="section-kicker">REEL</p>
          <div className="home-reel__placeholder">
            <span>Full-screen reel placeholder</span>
          </div>
        </div>
      </section>

      <section className="home-manifesto">
        <div className="home-manifesto__header">
          <p className="section-kicker">PRACTICE</p>
          <h1 className="page-title">{HOME_MANIFESTO.title}</h1>
        </div>
        <div className="home-manifesto__body">
          <p className="home-manifesto__lead">{HOME_MANIFESTO.lead}</p>
          <p>{HOME_MANIFESTO.body}</p>
        </div>
        <div className="home-manifesto__support">
          {HOME_MANIFESTO.support.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className="cta-pair">
          <Link className="button-link" to="/works">
            SELECTED WORKS
          </Link>
          <Link className="button-link" to="/atlas">
            EXPLORE THE ATLAS
          </Link>
        </div>
      </section>

      <section className="home-featured">
        <div className="section-head section-head--stacked">
          <p className="section-kicker">FEATURED WORKS</p>
          <p className="section-caption">
            The primary public layer: five lead systems that carry the structure of the practice before the wider field opens.
          </p>
        </div>
        <div className="featured-list">
          {FEATURED_PROJECTS.map((project, index) => (
            <Link
              key={project.id}
              className={`featured-item ${index === 0 ? 'is-lead' : ''}`}
              to={`/projects/${project.id}`}
            >
              <div className="featured-item__meta">
                <span>{project.year}</span>
                <span>{project.tier.toUpperCase()}</span>
              </div>
              <div className="featured-item__body">
                <h2>{project.title}</h2>
                <p>{project.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-writing-strip">
        <div className="section-head section-head--stacked">
          <p className="section-kicker">WRITING</p>
          <p className="section-caption">
            Text is not a side channel here. It operates as narrative system, research surface, and public argument.
          </p>
        </div>
        <div className="home-writing-strip__list">
          {writingHighlights.map((entry) => (
            <Link key={entry.id} className="writing-tease" to={`/projects/${entry.id}`}>
              <span>{entry.year}</span>
              <strong>{entry.title}</strong>
              <p>{entry.oneLine}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
