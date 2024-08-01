import React, { useState } from "react";
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
    {
        title: "Web Development",
        categories: [
            "Web Designers",
            "UI/UX Designers",
            "Web Developers",
            "Angular Developers",
            "JavaScript Developers",
            "CSS Developers",
            "Web Scraping Developers",
            "PHP Developers",
            "Backbone.js Developers",
            "Vue.js Developers",
            "Laravel Developers",
            "RxJS Developers",
            "Meteor Developers",
            "CodeIgniter Developers",
            "CakePHP Developers",
            "MEAN Stack Developers",
            "Node.js Developers",
            "Ruby on Rails Developers",
            "API Developers",
            "TypeScript Developers",
            "Django Developers",
            "Yii Developers",
            "ASP.NET Developers"
        ]
    },
    {
        title: "DevOps & Cloud Computing",
        categories: [
            "DevOps Engineers",
            "Data Engineers",
            "Database Developers",
            "AWS Developers",
            "Distributed Systems Engineers",
            "Docker Developers",
            "Kubernetes Developers",
            "Azure Developers"

        ]
    },
    {
        title: "UX/UI Designers",
        categories: [
            "UI Designers",
            "UX Designers",
            "Web Designers",
            "Mobile UI Designers",
            "Product Designers",
            "Digital Product Designers",
            "Illustrators",
            "Creative Directors",
            "Freelance Designers",
            "Augmented Reality Designers",
            "Sketch Experts",
            "Fintech Designers",
            "UX Researchers"

        ]
    }, {
        title: "Programming Languages",
        categories: [
            "C++ Developers",
            "Python Developers",
            "JavaScript Developers",
            "Ruby Developers",
            "PHP Developers",
            "C# Developers",
            "Java Developers",
            "Rust Developers",
            "Erlang Developers",
            "Clojure Developers",
            "Haskell Developers",
            "Dart Developers",
            "VB.NET Developers",
            "Swift Developers",
            "Golang Developers",
            "Visual Basic Developers",
            "Elixir Developers"

        ]
    },
    {
        title: "Software Development Roles & Collaboration Models",
        categories: [
            "Front-end Developers",
            "Software Developers",
            "Back-end Developers",
            "Product Consultants",
            "Full-stack Developers",
            "Technical Writers",
            "Software Architects",
            "Coders",
            "Remote Developers",
            "Startup Developers",
            "Prototype Developers",
            "Outsourced Developers",
            "Offshore Developers"

        ]
    },
    {
        title: "Quality Assurance & Testing",
        categories: [
            "QA Testers",
            "Manual Testers",
            "QA Leads",
            "Selenium Developers",
            "Test Automation Engineers",
            "Jenkins Developers",
            "Appium Developers",
            "Cucumber Developers"

        ]
    },
    {
        title: "API Development & Integration",
        categories: [
            "LinkedIn API Developers",
            "Facebook API Developers",
            "API Development Specialists",
            "Shopify API Developers",
            "Stripe Developers"

        ]
    },
    {
        title: "Blockchain Development",
        categories: [
            "Ethereum Developers",
            "Smart Contract Developers",
            "Blockchain Developers",
            "Ethereum Smart Contract Developers",
            "Hyperledger Developers",
            "Cryptocurrency Developers",
            "Solidity Developers",
            "Distributed Systems Engineers"

        ]
    },
    {
        title: "Desktop Development",
        categories: [
            "PyQt Developers",
            "DevExpress Developers",
            "Qt Developers",
            ".NET Core Developers",
            ".NET Developers"

        ]
    },
    {
        title: "AR/VR & Game Development",
        categories: [
            "Game Developers",
            "Augmented Reality Designers",
            "3D Animators",
            "Virtual Reality Developers",
            "Augmented Reality Developers",
            "Mobile Game Designers",
            "Computer Vision Developers",
            "iOS Developers",
            "Android App Developers",
            "2D Animators",
            "Digital Artists",
            "Unity or Unity3D Developers",
            "Three.js Developers",
            "Unreal Engine Developers",
            "C++ Developers"

        ]
    },
    {
        title: "Web Development",
        categories: [
            "Web Designers",
            "UI/UX Designers",
            "Web Developers",
            "Angular Developers",
            "JavaScript Developers",
            "CSS Developers",
            "Web Scraping Developers",
            "PHP Developers",
            "Backbone.js Developers",
            "Vue.js Developers",
            "Laravel Developers",
            "RxJS Developers",
            "Meteor Developers",
            "CodeIgniter Developers",
            "CakePHP Developers",
            "MEAN Stack Developers",
            "Node.js Developers",
            "Ruby on Rails Developers",
            "API Developers",
            "TypeScript Developers",
            "Django Developers",
            "Yii Developers",
            "ASP.NET Developers"
        ]
    },
    {
        title: "DevOps & Cloud Computing",
        categories: [
            "DevOps Engineers",
            "Data Engineers",
            "Database Developers",
            "AWS Developers",
            "Distributed Systems Engineers",
            "Docker Developers",
            "Kubernetes Developers",
            "Azure Developers"

        ]
    },
    {
        title: "UX/UI Designers",
        categories: [
            "UI Designers",
            "UX Designers",
            "Web Designers",
            "Mobile UI Designers",
            "Product Designers",
            "Digital Product Designers",
            "Illustrators",
            "Creative Directors",
            "Freelance Designers",
            "Augmented Reality Designers",
            "Sketch Experts",
            "Fintech Designers",
            "UX Researchers"

        ]
    }, {
        title: "Programming Languages",
        categories: [
            "C++ Developers",
            "Python Developers",
            "JavaScript Developers",
            "Ruby Developers",
            "PHP Developers",
            "C# Developers",
            "Java Developers",
            "Rust Developers",
            "Erlang Developers",
            "Clojure Developers",
            "Haskell Developers",
            "Dart Developers",
            "VB.NET Developers",
            "Swift Developers",
            "Golang Developers",
            "Visual Basic Developers",
            "Elixir Developers"

        ]
    },
    {
        title: "Software Development Roles & Collaboration Models",
        categories: [
            "Front-end Developers",
            "Software Developers",
            "Back-end Developers",
            "Product Consultants",
            "Full-stack Developers",
            "Technical Writers",
            "Software Architects",
            "Coders",
            "Remote Developers",
            "Startup Developers",
            "Prototype Developers",
            "Outsourced Developers",
            "Offshore Developers"

        ]
    },
    {
        title: "Quality Assurance & Testing",
        categories: [
            "QA Testers",
            "Manual Testers",
            "QA Leads",
            "Selenium Developers",
            "Test Automation Engineers",
            "Jenkins Developers",
            "Appium Developers",
            "Cucumber Developers"

        ]
    },
    {
        title: "API Development & Integration",
        categories: [
            "LinkedIn API Developers",
            "Facebook API Developers",
            "API Development Specialists",
            "Shopify API Developers",
            "Stripe Developers"

        ]
    },
    {
        title: "Blockchain Development",
        categories: [
            "Ethereum Developers",
            "Smart Contract Developers",
            "Blockchain Developers",
            "Ethereum Smart Contract Developers",
            "Hyperledger Developers",
            "Cryptocurrency Developers",
            "Solidity Developers",
            "Distributed Systems Engineers"

        ]
    },
    {
        title: "Desktop Development",
        categories: [
            "PyQt Developers",
            "DevExpress Developers",
            "Qt Developers",
            ".NET Core Developers",
            ".NET Developers"

        ]
    },
    {
        title: "AR/VR & Game Development",
        categories: [
            "Game Developers",
            "Augmented Reality Designers",
            "3D Animators",
            "Virtual Reality Developers",
            "Augmented Reality Developers",
            "Mobile Game Designers",
            "Computer Vision Developers",
            "iOS Developers",
            "Android App Developers",
            "2D Animators",
            "Digital Artists",
            "Unity or Unity3D Developers",
            "Three.js Developers",
            "Unreal Engine Developers",
            "C++ Developers"

        ]
    },

];

