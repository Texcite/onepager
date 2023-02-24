import Link from 'next/link'

import {CheckIcon} from './CheckIcon'
import {Container} from './Container'

export function Introduction() {
    return (
        <section
            id="introduction"
            aria-label="Introduction"
            className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
        >
            <Container className="text-lg tracking-tight text-slate-700">

                <p className="mt-4">
                    In opdracht van de NPO hebben wij de vraag gekregen om te kijken naar hoe kunnen we mensen met goede
                    ideeën helpen om hun idee goed over te brengen, en daarmee hun pitch te ondersteunen. Na de
                    debriefing van het project hebben wij een context gekozen om ons onderzoek een richting te
                    geven. <br/>
                </p>

                <p className="font-display text-4xl font-bold tracking-tight text-slate-900 mt-8">
                    “Hoe kunnen we mensen zonder productie-ervaring ondersteunen bij het visualiseren van een idee,
                    zodat de genre manager overtuigd is van het idee?”
                </p>
                <p className="mt-4">
                    De NPO heeft momenteel een platform genaamd Media Module. Dit is een online omgeving waarbij
                    aangemelde producenten een nieuw idee voor een programma kunnen delen met de NPO. Als dit idee
                    aansluit binnen het budget en richting van een van de omroepen wordt er verder gegaan met het idee.
                </p>
                <p className="mt-4">
                    Momenteel komen er weinig nieuwe ideeën binnen en is de vraag hoe wij mensen met een goed idee
                    zonder productie-ervaring kunnen helpen om een idee te pitchen. Een van de uitdagingen hierbij is
                    het overtuigend overbrengen van het idee. Het liefst gaat dit visueel, omdat dit het genre manager
                    kan helpen om overtuigd te raken van het idee.
                </p>

                <p className="font-display text-4xl font-bold tracking-tight text-slate-900 mt-16">
                    Probleemstelling
                </p>
                <p className="mt-4">
                    Mensen zonder productie-ervaring hebben vaak geen idee waar zij kunnen beginnen met het visualiseren van zijn idee. In de productiewereld is een vorm hiervan storyboards, maar dit is niet de enige manier en de andere mogelijkheden willen wij onderzoeken om mensen te helpen hun idee te visualiseren.  
                </p>
            </Container>
        </section>
    )
}
