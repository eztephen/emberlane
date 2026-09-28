export default function FlameMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2c1.5 3.5-1 5-1 7.5a3 3 0 0 0 6 0c0-1-.3-1.8-.8-2.6C18.4 8.6 20 11.4 20 14a8 8 0 1 1-16 0C4 8.8 8.5 5.8 12 2z"
        fill="var(--ember)"
      />
      <path
        d="M12 21a4 4 0 0 1-4-4c0-2 1.6-3.2 2.6-4.6.6 1.4 1.8 2 1.8 3.2 0 .9.7 1.2 1.2.7.7-.7.9-1.8.6-2.7 1.1 1.2 1.8 2.4 1.8 3.4a4 4 0 0 1-4 4z"
        fill="var(--bone)"
      />
    </svg>
  );
}
