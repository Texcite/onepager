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
            <Container>
                <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
                    Onze oplossing
                </p>
                <p className="mt-4 concept-body-text">
                    Voor veel mensen kan het lastig zijn om een idee visueel te maken vanuit hun hoofd. Een storyboard kan hierbij helpen, maar dit is niet altijd even makkelijk voor iedereen. Daarom is er nu de AI Video Interactive Storyboard (AVIS) tool. Met behulp van AI kan je een scene beschrijven en deze wordt omgezet in een interactieve video. Zo krijg je een visueel beeld van je storyboard met een interactieve twist.
                    <br /><br />
                    Hoe werkt het? Beschrijf simpelweg de scene die je in je storyboard wilt opnemen en de AI verwerkt dit om een video te genereren. Eenmaal klaar met het maken van je storyboard kan je het downloaden als een standalone html pagina voor makkelijke distributie. Het product is een web-applicatie die gebruik maakt van AI die getraind is om video's te genereren, gebouwd met react voor snelheid en flexibiliteit.
                </p>
            </Container>
        </section>
    )
}
