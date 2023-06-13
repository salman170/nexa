import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const Header = () => {
  // const [open, setOpen] = useState(false);
  // const [heading, setHeading] = useState('');
  // const [subHeading, setSubHeading] = useState('');
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = () => {
    if (window.scrollY >= 150) {
      setColor(true);
    } else {
      setColor(false);
    }
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  });

  const carLinks = [
    { name: 'Fronx', link: 'maruti-fronx-price-in-hyderabad' },
    { name: 'Jimny', link: 'maruti-jimny-price-in-hyderabad' },
    { name: 'Grand Vitara', link: 'grand-vitara-on-road-price-in-hyderabad' },
    { name: 'XL6', link: 'nexa-xl6-on-road-price-in-hyderabad' },
    { name: 'Ciaz', link: 'nexa-ciaz-on-road-price-in-hyderabad' },
    { name: 'Baleno', link: 'new-maruti-baleno-price-in-hyderabad' },
    { name: 'Ignis', link: 'nexa-ignis-on-road-price-in-hyderabad' },
  ];

  return (
    <>
      <div
        className={` fixed w-full isolate   z-10  ${
          color ? 'bg-[#0D0D0D80] text-white' : 'text-white'
        }`}
      >
        <div className='h-20  lg:flex justify-between px-4 xl:px-8 items-center  '>
          <div className='flex pt-4 lg:pt-0 justify-between items-center'>
            <Link to='/'>
              <img
                src='https://saboonexa.in/static/media/logo.0772b8f037b1936a399e.webp'
                alt='Nexa Logo'
                srcSet=''
                className='h-12'
              />
            </Link>
            <div
              className='p-3 text-3xl lg:hidden md:p-5'
              onClick={() => setOpen(!open)}
            >
              {open ? <AiOutlineClose className='text-2xl' /> : <AiOutlineMenu className='text-2xl' />}
            </div>
          </div>
          <div className='transition-all duration-100 hidden lg:block'>
            {carLinks.map((car, index) => (
              <Link
                className='p-4 hover:bg-gray-500  rounded-md  '
                to={car.link}
              >
                {car.name}
              </Link>
            ))}
          </div>
          <div className='p-2 hidden lg:block'>
            <ul className='flex'>
              <li className='p-2 hover:bg-gray-500 transition-colors duration-500 rounded-md'>
                Services
              </li>
              <li className='p-2 hover:bg-gray-500 transition-colors duration-500 rounded-md'>
                More
              </li>
              <li className='p-2 ml-4 hover:bg-gray-500 transition-colors duration-500 rounded-md'  onClick={() => setOpen(!open)}>
              {open ? <AiOutlineClose className='text-2xl' /> : <AiOutlineMenu className='text-2xl' />}
              </li>
            </ul>
          </div>
        </div>
        <div
          className=' bg-red-500 h-1   '
          style={{ width: `${scrollTop}%` }}
        ></div>
      </div>
    </>
  );
};

export default Header;
