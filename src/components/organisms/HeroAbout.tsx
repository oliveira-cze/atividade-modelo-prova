import HeroDescription from "../atoms/hero/HeroDescription";
import HeroTitle from "../atoms/hero/HeroTitle";
import OverTitle from "../atoms/OverTitle";

export default function HeroAbout() {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-3xl">
          <OverTitle text="Página estática" />
          <HeroTitle title="Sobre o Projeto" />
          <HeroDescription
            description="Esta aplicação foi criada como base para praticar Next.js,
            componentização, consumo de API, rotas e organização de uma
            interface Front-End."
          />
        </div>
      </div>
    </section>
  );
}
