import OverTitle from "../atoms/OverTitle";
import HeroButton from "../atoms/hero/HeroButton";
import HeroTitle from "../atoms/hero/HeroTitle";
import HeroDescription from "../atoms/hero/HeroDescription";

export default function Hero() {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-3xl">
          <OverTitle text="Prática com API" />
          <HeroTitle title="Perfis fictícios para praticar Next.js" />
          <HeroDescription
            description="Esta base simula uma interface de consulta de usuários. Na versão em
            Next.js, os cards deverão ser renderizados a partir da API Random
            User Generator."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <HeroButton destiny="#usuarios" text="Ver usuários" destacado />
            <HeroButton destiny="/sobre" text="Sobre o projeto" />
          </div>
        </div>
      </div>
    </section>
  );
}
