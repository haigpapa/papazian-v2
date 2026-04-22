export default function TextRoll({ text, className = '' }) {
  return (
    <span className={`text-roll ${className}`} aria-label={text}>
      <span className="text-roll__stack">
        <span className="text-roll__face">{text}</span>
        <span className="text-roll__face text-roll__face--ghost">{text}</span>
      </span>
    </span>
  );
}
