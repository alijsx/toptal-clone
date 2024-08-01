import { MdVerified } from 'react-icons/md';
import Navbar from '../Navbar/Navbar';
import { FaCode, FaRegCalendarCheck } from 'react-icons/fa'; // Import the required icon
import { FiBox } from 'react-icons/fi';
import { PiPenNibStraightThin } from 'react-icons/pi';



const icons = {
    FaRegCalendarCheck: <FaRegCalendarCheck />,
    MdVerified: <MdVerified />,
    FaCode: <FaCode />,
    FiBox: <FiBox />,
    PiPenNibStraightThin: <PiPenNibStraightThin />,
};
const Header = ({ tenantData, activeIndex }) => {
    const activeData = tenantData[activeIndex] || {};

    return (
        <div>
            <div className="bg-[#d2d6e2]">
            
                <div className="grid grid-cols-12 mx-auto sm:mx-page-grid-sm md:mx-page-grid-md lg:mx-page-grid-lg xl:mx-auto xl:w-page-grid-xl gap-4 md:gap-6 xl:gap-8 xl:pb-0 max-w-[1216px] px-8 xl:px-0">
                    <div className="col-span-12">
                        <div className="mx-auto">
                            <div className="relative flex flex-col my-0 mx-auto lg:block">
                                {/* Title Section */}
                                <div className="mt-16 z-40 md:mt-24 mx-auto text-center lg:absolute lg:top-6 lg:left-0 lg:flex lg:flex-col lg:justify-center lg:max-w-[510px] lg:m-0 max-w-[500px] lg:text-left">
                                    <h1 className="mx-auto font-[500] mb-4 p-0 text-[28px] md:text-[44px] xl:text-[52px] leading-[56px] xl:leading-[64px] text-gray-900">
                                        Hire the <a className='border-black border-b-2' href="/top-3-percent">Top 3%</a> of Freelance Talent<sup className='text-[18px]'>®</sup>
                                    </h1>
                                    <p className="mb-8 text-gray-700 text-[16px] xl:text-[20px] leading-[24px] xl:leading-[28px]">
                                        Toptal is an exclusive network of the top freelance software developers, designers, marketing experts, finance experts, product managers, and project managers in the world. Top companies hire Toptal freelancers for their most important projects.
                                    </p>

                                    <div className='w-full md:w-[260px]'>
                                        <button
                                            to="/hire"
                                            className="text-white w-full bg-[#00cc83] hover:bg-[#00cc83] text-[18px] active:bg-green-800 font-semibold py-4 px-6 rounded-sm"
                                        >
                                            Hire Top Talent
                                        </button>
                                    </div>
                                </div>

                                {/* Image and Additional Info Section */}
                                {activeData && (
                                    <div className="hidden lg:block relative max-w-full h-0" style={{ paddingTop: '40%' }}>
                                        <div className="absolute w-full h-full top-0 right-0 pt-0 flex justify-end items-end text-right">
                                            <div className="relative max-w-[600px] mr-[280px] max-h-[660px] overflow-hidden">
                                                <img
                                                    alt={activeData.name}
                                                    src={activeData.profileImage}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute bottom-0 inset-x-0 h-1/4 bg-gradient-to-t from-[#d2d6e2] to-transparent opacity-100 pointer-events-none"></div>
                                            </div>
                                            <a
                                                href="/"
                                                rel="noopener noreferrer"
                                                className="absolute z-10 top-0 right-4 flex flex-col gap-2 bg-gray-50 w-min px-4 py-4 xl:px-6 text-xs text-left box-border origin-top-left focus:outline focus:outline-2 focus:outline-brand-blue focus:outline-offset-2"
                                                style={{ top: 'calc(50% - 100px)', clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%, 24px 100%, 0px calc(100% - 24px))' }}
                                            >
                                                <div className="relative " style={{ width: '194px', height: '96px' }}>
                                                    <img
                                                        alt=""
                                                        src="https://assets.toptal.io/images?url=https%3A%2F%2Ffrontier-assets.toptal.com%2F4807dc1976e86b36.png&amp;width=360"
                                                        data-checker="skip-image"
                                                        className="absolute w-full h-full"

                                                    />
                                                    <div
                                                        role="figure"
                                                        aria-label="Country of origin - United States"
                                                        className="absolute w-1 h-1 bg-brand-blue rounded-xl -translate-x-1/2 -translate-y-1/2"
                                                        style={{ left: '29.4325%', top: '27.379%' }}
                                                    >
                                                        <div
                                                            className="ring absolute w-2 h-2 -top-1/2 -left-1/2 rounded-xl"
                                                            style={{ boxShadow: 'rgb(32, 78, 207) 0px 0px 2px 2px' }}
                                                        ></div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-1" style={{ width: '225px' }}>
                                                    <p className="text-sm leading-2 text-[#1c4bce]">
                                                        {activeData.name}
                                                    </p>
                                                    <div className=" paragraph-xs relative flex items-center">
                                                        <div className=" w-full flex" data-state="closed">
                                                            <MdVerified  className="text-[#189e83] w-4 h-4 mr-2" />
                                                            <div className='whitespace-nowrap text-[#189e83]'>
                                                                <strong className="font-bold">Verified Expert&nbsp;</strong> ​<span className="inline-block">in&nbsp;{activeData.verification}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-1 text-gray-600 text-xs">
                                                        {icons[activeData.icon]}

                                                        {activeData.role}
                                                    </div>
                                                    <div className="flex flex-col mt-3 w-full text-gray-700">
                                                        <p className="mb-1 uppercase font-regular paragraph-xs">Previously at</p>
                                                        <img
                                                            alt="Company Logo"
                                                            src={activeData.companyLogo}
                                                            className="block max-w-full h-8 object-contain object-left"
                                                            style={{ height: '36px' }}
                                                        />
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="absolute h-41 right-0 bottom-0 left-0" style={{ background: 'linear-gradient(0deg, rgb(210, 214, 226) 10%, rgba(214, 214, 214, 0))' }}></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
