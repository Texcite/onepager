import Image from 'next/image'

import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import abstractBackgroundImage from '../images/resources/abstract-background.png'
import discordImage from '../images/resources/discord.svg'
import figmaImage from '../images/resources/figma.svg'
import videoPlayerImage from '../images/resources/video-player.svg'
import AlternateContent from "../components/sections/AlternateContent";
import { CheckIcon } from '../components/CheckIcon.jsx'
import kitten from '../images/resources/ai-video-interactive-storyboard/kitten.gif'
import storyboard from '../images/resources/ai-video-interactive-storyboard/storyboard.png'
import storyboard1 from '../images/resources/ai-video-interactive-storyboard/storyboard-1.gif'
import storyboard2 from '../images/resources/ai-video-interactive-storyboard/storyboard-2.gif'

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
      aria-labelledby="immersive-storyboard-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="3" id="immersive-storyboard-title">
          Immersive Storyboard
        </SectionHeading>
        <div className='overflow-hidden rounded-lg'>
          <Image src={storyboard} alt="" unoptimized height="350" width="auto" />
        </div>
        <p className="concept-subtitle">
          Maak een immersive ervaring van jouw concept of idee!
        </p>
        <p className="mt-4 concept-body-text">
          Om een idee vanuit je hoofd naar iets visuals te maken kan lastig zijn. Daarom gebruiken veel mensen een storyboard om hun idee visueel te maken. Dit is echter niet altijd even makkelijk voor iedereen. Het is dan soms ook lastig om je idee te visualiseren in een storyboard. AI Video Interactive Storyboard (AVIS) is een tool die je kan helpen om jouw scene in een interactieve manier visual te maken. Met behulp van AI wordt jouw scene, aan de hand van een omschrijving van je idee, omgezet tot een video. Dit zorgt voor een visueel beeld van je storyboard meet een interactieve twist.
        </p>
      </Container>
      <Container size="lg" className="mt-16 flex flex-row items-center justify-between">
        <div>
          <h3 className="mt-8 font-display text-5xl font-extrabold tracking-tight text-slate-900 ">Hoe werkt
            het?</h3>
          <ul role="list" className="mt-8 space-y-3">
            {[
              'Beschrijf een scene die jij wilt gebruiken in je storyboard',
              'De AI geeft 4 opties waar je uit kan kiezen',
              'Kies de optie die het beste bij jouw scene past',
            ].map((feature) => (
              <li key={feature} className="flex font-semibold">
                <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
                <span className="ml-4">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Image src={kitten} height={400} width={400} alt="Screenshot" />
      </Container>
      <Container className="mt-16 py-32">
        <p className="font-display concept-subtitle">
          Hoe kan jouw scene eruit komen te zien?
        </p>
        {/* grid 3x2 where first row is mp4 videos and second row text */}
        <div className="mt-8 grid grid-cols-2 gap-8 justify-items-center">
          <div className="col-span-1">
            <Image src={storyboard1} alt="" unoptimized width="200" />
          </div>
          <div className="col-span-1">
            <Image src={storyboard2} alt="" unoptimized width="200" />
          </div>
          <div className="col-span-1">
            <p className="mt-8 concept-body-text">
              A women walking outside into a beautiful sunset, in the style of 3D, octane render, 8k, ray-tracing, blender, hyper-detailed"
            </p>
          </div>
          <div className="col-span-1">
            <p className="mt-8 concept-body-text">
              A women walking on the sidewalk, car passing by her, focus to the car, in the style of 3D, octane render, 8k, ray-tracing, blender, hyper-detailed.
            </p>
          </div>
        </div>

      </Container>
      <Container className="mt-16 py-32">
        <p className="font-display concept-subtitle">
          Technologie
        </p>
        <p className="mt-8 concept-body-text">
          Avis wordt ontwikkeld als een web-applicatie die gebruik maakt van AI die getraind is in het genereren van video's. Hierbij gaan we react gebruiken om de website te bouwen vanwege de snelheid en flexibiliteit.
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            "Dall-E - OpenAI",
            "Kaiber/Neural Frames (onder voorbehoud)",
            "React",
          ].map((feature) => (
            <li key={feature} className="flex font-semibold">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
      </Container>

    </section>
  )
}
