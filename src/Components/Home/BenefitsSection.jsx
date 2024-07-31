import React from 'react';
import { FaCode } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

const benefitsData = [
  {
    title: 'Hire Quickly',
    description: 'Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.',
    image: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fbenefit%2F8999860%2Fimage%2Foptimized%2Fhire_quickly-73465c194a619e997036471389d47536.svg'
  },
  {
    title: 'The Top 3%',
    description: 'Every applicant to the Toptal network is rigorously tested and vetted. Our highly selective process leads to a 98% trial-to-hire success rate.',
    image: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fbenefit%2F8999861%2Fimage%2Foptimized%2Ftop_three_percent-84a3232607ab54008147fa66eb1bb115.svg'
  },
  {
    title: 'Leading the Future of Work',
    description: 'Our network is ready for tomorrow\'s business challenges by embracing advanced and specialized skills including blockchain and AI.',
    image: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fbenefit%2F8999862%2Fimage%2Foptimized%2Fleading_the_future_of_work-7623b38e47167ebb0f2a42649d699e18.svg'
  },
  {
    title: 'A Level Above',
    description: 'Every single freelancer in our global network embodies the highest levels of integrity, professionalism, and communication.',
    image: 'https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fbenefit%2F8999863%2Fimage%2Foptimized%2Fa_level_above-5767dffe5115a388ed7d66b65da08f77.svg'
  }
];



