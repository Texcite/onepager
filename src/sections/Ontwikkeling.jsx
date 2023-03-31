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
                <SectionHeading number="2" id="ontwikkeling-product-title">
                    Ontwikkeling van het product
                </SectionHeading>
                <p className="mt-8 concept-title">
                    Ontwikkeling van het product
                </p>
                <p className="mt-8 concept-short-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa, consequuntur, aspernatur consectetur et tempora ea nulla ut molestias libero ex iste voluptatibus facilis ad eligendi eveniet, perspiciatis perferendis itaque.
                </p>
            </Container>
            <Container size='lg' className="mt-24 flex flex-row justify-between items-center py-32">
                <div className='w-1/2'>
                    <p className="font-display concept-body-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur cupiditate, et quas quia eum sapiente temporibus doloribus illo tenetur architecto quis esse corrupti? Nulla asperiores porro odio, vitae reiciendis minima!
                    </p>
                    <ul role="list" className="mt-8 space-y-3">
                        {[
                            'Dit is 1',
                            'Dit is 2',
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
            <Container className="mt-16" >
                <p className="font-display concept-subtitle">
                    User Tests
                </p>
                <p className="mt-8 concept-body-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus ea delectus obcaecati. Recusandae quae eum saepe omnis quos ducimus voluptates quis consequuntur culpa ipsum dolores vero rem, natus dolorum! Aut.
                </p>
            </Container>
            <Container className="mt-16" >
                <p className="font-display concept-subtitle">
                    Oplevering van het product
                </p>
                <p className="mt-8 concept-body-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptate alias necessitatibus assumenda nisi at fugit autem praesentium est reprehenderit labore nam iusto enim, nulla corrupti. Minima rerum quibusdam suscipit.
                </p>
            </Container>
        </section>
    )
}
