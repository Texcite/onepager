import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'


export function Demonstratie() {
    return (
        <section
            id="demonstratie"
            aria-labelledby="demonstratie-title"
            className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
        >
            <Container>
                <SectionHeading number="2" id="demonstratie-title">
                    Demonstratie
                </SectionHeading>
                <p className="mt-8 concept-title">
                    Demonstratie.
                </p>
                <p className="mt-8 concept-short-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum rem qui id amet voluptatum distinctio beatae deleniti autem quasi? Iusto sint, repudiandae provident mollitia adipisci eos repellendus delectus architecto veritatis!
                </p>
            </Container>
            <Container className="mt-16" >
                {/* Video */}
            </Container>
        </section>
    )
}
