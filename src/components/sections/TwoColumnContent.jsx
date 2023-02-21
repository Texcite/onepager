const sections = [
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
export default function TwoColumnContent({sections}) {
    return (
        <div className="">
            <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                {/* Details section */}
                <section aria-labelledby="details-heading">
                    <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                        {sections.map(({name, description, imageSrc, imageAlt}, index) => {
                            return (<div key={index}>
                                <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg">
                                    <img
                                        src={imageSrc}
                                        alt={imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <p className="mt-8 text-base text-gray-500">
                                    {description}
                                </p>
                            </div>)
                        })}
                    </div>
                </section>
            </div>
        </div>
    )
}
