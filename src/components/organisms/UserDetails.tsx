import { User } from "@/types/User";
import Image from "next/image";
import DetailCard from "../molecules/DetailCard";
import Link from "next/link";

export default function UserDetails({ user }: { user: User }) {
  const { name, location, email, dob, picture, nat, cell, phone } = user;

  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Link
          href="/usuarios"
          className="text-sm font-extrabold text-app-primary hover:text-blue-800"
        >
          ← Voltar para usuários
        </Link>

        <div className="mt-8 grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-start">
          <aside className="rounded-2xl border border-slate-200 bg-white p-6">
            <Image
              src={picture.large}
              height="100"
              width="100"
              alt={`Foto de ${name.first} ${name.last}`}
              className="h-40 w-40 rounded-3xl object-cover"
            />
            <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.16em] text-app-primary">
              Nacionalidade {nat}
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-app-dark">
              {name.first} {name.last}
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-600">{email}</p>
          </aside>

          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold tracking-tight text-app-dark">
              Informações do perfil
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <DetailCard title="Telefone" content={phone} />
              <DetailCard title="Celular" content={cell} />
              <DetailCard title="Cidade" content={location.city} />
              <DetailCard title="Estado" content={location.state} />
              <DetailCard title="País" content={location.country} />
              <DetailCard title="Idade" content={dob.age.toString()} />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
