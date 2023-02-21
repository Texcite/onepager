import Head from 'next/head'

import {Author} from '../components/Author'
import {Footer} from '../components/Footer'
import {Introduction} from '../components/Introduction'
import {NavBar} from '../components/NavBar'
import {PitchConsult} from '../concepts/PitchConsult'
import {ImmersiveStoryBoard} from '../concepts/ImmersiveStoryboard'
import {DigitalSetBuilder} from '../concepts/DigitalSetBuilder'
import {TableOfContents} from '../components/TableOfContents'
import {FancyHero} from "../components/heros/FancyHero";
import {MeetOurTeam} from "../components/MeetOurTeam";

export default function Home() {
    return (
        <>
            <Head>
                <title>
                    Texcite - Tussentijdse presentatie
                </title>
                <meta
                    name="description"
                    content="Concept presentatie"
                />
            </Head>
            <FancyHero/>
            <MeetOurTeam/>
            <Introduction/>
            <NavBar/>
            <TableOfContents/>
            {/*<Testimonial*/}
            {/*  id="testimonial-from-tommy-stroman"*/}

            {/*>*/}
            {/*  <p>*/}
            {/*    “I didn’t know a thing about icon design until I read this book. Now I*/}
            {/*    can create any icon I need in no time. Great resource!”*/}
            {/*  </p>*/}
            {/*</Testimonial>*/}
            <DigitalSetBuilder/>

            <ImmersiveStoryBoard/>
            {/*<FreeChapters />*/}
            <PitchConsult/>
            {/*<Testimonials />*/}
            <Author/>
            <Footer/>
        </>
    )
}