const BenefitsSection = () => {
  return (
    <div className='bg-[#fcfcfc] '>
      <section className="grid grid-cols-12 gap-4 mx-auto mt-20 max-w-[1216px] px-8 xl:px-0 py-12">
        {/* Benefits Section */}
        <div className="col-span-12 lg:col-span-7 flex flex-col text-gray-600 bg-transparent text-start">
          <h2 className="font-[500] mb-4 p-0 text-[40px] md:text-[44px] xl:text-[52px] leading-[56px] xl:leading-[64px] text-black">
            Build Amazing Teams, On&nbsp;Demand
          </h2>
          <p className="text-gray-500 text-[16px] xl:text-[20px] leading-[24px] xl:leading-[28px]">
            Quickly assemble the teams you need, exactly when you need them.
          </p>
          <div>
            <div className="grid grid-cols-12 mt-12">



              {benefitsData.map((benefit, index) => (
                <div key={index} className="col-span-12 md:col-span-6 lg:col-span-6  md:mt-24">
                  <img
                    alt={benefit.title}
                    src={benefit.image}
                    loading="lazy"
                    className="mb-4 h-16"
                  />
                  <h3 className="mb-2 text-[20px] leading-[28px] font-semibold text-black mt-2">{benefit.title}</h3>
                  <p className="text-[14px] leading-[24px] font-[300] text-[#455065] max-w-[275px]">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Members Section */}
        <div className="col-span-12 md:col-span-5 hidden lg:block relative">
          <div className='absolute top-10 z-40 left-5'>
            <div
              role="none"
              className={`bg-white  max-w-[240px] shadow-md flex-none cursor-pointer transition-opacity duration-500 hover:opacity-100 '
                }`}
            >
              <div className="flex flex-col h-full">
                <figure
                  className="z-0 relative flex bg-white caliber-avatar flex-none w-full"
                  style={{
                    '--caliber-avatar-clip-path-x': '16.363636363636363%',
                    '--caliber-avatar-clip-path-y': '80%',
                    '--caliber-avatar-clip-path-x-percentage': '0.16363636363636364',
                    '--caliber-avatar-clip-path-y-percentage': '0.8',
                  }}
                >
                  <div className="caliber-avatar-clip  flex flex-auto overflow-hidden z-20 bg-gray-400 ">
                    <img
                      src='https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052766%2Ffile%2Foptimized%2Fhero_section_big-7b3f7827f4d67d143832d0eb5136e48a.jpg&width=1024'
                      className="w-[240px] h-[240px]  object-cover object-center"
                    />
                  </div>
                  <svg
                    className="block align-middle absolute z-30 text-[#1c4bce]  pointer-events-none"
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
                <div className="flex flex-col basis-full gap-1 p-4">
                  <h2>
                    <a
                      className="font-bold text-[14px] whitespace-nowrap hover:underline text-[#1c4bce] visited:text-[#1c4bce]"
                      href="/"
                    >
                      Vladimir Mitrovic
                    </a>
                  </h2>
                  <div className="text-[12px] leading-[16px] relative flex flex-wrap items-center text-[#189e83]">
                    <div className="w-full">
                      <MdVerified className="text-[#189e83] inline-block mr-1" />
                      <strong className="font-bold">Verified Expert&nbsp;</strong>​<span className="inline-block">
                        in&nbsp;Engineering
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-gray-700 text-[12px] leading-[16px] mt-1">
                    <div className="text-[14px]"><FaCode /></div>
                    C# Developer
                  </div>
                  <div className="flex flex-col mt-auto w-full pt-3 text-gray-700">
                    <h3 className="mb-1  font-regular text-[12px] uppercase">Previously at</h3>
                    <div className="flex items-center" style={{ height: '28px', transform: 'translateY(2px)' }}>
                      <img
                        src='https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052767%2Ffile%2Foptimized%2FApple__262d3d-c217f1acf363078d1e1015c4ae306daf.svg'
                        loading="lazy"
                        decoding="async"
                        className="block object-contain object-left w-32 h-[28px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='absolute top-[420px]'>

            <div
              role="none"
              className={`bg-white  max-w-[240px] shadow-md flex-none cursor-pointer transition-opacity duration-500 hover:opacity-100 '
    }`}
            >
              <div className="flex flex-col h-full">
                <figure
                  className="z-0 relative flex bg-white caliber-avatar flex-none w-full"
                  style={{
                    '--caliber-avatar-clip-path-x': '16.363636363636363%',
                    '--caliber-avatar-clip-path-y': '80%',
                    '--caliber-avatar-clip-path-x-percentage': '0.16363636363636364',
                    '--caliber-avatar-clip-path-y-percentage': '0.8',
                  }}
                >
                  <div className="caliber-avatar-clip  flex flex-auto overflow-hidden z-20 bg-gray-400 ">
                    <img
                      src='https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052766%2Ffile%2Foptimized%2Fhero_section_big-7b3f7827f4d67d143832d0eb5136e48a.jpg&width=1024'
                      className="w-[240px] h-[240px]  object-cover object-center"
                    />
                  </div>
                  <svg
                    className="block align-middle absolute z-30 text-[#1c4bce]  pointer-events-none"
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
                <div className="flex flex-col basis-full gap-1 p-4">
                  <h2>
                    <a
                      className="font-bold text-[14px] whitespace-nowrap hover:underline text-[#1c4bce] visited:text-[#1c4bce]"
                      href="/"
                    >
                      Vladimir Mitrovic
                    </a>
                  </h2>
                  <div className="text-[12px] leading-[16px] relative flex flex-wrap items-center text-[#189e83]">
                    <div className="w-full">
                      <MdVerified className="text-[#189e83] inline-block mr-1" />
                      <strong className="font-bold">Verified Expert&nbsp;</strong>​<span className="inline-block">
                        in&nbsp;Engineering
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-gray-700 text-[12px] leading-[16px] mt-1">
                    <div className="text-[14px]"><FaCode /></div>
                    C# Developer
                  </div>
                  <div className="flex flex-col mt-auto w-full pt-3 text-gray-700">
                    <h3 className="mb-1  font-regular text-[12px] uppercase">Previously at</h3>
                    <div className="flex items-center" style={{ height: '28px', transform: 'translateY(2px)' }}>
                      <img
                        src='https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052767%2Ffile%2Foptimized%2FApple__262d3d-c217f1acf363078d1e1015c4ae306daf.svg'
                        loading="lazy"
                        decoding="async"
                        className="block object-contain object-left w-32 h-[28px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className='absolute top-60 -right-5 hidden lg:block'>
            <div
              role="none"
              className={`bg-white  max-w-[240px] shadow-md flex-none cursor-pointer transition-opacity duration-500 hover:opacity-100 '
    }`}
            >
              <div className="flex flex-col h-full">
                <figure
                  className="z-0 relative flex bg-white caliber-avatar flex-none w-full"
                  style={{
                    '--caliber-avatar-clip-path-x': '16.363636363636363%',
                    '--caliber-avatar-clip-path-y': '80%',
                    '--caliber-avatar-clip-path-x-percentage': '0.16363636363636364',
                    '--caliber-avatar-clip-path-y-percentage': '0.8',
                  }}
                >
                  <div className="caliber-avatar-clip  flex flex-auto overflow-hidden z-20 bg-gray-400 ">
                    <img
                      src='https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052766%2Ffile%2Foptimized%2Fhero_section_big-7b3f7827f4d67d143832d0eb5136e48a.jpg&width=1024'
                      className="w-[240px] h-[240px]  object-cover object-center"
                    />
                  </div>
                  <svg
                    className="block align-middle absolute z-30 text-[#1c4bce]  pointer-events-none"
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
                <div className="flex flex-col basis-full gap-1 p-4">
                  <h2>
                    <a
                      className="font-bold text-[14px] whitespace-nowrap hover:underline text-[#1c4bce] visited:text-[#1c4bce]"
                      href="/"
                    >
                      Vladimir Mitrovic
                    </a>
                  </h2>
                  <div className="text-[12px] leading-[16px] relative flex flex-wrap items-center text-[#189e83]">
                    <div className="w-full">
                      <MdVerified className="text-[#189e83] inline-block mr-1" />
                      <strong className="font-bold">Verified Expert&nbsp;</strong>​<span className="inline-block">
                        in&nbsp;Engineering
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-gray-700 text-[12px] leading-[16px] mt-1">
                    <div className="text-[14px]"><FaCode /></div>
                    C# Developer
                  </div>
                  <div className="flex flex-col mt-auto w-full pt-3 text-gray-700">
                    <h3 className="mb-1  font-regular text-[12px] uppercase">Previously at</h3>
                    <div className="flex items-center" style={{ height: '28px', transform: 'translateY(2px)' }}>
                      <img
                        src='https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F6052767%2Ffile%2Foptimized%2FApple__262d3d-c217f1acf363078d1e1015c4ae306daf.svg'
                        loading="lazy"
                        decoding="async"
                        className="block object-contain object-left w-32 h-[28px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
    </div>
  );
};

export default BenefitsSection;
