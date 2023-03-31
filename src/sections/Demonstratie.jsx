import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import Image from "next/image";
import Link from "next/link";

export function Demonstratie() {

    const Step = ({number, video, title, description}) => {
        return (
            <div className="first:h-fit second:h-fit h-screen  w-full space-y-4 px-6 py-2 flex items-center justify-center flex-col-reverse">
                <div className="overflow-hidden rounded-xl shadow-2xl aspect-video">
                    <video
                        src={video}
                        height={800}
                        width={800}
                        loop={true}
                        muted={true}
                        autoPlay={true}
                    />
                </div>
                <div className="w-full flex items-center justify-center">
                    <h2 className="text-xl font-bold py-4">{number}. {title}</h2>
                </div>
            </div>
        )
    }


    return (
        <section
            id="demonstratie"
            aria-labelledby="demonstratie-title"
            className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
        >
            <Container size='lg'>
                <SectionHeading number="2" id="demonstratie-title">
                    Demonstratie
                </SectionHeading>

                <p className="mt-8 concept-title">Demonstratie</p>
                    <section className="flex flex-wrap space-y-8 justify-center items-center">
                        <Step
                            number={1}
                            video={"/assets/1-demo.mp4"}
                            title={"Timeline"}
                            description={"Dit is het overzicht van jouw storyboard. Op deze pagina kan jij de van jouw storyboard bekijken, nieuwe panelen toevoegen en jouw verhaal afspelen."}
                        />
                        <Step
                            number={2}
                            video={"/assets/2-demo.mp4"}
                            title={"Nieuwe paneel maken\n"}
                            description={"Klik op de blauwe plus knop om een nieuwe paneel aan te maken."}
                        />
                        <Step
                            number={3}
                            video={"/assets/3-demo.mp4"}
                            title={"New board toevoegen"}
                            description={"Beschrijf de situatie van jouw scene en laat een paneel genereren voor jouw storyboard. "}
                        />
                        <Step
                            number={4}
                            video={"/assets/4-demo.mp4"}
                            title={"Genereren (laadscherm)"}
                            description={"Beschrijf je situatie en druk op de knop 'genereer' om het process te starten."}
                        />
                        <Step
                            number={5}
                            video={"/assets/5-demo.mp4"}
                            title={"Herorder je panelen voor de juiste volgorde"}
                            description={"Start with your own image or audio to bring existing content to life."}
                        />
                        <Step
                            number={6}
                            video={"/assets/6-demo.mp4"}
                            title={"Exporteer je immersive storyboard"}
                            description={"Exporteer je project en deel jouw verhaal met de wereld"}
                        />
                    </section>
            </Container>
            <Container className="mt-16" >
                {/* Video */}
            </Container>
        </section>
    )
}
