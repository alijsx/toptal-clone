import React from 'react';
import { MdVerified } from 'react-icons/md';
import { FaCode } from 'react-icons/fa';

const Card = ({ card }) => (
    <div
        role="none"
        className="bg-white w-[267px] min-h-[547px] shadow-md flex-none cursor-pointer transition-opacity duration-500 hover:opacity-100"
    >
        <div className="flex flex-col h-full ">
          <div className=' py-4 px-4'>
          <figure
                className="z-0 relative flex bg-white caliber-avatar flex-none w-full"
                style={{
                    '--caliber-avatar-clip-path-x': '16.363636363636363%',
                    '--caliber-avatar-clip-path-y': '80%',
                    '--caliber-avatar-clip-path-x-percentage': '0.16363636363636364',
                    '--caliber-avatar-clip-path-y-percentage': '0.6',
                }}
            >
                <div className="caliber-avatar-clip flex flex-auto overflow-hidden z-20 bg-white">
                    <img
                        src={card.image}
                        className="w-[240px] h-[240px] object-cover object-center"
                    />
                </div>
                <svg
                    className="block align-middle absolute z-30 text-[#1c4bce] pointer-events-none"
                    fill="currentColor"
                    viewBox="0 0 14 20"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ bottom: '2.88px', left: '2.88px', height: '14.4px' }}
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.31434 0L13.6348 8.63889L7.39445 15.0694L10.2529 18.0278L8.34728 20L0 11.3333L6.21349 4.91667L3.38186 1.98611L5.31434 0ZM5.50223 12.875C5.56933 12.8889 5.62301 12.8889 5.67669 12.875C5.73037 12.8611 5.78405 12.8333 5.87799 12.7222L9.42088 9.05556C9.52824 8.95833 9.55508 8.90278 9.5685 8.84722C9.58192 8.77778 9.58192 8.72222 9.5685 8.66667C9.55508 8.61111 9.51482 8.55556 9.42088 8.45833L8.2936 7.29167C8.19966 7.18056 8.14598 7.15278 8.0923 7.13889C8.0252 7.125 7.97152 7.125 7.91784 7.13889C7.86416 7.15278 7.81048 7.19444 7.71654 7.29167L4.17364 10.9583C4.06628 11.0556 4.03944 11.1111 4.02602 11.1667C4.0126 11.2361 4.0126 11.2917 4.02602 11.3472C4.03944 11.4028 4.0797 11.4583 4.17364 11.5556L5.30092 12.7222C5.39487 12.8333 5.44854 12.8611 5.50223 12.875Z"
                        fill="currentColor"
                    ></path>
                </svg>
            </figure>
          </div>
            <div className="flex flex-col basis-full gap-1 p-4">
                <h2>
                    <a
                        className="font-bold text-[14px] whitespace-nowrap hover:underline text-[#1c4bce] visited:text-[#1c4bce]"
                        href="/"
                    >
                        {card.name}
                    </a>
                </h2>
                <div className="text-[12px] leading-[16px] relative flex flex-wrap items-center text-[#189e83]">
                    <div className="w-full">
                        <MdVerified className="text-[#189e83] inline-block mr-1" />
                        <strong className="font-bold">Verified Expert&nbsp;</strong>
                        <span className="inline-block">in&nbsp;{card.expertise}</span>
                    </div>
                </div>
                <div className="flex items-center gap-1 text-gray-700 text-[12px] leading-[16px] mt-1">
                    <div className="text-[14px]">
                        <FaCode />
                    </div>
                    {card.role}
                </div>

                <div>
                    <h3 className="mb-1 font-regular text-[12px] uppercase mt-2">Experties</h3>
                    <div className=''>
                        <span className="bg-white text-black text-xs border hover:bg-blue-50 border-black  font-medium me-2 px-3 py-1 rounded-full ">Full Stack</span>
                        <span className="bg-white text-black text-xs border hover:bg-blue-50 border-black  font-medium me-2 px-3 py-1 rounded-full ">Node Js</span>
                        <br />
                        <div className='mt-2'>
                            <span className="bg-white text-black text-xs border hover:bg-blue-50 border-black  font-medium me-2 px-3 py-1 rounded-full ">Next Js</span>
                        </div>                  </div>


                </div>
                <div className="flex flex-col mt-auto w-full pt-3 text-gray-700">
                    <h3 className="mb-1 font-regular text-[12px] uppercase">Previously at</h3>
                    <div className="flex items-center" style={{ height: '28px', transform: 'translateY(2px)' }}>
                        <img
                            src={card.previousCompany}
                            loading="lazy"
                            decoding="async"
                            className="block object-contain object-left w-32 h-[28px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Card;
