import Image from 'next/image'

import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { CheckIcon } from '../components/CheckIcon'
import replicate from '../images/resources/replicate.png'


export function OntwikkelingProduct() {
    return (
        <section
            id="ontwikkeling-product"
            aria-labelledby="ontwikkeling-product-title"
            className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
        >
            <Container>
                <SectionHeading number="7" id="ontwikkeling-product-title">
                    Ontwikkeling van het product
                </SectionHeading>
                <p className="mt-8 concept-title">
                    Ontwikkeling van het product
                </p>
                <p className="mt-8 concept-short-description">
                    Na het maken van bovenstaande design keuzen konden we beginnen met het ontwikkelen van de interactive scene builder.
                </p>
            </Container>
            <Container size='lg' className="flex flex-row justify-between items-center py-16">
                <div className='w-1/2'>
                    <p className="font-display concept-heading">
                        AI keuze
                    </p>
                    <p className="font-display concept-body-text">
                        Voordat we konden beginnen met het ontwikkelen van het product moesten we echter eerst nog een keuze maken over welke AI we gingen gebruiken. Er was een brede keuze, maar uiteindelijk hebben we ervoor gekozen om het deforum_stable_diffusion AI model te gebruiken van Replicate om 2 redenen:
                    </p>
                    <ul role="list" className="mt-8 space-y-3">
                        {[
                            'Er was een API waar we gebruik van konden maken waarbij er gedocumenteerd was hoe we deze API moesten gebruiken.',
                            'De kosten waren redelijk laag voor de kwaliteit waarop er een video gegenereerd wordt.',
                        ].map((feature) => (
                            <li key={feature} className="flex">
                                <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
                                <span className="ml-4 concept-body-text">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='overflow-hidden rounded-lg'>
                    <Image src={replicate} alt="" unoptimized height="350" width="350" />
                </div>
            </Container>
            {/* <Container className="mt-16" >
                <p className="font-display concept-subtitle">
                    User Tests
                </p>
                <p className="mt-8 concept-body-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus ea delectus obcaecati. Recusandae quae eum saepe omnis quos ducimus voluptates quis consequuntur culpa ipsum dolores vero rem, natus dolorum! Aut.
                </p>
            </Container> */}
            <Container className="mt-16" >
                <p className="font-display concept-heading">
                    Oplevering van het product
                </p>
                <p className="mt-8 concept-body-text">
                    Met ons groepje hebben we onze web-applicatie opgeleverd met behulp van GitHub. Dit was een geweldige manier om ons project te organiseren en te beheren. We konden elkaars code gemakkelijk bekijken, wijzigingen aanbrengen en problemen oplossen. GitHub bood ook geweldige samenwerkingsfuncties zoals pull requests en code reviews die ons hielpen om kwaliteitscode te schrijven. Door GitHub te gebruiken, waren we in staat om ons project op tijd en zonder problemen op te leveren.
                </p>
                <p className="mt-8 concept-body-text">
                    Als opdrachtgever is het gemakkelijk om de code op GitHub te gebruiken die door de studenten is opgeleverd. Het enige wat de opdrachtgever hoeft te doen, is de code van GitHub downloaden en op zijn eigen computer installeren. Hiermee kan hij de web-applicatie op zijn eigen server hosten of op een cloudplatform naar keuze. Dit geeft de opdrachtgever de vrijheid om de applicatie te beheren en aan te passen aan zijn specifieke behoeften. Daarnaast biedt de code op GitHub de mogelijkheid om bugs op te lossen en nieuwe functies toe te voegen zonder afhankelijk te zijn van de ontwikkelaars.
                </p>
            </Container>
        </section>
    )
}