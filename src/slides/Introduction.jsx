import Image from 'next/image.js'
import { Container } from '../components/Container'
import storyboard from '../images/resources/storyboard.png'
import setBuilder from '../images/resources/talkshow.png'
import pitch from '../images/resources/pitch.png'

export function Introduction() {
    return (
        <section
            id="introduction"
            aria-label="programma"
            className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
        >
            <Container className="text-lg tracking-tight text-slate-700">

                <p className="mt-4">
                    In opdracht van de NPO hebben wij de vraag gekregen om te kijken naar hoe kunnen we mensen met goede ideeën helpen om hun idee goed over te brengen, en daarmee hun pitch te ondersteunen. Na de debriefing van het project hebben wij een context gekozen om ons onderzoek een richting te geven.
                    <br />
                </p>

                <p className="font-display text-4xl font-bold tracking-tight text-slate-900 mt-8">
                    “Hoe kunnen we mensen zonder productie-ervaring ondersteunen bij het visualiseren van een idee, zodat de genre manager overtuigd is van het idee?”
                </p>
                <p className="mt-4">
                    De NPO heeft momenteel een platform genaamd Media Module. Dit is een online omgeving waarbij aangemelde producenten een nieuw idee voor een programma kunnen delen met de NPO. Als dit idee aansluit binnen het budget en richting van een van de omroepen wordt er verder gegaan met het idee.

                </p>
                <p className="mt-4">
                    Momenteel komen er weinig nieuwe ideeën binnen en is de vraag hoe wij mensen met een goed idee zonder productie-ervaring kunnen helpen om een idee te pitchen. Een van de uitdagingen hierbij is het overtuigend overbrengen van het idee. Het liefst gaat dit visueel, omdat dit het genre manager kan helpen om overtuigd te raken van het idee.
                </p>

                <p className="concept-heading">
                    Concepten
                </p>
                <div className='grid justify-items-center'>
                    <div className='mt-4 col-span-2 flex flex-col w-3/4 '>
                        <p className='font-bold text-center'>
                            Interactive Storyboard
                        </p>
                        <div className='overflow-hidden rounded-lg self-center'>
                            <Image src={storyboard} alt="" unoptimized height="700" width="700" />
                        </div>
                        {/* <p>
                            Door middel van AI wordt er een video gegenereerd gebaseerd op een beschrijving van een scene die de gebruiker invoert.  Deze gegenereerde videos worden in een editor geplaatst zodat er makkelijk een storyboard gemaakt kan worden. Deze kan je vervolgens downloaden om op te sturen en te gebruiken tijdens je pitch.
                        </p> */}
                    </div>
                    <div className='mt-4 col-span-1 flex flex-col mx-4'>
                        <p className='font-bold text-center '>
                            Digital Set Builder
                        </p>
                        <div className='overflow-hidden rounded-lg self-center my-4'>
                            <Image src={setBuilder} alt="" unoptimized height="350" width="350" />
                        </div>
                        {/* <p>
                            Digital Set Builder lost het probleem op dat mensen moeite hebben met het visueel uitleggen van een idee dat al volledig gevormd en duidelijk is. Creëer je eigen set met behulp van een web-applicatie en 3D-engine javascript library om je idee beter uit te beelden en op te nemen als prototype.
                        </p> */}
                    </div>
                    <div className='mt-4 col-span-1 flex flex-col ml-4'>
                        <p className='font-bold text-center'>
                            Pitch Consult
                        </p>
                        <div className='flex flex-row'>
                            {/* <p className='basis-96 mr-4'>
                                Pitch Consult is een online chatbot die feedback geeft op je serie-idee op basis van eerder gemaakte, soortgelijke series uit de NPO-database om je idee te verbeteren. Het doel is om je idee aanscherpen en een grotere kans te hebben dat het wordt aangenomen en verwerkt tot een echte serie.
                            </p> */}
                            <div className=' overflow-hidden rounded-lg self-center basis-96'>
                                <Image src={pitch} alt="" unoptimized height="350" width="350" />
                            </div>

                        </div>
                    </div>

                </div>
            </Container>
        </section>
    )
}
