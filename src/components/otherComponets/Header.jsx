import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineRightCircle,
} from 'react-icons/ai';
// import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

import JimnyImg from '../../assets/2019-Suzuki-Jimny-1.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // const [open, setOpen] = useState(false);
  // const [heading, setHeading] = useState('');
  // const [subHeading, setSubHeading] = useState('');
  const [open, setOpen] = useState(false);

  const [scrollTop, setScrollTop] = useState(0);
  const [veh, setVeh] = useState(false);
  const onScroll = () => {
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
    {
      name: 'Fronx',
      link: 'maruti-fronx-price-in-hyderabad',
      heading: 'Created to Inspire Style and Performance.',
    },
    {
      name: 'Jimny',
      link: 'maruti-jimny-price-in-hyderabad',
      heading: 'Functional Beauty Crafted for Purity of Function.',
    },
    {
      name: 'Grand Vitara',
      link: 'grand-vitara-on-road-price-in-hyderabad',
      heading: 'Create Inspire.',
    },
    {
      name: 'XL6',
      link: 'nexa-xl6-on-road-price-in-hyderabad',
      heading: 'Created to Inspire Indulgence.',
    },
    {
      name: 'Ciaz',
      link: 'nexa-ciaz-on-road-price-in-hyderabad',
      heading: 'Created to Inspire Elegance.',
    },
    {
      name: 'Baleno',
      link: 'new-maruti-baleno-price-in-hyderabad',
      heading: 'Created to Inspire The Bold and Intelligent.',
    },
    {
      name: 'Ignis',
      link: 'nexa-ignis-on-road-price-in-hyderabad',
      heading: 'Created to Inspire The Toughness in You.',
    },
  ];

  return (
    <>
      <div
        className={` fixed w-full isolate bg-[#0c0c0ce8]  z-10  text-white`}
        // className={` fixed w-full isolate bg-[#0c0c0cb6]  z-10  ${
        //   color ? 'bg-[#0D0D0D80] text-white' : 'text-white'
        // }`}
      >
        <div className='h-20  lg:flex justify-between px-4 xl:px-8 items-center '>
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
              {open ? (
                <AiOutlineClose className='text-2xl' />
              ) : (
                <AiOutlineMenu className='text-2xl' />
              )}
            </div>
          </div>
          <div className='transition-all duration-1000 hidden lg:flex '>
            {carLinks.map((car, index) => (
              <div
                className='group'
                onClick={() => setVeh(!veh)}
                onMouseEnter={() => setVeh(true)}
                onMouseLeave={() => setVeh(false)}
              >
                <div>
                  <Link
                    className='p-4 group hover:bg-gray-500  rounded-md  '
                    to={car.link}
                  >
                    {car.name}
                  </Link>
                </div>
                {/* <div className='absolute top-20 h-80 left-1/3 bg-black hidden rounded-2xl hover:md:block group-hover:md:flex p-4 w-1/2'>
                  <div>
                    <div>
                      <span>{car.heading}</span>
                    </div>
                  </div>
                  <div>
                    <img src={JimnyImg} alt='' srcset='' />
                  </div>
                </div> */}
              </div>
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
              <li
                className='p-2 ml-4 hover:bg-gray-500 transition-colors duration-500 rounded-md'
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <AiOutlineClose className='text-2xl' />
                ) : (
                  <AiOutlineMenu className='text-2xl' />
                )}
              </li>
            </ul>
          </div>
        </div>
        {!veh && (
          <div
            className=' bg-gray-100 h-0.5   '
            style={{ width: `${scrollTop}%` }}
          ></div>
        )}

        {veh && (
          <div
            className='w-full grid  border-gray-200 duration-150 -mt-6  '
            onMouseEnter={() => setVeh(true)}
            onMouseLeave={() => setVeh(false)}
          >
            <div className='grid grid-cols-3 w-full   rounded container mx-auto p-4 pt-10'>
              <div
                className='col-span-1 border border-gray-600  z-10 -mr-44 ml-44 '
                data-aos='zoom-out'
                data-aos-delay='500'
                data-aos-duration='500'
              >
                <div className='border-b border-gray-600 p-4  h-1/3'>
                  <span className='underline underline-offset-4 text-2xl'>
                    Max Power (bhp@rpm)
                  </span>
                  <br />
                  <span className='text-4xl font-mono'>103.39bhp@6000rpm</span>
                </div>
                <div className='border-b border-gray-600 p-4 h-1/3'>
                  <span className='underline text-2xl  underline-offset-4'>
                    Max Speed
                  </span>
                  <br /> <span className='text-4xl font-sans '>135 KM/H</span>
                </div>
                <div className=' h-1/3 p-4'>
                  <span className='underline text-2xl  underline-offset-4'>
                    Max Speed
                  </span>
                  <br /> <span className='text-4xl font-sans '>135 KM/H</span>
                </div>
              </div>
              <div className='col-span-2 '>
                <div
                  className='object-cover  '
                  data-aos='fade-left'
                  // data-aos-delay='500'
                  data-aos-duration='2000'
                >
                  <img
                    src={JimnyImg}
                    alt=''
                    srcset=''
                    className=' w-[80%] border-gray-600   '
                  />
                </div>
                <div
                  className='h-32  flex '
                  data-aos='zoom-out'
                  data-aos-delay='500'
                  data-aos-duration='500'
                >
                  <div className='w-1/2 text-3xl font-mono p-2 ml-44 border-y border-gray-600 flex justify-center items-center'>
                    Enquir Now
                  </div>
                  <div className='w-1/2 border border-gray-600 text-2xl p-2 flex justify-center items-center '>
                    <span className='pr-3'>Book Now</span>
                    <AiOutlineRightCircle className='text-4xl animate-pulse' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
