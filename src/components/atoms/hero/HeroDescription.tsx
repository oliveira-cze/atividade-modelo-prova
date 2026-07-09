export default function HeroDescription ({description} : {description : string}) {
    return (
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            {description}
        </p>
    )
}