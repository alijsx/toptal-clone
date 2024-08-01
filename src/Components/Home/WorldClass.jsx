import React from 'react';

const talentData = [
    {
        href: "/developers",
        label: "View Developers",
        img1: "https://assets.toptal.io/images?url=https%3A%2F%2Ffrontier-assets.toptal.com%2F7027c187f96c0773.svg",
        img2: "https://assets.toptal.io/images?url=https%3A%2F%2Ffrontier-assets.toptal.com%2Fc6907c25e6c3c382.svg",
        title: "Developers",
        description: "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies."
    },
    {
        href: "/designers",
        label: "View Designers",
        img1: "https://assets.toptal.io/images?url=https%3A%2F%2Ffrontier-assets.toptal.com%2Fbc0547ba73046902.svg",
        img2: "https://assets.toptal.io/images?url=https%3A%2F%2Ffrontier-assets.toptal.com%2F64eb590f9b2c0970.svg",
        title: "Designers",
        description: "Expert UI, UX, Visual, and Interaction designers as well as a wide range of illustrators, animators, and more."
    },
    {
        href: "/finance",
        label: "View Finance Experts",
        img1: "https://assets.toptal.io/images?url=https%3A%2F%2Ffrontier-assets.toptal.com%2F5fcbbd7dd7e5d2e7.svg",
        img2: "https://assets.toptal.io/images?url=https%3A%2F%2Ffrontier-assets.toptal.com%2Fb796342b80ed3723.svg",
        title: "Finance Experts",
        description: "Experts in financial modeling & valuation, startup funding, interim CFO work, and market sizing."
    },
    {
        href: "/project-managers",
        label: "View Project Managers",
        img1: "https://assets.toptal.io/images?url=https%3A%2F%2Ffrontier-assets.toptal.com%2F1d189a5352fbf3a6.svg",
        img2: "https://assets.toptal.io/images?url=https%3A%2F%2Ffrontier-assets.toptal.com%2F2a9c9ad0bf60d939.svg",
        title: "Project Managers",
        description: "Digital and technical project managers, scrum masters, and more with expertise in numerous PM tools, frameworks, and styles."
    },
    {
        href: "/product-managers",
        label: "View Product Managers",
        img1: "https://assets.toptal.io/images?url=https%3A%2F%2Ffrontier-assets.toptal.com%2Ffe1859a927e8aa7c.svg",
        img2: "https://assets.toptal.io/images?url=https%3A%2F%2Ffrontier-assets.toptal.com%2Fa8b8318c0e7115e9.svg",
        title: "Product Managers",
        description: "Digital product managers, scrum product owners with expertise in numerous industries like banking, healthcare, ecommerce, and more."
    },
    {
        href: "/marketing",
        label: "View Marketing Experts",
        img1: "https://assets.toptal.io/images?url=https%3A%2F%2Ffrontier-assets.toptal.com%2F78d555213768e665.svg",
        img2: "https://assets.toptal.io/images?url=https%3A%2F%2Ffrontier-assets.toptal.com%2Fd6e5c130272cd2d2.svg",
        title: "Marketing Experts",
        description: "Experts in digital marketing, growth marketing, content creation, market research, brand strategy execution, social media marketing, and more."
    }
];

const WorldClass = () => {
    return (
        <div className='mx-auto max-w-[1216px]'>
            <div className="col-span-12 mt-10">
                <header className="flex flex-col gap-1 col-span-12 text-gray-600 bg-white text-center pb-11 items-center px-4">
                    <h2 className="  text-[28px] md:text-[44px] xl:text-[52px] leading-[56px]  xl:leading-[64px]  text-gray-900" data-testid="verticals-title">
                        Leverage World-Class Talent
                    </h2>
                    <p className=" text-[16px] md:text-[20px] leading-[28px] text-[#acacad]" style={{ maxWidth: '600px' }}>
                        We are the largest, globally-distributed network of top business, design, and technology talent, ready to tackle your most important initiatives.
                    </p>
                </header>
                <div className="flex flex-wrap gap-0.25 bg-[#ebecee] ">
                    {talentData.map((talent, index) => (
                        <a
                            key={index}
                            className="flex flex-col border border-[#e1e2e5] p-10 bg-gray-200 group cursor-pointer no-underline text-black outline-none visited:text-black focus:z-10 focus:outline-brand-blue focus-within:text-white focus-within:bg-brand-blue focus-within:transition-bg hover:text-white hover:bg-[#1c4bce] hover:transition-bg flex-1 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/3"
                            href={talent.href}
                            aria-label={talent.label}
                            role="button"
                        >
                            <img alt="" src={talent.img1} loading="lazy" decoding="async" width="64" height="64" className="group-hover:hidden group-focus-within:hidden" />
                            <img alt="" src={talent.img2} loading="lazy" decoding="async" width="64" height="64" className="hidden group-hover:block group-focus-within:block" />
                            <p className="heading-xs font-regular my-5">{talent.title}</p>
                            <p className="leading-[24px] text-[16px] my-4">{talent.description}</p>
                            <p className="flex items-center justify-between mt-auto invisible hover:underline group-hover:visible group-focus-within:visible">
                                {talent.label}
                                <svg viewBox="0 0 12 8" width="12" height="8">
                                    <g stroke="currentColor" fill="none" fillRule="evenodd">
                                        <path d="M0 3.607h11.253M8 .107l3.5 3.5-3.5 3.5"></path>
                                    </g>
                                </svg>
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorldClass;
