/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import {classNames} from "../../utils/classNames";

const features = [
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
]

export default function AlternateContent({features}) {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                <div className=" space-y-16">
                    {features.map((feature, featureIdx) => (
                        <div
                            key={feature.name}
                            className={classNames(
                                "flex  lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8",
                                feature.reverse ? "flex-col-reverse" : "flex-col"
                            )}
                        >
                            <div
                                className={classNames(
                                    featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                                    'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
                                )}
                            >
                                <h3 className="mt-8 font-display text-5xl font-extrabold  text-slate-900 ">{feature.name}</h3>

                                <p className="mt-4 concept-body-text">{feature.description}</p>
                            </div>
                            <div
                                className={classNames(
                                    featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                                    'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8'
                                )}
                            >
                                <div className="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg  flex justify-center items-center w-full">
                                    <img src={feature.imageSrc} height={feature.maxHeight ? feature.maxHeight : 800} width={feature.maxWidth ? feature.maxWidth : 800} alt={feature.imageAlt} className="object-cover object-center" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
