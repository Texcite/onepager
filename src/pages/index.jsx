import Head from 'next/head'

import {Author} from '../components/Author'
import {Footer} from '../components/Footer'
import {Introduction} from '../slides/Introduction'
import {NavBar} from '../components/NavBar'
import {PitchConsult} from '../concepts/PitchConsult'
import {ImmersiveStoryBoard} from '../concepts/ImmersiveStoryboard'
import {DigitalSetBuilder} from '../concepts/DigitalSetBuilder'
import {TableOfContents} from '../slides/TableOfContents'
import {FancyHero} from "../components/heros/FancyHero";
import {MeetOurTeam} from "../slides/MeetOurTeam";

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
            <NavBar/>
            {/*<Testimonials />*/}
            {/* <Author/> */}
            <Footer/>
        </>
    )
}
