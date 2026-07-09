import AboutCard from "../molecules/AboutCard";

export default function AboutContent() {
  return (
    <section className="mx-auto grid max-w-6xl gap-5 px-4 py-14 md:grid-cols-2">
      <AboutCard
        title="Objetivo da prática"
        description="O objetivo é transformar esta base HTML em uma aplicação Next.js capaz de consumir
          dados da API Random User Generator e renderizar os perfis de forma dinâmica."
      />
      <AboutCard
        title="API utilizada"
        description="A API Random User Generator retorna usuários fictícios com nome, imagem,
          localização, contato, idade e nacionalidade."
      />
    </section>
  );
}
