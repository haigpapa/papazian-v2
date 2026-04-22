import { Link, Navigate, useParams } from 'react-router-dom';
import { DOMAIN_META, PROJECT_MAP } from '../data/siteContent';

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = PROJECT_MAP[projectId];

  if (!project) {
    return <Navigate to="/works" replace />;
  }

  const relatedProjects = project.connections.map((id) => PROJECT_MAP[id]).filter(Boolean);

  return (
    <div className="page page--project-detail">
      <section className="project-hero">
        <div className="project-hero__nav">
          <Link to="/works">BACK TO WORKS</Link>
          {project.showInWriting ? <Link to="/writing">WRITING INDEX</Link> : null}
        </div>
        <div className="project-hero__meta">
          <span>{project.tier.toUpperCase()}</span>
          <span>{project.year}</span>
          <span>{project.status}</span>
        </div>
        <h1 className="page-title">{project.title}</h1>
        <p className="project-hero__subtitle">{project.subtitle}</p>
        <p className="project-hero__summary">{project.summary}</p>
      </section>

      <section className="project-body">
        <div className="project-body__content">
          {project.detailSections.map((section) => (
            <article key={section.title} className="project-section">
              <p className="section-kicker">{section.title}</p>
              <p>{section.body}</p>
            </article>
          ))}
        </div>

        <aside className="project-body__rail">
          <div className="project-rail-card">
            <span>DOMAINS</span>
            <div className="token-row">
              {project.domains.map((domain) => (
                <span key={domain}>{DOMAIN_META[domain].label.toUpperCase()}</span>
              ))}
            </div>
          </div>
          <div className="project-rail-card">
            <span>STACK / MEDIUM</span>
            <div className="token-row">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="project-rail-card">
            <span>PROJECT TYPE</span>
            <p>{project.type}</p>
          </div>
        </aside>
      </section>

      {relatedProjects.length ? (
        <section className="project-related">
          <div className="section-head section-head--stacked">
            <p className="section-kicker">CONNECTED WORKS</p>
            <p className="section-caption">
              These are the nearest public relations in the current atlas build. The network can expand later without changing the public surface area.
            </p>
          </div>
          <div className="project-related__grid">
            {relatedProjects.map((related) => (
              <Link key={related.id} className="related-card" to={`/projects/${related.id}`}>
                <span>{related.year}</span>
                <h2>{related.title}</h2>
                <p>{related.oneLine}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
