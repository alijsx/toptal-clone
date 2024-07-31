import React from 'react';

const ClientTestimonials = () => {
  return (
    <div className="bg-gray-100 last:mb-0">
      <section className="grid grid-cols-12  max-w-[1216px] px-8 xl:px-0 mx-auto md:gap-6 gap-6 xl:gap-6 2xl:gap-6 py-20">
        <div className="flex flex-col gap-1 col-span-12 text-gray-600 bg-transparent text-center items-center mb-6">
          <h2 className="mx-auto font-[500] mb-4 p-0 text-[40px] md:text-[44px] xl:text-[52px] leading-[56px] xl:leading-[64px] text-gray-900" >
            Our Clients' Satisfaction is Our Top Priority
          </h2>
          <h3 className="paragraph-md font-regular 2xl:heading-xs">
            We have a reputation for helping clients around the world find success on their most important projects
          </h3>
          <hr className="box-border border-0 border-solid h-0 text-inherit border-t-1 m-0 min-w-4 !mt-11 my-0 md:my-0 self-stretch border-gray-400" />
        </div>

        <div className="flex flex-wrap justify-center gap-x-4 lg:gap-x-6 xl:gap-x-8 col-span-12 my-0 mx-auto">
          <div className="flex flex-col items-center text-center md:text-left md:flex-row p-6 gap-4">
            <img alt="" src="https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Ftrustpilot_section%2Fstatistic%2F8999867%2Ficon%2Foptimized%2Fearth-planet-globe-b02d1b55afbe2ba3daf1c8b0a1525df1.svg" loading="lazy" decoding="async" className="w-12 h-12" />
            <div>
              <p className="font-semibold text-lg leading-4 text-gray-900">140+</p>
              <p className="paragraph-sm text-gray-600">Countries Served</p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center md:text-left md:flex-row p-6 gap-4">
            <img alt="" src="https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Ftrustpilot_section%2Fstatistic%2F8999866%2Ficon%2Foptimized%2Fjobs-0e1589e7f11a2d16d6db2350fa4063bc.svg" loading="lazy" decoding="async" className="w-12 h-12" />
            <div>
              <p className="font-semibold text-lg leading-4 text-gray-900">23,000+</p>
              <p className="paragraph-sm text-gray-600">Clients Served</p>
            </div>
          </div>
        </div>

        <p className="flex flex-col flex-wrap sm:flex-row items-center justify-center text-gray-900 col-span-12 gap-2 my-0 mx-auto">
          <span>Our customers say <strong>Excellent</strong></span>
          <span className="VLckIief">
            {[...Array(4)].map((_, index) => (
              <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 20" className="Tu2GcmvX">
                <path fill="#E59C01" d="m11 0 2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0Z"></path>
              </svg>
            ))}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 20" className="Tu2GcmvX">
              <path fill="#C4C6CA" d="M13.47 7.6 11 0v15.202l6.466 4.697-2.47-7.601L21.462 7.6H13.47Z"></path>
              <path fill="#E59C01" d="M8.53 7.6 11 0v15.202l-6.466 4.697 2.47-7.601L.538 7.6H8.53Z"></path>
            </svg>
          </span>
          <span>4.8 out of 5 based on 1,691 reviews</span>
          <a href="https://www.trustpilot.com/review/toptal.com" target="_blank" aria-label="Trustpilot Reviews" className="flex">
            <img alt="Trustpilot logo" src="https://assets.toptal.io/images?url=https%3A%2F%2Ffrontier-assets.toptal.com%2Faa6ae8f575408f0c.svg" loading="lazy" decoding="async" className="h-4" />
          </a>
        </p>

        <section aria-roledescription="carousel" className="flex flex-col col-span-12 gap-1 md:gap-3 -mx-6 md:-mx-2" aria-label="Testimonials Carousel">
          <div className="overflow-hidden ring-brand-blue/50 [&:has(>:focus)]:ring-4 order-1">
            <div className="h-full flex will-change-transform overflow-x-scroll scrollbar-hide outline-none -mx-2 md:-mx-4 lg:-mx-5 xl:-mx-7 px-6 md:px-3 lg:px-4 xl:px-5" tabIndex="0" aria-live="polite" id="testimonials-carousel-strip">
              <div className="grid grid-cols-12 gap-4" id="testimonials-carousel-slide-1" role="tabpanel" aria-label="1 of 3">
                <blockquote className="shadow-sm  col-span-12 lg:col-span-4  flex flex-col justify-between gap-6 p-6 after:content-none before:content-none w-full bg-white">
                  <div className="flex flex-col gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="none" className="h-4 self-start">
                      <path fill="#204ECF" d="M0 10.443C0 13.985 2.236 16 4.713 16c2.236 0 4.109-1.893 4.109-4.214 0-2.26-1.571-3.847-3.626-3.847-.362 0-.846.122-1.027.183.423-2.076 2.417-4.58 4.35-5.74L5.68 0C2.357 2.382 0 6.229 0 10.443Zm11.178 0c0 3.542 2.236 5.557 4.713 5.557C18.127 16 20 14.107 20 11.786c0-2.26-1.571-3.847-3.625-3.847-.363 0-.846.122-1.028.183.423-2.076 2.417-4.58 4.35-5.74L16.859 0c-3.323 2.382-5.68 6.229-5.68 10.443Z"></path>
                    </svg>
                    <div className="flex flex-col gap-1">
                      <p className="paragraph-md font-bold text-gray-900">I have been working with Toptal...</p>
                      <div data-testid="read-more-wrapper" className="relative">
                        <div className="_3xyyLJol">
                          <div className="_2XsmF_ig _3DRRn39X flex flex-col gap-1">
                            I have been working with Toptal engineers for several years now. They have all been exceptionally talented, very professional, highly productive, great team players, good communicators, and willing to go above and beyond. I have relied on them as key team players and they have never felt like "outsiders". Toptal as an organization has been professional and easy to work with.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a className="flex overflow-hidden w-10 h-10 rounded-full border-2 border-white outline outline-2 outline-gray-300">
                        <img src="https://via.placeholder.com/150" alt="Client" className="block object-cover object-center w-full h-full" loading="lazy" decoding="async" />
                      </a>
                      <div className="flex flex-col">
                        <p className="paragraph-sm font-semibold text-gray-900">Client Name</p>
                        <p className="paragraph-xs text-gray-600">Position, Company</p>
                      </div>
                    </div>
                  </div>
                </blockquote>

                <blockquote className="shadow-sm  col-span-12 lg:col-span-4  flex flex-col justify-between gap-6 p-6 after:content-none before:content-none w-full bg-white">
                  <div className="flex flex-col gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="none" className="h-4 self-start">
                      <path fill="#204ECF" d="M0 10.443C0 13.985 2.236 16 4.713 16c2.236 0 4.109-1.893 4.109-4.214 0-2.26-1.571-3.847-3.626-3.847-.362 0-.846.122-1.027.183.423-2.076 2.417-4.58 4.35-5.74L5.68 0C2.357 2.382 0 6.229 0 10.443Zm11.178 0c0 3.542 2.236 5.557 4.713 5.557C18.127 16 20 14.107 20 11.786c0-2.26-1.571-3.847-3.625-3.847-.363 0-.846.122-1.028.183.423-2.076 2.417-4.58 4.35-5.74L16.859 0c-3.323 2.382-5.68 6.229-5.68 10.443Z"></path>
                    </svg>
                    <div className="flex flex-col gap-1">
                      <p className="paragraph-md font-bold text-gray-900">I have been working with Toptal...</p>
                      <div data-testid="read-more-wrapper" className="relative">
                        <div className="_3xyyLJol">
                          <div className="_2XsmF_ig _3DRRn39X flex flex-col gap-1">
                            I have been working with Toptal engineers for several years now. They have all been exceptionally talented, very professional, highly productive, great team players, good communicators, and willing to go above and beyond. I have relied on them as key team players and they have never felt like "outsiders". Toptal as an organization has been professional and easy to work with.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a className="flex overflow-hidden w-10 h-10 rounded-full border-2 border-white outline outline-2 outline-gray-300">
                        <img src="https://via.placeholder.com/150" alt="Client" className="block object-cover object-center w-full h-full" loading="lazy" decoding="async" />
                      </a>
                      <div className="flex flex-col">
                        <p className="paragraph-sm font-semibold text-gray-900">Client Name</p>
                        <p className="paragraph-xs text-gray-600">Position, Company</p>
                      </div>
                    </div>
                  </div>
                </blockquote>


                <blockquote className="shadow-sm col-span-12 lg:col-span-4  flex flex-col justify-between gap-6 p-6 after:content-none before:content-none w-full bg-white">
                  <div className="flex flex-col gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" fill="none" className="h-4 self-start">
                      <path fill="#204ECF" d="M0 10.443C0 13.985 2.236 16 4.713 16c2.236 0 4.109-1.893 4.109-4.214 0-2.26-1.571-3.847-3.626-3.847-.362 0-.846.122-1.027.183.423-2.076 2.417-4.58 4.35-5.74L5.68 0C2.357 2.382 0 6.229 0 10.443Zm11.178 0c0 3.542 2.236 5.557 4.713 5.557C18.127 16 20 14.107 20 11.786c0-2.26-1.571-3.847-3.625-3.847-.363 0-.846.122-1.028.183.423-2.076 2.417-4.58 4.35-5.74L16.859 0c-3.323 2.382-5.68 6.229-5.68 10.443Z"></path>
                    </svg>
                    <div className="flex flex-col gap-1">
                      <p className="paragraph-md font-bold text-gray-900">I have been working with Toptal...</p>
                      <div data-testid="read-more-wrapper" className="relative">
                        <div className="_3xyyLJol">
                          <div className="_2XsmF_ig _3DRRn39X flex flex-col gap-1">
                            I have been working with Toptal engineers for several years now. They have all been exceptionally talented, very professional, highly productive, great team players, good communicators, and willing to go above and beyond. I have relied on them as key team players and they have never felt like "outsiders". Toptal as an organization has been professional and easy to work with.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a className="flex overflow-hidden w-10 h-10 rounded-full border-2 border-white outline outline-2 outline-gray-300">
                        <img src="https://via.placeholder.com/150" alt="Client" className="block object-cover object-center w-full h-full" loading="lazy" decoding="async" />
                      </a>
                      <div className="flex flex-col">
                        <p className="paragraph-sm font-semibold text-gray-900">Client Name</p>
                        <p className="paragraph-xs text-gray-600">Position, Company</p>
                      </div>
                    </div>
                  </div>
                </blockquote>

                
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ClientTestimonials;
