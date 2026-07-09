export default function CardBadge({ text }: { text: string }) {
  return (
    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
      {text}
    </span>
  );
}
