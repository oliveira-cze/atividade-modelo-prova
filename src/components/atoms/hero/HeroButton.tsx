import Link from "next/link";

interface HeroButtonPropos {
    destiny : string
    text : string
    destacado ? : boolean
}

export default function HeroButton ({destiny, text, destacado = false} : HeroButtonPropos) {
    return (
        <Link
              href={destiny}
              className={`rounded-full border px-5 py-3 text-sm font-bold
                ${destacado ? 
                    ('bg-app-primary text-white hover:bg-blue-800')
                    :
                    ('border-slate-300 bg-white  text-app-dark hover:bg-slate-50')
                } `}
            >
              {text}
            </Link>
    )
}