function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const halfLength = Math.ceil(faqData.length / 2);
    const firstHalf = faqData.slice(0, halfLength);
    const secondHalf = faqData.slice(halfLength);

    return (
        <div className="mt-10">
            <div className="text-gray-600 bg-transparent items-center mb-6">
                <div className="flex justify-center">
                    <h2 className="mx-auto font-[500] mb-4 p-0 text-[28px] md:text-[44px] xl:text-[52px] leading-[56px] xl:leading-[64px] text-gray-900">
                        Discover Our Expert Skillsets
                    </h2>
                </div>

                <div className="max-w-[1216px] px-8 xl:px-0 mx-auto">
                    <div className="grid grid-cols-12 gap-4 bg-white shadow-md p-4">
                        <div className="col-span-12 lg:col-span-6">
                            {firstHalf.map((faq, index) => (
                                <div key={index} className="pb-2">
                                    <div className="border-b group" data-state={openIndex === index ? "open" : "closed"}>
                                        <h3
                                            className="p-0 text-[16px] rounded-sm text-black group focus-visible:ring-4 bg-transparent border-none cursor-pointer outline-none text-left paragraph-md font-medium mb-4 gap-0 flex justify-between items-center hover:text-[#0f256e]"
                                            tabIndex="0"
                                            data-state={openIndex === index ? "open" : "closed"}
                                            aria-expanded={openIndex === index}
                                            onClick={() => handleToggle(index)}
                                        >
                                            {faq.title}
                                            {openIndex === index ? <FaMinus  className="w-5  h-5 ml-2" /> : <FaPlus className="w-5 h-5 ml-2" />}
                                        </h3>
                                        <div
                                            data-state="open"
                                            className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
                                        >
                                            <div className="pb-4 pl-6 paragraph-sm text-gray-700">
                                                <div className="grid grid-cols-1 gap-0 lg:gap-2 md:grid-cols-2 md:gap-2">
                                                    {faq.categories.map((category, categoryIndex) => (
                                                        <div
                                                            key={categoryIndex}
                                                            className="text-[14px] block py-0.5 pl-1 -ml-1"
                                                        >
                                                            {category}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            {secondHalf.map((faq, index) => (
                                <div key={index + halfLength} className="pb-2">
                                    <div className="border-b group" data-state={openIndex === index + halfLength ? "open" : "closed"}>
                                        <h3
                                            className="p-0 text-[16px] rounded-sm text-black group focus-visible:ring-4 bg-transparent border-none cursor-pointer font- outline-none text-left paragraph-md  mb-4 gap-0 flex justify-between items-center hover:text-[#0f256e]"
                                            tabIndex="0"
                                            data-state={openIndex === index + halfLength ? "open" : "closed"}
                                            aria-expanded={openIndex === index + halfLength}
                                            onClick={() => handleToggle(index + halfLength)}
                                        >
                                            {faq.title}
                                            {openIndex === index + halfLength ? <FaMinus className="w-5 h-5 ml-2" /> : <FaPlus className="w-5 h-5 ml-2" />}
                                        </h3>
                                        <div
                                            data-state="open"
                                            className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openIndex === index + halfLength ? 'max-h-96' : 'max-h-0'}`}
                                        >
                                            <div className="pb-4 pl-6 paragraph-sm text-gray-700">
                                                <div className="grid grid-cols-1 gap-0 lg:gap-2 md:grid-cols-2 md:gap-2">
                                                    {faq.categories.map((category, categoryIndex) => (
                                                        <div
                                                            key={categoryIndex}
                                                            className="text-[14px] block py-0.5 pl-1 -ml-1"
                                                        >
                                                            {category}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;
