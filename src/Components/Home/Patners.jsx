import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const partnersData = [
    { text: 'Watch the study case', imageUrl: '/156.svg' },
    { text: '', imageUrl: '/156.svg' },
    { text: '', imageUrl: '/157.svg' },
    { text: '', imageUrl: '/156.svg' },
    { text: 'Watch the study case', imageUrl: '/157.svg' },
    { text: '', imageUrl: '/156.svg' },
    { text: '', imageUrl: '/157.svg' },
    { text: 'Watch the study case', imageUrl: '/156.svg' },
    { text: '', imageUrl: '/157.svg' },
    { text: '', imageUrl: '/156.svg' },
    { text: '', imageUrl: '/157.svg' },
    { text: 'Watch the study case', imageUrl: '/156.svg' },
];



function Partners() {
    const [visibleIndex, setVisibleIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [imagesToShow, setImagesToShow] = useState(6); // Default to 6 images

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setImagesToShow(2); // SM screens
            } else if (window.innerWidth < 768) {
                setImagesToShow(3); // MD screens
            } else if (window.innerWidth < 1024) {
                setImagesToShow(5); // LG screens
            } else {
                setImagesToShow(6); // XL screens
            }
        };

        // Set initial images to show
        handleResize();

        window.addEventListener('resize', handleResize);
        const interval = setInterval(() => {
            nextSet();
        }, 3000); // Change every 3 seconds

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const nextSet = () => {
        setVisibleIndex((prevIndex) => (prevIndex + imagesToShow) % partnersData.length);
    };

    const visiblePartners = partnersData.slice(visibleIndex, visibleIndex + imagesToShow);

    return (
        <div className='bg-[#d2d6e2]  lg:bg-[#f7f8fc]'>
            <div className="mx-auto max-w-[1216px] px-8 xl:px-0">
                <div className="flex flex-col items-center xl:flex-row xl:items-start">
                    <div className="w-full xl:w-1/2 xl:max-w-[220px] mt-6 ">
                        <h3 className='text-[14px] text-[#939396] tracking-wider leading-[20px] uppercase text-center xl:text-left'>
                            Trusted by leading brands and startups
                        </h3>
                    </div>
                    <div className="w-full xl:w-3/4 xl:pl-8">
                        <div className="relative">
                            <TransitionGroup className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 ${imagesToShow === 2 ? 'sm:grid-cols-2' : imagesToShow === 3 ? 'md:grid-cols-3' : imagesToShow === 5 ? 'lg:grid-cols-5' : 'xl:grid-cols-6'}`}>
                                {visiblePartners.map((partner, index) => (
                                    <CSSTransition key={index} timeout={500} classNames="fade">
                                        <div
                                            className={`flex flex-col items-center py-4  ${partner.text && hoveredIndex === index ? 'bg-gray-200  ' : ''}`}
                                            onMouseEnter={() => partner.text && setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                        >
                                            <img
                                                src={partner.imageUrl}
                                                alt={partner.text}
                                                className={`w-24 h-12 ${hoveredIndex !== null && hoveredIndex !== index ? 'grayscale' : ''}`}
                                            />
                                            {partner.text && (
                                                <p className="text-center text-[8px] text-[#1c4bce]  uppercase">
                                                    {hoveredIndex === index ? (
                                                        <>
                                                            <div className='flex items-center'>
                                                                <span className="mr-1">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-2 inline-block">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                                                                    </svg>
                                                                </span>
                                                                <div>
                                                                    {partner.text}
                                                                </div>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        partner.text
                                                    )}
                                                </p>
                                            )}
                                        </div>
                                    </CSSTransition>
                                ))}
                            </TransitionGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Partners;
