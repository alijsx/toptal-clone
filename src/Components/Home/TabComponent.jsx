import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Card from './Card';

const tabs = ['Developers', 'Designers', 'Finance Experts', 'Project Managers', 'Product Managers', 'Markiting Experts'];
const cardData = {
    'Developers': [
        { name: 'Vladimir Mitrovic', image: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052766%2Ffile%2Foptimized%2Fhero_section_big-7b3f7827f4d67d143832d0eb5136e48a.jpg&width=1024', expertise: 'Engineering', role: 'C# Developer', previousCompany: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052767%2Ffile%2Foptimized%2FApple__262d3d-c217f1acf363078d1e1015c4ae306daf.svg' },
        { name: 'Vladimir Mitrovic', image: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052766%2Ffile%2Foptimized%2Fhero_section_big-7b3f7827f4d67d143832d0eb5136e48a.jpg&width=1024', expertise: 'Engineering', role: 'C# Developer', previousCompany: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052767%2Ffile%2Foptimized%2FApple__262d3d-c217f1acf363078d1e1015c4ae306daf.svg' },
        { name: 'Vladimir Mitrovic', image: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052766%2Ffile%2Foptimized%2Fhero_section_big-7b3f7827f4d67d143832d0eb5136e48a.jpg&width=1024', expertise: 'Engineering', role: 'C# Developer', previousCompany: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052767%2Ffile%2Foptimized%2FApple__262d3d-c217f1acf363078d1e1015c4ae306daf.svg' },

    ],
    'Designers': [
        { name: 'Vladimir Mitrovic', image: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052766%2Ffile%2Foptimized%2Fhero_section_big-7b3f7827f4d67d143832d0eb5136e48a.jpg&width=1024', expertise: 'Engineering', role: 'C# Developer', previousCompany: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052767%2Ffile%2Foptimized%2FApple__262d3d-c217f1acf363078d1e1015c4ae306daf.svg' },
        { name: 'Vladimir Mitrovic', image: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052766%2Ffile%2Foptimized%2Fhero_section_big-7b3f7827f4d67d143832d0eb5136e48a.jpg&width=1024', expertise: 'Engineering', role: 'C# Developer', previousCompany: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052767%2Ffile%2Foptimized%2FApple__262d3d-c217f1acf363078d1e1015c4ae306daf.svg' },
        { name: 'Vladimir Mitrovic', image: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052766%2Ffile%2Foptimized%2Fhero_section_big-7b3f7827f4d67d143832d0eb5136e48a.jpg&width=1024', expertise: 'Engineering', role: 'C# Developer', previousCompany: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052767%2Ffile%2Foptimized%2FApple__262d3d-c217f1acf363078d1e1015c4ae306daf.svg' },

        // Add more card data here
    ],
    'Finance Experts': [
        { name: 'Vladimir Mitrovic', image: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052766%2Ffile%2Foptimized%2Fhero_section_big-7b3f7827f4d67d143832d0eb5136e48a.jpg&width=1024', expertise: 'Engineering', role: 'C# Developer', previousCompany: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052767%2Ffile%2Foptimized%2FApple__262d3d-c217f1acf363078d1e1015c4ae306daf.svg' },
        { name: 'Vladimir Mitrovic', image: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052766%2Ffile%2Foptimized%2Fhero_section_big-7b3f7827f4d67d143832d0eb5136e48a.jpg&width=1024', expertise: 'Engineering', role: 'C# Developer', previousCompany: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052767%2Ffile%2Foptimized%2FApple__262d3d-c217f1acf363078d1e1015c4ae306daf.svg' },
        { name: 'Vladimir Mitrovic', image: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052766%2Ffile%2Foptimized%2Fhero_section_big-7b3f7827f4d67d143832d0eb5136e48a.jpg&width=1024', expertise: 'Engineering', role: 'C# Developer', previousCompany: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052767%2Ffile%2Foptimized%2FApple__262d3d-c217f1acf363078d1e1015c4ae306daf.svg' },

    ],
    'Project Managers': [
        { name: 'Vladimir Mitrovic', image: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052766%2Ffile%2Foptimized%2Fhero_section_big-7b3f7827f4d67d143832d0eb5136e48a.jpg&width=1024', expertise: 'Engineering', role: 'C# Developer', previousCompany: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052767%2Ffile%2Foptimized%2FApple__262d3d-c217f1acf363078d1e1015c4ae306daf.svg' },
        { name: 'Vladimir Mitrovic', image: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052766%2Ffile%2Foptimized%2Fhero_section_big-7b3f7827f4d67d143832d0eb5136e48a.jpg&width=1024', expertise: 'Engineering', role: 'C# Developer', previousCompany: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052767%2Ffile%2Foptimized%2FApple__262d3d-c217f1acf363078d1e1015c4ae306daf.svg' },
        { name: 'Vladimir Mitrovic', image: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052766%2Ffile%2Foptimized%2Fhero_section_big-7b3f7827f4d67d143832d0eb5136e48a.jpg&width=1024', expertise: 'Engineering', role: 'C# Developer', previousCompany: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052767%2Ffile%2Foptimized%2FApple__262d3d-c217f1acf363078d1e1015c4ae306daf.svg' },

    ],
    'Product Managers': [
        { name: 'Vladimir Mitrovic', image: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052766%2Ffile%2Foptimized%2Fhero_section_big-7b3f7827f4d67d143832d0eb5136e48a.jpg&width=1024', expertise: 'Engineering', role: 'C# Developer', previousCompany: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052767%2Ffile%2Foptimized%2FApple__262d3d-c217f1acf363078d1e1015c4ae306daf.svg' },
        { name: 'Vladimir Mitrovic', image: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052766%2Ffile%2Foptimized%2Fhero_section_big-7b3f7827f4d67d143832d0eb5136e48a.jpg&width=1024', expertise: 'Engineering', role: 'C# Developer', previousCompany: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052767%2Ffile%2Foptimized%2FApple__262d3d-c217f1acf363078d1e1015c4ae306daf.svg' },
        { name: 'Vladimir Mitrovic', image: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052766%2Ffile%2Foptimized%2Fhero_section_big-7b3f7827f4d67d143832d0eb5136e48a.jpg&width=1024', expertise: 'Engineering', role: 'C# Developer', previousCompany: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052767%2Ffile%2Foptimized%2FApple__262d3d-c217f1acf363078d1e1015c4ae306daf.svg' },

    ],
    'Markiting Experts': [
        { name: 'Vladimir Mitrovic', image: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052766%2Ffile%2Foptimized%2Fhero_section_big-7b3f7827f4d67d143832d0eb5136e48a.jpg&width=1024', expertise: 'Engineering', role: 'C# Developer', previousCompany: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052767%2Ffile%2Foptimized%2FApple__262d3d-c217f1acf363078d1e1015c4ae306daf.svg' },
        { name: 'Vladimir Mitrovic', image: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052766%2Ffile%2Foptimized%2Fhero_section_big-7b3f7827f4d67d143832d0eb5136e48a.jpg&width=1024', expertise: 'Engineering', role: 'C# Developer', previousCompany: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052767%2Ffile%2Foptimized%2FApple__262d3d-c217f1acf363078d1e1015c4ae306daf.svg' },
        { name: 'Vladimir Mitrovic', image: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052766%2Ffile%2Foptimized%2Fhero_section_big-7b3f7827f4d67d143832d0eb5136e48a.jpg&width=1024', expertise: 'Engineering', role: 'C# Developer', previousCompany: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052767%2Ffile%2Foptimized%2FApple__262d3d-c217f1acf363078d1e1015c4ae306daf.svg' },

    ],
    // Add data for other tabs
};

const CustomArrow = ({ className, onClick, icon }) => (
    <div className={className} onClick={onClick}>
        {icon}
    </div>
);

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const handleTabChange = (e) => {
        setActiveTab(e.target.value);
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        arrow: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomArrow className="slick-next" icon={<FaChevronRight />} />,
        prevArrow: <CustomArrow className="slick-prev" icon={<FaChevronLeft />} />,
    };

    return (
        <div className=" max-w-[1216px] px-8 xl:px-0 mx-auto">
            <div className="text-center mb-12">
                <h2 className="font-[500] mb-4 p-0 text-[28px] md:text-[44px] xl:text-[52px] leading-[56px] xl:leading-[64px] text-black">Meet Talent in Our Network</h2>
            </div>
            <div className="hidden lg:flex justify-around mb-4 border-t border-b py-2">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`px-4 py-2 text-[14px] w-[180px] ${activeTab === tab ? ' bg-[#183a9e] rounded-sm text-white' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Select input for small screens */}
            <div className="lg:hidden mb-4">
                <select value={activeTab} onChange={handleTabChange} className="w-full p-2 border">
                    {tabs.map((tab) => (
                        <option key={tab} value={tab}>
                            {tab}
                        </option>
                    ))}
                </select>
            </div>

            {/* Card slider for small screens */}
            <div className="md:hidden mb-4">
                <Slider {...sliderSettings}>
                    {cardData[activeTab].map((card, index) => (
                        <Card key={index} card={card} />
                    ))}
                </Slider>


                <div className="w-full mt-10 h-full px-4 py-8 xl:px-12 shadow-xl rounded-md relative overflow-hidden bg-gradient-to-r from-[rgb(28,59,130)] to-[#274c9c] ">
                    <img
                        alt=""
                        src="https://assets.toptal.io/images?url=https%3A%2F%2Ffrontier-assets.toptal.com%2Fb6a1d7a9f60dcaf9.svg"
                        loading="lazy"
                        decoding="async"
                        className="absolute  "
                        style={{ width: '693px', height: '946px', top: '-65px', left: '-221px' }}
                    />
                    <div className="isolate w-full flex flex-col h-full items-center justify-center">
                        <img
                            alt="Toptal emblem"
                            src="https://assets.toptal.io/images?url=https%3A%2F%2Ffrontier-assets.toptal.com%2F03c9c7e7213662dd.svg"
                            loading="lazy"
                            decoding="async"
                            width="36"
                            height="48"
                            className="mb-4 lg:mb-6 text-white"
                        />
                        <div className="mb-6 w-full text-center text-white  md:flex-row lg:gap-2 justify-center items-center md:items-baseline">
                            <div className="font-bold text-lg">Discover 20,000+ <br />  More Talent</div>
                            <p className="text-base md:indent-1 mt-1">in the Toptal Network</p>
                        </div>
                        <a
                            className="text-white bg-[#00cc83] hover:bg-[#00cc83] whitespace-nowrap text-[14px] active:bg-green-800 font-semibold py-3 px-6 rounded-sm"
                            href="/hire?interested_in=developers"

                        >
                            Discover Toptal Talent
                        </a>
                    </div>
                </div>


            </div>

            <div className='grid grid-cols-12'>

                <div className='  col-span-12 lg:col-span-9'>
                    <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
                        {cardData[activeTab].map((card, index) => (
                            <Card key={index} card={card} />

                        ))}



                    </div>
                </div>
                <div className='col-span-3 hidden lg:block'>
                    <div className="w-[267px] h-full px-4 py-8 xl:px-12 shadow-xl rounded-md relative overflow-hidden bg-gradient-to-r from-[rgb(28,59,130)] to-[#274c9c] ">
                        <img
                            alt=""
                            src="https://assets.toptal.io/images?url=https%3A%2F%2Ffrontier-assets.toptal.com%2Fb6a1d7a9f60dcaf9.svg"
                            loading="lazy"
                            decoding="async"
                            className="absolute  "
                            style={{ width: '693px', height: '946px', top: '-65px', left: '-221px' }}
                        />
                        <div className="isolate w-full flex flex-col h-full items-center justify-center">
                            <img
                                alt="Toptal emblem"
                                src="https://assets.toptal.io/images?url=https%3A%2F%2Ffrontier-assets.toptal.com%2F03c9c7e7213662dd.svg"
                                loading="lazy"
                                decoding="async"
                                width="36"
                                height="48"
                                className="mb-4 lg:mb-6 text-white"
                            />
                            <div className="mb-6 w-full text-center text-white  md:flex-row lg:gap-2 justify-center items-center md:items-baseline">
                                <div className="font-bold text-lg">Discover 20,000+ <br />  More Talent</div>
                                <p className="text-base md:indent-1 mt-1">in the Toptal Network</p>
                            </div>
                            <a
                                className="text-white bg-[#00cc83] hover:bg-[#00cc83] whitespace-nowrap text-[14px] active:bg-green-800 font-semibold py-3 px-6 rounded-sm"
                                href="/hire?interested_in=developers"

                            >
                                Discover Toptal Talent
                            </a>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default TabComponent;
