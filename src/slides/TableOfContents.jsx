import { Container } from '../components/Container'
import { Expandable } from '../components/Expandable'
import { SectionHeading } from '../components/SectionHeading'

const tableOfContents = {
  'Inhoudsopgave': {
    'Advies Vorige Pitch': 1,
    // 'Design Keuzes voor het product': 2,
    'Ontwikkeling van het product': 2,
    'Demonstratie': 3,
    'Eventuele verbeterpunt product': 4,
  }
}

export function TableOfContents() {
  return (
    <section
      id="programma"
      aria-labelledby="programma-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32 bg-gray-100"
    >
      <Container>
        {/* <SectionHeading number="1" id="programma-title">
          Programma
        </SectionHeading> */}
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Onze oplossingen
        </p>
        <p className="mt-4 concept-body-text">
          Voor veel mensen kan het lastig zijn om een idee visueel te maken vanuit hun hoofd. Een storyboard kan hierbij helpen, maar dit is niet altijd even makkelijk voor iedereen. Daarom is er nu de AI Video Interactive Storyboard (AVIS) tool. Met behulp van AI kan je een scene beschrijven en deze wordt omgezet in een interactieve video. Zo krijg je een visueel beeld van je storyboard met een interactieve twist.
          <br /><br />
          Hoe werkt het? Beschrijf simpelweg de scene die je in je storyboard wilt opnemen en de AI verwerkt dit om een video te genereren. Eenmaal klaar met het maken van je storyboard kan je het downloaden als een standalone html pagina voor makkelijke distributie. Het product is een web-applicatie die gebruik maakt van AI die getraind is om video's te genereren, gebouwd met react voor snelheid en flexibiliteit.        </p>
        <Expandable>
          {({ isExpanded }) => (
            <>
              <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
                {Object.entries(tableOfContents)
                  .slice(0, isExpanded ? undefined : 2)
                  .map(([title, pages]) => (
                    <li key={title}>
                      <h3 className="font-display text-3xl font-bold tracking-tight text-slate-900">
                        {title}
                      </h3>
                      <ol
                        role="list"
                        className="mt-8 divide-y divide-slate-300/30 rounded-2xl bg-slate-50 py-3 px-6 text-base tracking-tight sm:py-7 sm:px-8"
                      >
                        {Object.entries(pages).map(([title, pageNumber]) => (
                          <li
                            key={title}
                            className="flex justify-between py-3"
                            aria-label={`${title} on page ${pageNumber}`}
                          >
                            <span
                              className="font-medium text-slate-900"
                              aria-hidden="true"
                            >
                              {title}
                            </span>
                            <span
                              className="font-mono text-slate-400"
                              aria-hidden="true"
                            >
                              {pageNumber}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </li>
                  ))}
              </ol>
            </>
          )}
        </Expandable>
      </Container>
    </section>
  )
}
