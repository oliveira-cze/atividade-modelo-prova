interface OverTitleProps {
  text: string;
}

export default function OverTitle({ text }: OverTitleProps) {
  return (
    <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-app-primary">
      {text}
    </p>
  );
}
