import Link from "next/link";
import HeaderButton from "../atoms/HeaderButtons";

export default function Header() {

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <Link
          href="/usuarios"
          className="text-lg font-extrabold tracking-tight text-app-dark"
        >
          UserList
        </Link>

        <nav
          className="flex items-center gap-2 text-sm font-semibold text-slate-600"
          aria-label="Navegação principal"
        >
          <HeaderButton
            name="Usuários"
            destiny="/usuarios"
          />
          <HeaderButton
            name="Sobre o Projeto"
            destiny="/sobre"
          />
        </nav>
      </div>
    </header>
  );
}
