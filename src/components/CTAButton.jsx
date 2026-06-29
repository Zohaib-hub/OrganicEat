import { Link } from 'react-router-dom';

export default function CTAButton({ text, onClick, type = "button", className = "", to, href, id }) {
  const baseClasses = "inline-flex items-center gap-3 border-2 border-[#548E0A] text-[#1a1a1a] font-bold px-7 py-3.5 rounded-full hover:bg-[#548E0A] hover:text-white transition-all duration-300 group focus:outline-none";
  const customStyles = { fontSize: '0.9rem', letterSpacing: '0.04em' };

  const innerContent = (
    <>
      <span>{text}</span>
      <span className="w-7 h-7 rounded-full bg-[#548E0A] group-hover:bg-white flex items-center justify-center transition-colors duration-300 shrink-0">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
          className="group-hover:stroke-[#548E0A] transition-colors duration-300">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${className}`} style={customStyles} id={id} onClick={onClick}>
        {innerContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${className}`} style={customStyles} id={id} onClick={onClick}>
        {innerContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      style={customStyles}
      id={id}
    >
      {innerContent}
    </button>
  );
}
