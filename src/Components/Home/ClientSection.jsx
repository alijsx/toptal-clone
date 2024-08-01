import React from 'react';

const clients = [
    {
        id: 'precision-drilling',
        imgSrc: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6204418%2Ffile%2Foptimized%2FPD-final2-f4a102428e8d4303b449d6252cfe86fa.jpg',
        logoSrc: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6204419%2Ffile%2Foptimized%2FPrecision_Drilling_-_White3-bfcfe2d5a689ff1b56aea91ebe834b9a.svg',
        altText: 'Precision Drilling',
    },
    {
        id: 'bridgestone',
        imgSrc: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6204389%2Ffile%2Foptimized%2Fpreview_square-c3ccdd9d53cbfc7af8f5e7eb19b5b395.jpg',
        logoSrc: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6204392%2Ffile%2Foptimized%2Fauthor_logo_white-34ac426bf45a9379a080afd7c37d8377.svg',
        altText: 'Bridgestone',
    },
    {
        id: 'precision-drilling',
        imgSrc: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6204418%2Ffile%2Foptimized%2FPD-final2-f4a102428e8d4303b449d6252cfe86fa.jpg',
        logoSrc: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6204419%2Ffile%2Foptimized%2FPrecision_Drilling_-_White3-bfcfe2d5a689ff1b56aea91ebe834b9a.svg',
        altText: 'Precision Drilling',
    },
    {
        id: 'bridgestone',
        imgSrc: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6204389%2Ffile%2Foptimized%2Fpreview_square-c3ccdd9d53cbfc7af8f5e7eb19b5b395.jpg',
        logoSrc: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6204392%2Ffile%2Foptimized%2Fauthor_logo_white-34ac426bf45a9379a080afd7c37d8377.svg',
        altText: 'Bridgestone',
    },
    {
        id: 'precision-drilling',
        imgSrc: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6204418%2Ffile%2Foptimized%2FPD-final2-f4a102428e8d4303b449d6252cfe86fa.jpg',
        logoSrc: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6204419%2Ffile%2Foptimized%2FPrecision_Drilling_-_White3-bfcfe2d5a689ff1b56aea91ebe834b9a.svg',
        altText: 'Precision Drilling',
    },
    {
        id: 'bridgestone',
        imgSrc: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6204389%2Ffile%2Foptimized%2Fpreview_square-c3ccdd9d53cbfc7af8f5e7eb19b5b395.jpg',
        logoSrc: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6204392%2Ffile%2Foptimized%2Fauthor_logo_white-34ac426bf45a9379a080afd7c37d8377.svg',
        altText: 'Bridgestone',
    },
    // Add more client objects here
];

const ClientSection = () => {
    return (
        <section className="py-20 max-w-[1216px] px-8 xl:px-0 mx-auto">
            <div className="text-center mb-12">
                <h2 className="font-[500] mb-4 p-0 text-[28px] md:text-[44px] xl:text-[52px] leading-[56px] xl:leading-[64px] text-gray-900">
                    Why Organizations Choose Toptal
                </h2>
                <p className="text-gray-600 text-base md:text-lg">
                    Discover the many ways in which our clients have embraced the benefits of the Toptal network.
                </p>
            </div>
            <ul className="grid grid-cols-12 gap-4 mx-6 sm:mx-auto lg:mx-auto xl:mx-auto max-w-full">
                {clients.map(client => (
                    <li key={client.id} className="col-span-12 lg:col-span-4 md:col-span-6 relative group">
                        <div className="relative h-full overflow-hidden shadow-lg transition-shadow duration-300">
                            <img
                                alt=""
                                src={client.imgSrc}
                                className="w-full h-full max-w-[392px] max-h-[348px] object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-[#183a9e]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute inset-0 flex flex-col justify-between p-4">
                                <div className="flex items-start">
                                    <img
                                        alt={client.altText}
                                        src={client.logoSrc}
                                        className="w-44 mt-10 h-auto"
                                    />
                                </div>
                                <div className="flex items-end">
                                    <button
                                        type="button"
                                        className="flex items-center space-x-2  text-white transition-all duration-300"
                                        aria-haspopup="dialog"
                                    >
                                        <img
                                            alt=""
                                            src="https://assets.toptal.io/images?url=https%3A%2F%2Ffrontier-assets.toptal.com%2F78e588b735265f2e.svg"
                                            loading="lazy"
                                            decoding="async"
                                            height="38"
                                            width="38"
                                            className="w-12 h-12 bg-white px-2 py-2 rounded-full"
                                        />
                                        <span>Watch the video</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ClientSection;
