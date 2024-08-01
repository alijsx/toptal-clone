import React from 'react';

// Sample data for the cards
const cardData = [
    {
        id: 1,
        href: '/insights/agile-talent/-the-opportunity-loop-an-inside-look-at-how-to-attract-and-retain-top-talent',
        title: 'The Opportunity Loop: An Inside Look at How to Attract and Retain Top Talent',
        description: 'Toptal Partnership',
        imageSrc: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fpartnership_section%2Fpartnership%2F6106554%2Fcover_image%2Foptimized%2F0511AttractingTopTalent-Cover-waldek_1280X600-9991ef7eb31bfab455c3825916f83f2a.png&amp;width=768',
        logoSrc: [
            'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fcompany_logo%2F6106553%2Fcolored_image%2Foptimized%2Ftoptal-logo_2-da942d73b8273ce1d1c97d51176ed37e.svg',
            'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fcompany_logo%2F6077220%2Fdark_image%2Foptimized%2Fmotorola_dark-5b95dfa9bf850cf13401546313247436.svg'
        ]
    },
    {
        id: 2,
        href: '/insights/agile-talent/how-salesforce-manages-the-blended-workforce',
        title: 'Industry Perspective: Salesforce On Team Alignment And Agile Talent',
        description: 'Toptal Partnership',
        imageSrc: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fpartnership_section%2Fpartnership%2F6106555%2Fcover_image%2Foptimized%2FOption3_copy-5bcdad9a62a6a9e3703b7de8eba05883.png&amp;width=768',
        logoSrc: [
            'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fcompany_logo%2F6106553%2Fcolored_image%2Foptimized%2Ftoptal-logo_2-da942d73b8273ce1d1c97d51176ed37e.svg',
            'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fcompany_logo%2F6106552%2Fdark_image%2Foptimized%2FSalesforce-441402ae4dbbcce939a944c6f7c11b70.svg'
        ]
    },
    {
        id: 3,
        href: '/insights/future-of-work/call-to-action-on-demand-business-model',
        title: 'Call to Action: the On-Demand Business Model',
        description: 'Toptal Partnership',
        imageSrc: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fpartnership_section%2Fpartnership%2F6106556%2Fcover_image%2Foptimized%2F0926-ImperativeOnDemandModel-waldek_1280X600-e1dfde5cf2230e39c24e1dc76aed8f29.png&amp;width=768',
        logoSrc: [
            'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fcompany_logo%2F6106553%2Fcolored_image%2Foptimized%2Ftoptal-logo_2-da942d73b8273ce1d1c97d51176ed37e.svg',
            'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fcompany_logo%2F5923264%2Fdark_image%2Foptimized%2Fmicrosoft-5bbbf48ab6fa4e06ae80784b550a6b8c.svg'
        ]
    }
];

const PartnershipSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className='max-w-[1216px] px-8 xl:px-0 mx-auto'>
                <div className="grid grid-cols-12  gap-4 ">
                    <div className="col-span-12 text-center mb-12 ">
                        <h2 className="font-[500] mb-4 p-0 text-[28px] md:text-[44px] xl:text-[52px] leading-[56px] xl:leading-[64px] text-black">Collaborations With Leading Brands</h2>
                        <p className="text-gray-600 mt-2">We collaborate with a number of top-tier companies on imagining the future of work. Have a look.</p>
                    </div>
                    {cardData.map(({ id, href, title, description, imageSrc, logoSrc }) => (
                        <a key={id} href={href} aria-label={title} className="relative group shadow-sm rounded-md  col-span-12 lg:col-span-4  flex flex-col md:flex-row lg:flex-col hover:bg-gray-100 transition duration-200">
                            <div className="relative flex overflow-hidden">
                                <img src={imageSrc} alt="" className="w-full min-h-52 object-cover md:h-full lg:h-61" />
                                <div className="absolute inset-0 flex items-center justify-center text-white bg-blue-600 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    <span className="font-semibold">Read more</span>
                                </div>
                            </div>
                            <div className="flex flex-col p-6">
                                <p className="text-blue-600 font-semibold mb-1">{description}</p>
                                <h3 className="text-gray-800 font-bold">{title}</h3>
                                <hr className="my-6 border-gray-300" />
                                <div className="flex flex-wrap gap-3 items-center">
                                    {logoSrc.map((src, index) => (
                                        <img key={index} src={src} alt="" className="h-6 xl:h-8 object-contain" />
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}


                    <div className='col-span-12'>
                        <div className="flex flex-col md:flex-row justify-center items-center mt-8 mx-4 gap-4" data-testid="hire-cta">
                            <p className="text-lg font-semibold text-center">
                                Ready to get started?
                            </p>
                            <a
                                href="/hire"
                                className="text-white bg-[#00cc83] hover:bg-[#00cc83] text-[14px] active:bg-green-800 font-semibold py-3 px-6 rounded-sm"
                            >
                                Hire Top Talent
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnershipSection;
