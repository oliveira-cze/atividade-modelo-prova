import { User } from "@/types/User";
import CardBadge from "../atoms/CardBadge";
import Image from "next/image";
import Link from "next/link";

export default function UserCard({ user }: { user: User }) {
  const { name, location, email, dob, picture, nat , id} = user;

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-start gap-4">
        <Image
          src={picture.medium}
          width={100}
          height={100}
          alt={`Foto de ${name.first} ${name.last}`}
          className="h-20 w-20 rounded-2xl object-cover"
        />
        <div>
          <span className="rounded-full bg-app-soft px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-app-primary">
            {nat}
          </span>
          <h3 className="mt-3 text-xl font-bold leading-tight text-app-dark">
            {name.first} {name.last}
          </h3>
          <p className="mt-1 text-sm text-slate-600">{email}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <CardBadge text={location.city} />
        <CardBadge text={location.state} />
        <CardBadge text={dob.age.toString()} />
      </div>

      <Link
        href={`/usuarios/${id}`}
        className="mt-5 inline-flex text-sm font-extrabold text-app-primary hover:text-blue-800"
      >
        Ver perfil
      </Link>
    </article>
  );
}
