import { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaCode, FaRegCalendarCheck } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../../data.json';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { FiBox } from 'react-icons/fi';
import { PiPenNibStraightThin } from 'react-icons/pi';

const icons = {
  FaRegCalendarCheck: <FaRegCalendarCheck />,
  MdVerified: <MdVerified />,
  FaCode: <FaCode />,
  FiBox: <FiBox />,
  PiPenNibStraightThin: <PiPenNibStraightThin />,
};

function Tenant({ data, onCardClick }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false); // New state for user interaction
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const handleResize = () => {
        if (window.innerWidth < 1024) {
          sliderRef.current.innerSlider.dotClass = 'custom-dot';
        } else {
          sliderRef.current.innerSlider.dotClass = '';
        }
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, [sliderRef]);

  useEffect(() => {
    if (!isUserInteracting) { // Only auto-slide if user is not interacting
      const timer = setInterval(() => {
        setActiveIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % data.length;
          sliderRef.current.slickGoTo(nextIndex);
          return nextIndex;
        });
      }, 10000);

      return () => clearInterval(timer);
    }
  }, [data.length, isUserInteracting]); // Added isUserInteracting to dependencies

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    className: 'start',
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => {
      setIsEnd(next === data.length - 1);
    },
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 6,
          centerPadding: '0px',
          dots: false,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          centerPadding: '0px',
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: '0px',
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: '0px',
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const handleCardClick = (index) => {
    setActiveIndex(index);
    setIsUserInteracting(true); // User interaction occurred
    onCardClick(index); // Notify parent component
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="bg-[#d2d6e2] lg:bg-white">
      <div className="max-w-[1150px] mx-auto pt-10">
        <Slider {...settings} ref={sliderRef}>
          {data.map((person, index) => (
            <div key={index} className="ml-4" onClick={() => handleCardClick(index)}>
              <div
                role="none"
                className={`bg-white max-w-[176px] md:max-w-[280px] lg:max-w-[176px] shadow-md flex-none cursor-pointer transition-opacity duration-500 hover:opacity-100 ${
                  activeIndex === index ? 'border-2 border-blue-500' : 'opacity-80'
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
                    <div className="caliber-avatar-clip  flex flex-auto overflow-hidden z-20 bg-gray-400 h-40 md:h-60 lg:h-36">
                      <img
                        src={person.profileImage}
                        loading="lazy"
                        decoding="async"
                        className="max-w-full h-auto block align-middle basis-full font-family-inherit object-cover object-center"
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
                  <div className="flex flex-col basis-full gap-1 p-4">
                    <h2>
                      <a
                        className="font-bold text-[14px] whitespace-nowrap hover:underline text-[#1c4bce] visited:text-[#1c4bce]"
                        href="/"
                      >
                        {person.name}
                      </a>
                    </h2>
                    <div className="text-[12px] leading-[16px] relative flex flex-wrap items-center text-[#189e83]">
                      <div className="w-full">
                        <MdVerified className="text-[#189e83] inline-block mr-1" />
                        <strong className="font-bold">Verified Expert&nbsp;</strong>​<span className="inline-block">
                          in&nbsp;{person.verification}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-gray-700 text-[12px] leading-[16px] mt-1">
                      <div className="text-[14px]">{icons[person.icon]}</div>
                      {person.role}
                    </div>
                    <div className="flex flex-col mt-auto w-full pt-3 text-gray-700">
                      <h3 className="mb-1 uppercase font-regular text-[12px] uppercase">Previously at</h3>
                      <div className="flex items-center" style={{ height: '28px', transform: 'translateY(2px)' }}>
                        <img
                          src={person.companyLogo}
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
          ))}
        </Slider>
      </div>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'transparent',
        padding: '5px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <BsChevronCompactRight size={34} color="black" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        right: '20px',
        background: 'transparent',
        padding: '-5px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <BsChevronCompactLeft size={34} color="black" />
    </div>
  );
}

export default Tenant;
