
interface DetailCardProps {
    title : string,
    content : string
}

export default function DetailCard({title, content} : DetailCardProps) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
        {title}
      </p>
      <p className="mt-1 font-bold text-app-dark">{content}</p>
    </div>
  );
}
