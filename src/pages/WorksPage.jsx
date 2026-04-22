import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import TextRoll from '../components/TextRoll';
import { DOMAIN_META, DOMAIN_ORDER, WORK_PROJECTS } from '../data/siteContent';
import { displayProjectTitle, getProjectImage } from '../utils/projectVisuals';

function matchesQuery(project, query) {
  if (!query.trim()) return true;
  const haystack = [project.title, project.subtitle, project.oneLine, project.blurb, project.summary, project.year]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
  return haystack.includes(query.trim().toLowerCase());
}

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const projects = useMemo(() => {
    return WORK_PROJECTS.filter((project) => {
      const matchesFilter = activeFilter === 'all' || project.domains.includes(activeFilter);
      return matchesFilter && matchesQuery(project, searchQuery);
    });
  }, [activeFilter, searchQuery]);

  const effectiveExpandedProjectId = projects.some((project) => project.id === expandedProjectId)
    ? expandedProjectId
    : projects[0]?.id ?? null;

  const toggleProject = (projectId) => {
    setExpandedProjectId((current) => (current === projectId ? null : projectId));
  };

  return (
    <section className="page page--works editorial-page">
      <header className="section-head section-head--stacked section-head--spaced works-header">
        <p className="section-kicker">WORKS</p>
        <h1 className="page-title">Twenty public works. No dead weight.</h1>
        <p className="section-caption">
          The public layer stays tight. The atlas can carry more depth later, but the primary works page should read clearly, scan fast, and reward deeper opening.
        </p>
      </header>

      <section className="works-toolbar editorial-toolbar">
        <label className="works-search">
          <span className="sr-only">Search works</span>
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="SEARCH TITLE, THESIS, OR DOMAIN"
          />
        </label>

        <div className="filter-row" role="tablist" aria-label="Work filters">
          {DOMAIN_ORDER.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`filter-chip ${activeFilter === filter ? 'is-active' : ''}`}
            >
              {filter === 'all' ? 'ALL' : DOMAIN_META[filter].label}
            </button>
          ))}
        </div>
      </section>

      <section className="works-accordion">
        {projects.map((project) => {
          const isExpanded = effectiveExpandedProjectId === project.id;
          const displayTitle = displayProjectTitle(project.title);
          const domainLabel = project.domains.map((domain) => DOMAIN_META[domain].label).join(' · ');

          return (
            <article key={project.id} className={`works-accordion__item ${isExpanded ? 'is-expanded' : ''}`}>
              <button
                type="button"
                onClick={() => toggleProject(project.id)}
                className="works-accordion__trigger"
                aria-expanded={isExpanded}
              >
                <div className="works-accordion__titleblock">
                  <span className="works-accordion__eyebrow">{project.tier.toUpperCase()}</span>
                  <div className="works-accordion__desktop-title">
                    <TextRoll text={displayTitle} className="works-accordion__title" />
                  </div>
                  <p className="works-accordion__mobile-title">{displayTitle}</p>
                  <p className="works-accordion__subtitle">{domainLabel}</p>
                </div>
                <span className="works-accordion__year">{project.year}</span>
                <span className="works-accordion__arrow">→</span>
              </button>

              <div className={`works-accordion__panel ${isExpanded ? 'is-open' : ''}`}>
                <Link to={`/projects/${project.id}`} className="works-accordion__visual">
                  <img src={getProjectImage(project)} alt={`${project.title} preview`} loading="lazy" />
                  <div className="works-accordion__overlay" />
                  <div className="works-accordion__caption">
                    <p>{project.blurb}</p>
                  </div>
                </Link>
              </div>
            </article>
          );
        })}

        {!projects.length ? <div className="works-empty">No projects match the current search.</div> : null}
      </section>
    </section>
  );
}
