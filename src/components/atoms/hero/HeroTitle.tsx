export default function HeroTitle ({title} : {title : string}) {
    return (
        <h1 className="text-4xl font-extrabold tracking-tight text-app-dark md:text-6xl">
            {title}
        </h1>
    )
}