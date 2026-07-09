"use client";

import { useEffect, useState } from "react";
import OverTitle from "../atoms/OverTitle";
import UserCard from "../molecules/UserCard";
import { User } from "@/types/User";
import { UserService } from "@/service/UserService";

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function getUsers(quantity: number) {
      try {
        const data = await UserService.getUserQuantity(quantity);
        const formattedUsers = data.results.map((user: User, index: number) => {
          return {
            ...user,
            id: index
          }
        })
        setUsers(formattedUsers);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers(20);
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-14" id="usuarios">
      <div className="mb-8 max-w-2xl">
        <OverTitle text="Usuários" />
        <h2 className="text-3xl font-extrabold tracking-tight text-app-dark">
          Lista de perfis
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Os cards abaixo estão estáticos e mockados. Na entrega, eles deverão
          ser gerados a partir dos dados retornados pela API.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {users.map((user) => {
            return (
                <UserCard
                key={user.id}
                user={user}
                 />
            )
        })}
      </div>
    </section>
  );
}
