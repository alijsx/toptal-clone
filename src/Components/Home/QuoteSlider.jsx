import React from 'react';

const QuoteSlider = () => {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F9851%2Ffile%2Foptimized%2Fpreview_wide-ffcd3a933e63dffb08319871f1f4dfd8.jpg)' }}>
            {/* Content container */}
            <div className="flex flex-col max-w-[970px] justify-center mx-auto min-h-[400px] p-6">
                {/* Quote */}
                <blockquote className="  rounded-lg shadow-md  text-white ">
                    <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 text-blue-800 "
                        fill="currentColor"
                    >
                        <path d="M0 13.6C0 17.7 2.47 20 5.247 20c2.469 0 4.32-2 4.32-4.3 0-2.4-1.748-4.2-4.114-4.2-.309 0-1.03.1-1.132.2.206-3.2 2.778-7.1 6.07-9.3L7.305 0C3.395 2.8 0 8 0 13.6zm14.61 0c0 4.1 2.365 6.4 5.143 6.4 2.572 0 4.424-2 4.424-4.3 0-2.4-1.749-4.2-4.115-4.2-.412 0-1.03.1-1.132.2.206-3.2 2.778-7.1 6.07-9.3L21.914 0c-4.013 2.8-7.305 8-7.305 13.6z" />
                    </svg>
                    <p className="text-[32px] mt-10">
                        We're known as a high-skilled marketplace, and we see an acute pain point within that area.
                    </p>
                    <img
                        alt="Author Logo"
                        src="https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fimage%2F9850%2Ffile%2Foptimized%2Fauthor_logo_white-ca8e19c8bc8661174276cecc86450055.svg"
                        loading="lazy"
                        decoding="async"
                        className="w-32 h-12 "
                    />
                </blockquote>

                {/* Button */}
                <div className="mt-6">
                    <button
                        type="button"
                        className="flex items-center space-x-2  text-white transition-all duration-300"
                        aria-haspopup="dialog"
                    >
                        <img
                            alt=""
                            src="https://assets.toptal.io/images?url=https%3A%2F%2Ffrontier-assets.toptal.com%2F78e588b735265f2e.svg"
                            loading="lazy"
                            decoding="async"
                            height="38"
                            width="38"
                            className="w-12 h-12 bg-white px-2 py-2 rounded-full"
                        />
                        <span>Watch the video</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuoteSlider;
