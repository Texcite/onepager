import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'

export function DesignKeuzes() {
    return (
        <section
            id="design-keuzes"
            aria-labelledby="design-keuzes-title"
            className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
        >
            <Container>
                <SectionHeading number="6" id="design-keuzes-title">
                    Design keuzes
                </SectionHeading>
                <p className="mt-8 concept-title">
                    Design keuzes
                </p>
                <p className="mt-8 concept-short-description">
                We hebben voor het maken van het prototype een aantal design keuzes gemaakt om het product zo toegankelijk mogelijk te maken voor de gebruiker. Een aantal van deze keuzes zijn:
                </p>
                <div className="flex flex-col">
                    <div className="text-left my-4 w-1/2">
                        <p className="concept-body-text">
                            We hebben ervoor gekozen om een timeline en een preview van de timeline toe te voegen om je storyboard overzichtelijk weer te geven. Ook maakt het toevoegen van een timeline het gemakkelijk voor de gebruiker om de storyboard aan te passen.
                        </p>
                    </div>
                    <div className="text-left my-4 w-1/2 ml-auto  ">
                        <p className="concept-body-text">
                            We hebben ervoor gekozen om de layout van de scene builder te baseren op de layout van de tegenstander om het gemakkelijk te maken voor de gebruiker om de applicatie te gebruiken. Door dezelfde layout te maken als onze tegenstanders kunnen de gebruikers intuïtief navigeren door onze applicatie en de verschillende functie begrijpen.
                        </p>
                    </div>
                    <div className="text-left my-4 w-1/2">
                        <p className="concept-body-text">
                            We hebben ervoor gekozen om de storyboard te exporteren naar een statische HTML pagina. Zo is het makkelijk voor de gebruiker om zijn/haar storyboard te delen online via bijvoorbeeld e-mail of social media.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}