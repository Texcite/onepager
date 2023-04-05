import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'


export function Verbeterpunten() {
    return (
        <section
            id="verbeterpunten"
            aria-labelledby="verbeterpunten-title"
            className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
        >
            <Container>
                <SectionHeading number="9" id="verbeterpunten-title">
                    Opmerkingen
                </SectionHeading>
                <p className="mt-8 concept-title">
                    Opmerkingen voor doorontwikkeling
                </p>
                <p className="mt-8 concept-short-description">
                Omdat we een prototype hebben gemaakt zijn er natuurlijk nog onderdelen waar verbeteringen aan toegepast kunnen worden. Zo hebben wij een aantal verbeterpunten in kaart gebracht voor de oplevering van het product.</p>
                
                <p className="font-display concept-heading">
                    Video's opslaan
                </p>
                <p className="mt-8 concept-body-text">
                    Jammer genoeg verwijderd de API die we gebruiken de gegenereerde video's een uur nadat ze gegenereerd zijn. We hebben geen tijd gehad om hier een oplossing voor te vinden, maar dit is wel iets dat in een uiteindelijk product opgelost moet worden.
                </p>

                <p className="font-display concept-heading">
                    API key
                </p>
                <p className="mt-8 concept-body-text">
                    Om het prototype online te zetten is het belangrijk dat er een API Key voor de stable diffusion API wordt meegestuurd bij verzoeken naar de API. Echter moet er gekeken worden naar een oplossing om de API key niet zichtbaar te maken voor eindgebruikers.               
                </p>
                <p className="font-display concept-heading">
                    Export
                </p>
                <p className="mt-8 concept-body-text">
                    De storyboard wordt nu geëxporteerd als een HTML file zodat het makkelijk is om online te delen. Het is ons echter niet gelukt om tijd te vinden om de styling van de geëxporteerde pagina aan te pakken. In de toekomst kan er hier nog aan gewerkt worden.
                </p>

                <p className="font-display concept-heading">
                    Wachttijd
                </p>
                <p className="mt-8 concept-body-text">
                    De wachttijd voor het genereren van je video is op het moment erg lang. Er kan nog meer onderzoek gedaan worden naar andere AI/API's om te kijken of deze een betere oplossing kunnen bieden.
                </p>

                <p className="font-display concept-heading">
                    Betere uitleg product
                </p>
                <p className="mt-8 concept-body-text">
                    Het product heeft op het moment weinig uiteg over hoe het daadwerkelijk werkt. In de toekomst is het een mogelijkheid om een tooltip toe te voegen die je meer informatie geeft over de applicatie. Hier moet dus nog aan gewerkt worden en onderzoek naar gedaan worden.
                </p>
            </Container>
        </section>
    )
}