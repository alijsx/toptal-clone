import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust the value as needed
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`transition-transform bg-[#d2d6e2] z-50 ${isSticky ? 'bg-white shadow-md sticky top-0' : ''}`}>
      <div className="max-w-[1226px] mx-auto flex items-center justify-between pt-3 px-8 xl:px-0">
        {/* Logo */}
        <div className="flex items-center lg:-mt-3">
          <a href="/" aria-label="Toptal">
            <img
              src="https://assets.toptal.io/images?url=https%3A%2F%2Fwww.toptal.com%2Ftoptal-logo.png&amp;width=360"
              alt="Toptal"
              className="w-[116px] h-auto"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleMenuToggle}
          className="custom-breakpoint:hidden flex flex-col space-y-1 text-gray-700"
          aria-label="menu"
        >
          <span className="w-6 h-1 bg-gray-700"></span>
          <span className="w-6 h-1 bg-gray-700"></span>
          <span className="w-6 h-1 bg-gray-700"></span>
        </button>

        {/* Desktop Navbar */}
        <div className="hidden custom-breakpoint:flex items-start mr-32 xl:mr-60 space-x-4 text-[14px] py-3">
          <a href="/top-3-percent" className="text-gray-700 hover:text-gray-900 cursor-pointer border-b-2 border-b-transparent ease-in-out duration-150 hover:border-b-2 hover:border-b-[#1648dd] pb-3">Top 3%</a>
          <div className="relative">
            <button
              onClick={handleMenuToggle}
              aria-haspopup="true"
              aria-expanded={isMenuOpen}
              className="text-gray-700 hover:text-gray-900 border-b-2 border-b-transparent ease-in-out duration-150 hover:border-b-2 hover:border-b-[#1648dd] pb-3"
            >
              Hire Talent
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-3 ml-1 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white z-50 border border-gray-200 shadow-lg rounded-md">
                <a href="/developers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Developers</a>
                <a href="/designers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Designers</a>
                <a href="/marketing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Marketing Experts</a>
                <a href="/product-managers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Product Managers</a>
                <a href="/project-managers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Project Managers</a>
                <a href="/finance" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Finance Experts</a>
              </div>
            )}
          </div>
          <a href="/capabilities" className="text-gray-700 hover:text-gray-900 cursor-pointer border-b-2 border-b-transparent ease-in-out duration-150 hover:border-b-2 hover:border-b-[#1648dd] pb-3">Capabilities</a>
          <a href="/clients" className="text-gray-700 hover:text-gray-900 cursor-pointer border-b-2 border-b-transparent ease-in-out duration-150 hover:border-b-2 hover:border-b-[#1648dd] pb-3">Clients</a>
          <a href="/blog" className="text-gray-700 hover:text-gray-900 cursor-pointer border-b-2 border-b-transparent ease-in-out duration-150 hover:border-b-2 hover:border-b-[#1648dd] pb-3">Blog</a>
          <a href="/about" className="text-gray-700 hover:text-gray-900 cursor-pointer border-b-2 border-b-transparent ease-in-out duration-150 hover:border-b-2 hover:border-b-[#1648dd] pb-3">About Us</a>
        </div>

        {/* Actions Toolbar */}
        <ul className="hidden custom-breakpoint:flex items-center -mt-3">
          <li>
            <a
              href="/talent/apply"
              className="text-black hover:text-[#2d5bd7] text-[14px] py-2 px-4 rounded-md border border-transparent"
            >
              Apply as a Freelancer
            </a>
          </li>
          <li>
            <a
              href="/hire"
              className="text-white bg-[#00cc83] hover:bg-[#00cc83] text-[14px] active:bg-green-800 font-semibold py-3 px-6 rounded-sm"
            >
              Hire Top Talent
            </a>
          </li>
          <li>
            <a
              href="/users/login"
              className="text-black hover:text-[#2d5bd7] text-[14px] py-2 px-4 rounded-md border border-transparent"
            >
              Log In
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className={`custom-breakpoint:hidden fixed top-0 right-0 w-3/4 bg-white shadow-lg z-50 transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} h-full`}>
          <button
            onClick={handleMenuToggle}
            className="absolute top-4 right-4 text-gray-700 text-2xl"
            aria-label="Close menu"
          >
            &times;
          </button>
          <div className="flex flex-col items-center mt-16 space-y-4">
            <a href="/top-3-percent" className="text-gray-700 hover:text-gray-900 ">Top 3%</a>
            <button
              onClick={handleMenuToggle}
              className="text-gray-700 text-[14px] hover:text-gray-900"
            >
              Hire Talent
              <svg
                viewBox="0 0 512 512"
                className="w-4 h-4 inline-block ml-1"
                fill="currentColor"
              >
                <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
              </svg>
            </button>
            <a href="/capabilities" className="text-gray-700 hover:text-gray-900">Capabilities</a>
            <a href="/clients" className="text-gray-700 hover:text-gray-900">Clients</a>
            <a href="/blog" className="text-gray-700 hover:text-gray-900">Blog</a>
            <a href="/about" className="text-gray-700 hover:text-gray-900">About Us</a>
            <a href="/talent/apply" className="text-black hover:text-[#2d5bd7] font-semibold py-2 px-6 rounded-md border border-transparent">Apply as a Freelancer</a>
            <a
              href="/hire"
              className="text-white bg-[#00cc83] hover:bg-[#00cc83] text-[14px] active:bg-green-800 font-semibold py-3 px-6 rounded-sm"
            >
              Hire Top Talent
            </a>
            <a href="/users/login" className="text-black hover:text-[#2d5bd7] font-semibold py-2 px-6 rounded-md border border-transparent">Log In</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
