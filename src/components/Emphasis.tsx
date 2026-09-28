import { Fragment } from "react";

// Renders "*word*" segments of a content string in bold ember.
export default function Emphasis({ text, className = "" }: { text: string; className?: string }) {
  const parts = text.split(/\*(.+?)\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <b key={i} className={className}>
            {part}
          </b>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
