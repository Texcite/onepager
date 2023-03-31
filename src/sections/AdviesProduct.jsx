import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'


export function AdviesPitch() {
    return (
        <section
            id="advies-pitch"
            aria-labelledby="advies-pitch-title"
            className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
        >
            <Container>
                <SectionHeading number="2" id="advies-pitch-title">
                    Advies Vorige Pitch
                </SectionHeading>
                <p className="mt-8 concept-title">
                    Advies Vorige Pitch.
                </p>
                <p className="mt-8 concept-short-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum rem qui id amet voluptatum distinctio beatae deleniti autem quasi? Iusto sint, repudiandae provident mollitia adipisci eos repellendus delectus architecto veritatis!
                </p>
            </Container>
            <Container className="mt-16" >
                <p className="font-display concept-subtitle">
                    Het gekozen concept
                </p>
                <p className="mt-8 concept-body-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptate alias necessitatibus assumenda nisi at fugit autem praesentium est reprehenderit labore nam iusto enim, nulla corrupti. Minima rerum quibusdam suscipit.
                </p>
            </Container>
        </section>
    )
}
