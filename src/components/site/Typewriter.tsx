import { useEffect, useMemo, useState } from "react";

export function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Reserve space based on the longest word so the hero never reflows.
  const longest = useMemo(
    () => words.reduce((a, b) => (b.length > a.length ? b : a), ""),
    [words],
  );

  useEffect(() => {
    const current = words[i % words.length];
    const speed = deleting ? 30 : 65;
    const pause = !deleting && text === current ? 1600 : deleting && text === "" ? 400 : speed;

    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setI((n) => n + 1);
      } else {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
        );
      }
    }, pause);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return (
    <span
      className="relative inline-block align-baseline whitespace-nowrap"
      style={{ maxWidth: "100%" }}
    >
      {/* Invisible sizer reserves horizontal space for the longest phrase */}
      <span aria-hidden className="invisible whitespace-nowrap">
        {longest}
      </span>
      <span className="absolute inset-0 whitespace-nowrap text-teal-grad">
        {text}
        <span className="caret" />
      </span>
    </span>
  );
}
