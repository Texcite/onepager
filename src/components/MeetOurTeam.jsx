// todo: Add team members and images
const people = [
    {
        name: 'Nigel Ritfeld',
        role: 'Contact persoon/ Developer',
        imageUrl:
            'https://avatars.githubusercontent.com/u/50368040?s=400&u=31d7f6a85296ca6e7762ee25214b0b97a991a0f2&v=4',
    },
    {
        name: 'Stefan de Gier',
        role: 'Project manager',
        imageUrl: 'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/61374b8c7eb35f00692689fe/cc223378-0ef1-4851-a4ec-ae0e8440dc8e/128'
    },
    {
        name: 'Owen Brouwer',
        role: 'Project manager',
        imageUrl: '/team/owen.webp'
    },
    {
        name: 'Olivier Vromans',
        role: 'Developer',
        imageUrl: '/team/olivier.webp'
    },
    {
        name: 'Steef van Deventer',
        role: 'Contact persoon/ Developer',
        imageUrl:'/team/steef.webp'
    },
    // More people...
]

export default function MeetOurTeam() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Maak kennis met het team.</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Welkom bij ons projectteam voor de NPO! Wij zijn een geweldige groep studenten van de Hogeschool van Rotterdam die zich volledig inzetten voor dit belangrijke project. Laat ons je voorstellen aan ons team:
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-blue-600">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
