import { useMemo } from 'react';
import { NavLink, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { DOMAIN_META } from '../data/siteContent';
import ShuffleText from './ShuffleText';

const SITE_LINKS = [
  { to: '/', label: 'PAPAZIAN', end: true },
  { to: '/works', label: 'WORKS' },
  { to: '/writing', label: 'WRITING' },
  { to: '/about', label: 'ABOUT' },
  { to: '/atlas', label: 'ATLAS' },
  { to: '/contact', label: 'CONTACT' },
];

const ATLAS_FILTERS = ['sound', 'text', 'image', 'code', 'space', 'systems'];

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const isAtlasMode = location.pathname.startsWith('/atlas');

  const selectedDomains = useMemo(() => {
    const raw = searchParams.get('domains');
    if (!raw) return [];
    return raw
      .split(',')
      .map((value) => value.trim())
      .filter(Boolean);
  }, [searchParams]);

  const toggleDomain = (domain) => {
    const nextDomains = new Set(selectedDomains);
    if (nextDomains.has(domain)) {
      nextDomains.delete(domain);
    } else {
      nextDomains.add(domain);
    }

    const nextSearch = new URLSearchParams(searchParams);
    if (nextDomains.size) {
      nextSearch.set('domains', Array.from(nextDomains).join(','));
    } else {
      nextSearch.delete('domains');
    }
    setSearchParams(nextSearch, { replace: true });
  };

  return (
    <header className="site-nav-shell">
      <nav
        className="site-nav island-nav"
        aria-label={isAtlasMode ? 'Atlas navigation' : 'Primary navigation'}
        style={{
          gridTemplateColumns: isAtlasMode ? '118px repeat(6, minmax(0, 1fr))' : '118px repeat(5, minmax(0, 1fr))',
        }}
      >
        {!isAtlasMode ? (
          SITE_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `site-nav__link ${isActive ? 'is-active' : ''}`}
            >
              <ShuffleText text={link.label} />
            </NavLink>
          ))
        ) : (
          <>
            <button type="button" className="site-nav__button site-nav__button--home" onClick={() => navigate('/')}>
              <ShuffleText text="PAPAZIAN" />
            </button>
            {ATLAS_FILTERS.map((domain) => {
              const active = selectedDomains.includes(domain);
              return (
                <button
                  key={domain}
                  type="button"
                  className={`site-nav__button ${active ? 'is-active' : ''}`}
                  onClick={() => toggleDomain(domain)}
                >
                  <ShuffleText text={DOMAIN_META[domain].label.toUpperCase()} />
                </button>
              );
            })}
          </>
        )}
      </nav>
    </header>
  );
}
