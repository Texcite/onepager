import clsx from 'clsx'

import {Button} from '../components/Button'
import {CheckIcon} from '../components/CheckIcon'
import {Container} from '../components/Container'
import {GridPattern} from '../components/GridPattern'
import {SectionHeading} from '../components/SectionHeading'
import AlternateContent from "../components/sections/AlternateContent";
import ScreenTwo from "/public/assets/pitch-consult/screen-2.png"
import Image from "next/image";

function Plan({name, description, price, features, href, featured}) {
    return (
        <div
            className={clsx(
                'relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12',
                featured && 'bg-blue-600 sm:shadow-lg'
            )}
        >
            {featured && (
                <div className="absolute inset-0 text-white/10 [mask-image:linear-gradient(white,transparent)]">
                    <GridPattern x="50%" y="50%"/>
                </div>
            )}
            <div className="relative flex flex-col">
                <h3
                    className={clsx(
                        'mt-7 text-lg font-semibold tracking-tight',
                        featured ? 'text-white' : 'text-slate-900'
                    )}
                >
                    {name}
                </h3>
                <p
                    className={clsx(
                        'mt-2 text-lg tracking-tight',
                        featured ? 'text-white' : 'text-slate-600'
                    )}
                >
                    {description}
                </p>
                <p className="order-first flex font-display font-bold">
          <span
              className={clsx(
                  'text-[1.75rem] leading-tight',
                  featured ? 'text-blue-200' : 'text-slate-500'
              )}
          >
            $
          </span>
                    <span
                        className={clsx(
                            'ml-1 mt-1 text-7xl tracking-tight',
                            featured ? 'text-white' : 'text-slate-900'
                        )}
                    >
            {price}
          </span>
                </p>
                <div className="order-last mt-8">
                    <ul
                        role="list"
                        className={clsx(
                            '-my-2 divide-y text-base tracking-tight',
                            featured
                                ? 'divide-white/10 text-white'
                                : 'divide-slate-200 text-slate-900'
                        )}
                    >
                        {features.map((feature) => (
                            <li key={feature} className="flex py-2">
                                <CheckIcon
                                    className={clsx(
                                        'h-8 w-8 flex-none',
                                        featured ? 'fill-white' : 'fill-slate-600'
                                    )}
                                />
                                <span className="ml-4">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <Button
                    href={href}
                    color={featured ? 'white' : 'slate'}
                    className="mt-8"
                    aria-label={`Get started with the ${name} plan for $${price}`}
                >
                    Get started
                </Button>
            </div>
        </div>
    )
}

export function PitchConsult() {
    return (
        <section
            id="pitch-consult"
            aria-labelledby="pitch-consult-title"
            className="scroll-mt-14 pt-16 pb-8 sm:scroll-mt-32 sm:pt-20 sm:pb-10 lg:pt-32 lg:pb-16"
        >
            <Container>
                <SectionHeading number="4" id="pitch-consult-title">
                    Pitch consult
                </SectionHeading>
                <h2 className="concept-title">
                    Een chatbot en jou sparring partner tijdens het uitwerken van je idee.
                </h2>
                <p className="concept-short-description">
                    “Everything Starts as a Square” is available in two different packages
                    so you can pick the one that’s right for you.
                </p>
            </Container>
            <Container size="lg" className="mt-16">
                <AlternateContent features={[
                    {
                        name: 'Minimal and thoughtful',
                        description: "Ideeën bedenken kan iedereen. Wanneer je het idee wilt uitwerken kan je er echter al snel achter komen dat je idee niet zo sterk was dan dat je dacht. Je moet dus nog aan het werk om je idee perfect te maken. Pitch Consult helpt je hierbij.\n" +
                            "\n" + "\n" +
                            "Pitch Consult is een online chatbot en jou sparring partner tijdens het uitwerken van je idee.",
                        imageSrc: '/assets/pitch-consult/screen-1.png',
                        imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
                        maxHeight: 400,
                        maxWidth: 350,
                        reverse: false
                    }
                ]}/>
            </Container>
            <Container size="lg" className="mt-16 flex flex-row items-center justify-between">
                <Image src={ScreenTwo} height={400} width={400} alt="Screenshot"/>
                <div>
                    <h3 className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 ">Wat kan
                        het?</h3>
                    <ul role="list" className="mt-8 space-y-3">
                        {[
                            'Feedback geven op je idee op basis van soortgelijke series\n',
                            'Nieuwe inzichten geven over je idee',
                            'Tips geven om je idee te verduidelijken/verbeteren.',
                            'Laten weten of een soortgelijk idee al is afgewezen/geproduceerd.',
                        ].map((feature) => (
                            <li key={feature} className="flex font-semibold">
                                <CheckIcon className="h-8 w-8 flex-none fill-blue-500"/>
                                <span className="ml-4">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
            <Container size="lg" className="mt-16">
                <AlternateContent features={[
                    {
                        name: 'Spar met je online partner',
                        description: "Door kort je idee te vertellen aan Pitch Consult kan hij je feedback geven op basis van eerder gemaakte, soortgelijke, series. Zo kan hij je vertellen welke overeenkomsten jouw idee heeft met een andere serie, welke onderdelen compleet uniek zijn, welke onderdelen eerder zijn afgewezen en welke onderdelen eerder zijn goedgekeurd.\n" +
                            "\n" +
                            "Door Pitch Consult te gebruiken kan jij jouw idee aanscherpen en verduidelijken zodat er een grotere kans is dat het aangenomen wordt om verwerkt te worden tot een echte serie. Daarbij is het ook nog eens fijn om met iemand te praten over je idee!",
                        imageSrc: '/assets/pitch-consult/screen-1.png',
                        imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
                        maxHeight: 400,
                        maxWidth: 350,
                        reverse: false
                    }
                ]}/>
            </Container>
            <Container size="lg" className="mt-16 flex justify-center">
                <div className="w-1/2">
                    <h2 className="concept-title">
                        Hoe werkt het?
                    </h2>
                    <p className="mt-4 concept-body-text">
                        Pitch Consult is een AI aangedreven chatbot die, op basis van een databse van het NPO met eerder
                        gefaalde/geslaagde serie ideeën, Feedback geeft op je idee. Dit doet hij door series, rapporten
                        van de genremanager en inzendings documenten te analyseren. Dit vergelijkt hij vervolgens met
                        jouw idee om zo accurate feedback te geven!
                    </p>
                    <h3 className="concept-heading">
                        Technologie
                    </h3>
                    <ul role="list" className="mt-8 space-y-3">
                        {["GPT-3.5-model - OpenAI",
                            "Deep Neural Network",
                            "Python (voor machine learning) en C++"].map((feature) => (
                            <li key={feature} className="flex font-semibold">
                                <CheckIcon className="h-8 w-8 flex-none fill-blue-500"/>
                                <span className="ml-4">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    )
}
