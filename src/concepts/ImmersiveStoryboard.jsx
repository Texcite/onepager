import Image from 'next/image'

import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import abstractBackgroundImage from '../images/resources/abstract-background.png'
import discordImage from '../images/resources/discord.svg'
import figmaImage from '../images/resources/figma.svg'
import videoPlayerImage from '../images/resources/video-player.svg'
import AlternateContent from "../components/sections/AlternateContent";

const immersiveStoryboard = [
  {
    title: 'Figma icon templates',
    description:
      'Pefectly structured templates for quickly designing new icons at dozens of common sizes.',
    image: function FigmaImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
          <Image src={figmaImage} alt="" unoptimized />
        </div>
      )
    },
  },
  {
    title: 'Weekly icon teardowns',
    description:
      'Weekly videos where we dissect and recreate beautiful icons we find on the web.',
    image: function VideoPlayerImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={abstractBackgroundImage}
            alt=""
            sizes="(min-width: 1280px) 21rem, (min-width: 1024px) 33vw, (min-width: 768px) 19rem, (min-width: 640px) 50vw, 100vw"
          />
          <Image
            className="relative"
            src={videoPlayerImage}
            alt=""
            unoptimized
          />
        </div>
      )
    },
  },
  {
    title: 'Community of icon designers',
    description:
      "A private Discord server where you can get help and give feedback on each others' work.",
    image: function DiscordImage() {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6366F1]">
          <Image src={discordImage} alt="" unoptimized />
        </div>
      )
    },
  },
]

export function ImmersiveStoryBoard() {
  return (
    <section
      id="immersive-storyboard"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="resources-title">
          Immersive Storyboard
        </SectionHeading>
        <p className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Maak een immersive ervaring van jouw concept of idee!
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
          Design assets, icon teardowns, and a community of fellow icon
          designers where you can ask questions, get feedback, and accelerate
          your learning.
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <AlternateContent features={[
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
