import Image from 'next/image'

import {Container} from '../components/Container'
import {SectionHeading} from '../components/SectionHeading'
import { CheckIcon } from '../components/CheckIcon'
import headerImage from '../images/resources/talkshow.png'
import chairEdit from '../images/resources/chairedit.png'
import presenting from '../images/resources/presenting.gif'


export function DigitalSetBuilder() {
    return (
        <section
            id="digital-set-builder"
            aria-labelledby="digital-set-builder-title"
            className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
        >
            <Container>
                <SectionHeading number="2" id="digital-set-builder-title">
                    Digital set builder
                </SectionHeading>
                <p className="mt-8 concept-title">
                    Een web-applicatie waarbij je een omgeving kan creëren om je idee visueel te representeren.
                </p>
                <div className="overflow-hidden rounded-lg mt-16">
                    <Image src={headerImage} alt="" unoptimized />
                </div>
                <p className="mt-8 concept-short-description">
                Wanneer een idee in iemands hoofd zit, is het vaak al volledig gevormd en visueel duidelijk. 
                Het kan echter moeilijk zijn om dit idee aan anderen uit te leggen, omdat zij niet altijd in staat zijn om het visueel voor zich te zien. 
                Met behulp van Digital Set Builder streven we ernaar dit probleem op te lossen en de presentatie van het idee te versterken.
                </p>
            </Container>
            <Container size='lg' className="mt-24 flex flex-row justify-between items-center py-32">
                <div className='w-1/2'>
                    <p className="font-display concept-subtitle">
                        Creëer je set   
                    </p>
                    <ul role="list" className="mt-8 space-y-3">
                            {[
                                'Kies objecten uit de inventaris',
                                'Zet objecten neer in je omgeving',
                                'Vrijheid waar je deze objecten wilt gaan plaatsen',
                            ].map((feature) => (
                                <li key={feature} className="flex">
                                    <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
                                    <span className="ml-4 concept-body-text">{feature}</span>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className='overflow-hidden rounded-lg'>
                    <Image src={chairEdit} alt="" unoptimized height="350" width="350" />
                </div>       
            </Container>
            <Container className="mt-16" >
                <p className="font-display concept-subtitle">
                    Loop rond in je omgeving en speel je idee uit
                </p>
                <p className="mt-8 concept-body-text">
                    Nu de set gereed is, kun je je idee beter uitbeelden met behulp van de objecten die je in je set hebt geplaatst.
                    De enige stap die nu nog over is, is om je idee uit te spelen en op te nemen!
                </p>
                <ul role="list" className="mt-8 space-y-3">
                            {[
                                'Beweeg door je gemaakte set',
                                'Neem het op',
                            ].map((feature) => (
                                <li key={feature} className="flex">
                                    <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
                                    <span className="ml-4 concept-body-text">{feature}</span>
                                </li>
                            ))}
                </ul>
                <div className="overflow-hidden rounded-lg mt-16">
                    <Image src={presenting} alt="" unoptimized width="800"/>
                </div>
                </Container> 
                <Container className="mt-16 py-32">  
                <p className="font-display concept-subtitle">
                    Technologie
                </p>
                <p className="mt-8 concept-body-text">
                Het idee is om een web-applicatie te ontwikkelen die gebruik maakt van een 3D engine javascript library waarbij 
                we weer gebruik maken van een framework om daarmee vervolgens de "Most valueble product" in het prototype kunnen aantonen.
                </p>
                <ul role="list" className="mt-8 space-y-3">
                            {[
                                'Three.js',
                                'A-frame',
                                'PlayCanvas',
                            ].map((feature) => (
                                <li key={feature} className="flex">
                                    <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
                                    <span className="ml-4 concept-body-text" >{feature}</span>
                                </li>
                            ))}
                </ul>
            </Container>
        </section>
    )
}
