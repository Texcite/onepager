import { ChevronRightIcon } from '@heroicons/react/20/solid'

export function FancyHero() {
    return (
        <div className="relative isolate overflow-hidden bg-white h-full py-6">
            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                        width={200}
                        height={200}
                        x="50%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
            </svg>
            <div className=" flex items-center justify-between ">
                <div className="mx-auto max-w-2xl lg:mx-0 px-16 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Texcite
                    </h1>
                    <p className="mt-6 concept-body-text">
                        Tussenpresentatie concepten overzicht.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <a
                            href="#programma"
                            className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Bekijk concepten
                        </a>
                    </div>
                </div>
                <div className="mx-auto bg-green-800 mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                            <img
                                src="https://www.vn.nl/wp-content/uploads/2022/11/npo-liggend-1280x720.jpg"
                                alt="App screenshot"
                                width={2432}
                                height={1042}
                                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
