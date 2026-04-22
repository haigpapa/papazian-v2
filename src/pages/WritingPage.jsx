import { Link } from 'react-router-dom';
import { PROJECT_MAP, WRITING_GROUPS } from '../data/siteContent';
import { displayProjectTitle } from '../utils/projectVisuals';

export default function WritingPage() {
  return (
    <section className="page page--writing editorial-page">
      <header className="section-head section-head--stacked section-head--spaced writing-header">
        <p className="section-kicker">WRITING</p>
        <h1 className="page-title">Writing as a reading surface, not project overflow.</h1>
        <p className="section-caption">
          Essays, narrative systems, research arguments, and text-led works belong in their own rhythm. This page should feel more like a sparse journal than a second works index.
        </p>
      </header>

      <div className="writing-columns">
        {WRITING_GROUPS.map((group) => (
          <section key={group.id} className="writing-column">
            <div className="writing-column__header">
              <p className="section-kicker">{group.title}</p>
              <p>{group.description}</p>
            </div>

            <div className="writing-column__list">
              {group.projectIds.map((projectId) => {
                const entry = PROJECT_MAP[projectId];
                if (!entry) return null;

                return (
                  <Link key={entry.id} to={`/projects/${entry.id}`} className="writing-entry">
                    <span className="writing-entry__year">{entry.year}</span>
                    <div className="writing-entry__body">
                      <h2>{displayProjectTitle(entry.title)}</h2>
                      <p>{entry.oneLine}</p>
                    </div>
                    <span className="writing-entry__arrow">READ →</span>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
