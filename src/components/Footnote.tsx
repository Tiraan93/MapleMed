export default function Footnote({ n }: { n: 1 | 2 }) {
  return (
    <sup className="ml-0.5 text-[0.7em] font-semibold leading-none">
      <a href={`#source-${n}`} className="underline decoration-current/40 underline-offset-2">
        {n === 1 ? "¹" : "²"}
      </a>
    </sup>
  );
}
