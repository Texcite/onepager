import Image from 'next/image'

import {Container} from '../components/Container'
import {SectionHeading} from '../components/SectionHeading'
import duotoneImage from '../images/screencasts/duotone.svg'
import gridsImage from '../images/screencasts/grids.svg'
import setupImage from '../images/screencasts/setup.svg'
import strokesImage from '../images/screencasts/strokes.svg'
import TwoColumnContent from "../components/sections/TwoColumnContent";

const videos = [
    {
        title: 'Getting started with Figma',
        description:
            'Get familiar with the Figma UI, the different tools it offers, and the most important features.',
        image: setupImage,
        runtime: {minutes: 16, seconds: 54},
    },
    {
        title: 'Setting up your artboard',
        description:
            'Learn how to create a new artboard and configure your grid and rulers for designing icons.',
        image: gridsImage,
        runtime: {minutes: 9, seconds: 12},
    },
    {
        title: 'Designing your first icon',
        description:
            'Using basic shapes and boolean operations, learn how to design your own notification icon from scratch.',
        image: strokesImage,
        runtime: {minutes: 23, seconds: 25},
    },
    {
        title: 'Advanced design techniques',
        description:
            'Learn the techniques you need to know to adapt your original icon to a modern duotone style.',
        image: duotoneImage,
        runtime: {minutes: 28, seconds: 44},
    },
]

function PlayIcon(props) {
    return (
        <svg
            aria-hidden="true"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 16 16"
            {...props}
        >
            <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z"/>
            <circle cx="8" cy="8" r="6.25" fill="none"/>
        </svg>
    )
}

export function DigitalSetBuilder() {
    return (
        <section
            id="digital-set-builder"
            aria-labelledby="digital-set-builder-title"
            className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
        >
            <Container>
                <SectionHeading number="2" id="digital-set-builder-title">
                    Digital set builder
                </SectionHeading>
                <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                    Een web-applicatie waarbij je een omgeving kan creëren om je idee visueel te representeren.
                </p>
                <p className="mt-4 text-lg tracking-tight text-slate-700">
                    Learn how to design your very first icons in a series of screencasts
                    that will teach you everything you need to know to go from beginner to
                    pro in just over an hour.
                </p>
            </Container>
            <Container size="lg" className="mt-16">
                <TwoColumnContent sections={[
                    {
                        name: 'Minimal and thoughtful',
                        description:
                            'Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.',
                        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-01.jpg',
                        imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
                    },
                    {
                        name: 'Refined details',
                        description:
                            'We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.',
                        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-07-detail-02.jpg',
                        imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
                    },
                ]}/>
            </Container>
        </section>
    )
}
