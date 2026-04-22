import { CONTACT_CHANNELS } from '../data/siteContent';

export default function ContactPage() {
  return (
    <div className="page">
      <section className="section-head section-head--stacked section-head--spaced">
        <p className="section-kicker">CONTACT</p>
        <h1 className="page-title">Open to selected collaborations across culture, technology, and public meaning.</h1>
      </section>

      <div className="contact-grid">
        {CONTACT_CHANNELS.map((channel) => (
          <article key={channel.id} className="contact-card">
            <span>{channel.label}</span>
            <p>{channel.description}</p>
            <a href={`mailto:${channel.email}?subject=${encodeURIComponent(channel.subject)}`}>{channel.email}</a>
          </article>
        ))}
      </div>
    </div>
  );
}
