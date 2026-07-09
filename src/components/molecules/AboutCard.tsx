interface AboutCardProps {
  title: string;
  description: string;
}

export default function AboutCard({ title, description }: AboutCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6">
      <h2 className="text-2xl font-bold tracking-tight text-app-dark">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
