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
                    Advies
                </SectionHeading>
                <p className="mt-8 concept-title">
                    Advies Vorige Pitch.
                </p>
                <p className="mt-8 concept-short-description">
                    Bij het pitchen van de 3 concepten hebben wij feedback gekregen en een advies over welk concept het meest realistisch was om uit te werken.
                </p>

                <p className="font-display concept-heading">
                    Digital set builder
                </p>
                <p className="mt-8 concept-body-text">
                    Zo kregen we de feedback dat het concept van de digital set builder wel een goed idee was, maar dat dit zich focussed op een ander punt in het proces dan het punt waar wij een probleem proberen op te lossen. Om deze reden hebben we ervoor gekozen om deze niet uit te werken
                </p>

                <p className="font-display concept-heading">
                    Pitch Consult
                </p>
                <p className="mt-8 concept-body-text">
                    Ook kregen we te horen dat de database, waar het concept van Pitch Consult op gebaseerd was, niet bestond waardoor we het concept niet uit konden werken.
                </p>

                <p className="font-display concept-heading">
                    Immersive Storyboard
                </p>
                <p className="mt-8 concept-body-text">
                    We kregen als laatst te horen dat het interactive storyboard concept overeenkwam met wat zij aan het begin verwacht hadden dat er uit dit project zou komen. Ze vonden dat er een goede mogelijkheid was dat dit concept de doelgroep zou kunnen helpen bij het maken van hun pitch.
                </p>
                <p className="mt-8 concept-body-text">
                    Waar we wel rekening mee moesten houden was dat ze het zo realistisch mogelijk wilden zien. Een serie van het NPO zou namelijk geen teken serie zijn, dus zou de schets ook niet geanimeerd eruit moeten zien.
                </p>

                <p className="font-display concept-heading">
                    Het gekozen concept
                </p>
                <p className="mt-8 concept-body-text">
                Op basis van de feedback die we hadden gekregen hebben we ervoor gekozen om het interactive storyboard concept uit te werken.
                </p>

                
                
            </Container>
        </section>
    )
}
