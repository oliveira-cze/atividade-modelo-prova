'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderButtonProps {
    name : string
    destiny : string
}

export default function HeaderButton ({name, destiny} : HeaderButtonProps) {

    const pathName = usePathname();

    const isActive = pathName.includes(destiny)

    return (
        <Link
            href={`${destiny}`}
            className={`rounded-full px-3 py-2
                ${isActive ?
                    ("bg-app-soft text-app-primary")
                    :
                    ("hover:bg-slate-100")
                }
                `}
          >
            {name}
          </Link>
    )
}