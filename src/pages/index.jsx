import Head from 'next/head'

import {Footer} from '../components/Footer'
import {Introduction} from '../slides/Introduction'
import {NavBar} from '../components/NavBar'
import {TableOfContents} from '../slides/TableOfContents'
import {FancyHero} from "../components/heros/FancyHero";
import {MeetOurTeam} from "../slides/MeetOurTeam";
import { AdviesPitch } from '../sections/AdviesProduct.jsx'
import { OntwikkelingProduct } from '../sections/Ontwikkeling.jsx'
import { Demonstratie } from '../sections/Demonstratie.jsx'
import { Verbeterpunten } from '../sections/Verbeterpunten.jsx'

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


            <AdviesPitch/>
            {/* <OntwikkelingProduct/> */}
            <Demonstratie/>
            <Verbeterpunten />

            <NavBar/>
            <Footer/>
        </>
    )
}
